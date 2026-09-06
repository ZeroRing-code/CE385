// กำหนดข้อมูลนักศึกษา
const students = [
  { id: "6501", name: "สมชาย", major: "CE", score: 78, contact: { email: "somchai@dpu.ac.th", phone: "081-111-1111" } },
  { id: "6502", name: "สมหญิง", major: "CE", score: 91, contact: { email: "somying@dpu.ac.th", phone: "082-222-2222" } },
  { id: "6503", name: "มานี",   major: "IT", score: 45, contact: { email: "manee@dpu.ac.th", phone: "083-333-3333" } },
  { id: "6504", name: "ปิติ",   major: "IT", score: 66, contact: { email: "piti@dpu.ac.th", phone: "084-444-4444" } },
  { id: "6505", name: "ชูใจ",  major: "CE", score: 82, contact: { email: "choojai@dpu.ac.th", phone: "085-555-5555" } },
  { id: "6506", name: "วีระ",   major: "IT", score: 38, contact: { email: "weera@dpu.ac.th", phone: "086-666-6666" } }
];

// ค้นหาด้วยรหัส
const findById = (studentList, id) => {
  return studentList.find((s) => s.id === id);
};

// ค้นหาด้วยสาขา
const findByMajor = (studentList, major) => {
  return studentList.filter((s) => s.major === major);
};

// ตรวจสอบคนไม่ผ่าน
const hasFailingStudent = (studentList) => {
  return studentList.some((s) => s.score < 50);
};

// ดึงอีเมลนักศึกษา
const getEmail = (studentList, id) => {
  const student = findById(studentList, id);
  return student?.contact?.email ?? "ไม่พบข้อมูลติดต่อ";
};

// แสดงผลการค้นหา
console.log("===== ทดสอบค้นหาข้อมูล =====");
console.log("ค้นหา ID 6502:", findById(students, "6502"));
console.log("ค้นหา สาขา CE:", findByMajor(students, "CE").map(s => s.name));
console.log("มีนักศึกษาตกหรือไม่:", hasFailingStudent(students));

console.log("\n===== ทดสอบกรณีหาไม่พบ (Edge Cases) =====");
console.log("findById('9999'):", findById(students, "9999"));
console.log("getEmail('9999'):", getEmail(students, "9999"));

// สร้างข้อมูลชุดใหม่
const newStudentNoContact = { id: "6507", name: "อนันต์", major: "CE", score: 70 };
const updatedStudents = [...students, newStudentNoContact];

console.log("\n===== ทดสอบนักศึกษาไม่มี contact =====");
console.log("getEmail('6507'):", getEmail(updatedStudents, "6507"));
console.log("จำนวนนักศึกษาเดิม:", students.length);
console.log("จำนวนนักศึกษาใหม่:", updatedStudents.length);