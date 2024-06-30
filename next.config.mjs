/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler:{
        styledComponents: true
    },
    reactStrictMode: true,
    images: {
      remotePatterns: [
        { 
          protocol:'https', 
          hostname: 'cdn.dummyjson.com' 
        }
      ],
    },
};

export default nextConfig;
