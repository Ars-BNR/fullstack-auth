import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental:{
    // missingSuspenseWithCSRBaliout:false
  },
  env:{
    SERVER_URL: process.env.SERVER_URL,
    GOOGLE_RECAPTCHA_SITE_KEY: process.env.GOOGLE_RECAPTCHA_SITE_KEY
  },
  images:{
    remotePatterns: [
			{
				// Шаблон для изображений, размещенных на Google User Content
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
			},
			{
				// Шаблон для изображений, размещенных на Yandex
				protocol: 'https',
				hostname: 'avatars.yandex.net'
			}
		]
  }
};

export default nextConfig;
