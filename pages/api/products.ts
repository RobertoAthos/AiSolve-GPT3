const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPESECRET);

export default async function handler(req:any, res:any) {
  try {
    // Request products from stripe using our Stripe Secret Key
    const products = await stripe.products.list({
      limit: 100,
    });

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}