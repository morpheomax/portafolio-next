/** @type {import('next').NextConfig} */
const nextConfig = {

    images:{
        remotePatterns: [
            {
                port: '',
              protocol: 'https',
              hostname: 'res.cloudinary.com',
              pathname: '/**',
            },
          ],
        
    }
}


module.exports = nextConfig
