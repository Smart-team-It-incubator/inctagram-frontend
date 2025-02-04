import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.yandexcloud.net',
            },
        ],
    },
}

export default nextConfig
