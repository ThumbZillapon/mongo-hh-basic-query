// Sort ข้อมูลด้วย total_price จากมากไปน้อย
db.pizzaOrders.find().sort({ total_price: -1 })

// Sort ข้อมูลด้วย created_at จากเก่าที่สุดไปใหม่ที่สุด
db.pizzaOrders.find().sort({ created_at: 1 })
