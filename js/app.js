// js/app.js

// ฟังก์ชันเริ่มต้น: เมื่อ DOM โหลดเสร็จ
document.addEventListener("DOMContentLoaded", () => {
  console.log("🔍 SonarStats Ready - Tracking whales below the surface...");
});

// ปุ่ม CTA: หากคุณมีหลายปุ่มในอนาคต
const startButton = document.querySelector("button");

if (startButton) {
  startButton.addEventListener("click", () => {
    console.log("🚀 เริ่มใช้งาน SonarStats");
    // สามารถเพิ่ม redirect หรือ animation ได้ที่นี่
  });
}
