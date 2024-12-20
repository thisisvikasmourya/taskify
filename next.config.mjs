/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const nextConfig = {
     images: {

        domains: ['192.168.0.234',"hdfc.dmacq.local", "dev.dmacqedms.com", "bluedart.dmacqedms.com", "demo1.dmacqdms.com", "test.dmacqdms.com", "product.dmacqdms.com", "test.dmacq.net", "bruno.dmacq.net", "dev.dmacq.net", "tata.dmacq.net", "dev.dmacqdms.com", "dev2.dmacq.net", "qa.dmacq.net", "dmacq-storage-api.s3.ap-south-1.amazonaws.com","hdfc.ai-dms.com"], // Add your hostname here 

  },
    output: 'standalone',
    env: {
        APP_AUTH_URL: isProduction ? process.env.APP_URL_AUTH_PROD : process.env.APP_URL_AUTH_DEV,
        APP_CORE_URL: isProduction ? process.env.APP_URL_CORE_PROD : process.env.APP_URL_CORE_DEV,
        ACCESS_TOKEN: 'bc7fa89893c47504d75fb25af75520486cff530278fcac776b78b1b50a583efa',
        // ACCESS_TOKEN: '',
        WEB_SOCKET:process.env.WEB_SOCKET,
        PDF_URL:process.env.PDF_URL
    },
    experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
