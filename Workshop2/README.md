
# ข้อที่ 1: ฟังก์ชันคำนวณคะแนน (ex1-functions.js)
    ทำการสร้างฟังก์ชัน isValidScore, toGrade, calculateWorkshopScore และ calculateTotal 
    ฟังก์ชัน isValidScore ตรวจสอบว่า score เป็นตัวเลขที่อยู่ในช่วง 0 ถึง 100 หรือไม่ ก่อนนำไปคำนวณเกรด ส่วน toGrade จะเปรียบเทียบคะแนนกับเกณฑ์และคืนค่ารูปแบบเป็น String
    สำหรับ Default Parameter เมื่อเรียก calculateWorkshopScore(48, undefined, 25) JavaScript จะใช้ค่าเริ่มต้น full = 60 และแทนที่ weight = 20 ด้วย 25 ดังนั้นผลลัพธ์คือ (48 / 60) * 25 = 20


# ข้อที่ 2: ทะเบียนนักศึกษา (ex2-collection.js)
    ทำการสร้างฟังก์ชัน findById, findByMajor, hasFailingStudent และ getEmail เพื่อค้นหาข้อมูลนักศึกษาโดยใช้ Array Methods ต่าง ๆ เช่น find, filter และ some
    ในฟังก์ชัน getEmail มีการใช้ Optional Chaining และ Nullish Coalescing เพื่อป้องกัน Error เมื่อไม่พบข้อมูลนักศึกษา หรือไม่มีข้อมูลติดต่อ จึงทำให้โปรแกรมคืนค่า "ไม่พบข้อมูลติดต่อ" แทนการหยุดทำงาน
    สำหรับข้อมูลนักศึกษาคนใหม่ จะใช้ Spread Operator ในการสร้าง Array ใหม่แทนการแก้ไข Array เดิม วิธีนี้ช่วยให้ข้อมูลต้นฉบับไม่ถูกเปลี่ยนแปลง และทำให้โค้ดมีแนวคิด Immutability มากขึ้น


# ข้อที่ 3: สรุปผลการเรียน (ex3-transform.js)
    ทำการสร้างฟังก์ชัน getNames, getPassedStudents, getTotalScore, getAverageScore, countByGrade และ getTopStudent เพื่อแปลงข้อมูลนักศึกษาโดยใช้ map, filter และ reduce
    ฟังก์ชัน getNames ใช้ map เพื่อดึงชื่อทั้งหมดออกมา getPassedStudents ใช้ filter เพื่อคัดคนที่สอบผ่าน และ getTotalScore ใช้ reduce เพื่อรวมคะแนนทั้งหมด ส่วน getAverageScore จะตรวจเช็ค Array ว่างก่อนคำนวณเพื่อป้องกันค่า NaN
    สำหรับการนับจำนวนเกรดและการหาคนที่ได้คะแนนสูงสุด ก็ใช้ reduce ในการประมวลผลข้อมูลทั้งหมด จนทำให้โปรแกรมสามารถจัดการข้อมูลปกติและข้อมูลว่างได้และไม่มี Error