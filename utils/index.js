import Client from 'shopify-buy';

//async function storefront(query, variables = {}) {
//  const res = await fetch(process.env.SHOPIFY_STOREFRONT_URL, {
//    method: 'POST',
//    headers: {
//      'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
//      'Content-Type': 'application/json',
//    },
//    body: JSON.stringify({ query, variables }),
//  })
//  return res.json
//}


const client = Client.buildClient({
  domain: process.env.SHOPIFY_STOREFRONT_URL,
  storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN
});

export { client }