// Pizza น้อยกว่า 5 ถาด และจ่ายด้วย mastercard
db.pizzaOrders.find({
    quantity: { $lt: 5 },
    credit_card_type: "mastercard"
  })
  
  // Pizza ขนาดเล็ก และจำนวนอยู่ระหว่าง 1-5
  db.pizzaOrders.find({
    size: "small",
    quantity: { $gte: 1, $lte: 5 }
  })
  
  // Pizza มากกว่า 10 ถาด และไม่ได้จ่ายด้วยบัตร (credit_card_type = null)
  db.pizzaOrders.find({
    quantity: { $gt: 10 },
    credit_card_type: null
  })
  