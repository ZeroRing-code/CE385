// ข้อมูลส่วนตัว
const nickname = "เดี่ยว";
const studentId = "66012345";
const age = 20;
const major = "วิศวกรรมคอมพิวเตอร์ (CE)";
const enrolledCourses = 6;

// ปีการศึกษาที่เหลือก่อนจบ
const remainingYears = 2;

// แสดงบัตรแนะนำตัวด้วย Template Literal
console.log(`=============================`);
console.log(`        บัตรแนะนำตัว          `);
console.log(`=============================`);
console.log(`ชื่อเล่น      : ${nickname}`);
console.log(`รหัสนักศึกษา  : ${studentId}`);
console.log(`อายุ        : ${age} ปี`);
console.log(`สาขาวิชา    : ${major}`);
console.log(`ลงทะเบียน   : ${enrolledCourses} วิชา`);
console.log(`ปีที่จะจบ    : ${2569 + remainingYears}`);
console.log(`=============================`);