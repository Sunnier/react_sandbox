/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'; 
const nextConfig = {
	reactStrictMode: true,
	output: 'export',
	assetPrefix: isProd ? '/react_sandbox': '',
	basePath: isProd ? '/react_sandbox':'',
};

export default nextConfig;
