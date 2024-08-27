const ctx = document.getElementById('expenseChart').getContext('2d');
const expenseChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [], // Date delle spese
        datasets: [
            {
                label: 'Spese di Jack',
                data: [], // Importi delle spese di Jack
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
            },
            {
                label: 'Spese di Ste',
                data: [], // Importi delle spese di Ste
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
            steExpenses.push(0); // Aggiunge zero per Ste se è una spesa di Jack
        } else {
            steExpenses.push(data.amount);
            jackExpenses.push(0); // Aggiunge zero per Jack se è una spesa di Ste
        }
    });

    expenseChart.data.labels = labels;
    expenseChart.data.datasets[0].data = jackExpenses;
    expenseChart.data.datasets[1].data = steExpenses;
    expenseChart.update();
});
