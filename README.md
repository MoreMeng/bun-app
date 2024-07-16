สำหรับ Windows คุณสามารถทำให้ Bun รันอัตโนมัติหลังจากเปิดเครื่องได้โดยใช้ Task Scheduler. นี่คือวิธีการ:

1. **สร้างสคริปต์รัน Bun**:
   สร้างไฟล์ `.bat` เพื่อรันเซิร์ฟเวอร์ Bun ของคุณ ตัวอย่างเช่น:
   - สร้างไฟล์ `start-bun-server.bat`
   ```bat
   @echo off
   cd C:\path\to\your\project
   bun index.ts
   ```

2. **สร้าง Task ใน Task Scheduler**:
   - เปิด Task Scheduler โดยกดปุ่ม `Win + R` แล้วพิมพ์ `taskschd.msc` และกด Enter.
   - ใน Task Scheduler, คลิกที่ "Create Task..." ด้านขวา.
   - ในแท็บ "General":
     - ตั้งชื่อ Task ของคุณ (เช่น "Bun Server").
   - ในแท็บ "Triggers":
     - คลิก "New..." และเลือก "At log on" เพื่อให้ Task รันเมื่อผู้ใช้ล็อกอิน.
   - ในแท็บ "Actions":
     - คลิก "New..." และเลือก "Start a program".
     - ในช่อง "Program/script", ให้เลือกไฟล์ `.bat` ที่คุณสร้างในขั้นตอนที่ 1.
   - คลิก "OK" เพื่อสร้าง Task.

3. **ตรวจสอบ Task**:
   - กลับไปที่หน้าต่างหลักของ Task Scheduler, คลิกขวาที่ Task ที่คุณสร้างและเลือก "Run" เพื่อทดสอบว่ามันทำงานตามที่คุณต้องการ.

โดยทำตามขั้นตอนเหล่านี้, Bun server ของคุณจะรันอัตโนมัติเมื่อคุณล็อกอินเข้าสู่ Windows.