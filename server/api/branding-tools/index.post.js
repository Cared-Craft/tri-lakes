export default defineEventHandler(async (event) => {
  const fs = await import('fs/promises');
  const path = await import('path');
  const body = await readBody(event);
  if (!body || !body.colors || !body.fonts) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: 'Missing colors or fonts in request body'
      })
    );
  }
  const configPath = path.join(process.cwd(), 'branding', 'brand.config.json');
  // Build the config object, allowing optional siteTitle, favicon, and formspreeId
  const config = {
    colors: body.colors,
    fonts: body.fonts,
    siteTitle: body.siteTitle || '',
    favicon: body.favicon || '',
    formspreeId: body.formspreeId || ''
  };
  try {
    await fs.writeFile(configPath, JSON.stringify(config, null, 2), 'utf8');
    return { success: true };
  } catch (err) {
    return sendError(
      event,
      createError({
        statusCode: 500,
        statusMessage: 'Failed to write branding config',
        data: err.message
      })
    );
  }
});
