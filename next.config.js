/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en-CA", "fr-CA"],
    defaultLocale: "en-CA",
  },  
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    storyblokApiToken: process.env.ACCESSTOKEN,
    previewSecret: process.env.PREVIEW_SECRET,
  }
};

if (process.env.LIVE_PREVIEW) {
  // nextConfig.rewrites = async () => {
  //   return {
  //     fallback: [
  //       {
  //         source: '/:path*',
  //         destination: `/:path*`,
  //       },
  //     ]
  //   }
  // }
}

module.exports = nextConfig;
