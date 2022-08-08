export async function storefront(query, variables = {}) {
  const res = await fetch(process.env.SHOPIFY_STOREFRONT_URL, {
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_ACESS_TOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  })
  return res.json
}