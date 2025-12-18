import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  // Static Site Generation for Netlify
  nitro: {
    preset: "static",
    prerender: {
      crawlLinks: true, // Enable automatic crawling
      routes: ["/"], // Start with root
      ignore: [
        "/__nuxt_content/accessibility/sql_dump", // Ignore problematic content endpoint
        "/__nuxt_content/*/sql_dump", // Ignore all sql_dump endpoints
      ],
    },
  },

  // Enable static site generation
  ssr: true, // Keep SSR for build time, but generates static files

  // Component auto-import configuration
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
    {
      path: "~/components/ui",
      pathPrefix: false,
    },
    {
      path: "~/components/layout",
      pathPrefix: false,
    },
    {
      path: "~/components/branding",
      pathPrefix: false,
    },
  ],

  fonts: {
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      styles: ["normal", "italic"],
    },
    families: [
      {
        name: "Inter",
        provider: "google",
        fallbacks: ["Helvetica", "Arial", "sans-serif"],
      },
    ],
  },

  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@pinia/nuxt", // Essential for static sites
    "@pinia-plugin-persistedstate/nuxt", // Persist state across page loads
    "@nuxtjs/sitemap", // Sitemap generation
  ],

  css: ["~/assets/css/main.css"],

  app: {
    // Add payload configuration to handle serialization issues
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      // Essential meta tags for static sites
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/images/gsbor-favicon.png" },
        {
          rel: "shortcut icon",
          type: "image/png",
          href: "/images/gsbor-favicon.png",
        },
        { rel: "apple-touch-icon", href: "/images/gsbor-favicon.png" },
      ],
      script: [
        // Google Tag Manager
        {
          innerHTML: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KDM426B');
          `,
        },
        // Google Analytics 4 (backup/direct implementation)
        {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-3B2GT9DKJE",
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3B2GT9DKJE');
          `,
        },
      ],
      noscript: [
        // Google Tag Manager noscript fallback
        {
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KDM426B" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        },
      ],
    },
  },

  experimental: {
    // Improve handling of functions in payloads
    payloadExtraction: false,
    // Improve navigation stability
    viewTransition: true,
  },

  // Static site optimization
  image: {
    // Optimize images for static deployment
    provider: "ipx",
    quality: 80,
    format: ["webp", "jpg"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  // SEO and performance for static sites
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://gsbor.com",
      siteName: "Greater Springfield Board of Realtors",
      siteDescription:
        "Professional real estate services and resources for Springfield, Missouri realtors and home buyers.",
    },
  },

  // Site configuration for sitemap
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "https://gsbor.com",
  },
});
