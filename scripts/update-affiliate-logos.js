#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const contentDataPath = path.join(__dirname, "../content/affiliates/data.json");
const publicDataPath = path.join(__dirname, "../public/data/data.json");
const connectionsDir = path.join(__dirname, "../public/images/connections");

// Read the data files
const contentData = JSON.parse(fs.readFileSync(contentDataPath, "utf8"));
const publicData = JSON.parse(fs.readFileSync(publicDataPath, "utf8"));

// Get list of available images
const availableImages = fs.readdirSync(connectionsDir);

console.log(`Found ${contentData.length} affiliates in content data`);
console.log(`Found ${publicData.length} affiliates in public data`);
console.log(`Found ${availableImages.length} images in connections directory`);

// Create a map of content data by ID for quick lookup
const contentDataMap = new Map();
contentData.forEach((affiliate) => {
  contentDataMap.set(affiliate.id, affiliate);
});

let updatedCount = 0;
let missingImages = [];

// Update public data with logo URLs from content data
publicData.forEach((affiliate) => {
  const contentAffiliate = contentDataMap.get(affiliate.id);

  if (contentAffiliate && contentAffiliate.logoUrl) {
    // Extract filename from the logoUrl path
    const filename = path.basename(contentAffiliate.logoUrl);

    // Check if the image file exists
    if (availableImages.includes(filename)) {
      affiliate.logoUrl = contentAffiliate.logoUrl;
      updatedCount++;
      console.log(`✓ Updated ${affiliate.id}: ${filename}`);
    } else {
      missingImages.push({
        id: affiliate.id,
        organization: affiliate.organization,
        expectedFile: filename,
        logoUrl: contentAffiliate.logoUrl,
      });
      console.log(`✗ Missing image for ${affiliate.id}: ${filename}`);
    }
  }
});

// Write the updated public data
fs.writeFileSync(publicDataPath, JSON.stringify(publicData, null, 2));

console.log("\n=== Update Summary ===");
console.log(`✓ Updated ${updatedCount} affiliates with logo URLs`);
console.log(`✗ ${missingImages.length} affiliates still missing images`);

if (missingImages.length > 0) {
  console.log("\n=== Missing Images ===");
  missingImages.forEach((item) => {
    console.log(`- ${item.organization} (${item.id}): ${item.expectedFile}`);
  });

  // Write missing images report
  const missingReport = {
    summary: {
      total: missingImages.length,
      updated: updatedCount,
      timestamp: new Date().toISOString(),
    },
    missing: missingImages,
  };

  fs.writeFileSync(
    path.join(__dirname, "../missing-images-report.json"),
    JSON.stringify(missingReport, null, 2)
  );

  console.log("\n📝 Detailed report saved to missing-images-report.json");
}

console.log("\n🎉 Public data file updated successfully!");
