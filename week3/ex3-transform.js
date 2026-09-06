import { toGrade } from "./ex1-functions.js";

// กำหนดข้อมูลนักศึกษา
const students = [
  { id: "6501", name: "สมชาย", major: "CE", score: 78 },
  { id: "6502", name: "สมหญิง", major: "CE", score: 91 },
  { id: "6503", name: "มานี",   major: "IT", score: 45 },
  { id: "6504", name: "ปิติ",   major: "IT", score: 66 },
  { id: "6505", name: "ชูใจ",  major: "CE", score: 82 },
  { id: "6506", name: "วีระ",   major: "IT", score: 38 }
];

// ดึงรายชื่อ
const getNames = (studentList) => studentList.map((s) => s.name);

// คัดคนสอบผ่าน
const getPassedStudents = (studentList) => studentList.filter((s) => s.score >= 50);

// รวมคะแนน
const getTotalScore = (studentList) => studentList.reduce((sum, s) => sum + s.score, 0);

// หาคะแนนเฉลี่ย
const getAverageScore = (studentList) => {
  if (studentList.length === 0) return 0;
  const total = getTotalScore(studentList);
  return Number((total / studentList.length).toFixed(2));
};

// นับจำนวนตามเกรด
const countByGrade = (studentList) => {
  return studentList.reduce((acc, s) => {
    const grade = toGrade(s.score);
    acc[grade] = (acc[grade] ?? 0) + 1;
    return acc;
  }, {});
};

// หาคนคะแนนสูงสุด
const getTopStudent = (studentList) => {
  if (studentList.length === 0) return undefined;
  return studentList.reduce((top, current) => {
    return current.score > top.score ? current : top;
  }, studentList[0]);
};

// หาค่าเฉลี่ยของคนสอบผ่าน
const cePassedAvg = ((list) => {
  const filteredScores = list
    .filter((s) => s.major === "CE" && s.score >= 50)
    .map((s) => s.score);
  return filteredScores.length === 0 ? 0 : Number((filteredScores.reduce((a, b) => a + b, 0) / filteredScores.length).toFixed(2));
})(students);

// แสดงผลการทดสอบ
console.log("รายชื่อทุกคน:", getNames(students));
console.log("คนที่สอบผ่าน:", getPassedStudents(students).map(s => s.name));
console.log("คะแนนรวม:", getTotalScore(students));
console.log("คะแนนเฉลี่ย:", getAverageScore(students));
console.log("จำนวนเกรด:", countByGrade(students));
console.log("คนได้คะแนนสูงสุด:", getTopStudent(students));
console.log("คะแนนเฉลี่ยเด็ก CE ที่สอบผ่าน (Pipeline):", cePassedAvg);

// ทดสอบข้อมูลว่าง
console.log("\n===== ทดสอบ Edge Case (Array ว่าง []) =====");
const emptyList = [];
console.log("getNames([]):", getNames(emptyList));
console.log("getPassedStudents([]):", getPassedStudents(emptyList));
console.log("getTotalScore([]):", getTotalScore(emptyList));
console.log("getAverageScore([]):", getAverageScore(emptyList));
console.log("countByGrade([]):", countByGrade(emptyList));
console.log("getTopStudent([]):", getTopStudent(emptyList));