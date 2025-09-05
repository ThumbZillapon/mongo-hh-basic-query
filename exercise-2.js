// หาข้อมูล Document ของลูกค้าชื่อ Zoe และแสดงเฉพาะ total_price, customer_name
db.pizzaOrders.findOne(
    { customer_name: "Zoe" },
    { total_price: 1, customer_name: 1, _id: 0 }
  )
  