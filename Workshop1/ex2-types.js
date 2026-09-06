// ตัวอย่างข้อมูล 6 ชนิด
const strVal = "สวัสดี CE385";
const numVal = 42;
const boolVal = true;
let undefVal;
const nullVal = null;
const arrVal = [1, 2, 3];

console.log("--- ส่วนที่ 1: ชนิดข้อมูลพื้นฐาน ---");
console.log(`ค่า: ${strVal} | ชนิด: ${typeof strVal}`);
console.log(`ค่า: ${numVal} | ชนิด: ${typeof numVal}`);
console.log(`ค่า: ${boolVal} | ชนิด: ${typeof boolVal}`);
console.log(`ค่า: ${undefVal} | ชนิด: ${typeof undefVal}`);
console.log(`ค่า: ${nullVal} | ชนิด: ${typeof nullVal}`);
console.log(`ค่า: [${arrVal}] | ชนิด: ${typeof arrVal}`);

// ตรวจสอบผลลัพธ์พิเศษของ typeof
console.log("\n--- ส่วนที่ 2: ตอบคำถามพิเศษ ---");
console.log(`typeof null ได้ผลว่า: ${typeof null}`);
console.log(`ตัวแปรที่ประกาศแล้วยังไม่กำหนดค่า มีชนิดเป็น: ${typeof undefVal}`);
const nanVal = Number("abc");
console.log(`typeof NaN ได้ผลว่า: ${typeof nanVal}`);

// แปลงชนิดข้อมูลก่อนคำนวณ
console.log("\n--- ส่วนที่ 3: การแปลงชนิดข้อมูล ---");
const inputAge = "20";
const inputScore = "85.5";

const parsedAge = Number(inputAge) + 5;
console.log(`inputAge บวก 5 ได้ผลลัพธ์เป็น: ${parsedAge}`);

const parsedScore = Number(inputScore);
console.log(`inputScore ทศนิยม 1 ตำแหน่ง: ${parsedScore.toFixed(1)}`);

// เปรียบเทียบแบบ strict equality
console.log(`inputAge === 20 : ${inputAge === 20}`);
console.log(`Number(inputAge) === 20 : ${Number(inputAge) === 20}`);