import { orders } from "./orders.js";
import { client, db } from "./utils/db.js";
import express from "express";

async function setupDatabase() {
  console.log("------- Start connecting to MongoDB -------");
  
  await client.connect();
  console.log("------- Connecting to MongoDB Successfully -------");

  try {
    await db.createCollection("pizzaOrders");
    console.log("------- Create collection successfully -------");
  } catch {
    console.log("Collection already exists !");
  }

  const collection = db.collection("pizzaOrders");

  await collection.insertMany(
    orders.map((order) => {
      return {
        ...order,
        created_at: new Date(order.created_at),
      };
    })
  );

  console.log("------- Insert documents successfully -------");
}

async function init() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`);
  });
}

// Run the setup and then start the server
async function main() {
  await setupDatabase();
  await init();
}

main().catch(console.error);
