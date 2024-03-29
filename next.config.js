if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

module.exports = {
  images: {
    domains: [
      process.env.WORDPRESS_API_URL.match(/(http(?:s)?:\/\/)(.*)/)[2], // Valid WP Image domain.
      '2.gravatar.com',
      'secure.gravatar.com',
      'cdn.shopify.com'
    ],
  },
  env: {
    SHOPIFY_STOREFRONT_URL: process.env.SHOPIFY_STOREFRONT_URL,
    SHOPIFY_ACCESS_TOKEN: process.env.SHOPIFY_ACCESS_TOKEN
  }
}
