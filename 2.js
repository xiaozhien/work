// 取得 HTML 中 ID 為 'myPieChart' 的 canvas 元素
const ctx = document.getElementById('myPieChart').getContext('2d');

// 統計圖表的資料
const data = {
    labels: [
        '程式學習 (HTML/CSS/JS)',
        '運動與休閒',
        '閱讀與研究',
        '其他事務'
    ],
    datasets: [{
        label: '時間分配 (小時/週)',
        data: [15, 10, 8, 5], // 範例數據：總共 38 小時
        backgroundColor: [
            'rgba(255, 99, 132, 0.8)', // 紅色
            'rgba(54, 162, 235, 0.8)',  // 藍色
            'rgba(255, 206, 86, 0.8)',  // 黃色
            'rgba(75, 192, 192, 0.8)'   // 綠色
        ],
        hoverOffset: 4 // 滑鼠懸停時偏移
    }]
};

// 建立圓餅圖 (Pie Chart)
const myPieChart = new Chart(ctx, {
    type: 'pie', // 指定圖表類型為圓餅圖
    data: data,
    options: {
        responsive: true, // 啟用響應式設計
        plugins: {
            legend: {
                position: 'top', // 圖例位置
            },
            title: {
                display: true,
                text: '我每週時間分配概況' // 圖表標題
            }
        }
    }
});