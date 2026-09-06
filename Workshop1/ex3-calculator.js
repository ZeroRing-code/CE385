// คะแนนดิบ
const workshopRaw = 48;
const attendance = 9;
const midterm = 15;
const final = 24;
const project = 17;

// ค่าคงที่สำหรับการคำนวณ
const FULL_WORKSHOP_RAW = 60;
const WORKSHOP_WEIGHT = 20;
const FULL_SCORE = 100;
const TARGET_SCORE = 80;

// แปลงคะแนน Workshop ตามน้ำหนัก
const workshopCalculated = (workshopRaw / FULL_WORKSHOP_RAW) * WORKSHOP_WEIGHT;

// รวมคะแนนทุกส่วน
const totalScore = workshopCalculated + attendance + midterm + final + project;

// คำนวณเปอร์เซ็นต์
const percentage = (totalScore / FULL_SCORE) * 100;

// คำนวณคะแนนที่ขาดจากเป้าหมาย
const scoreNeeded = TARGET_SCORE - totalScore;

// แสดงผลคะแนนโดยจัดทศนิยม 2 ตำแหน่ง
console.log(`==================================`);
console.log(`      ใบสรุปคะแนนวิชา CE385       `);
console.log(`==================================`);
console.log(`คะแนน Workshop (แปลงแล้ว) : ${workshopCalculated.toFixed(2)} / ${WORKSHOP_WEIGHT}`);
console.log(`คะแนนเข้าเรียน            : ${attendance.toFixed(2)}`);
console.log(`คะแนนกลางภาค              : ${midterm.toFixed(2)}`);
console.log(`คะแนนปลายภาค              : ${final.toFixed(2)}`);
console.log(`คะแนนโครงงาน              : ${project.toFixed(2)}`);
console.log(`----------------------------------`);
console.log(`คะแนนรวมทั้งหมด           : ${totalScore.toFixed(2)} / ${FULL_SCORE}`);
console.log(`คิดเป็นเปอร์เซ็นต์         : ${percentage.toFixed(2)}%`);
console.log(`ขาดอีกกี่คะแนนจึงจะได้ 80  : ${scoreNeeded.toFixed(2)} คะแนน`);
console.log(`==================================`);