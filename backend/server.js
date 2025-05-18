const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config(); // Charge les variables d'environnement depuis .env

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // Utilisation de la variable d'env

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Route pour tester le serveur
app.get("/", (req, res) => {
  res.send("Node Backend is running!");
});

// Route pour créer une session de paiement Stripe
app.post("/create-checkout-session", async (req, res) => {
  const { cocktails } = req.body;

  console.log("Cocktails reçus:", cocktails);

  const lineItems = cocktails.map((cocktail) => ({
    price_data: {
      currency: "eur",
      product_data: {
        name: cocktail.name,
      },
      unit_amount: Math.round(cocktail.price * 100), // en centimes, arrondi
    },
    quantity: 1,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:4200/cart/success",
      cancel_url: "http://localhost:4200/cart/cancel",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error(
      "Erreur lors de la création de la session Stripe:",
      error.message
    );
    res.status(500).send({ error: error.message });
  }
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
