/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    //image optimization not available without next server :(
    images: { unoptimized: true }
};

export default nextConfig;
