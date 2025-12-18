export default defineEventHandler(async (event) => {
  const fs = await import("fs/promises");
  const path = await import("path");
  console.log(process.cwd());
  const configPath = path.join(process.cwd(), "branding", "brand.config.json");
  try {
    const data = await fs.readFile(configPath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: "Failed to read branding config",
        data: err.message,
      })
    );
  }
});
