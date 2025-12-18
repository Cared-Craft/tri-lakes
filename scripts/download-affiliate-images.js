#!/usr/bin/env node

import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import { URL } from "url";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the image URLs
const imageUrlsPath = path.join(
  __dirname,
  "../content/affiliates/image-urls.txt"
);
const imageUrls = fs
  .readFileSync(imageUrlsPath, "utf8")
  .split("\n")
  .filter((line) => line.trim() && line.startsWith("http"))
  .map((line) => line.trim());

// Create directories if they don't exist
const connectionsDir = path.join(__dirname, "../public/images/connections");
const affiliatesDir = path.join(__dirname, "../public/images/affiliates");

if (!fs.existsSync(connectionsDir)) {
  fs.mkdirSync(connectionsDir, { recursive: true });
}
if (!fs.existsSync(affiliatesDir)) {
  fs.mkdirSync(affiliatesDir, { recursive: true });
}

// Function to download a file
function downloadFile(url, outputPath) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const client = parsedUrl.protocol === "https:" ? https : http;

    const file = fs.createWriteStream(outputPath);

    client
      .get(url, (response) => {
        if (response.statusCode === 200) {
          response.pipe(file);
          file.on("finish", () => {
            file.close();
            console.log(`✓ Downloaded: ${path.basename(outputPath)}`);
            resolve();
          });
        } else if (response.statusCode === 301 || response.statusCode === 302) {
          // Handle redirects
          const redirectUrl = response.headers.location;
          downloadFile(redirectUrl, outputPath).then(resolve).catch(reject);
        } else {
          console.error(`✗ Failed to download ${url}: ${response.statusCode}`);
          file.close();
          fs.unlink(outputPath, () => {}); // Delete partial file
          reject(new Error(`HTTP ${response.statusCode}`));
        }
      })
      .on("error", (err) => {
        console.error(`✗ Error downloading ${url}:`, err.message);
        file.close();
        fs.unlink(outputPath, () => {}); // Delete partial file
        reject(err);
      });
  });
}

// Function to get filename from URL
function getFilenameFromUrl(url) {
  const parsedUrl = new URL(url);
  let filename = path.basename(parsedUrl.pathname);

  // Handle URLs that don't have proper extensions
  if (!filename || filename === "/" || !filename.includes(".")) {
    filename = `image-${Date.now()}.jpg`;
  }

  return filename;
}

// Process each URL
async function downloadAllImages() {
  console.log(`Starting download of ${imageUrls.length} images...`);

  const results = {
    success: 0,
    failed: 0,
    skipped: 0,
  };

  for (const url of imageUrls) {
    try {
      const filename = getFilenameFromUrl(url);
      const outputPath = path.join(connectionsDir, filename);

      // Skip if file already exists
      if (fs.existsSync(outputPath)) {
        console.log(`⏭ Skipped (exists): ${filename}`);
        results.skipped++;
        continue;
      }

      await downloadFile(url, outputPath);
      results.success++;

      // Add a small delay to be respectful to the server
      await new Promise((resolve) => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`✗ Failed to process ${url}:`, error.message);
      results.failed++;
    }
  }

  console.log("\n=== Download Summary ===");
  console.log(`✓ Successfully downloaded: ${results.success}`);
  console.log(`⏭ Skipped (already exists): ${results.skipped}`);
  console.log(`✗ Failed: ${results.failed}`);
  console.log(`📁 Images saved to: ${connectionsDir}`);

  if (results.success > 0) {
    console.log(
      "\n🎉 Images downloaded! You may need to update the affiliate data to reference the correct local paths."
    );
  }
}

// Run the download process
downloadAllImages().catch(console.error);
