import fs from "fs";
import path from "path";
import { DOMParser } from "@xmldom/xmldom";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseAffiliatesXML() {
  const xmlPath =
    "/Users/Caleb/Downloads/greaterspringfieldboardofrealtors.WordPress.2025-06-05.xml";
  const xmlContent = fs.readFileSync(xmlPath, "utf-8");

  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlContent, "text/xml");

  const items = doc.getElementsByTagName("item");
  const affiliates = [];
  const imageUrls = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    // Check if this is a connections post type
    const postType = item.getElementsByTagName("wp:post_type")[0]?.textContent;
    if (postType !== "connections") continue;

    const status = item.getElementsByTagName("wp:status")[0]?.textContent;
    if (status !== "publish") continue;

    // Extract basic information
    const title = item.getElementsByTagName("title")[0]?.textContent;
    const postName = item.getElementsByTagName("wp:post_name")[0]?.textContent;

    // Extract meta fields
    const metaFields = item.getElementsByTagName("wp:postmeta");
    const meta = {};

    for (let j = 0; j < metaFields.length; j++) {
      const metaField = metaFields[j];
      const key = metaField.getElementsByTagName("wp:meta_key")[0]?.textContent;
      const value =
        metaField.getElementsByTagName("wp:meta_value")[0]?.textContent;

      if (key && value) {
        meta[key] = value;
      }
    }

    // Extract categories
    const categories = [];
    const categoryNodes = item.getElementsByTagName("category");

    for (let k = 0; k < categoryNodes.length; k++) {
      const category = categoryNodes[k];
      const domain = category.getAttribute("domain");

      if (domain === "connection-category") {
        const nicename = category.getAttribute("nicename");
        const displayName = category.textContent;
        categories.push({
          slug: nicename,
          name: displayName,
        });
      }
    }

    // Build affiliate object
    const affiliate = {
      id: postName,
      title: title,
      organization: meta["organization"] || "",
      firstName: meta["first-name"] || "",
      lastName: meta["last-name"] || "",
      addressLine1: meta["address-line-1"] || "",
      addressLine2: meta["address-line-2"] || "",
      phoneNumber: meta["phone-number"] || "",
      emailAddress: meta["email-address"] || "",
      url: meta["url"] || "",
      categories: categories,
      logo: meta["logo"] || null,
    };

    // Handle logo image URL if exists
    if (affiliate.logo) {
      // Find the attachment for this logo ID
      const logoAttachment = findAttachmentById(doc, affiliate.logo);
      if (logoAttachment) {
        affiliate.logoUrl = logoAttachment;
        imageUrls.push(logoAttachment);
        // Update to use local path
        affiliate.logoUrl = `/images/connections/${path.basename(
          logoAttachment
        )}`;
      }
    }

    affiliates.push(affiliate);
  }

  return { affiliates, imageUrls };
}

function findAttachmentById(doc, attachmentId) {
  const items = doc.getElementsByTagName("item");

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const postId = item.getElementsByTagName("wp:post_id")[0]?.textContent;
    const postType = item.getElementsByTagName("wp:post_type")[0]?.textContent;

    if (postId === attachmentId && postType === "attachment") {
      const guid = item.getElementsByTagName("guid")[0]?.textContent;
      return guid;
    }
  }

  return null;
}

function getUniqueCategories(affiliates) {
  const categoryMap = new Map();

  affiliates.forEach((affiliate) => {
    affiliate.categories.forEach((category) => {
      if (!categoryMap.has(category.slug)) {
        categoryMap.set(category.slug, category.name);
      }
    });
  });

  return Array.from(categoryMap.entries())
    .map(([slug, name]) => ({
      slug,
      name,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

// Main execution
try {
  console.log("Parsing affiliates XML...");
  const { affiliates, imageUrls } = parseAffiliatesXML();
  const categories = getUniqueCategories(affiliates);

  // Sort affiliates by title
  affiliates.sort((a, b) => a.title.localeCompare(b.title));

  // Create output directories
  const contentDir = path.join(__dirname, "..", "content", "affiliates");
  const publicDir = path.join(__dirname, "..", "public", "data");

  [contentDir, publicDir].forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  // Write affiliates data to both locations
  const affiliatesJson = JSON.stringify(affiliates, null, 2);
  fs.writeFileSync(path.join(contentDir, "data.json"), affiliatesJson);
  fs.writeFileSync(path.join(publicDir, "data.json"), affiliatesJson);

  // Write categories data to both locations
  const categoriesJson = JSON.stringify(categories, null, 2);
  fs.writeFileSync(path.join(contentDir, "categories.json"), categoriesJson);
  fs.writeFileSync(path.join(publicDir, "categories.json"), categoriesJson);

  // Write image URLs for downloading
  fs.writeFileSync(
    path.join(contentDir, "image-urls.txt"),
    imageUrls.join("\n")
  );

  console.log(`✅ Parsed ${affiliates.length} affiliates`);
  console.log(`✅ Found ${categories.length} categories`);
  console.log(`✅ Generated ${imageUrls.length} image URLs to download`);
  console.log(`✅ Data files created in both content/ and public/ directories`);
  console.log("\nCategories found:");
  categories.forEach((cat) => console.log(`  - ${cat.name} (${cat.slug})`));
} catch (error) {
  console.error("Error parsing affiliates:", error);
  process.exit(1);
}
