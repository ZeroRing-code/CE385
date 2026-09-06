// ราคาตามเมนูอาหาร
function getMenuPrice(menu) {
  switch (menu) {
    // รวมเมนูที่มีราคาเท่ากันด้วย Fall-through
    case "ข้าวผัด":
    case "ข้าวมันไก่":
    case "ข้าวหมูแดง":
      return 50;
    case "ผัดไทย":
      return 60;
    case "ต้มยำกุ้ง":
      return 120;
    default:
      return 0;
  }
}

// ตัวคูณตามขนาดอาหาร
function getSizeMultiplier(size) {
  switch (size) {
    case "ธรรมดา":
      return 1;
    case "พิเศษ":
      return 1.5;
    case "จัมโบ้":
      return 2;
    default:
      return 1;
  }
}

// คำนวณราคารวมของออร์เดอร์
const orders = [
  { menu: "ผัดไทย", size: "พิเศษ", qty: 2 },
  { menu: "ข้าวผัด", size: "ธรรมดา", qty: 1 },
  { menu: "ต้มยำกุ้ง", size: "จัมโบ้", qty: 1 },
  { menu: "ข้าวมันไก่", size: "พิเศษ", qty: 3 },
  { menu: "ชาไข่มุก", size: "ธรรมดา", qty: 2 }
];

let grandTotal = 0;

console.log("--- สรุปรายการสั่งอาหาร ---");
for (const item of orders) {
  const basePrice = getMenuPrice(item.menu);
  const multiplier = getSizeMultiplier(item.size);
  const itemTotal = basePrice * multiplier * item.qty;
  
  grandTotal += itemTotal;
  console.log(`${item.menu} (${item.size}) x ${item.qty} = ${itemTotal} บาท`);
}

console.log("---------------------------");
console.log(`ราคารวมทั้งสิ้น: ${grandTotal} บาท`);