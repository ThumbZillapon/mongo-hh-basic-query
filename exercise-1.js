// หาข้อมูล Document ของลูกค้าชื่อ Cherlyn
db.pizzaOrders.findOne({ customer_name: "Cherlyn" })

// หาข้อมูล Document ทั้งหมดที่จ่ายด้วยบัตร mastercard
db.pizzaOrders.find({ credit_card_type: "mastercard" })

// หาข้อมูล Document ทั้งหมดที่สั่ง pizza ขนาด medium และ limit 5
db.pizzaOrders.find({ size: "medium" }).limit(5)
