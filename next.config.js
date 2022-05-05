/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/wa",
        destination: "https://wa.me/%2B18088009191",
        permanent: true,
      },
      {
        source: "/tele",
        destination: "https://t.me/sayutizxc",
        permanent: true,
      },
    ];
  },
};
