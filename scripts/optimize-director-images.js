#!/usr/bin/env node

import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DIRECTORS_DIR = path.join(__dirname, "../public/images/directors");
const MAX_WIDTH = 600; // Optimal width for web director photos
const QUALITY = 85; // WebP quality (80-90 is good balance)
const BACKUP_DIR = path.join(DIRECTORS_DIR, ".backup");

// Images to optimize (specific files requested)
const IMAGES_TO_OPTIMIZE = [
  "Blake Cook- Director.jpg",
  "Bryan VanDyne- Director.jpg",
];

// Create backup directory if it doesn't exist
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

/**
 * Optimize a single image
 */
async function optimizeImage(filename) {
  const inputPath = path.join(DIRECTORS_DIR, filename);
  const backupPath = path.join(BACKUP_DIR, filename);
  const outputPath = path.join(
    DIRECTORS_DIR,
    filename.replace(/\.(jpg|jpeg|png)$/i, ".webp")
  );

  try {
    // Check if file exists
    if (!fs.existsSync(inputPath)) {
      console.error(`✗ File not found: ${filename}`);
      return { success: false, error: "File not found" };
    }

    // Get original file stats
    const originalStats = fs.statSync(inputPath);
    const originalSize = originalStats.size;

    // Create backup of original
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(inputPath, backupPath);
      console.log(`📦 Backed up: ${filename}`);
    }

    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`\n📸 Processing: ${filename}`);
    console.log(
      `   Original: ${metadata.width}x${metadata.height}px, ${(
        originalSize / 1024
      ).toFixed(2)}KB`
    );

    // Optimize image
    const optimized = await sharp(inputPath)
      .resize(MAX_WIDTH, null, {
        withoutEnlargement: true, // Don't enlarge if smaller than MAX_WIDTH
        fit: "inside", // Maintain aspect ratio
      })
      .webp({
        quality: QUALITY,
        effort: 6, // Compression effort (0-6, higher = better compression but slower)
      })
      .toFile(outputPath);

    const optimizedStats = fs.statSync(outputPath);
    const optimizedSize = optimizedStats.size;
    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

    console.log(
      `   Optimized: ${optimized.width}x${optimized.height}px, ${(
        optimizedSize / 1024
      ).toFixed(2)}KB`
    );
    console.log(
      `   ✅ Saved ${savings}% (${(
        (originalSize - optimizedSize) /
        1024
      ).toFixed(2)}KB)`
    );

    // Replace original with optimized version
    fs.unlinkSync(inputPath);
    console.log(`   🗑️  Removed original: ${filename}`);

    return {
      success: true,
      original: {
        width: metadata.width,
        height: metadata.height,
        size: originalSize,
      },
      optimized: {
        width: optimized.width,
        height: optimized.height,
        size: optimizedSize,
      },
      savings: savings,
    };
  } catch (error) {
    console.error(`✗ Error processing ${filename}:`, error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Main function
 */
async function optimizeAllImages() {
  console.log("🚀 Starting image optimization...\n");
  console.log(`📁 Directory: ${DIRECTORS_DIR}`);
  console.log(`📏 Max width: ${MAX_WIDTH}px`);
  console.log(`🎨 Quality: ${QUALITY}%\n`);

  const results = {
    success: 0,
    failed: 0,
    totalOriginalSize: 0,
    totalOptimizedSize: 0,
  };

  for (const filename of IMAGES_TO_OPTIMIZE) {
    const result = await optimizeImage(filename);

    if (result.success) {
      results.success++;
      results.totalOriginalSize += result.original.size;
      results.totalOptimizedSize += result.optimized.size;
    } else {
      results.failed++;
    }
  }

  // Summary
  console.log("\n" + "=".repeat(50));
  console.log("📊 Optimization Summary");
  console.log("=".repeat(50));
  console.log(`✅ Successfully optimized: ${results.success}`);
  console.log(`✗ Failed: ${results.failed}`);

  if (results.success > 0) {
    const totalSavings = (
      (1 - results.totalOptimizedSize / results.totalOriginalSize) *
      100
    ).toFixed(1);
    console.log(`\n💾 Total size reduction:`);
    console.log(
      `   Original: ${(results.totalOriginalSize / 1024).toFixed(2)}KB`
    );
    console.log(
      `   Optimized: ${(results.totalOptimizedSize / 1024).toFixed(2)}KB`
    );
    console.log(
      `   ✅ Saved ${totalSavings}% (${(
        (results.totalOriginalSize - results.totalOptimizedSize) /
        1024
      ).toFixed(2)}KB)`
    );
    console.log(`\n📦 Original files backed up to: ${BACKUP_DIR}`);
  }

  console.log("\n✨ Done!");
}

// Run the optimization
optimizeAllImages().catch(console.error);

