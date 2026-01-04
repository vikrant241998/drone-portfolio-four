// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Iska matlab hai "Any Website"
      },
      {
        protocol: 'http',
        hostname: '**', // Purani websites ke liye jo http use karti hain
      },
    ],
  },
};

export default nextConfig;