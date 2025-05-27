// js/sonar.js

// Mock data: จำลองข้อมูลกระเป๋า
const wallets = [
  {
    address: "0xABC123...",
    txs: 134,
    avgBuy: 800,
    avgSell: 1000,
    winRate: 78,
    tags: ["sniper", "fomo"],
    isBot: false
  },
  {
    address: "0xDEADBE...",
    txs: 12,
    avgBuy: 50000,
    avgSell: 3000,
    winRate: 12,
    tags: ["insider", "panic"],
    isBot: true
  },
  {
    address: "0xC0FFEE...",
    txs: 450,
    avgBuy: 1100,
    avgSell: 950,
    winRate: 55,
    tags: ["whale", "chill"],
    isBot: false
  }
];

// 🎯 วิเคราะห์ประเภทกระเป๋า (DNA Fingerprint)
function analyzeWalletDNA(wallet) {
  const { txs, avgBuy, avgSell } = wallet;
  const winRate = wallet.winRate;

  let type = "normal";

  if (txs > 300 && avgBuy > 1000) type = "whale";
  else if (txs < 20 && avgBuy > 10000) type = "vc";
  else if (avgSell > avgBuy && winRate < 30) type = "panic";
  else if (avgBuy > avgSell && winRate > 70) type = "sniper";
  else if (avgBuy < avgSell && winRate < 40) type = "fomo";

  return type;
}

// 🧠 Mood AI (Panic / FOMO / Chill)
function getWalletMood(wallet) {
  const { tags, winRate } = wallet;

  if (tags.includes("panic") || winRate < 25) return "😱 Panic";
  if (tags.includes("fomo") || winRate < 50) return "😬 FOMO";
  if (tags.includes("chill") || winRate > 70) return "🧘 Chill";
  return "🤖 Neutral";
}

// 🚀 แสดงผลวิเคราะห์ทั้งหมด
function renderWalletReport(wallets) {
  const container = document.getElementById("dashboard");

  wallets.forEac
function renderDNATable(wallets) {
  const tbody = document.querySelector("#dna-table tbody");
  wallets.forEach(w => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${w.address}</td>
      <td>${analyzeWalletDNA(w)}</td>
      <td>${w.txs}</td>
      <td>${w.winRate}%</td>
    `;
    tbody.appendChild(row);
  });
}

function renderMoodStats(wallets) {
  const container = document.getElementById("mood-stats");
  wallets.forEach(w => {
    const mood = getWalletMood(w);
    const div = document.createElement("div");
    div.className = "wallet-card";
    div.innerHTML = `
      <h3>${w.address}</h3>
      <p>Mood: <strong>${mood}</strong></p>
    `;
    container.appendChild(div);
  });
}

function renderRanking(wallets) {
  const tbody = document.querySelector("#ranking-table tbody");
  // Mock sorting by profit (avgSell - avgBuy)
  wallets.sort((a, b) => (b.avgSell - b.avgBuy) - (a.avgSell - a.avgBuy));
  wallets.forEach(w => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${w.address}</td>
      <td>${(w.avgSell - w.avgBuy).toLocaleString()} USD</td>
      <td>${w.avgBuy}</td>
      <td>${w.avgSell}</td>
    `;
    tbody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderWalletReport(wallets); // dashboard
  renderDNATable(wallets);
  renderMoodStats(wallets);
  renderRanking(wallets);
});
