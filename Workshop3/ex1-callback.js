
STUDENTS = [
    { id: "123", name: "สมชาย", major: "CE", score: 85 },
    { id: "456", name: "สมหญิง", major: "CE", score: 90 },
    { id: "789", name: "สมปอง", major: "IE", score: 75 },
];
function fetchStudentSafe(id, callback) {setTimeout(() => {
    if (typeof id !== "string" || id.trim() === "") {
        callback(new Error(" รหัสนักศึกษาไม่ถูกต้อง"));
    }
    const student = STUDENTS.find((s) => s.id === id);
    if (!student) {
        callback(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
    }
    callback(null, student);
    if (student) {
        console.log(`พบนักศึกษา: ${student.name} เลขทะเบียน: ${student.id} สาขา: ${student.major} คะแนน: ${student.score}`);
        
    }
}, 300);

console.log("กำลังค้นหานักศึกษา...");
