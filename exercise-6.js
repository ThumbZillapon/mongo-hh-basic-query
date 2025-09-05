// Update Document ของ Jack โดยเพิ่ม isAdmin: false
db.pizzaOrders.updateMany(
    { customer_name: "Jack" },
    { $set: { isAdmin: false } }
  )
  
  // Update Document ทุกอันโดยเพิ่ม country: "Thailand"
  db.pizzaOrders.updateMany(
    {},
    { $set: { country: "Thailand" } }
  )
  
  // UpdateOne ของ customer M หรือถ้าไม่มีให้สร้างใหม่
  db.pizzaOrders.updateOne(
    { customer_name: "M" },
    {
      $set: {
        size: "large",
        total_price: 200000,
        quantity: 20,
        customer_name: "M",
        credit_card_type: "mastercard",
        created_at: "2022-01-01T10:48:40Z"
      }
    },
    { upsert: true }
  )
  