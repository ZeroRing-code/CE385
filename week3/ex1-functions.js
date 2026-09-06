// ตัวเลขเกณฑ์และน้ำหนัก
const MIN_SCORE = 0;
const MAX_SCORE = 100;
const DEFAULT_FULL_SCORE = 60;
const DEFAULT_WEIGHT = 20;

// ตรวจสอบคะแนน
const isValidScore = (score) => {
  return typeof score === 'number' && score >= MIN_SCORE && score <= MAX_SCORE;
};

// แปลงเกรด
function toGrade(score) {
  if (!isValidScore(score)) return "Invalid Score";

  const GRADE_RULES = [
    { min: 80, grade: "A" },
    { min: 75, grade: "B+" },
    { min: 70, grade: "B" },
    { min: 65, grade: "C+" },
    { min: 60, grade: "C" },
    { min: 55, grade: "D+" },
    { min: 50, grade: "D" },
    { min: 0,  grade: "F" }
  ];

  const rule = GRADE_RULES.find((r) => score >= r.min);
  return rule ? rule.grade : "F";
}

// คำนวณคะแนนกิจกรรม
const calculateWorkshopScore = (raw, full = DEFAULT_FULL_SCORE, weight = DEFAULT_WEIGHT) => {
  if (typeof raw !== 'number' || raw < 0) return 0;
  return (raw / full) * weight;
};

// คำนวณคะแนนรวม
const calculateTotal = (workshop, attendance, project, midterm, final) => {
  return workshop + attendance + project + midterm + final;
};

// ข้อมูลนักศึกษา
const studentsData = [
  { name: "สมชาย", workshopRaw: 48, attendance: 10, project: 25, midterm: 20, final: 22 },
  { name: "สมหญิง", workshopRaw: 55, attendance: 10, project: 28, midterm: 23, final: 24 },
  { name: "มานี",   workshopRaw: 30, attendance: 8,  project: 18, midterm: 12, final: 15 }
];

// แสดงผลคะแนน
console.log("===== ผลการคำนวณคะแนนนักศึกษา =====");
const tableResult = studentsData.map((s) => {
  const wsScore = calculateWorkshopScore(s.workshopRaw);
  const total = calculateTotal(wsScore, s.attendance, s.project, s.midterm, s.final);
  const grade = toGrade(total);
  return {
    Name: s.name,
    Workshop: wsScore.toFixed(2),
    Total: total.toFixed(2),
    Grade: grade
  };
});
console.table(tableResult);

// ทดสอบค่าเริ่มต้น
console.log("\n===== ทดสอบ Default Parameter =====");
const resDefault = calculateWorkshopScore(48);
const resExplicit = calculateWorkshopScore(48, 60, 20);
console.log(`calculateWorkshopScore(48) -> ${resDefault}`);
console.log(`calculateWorkshopScore(48, 60, 20) -> ${resExplicit}`);
console.log(`ผลลัพธ์เท่ากันหรือไม่: ${resDefault === resExplicit}`);

// ทดสอบค่า undefined
const resUndefined = calculateWorkshopScore(48, undefined, 25);
console.log(`calculateWorkshopScore(48, undefined, 25) -> ${resUndefined}`);

// เมื่อส่งค่า undefined ให้ใช้ค่าเริ่มต้นก่อน