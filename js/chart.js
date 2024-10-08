const ctx = document.getElementById('expenseChart').getContext('2d');
const expenseChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [
            {
                label: 'Spese di Jack',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
            },
            {
                label: 'Spese di Ste',
                data: [],
                borderColor: 'rgba(153, 102, 255, 1)',
                fill: false,
            },
        ],
    },
});

db.collection('expenses').orderBy('date').onSnapshot((querySnapshot) => {
    const labels = [];
    const jackExpenses = [];
    const steExpenses = [];

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        labels.push(data.date.toDate().toLocaleDateString());
        if (data.user === 'Jack') {
            jackExpenses.push(data.amount);
            steExpenses.push(0);
        } else {
            steExpenses.push(data.amount);
            jackExpenses.push(0);
        }
    });

    expenseChart.data.labels = labels;
    expenseChart.data.datasets[0].data = jackExpenses;
    expenseChart.data.datasets[1].data = steExpenses;
    expenseChart.update();
});
