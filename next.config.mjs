/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: true,
		turbo: true,
	},
	webpack: (config) => {
		config.watchOptions = {
			poll: 300,
			aggregateTimeout: 300,
		};
		return config;
	},
};

export default nextConfig;
