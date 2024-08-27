$(document).ready(function() {
    const table = $('#expenses-table').DataTable();

    db.collection('expenses').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            table.row.add([
                data.description,
                data.amount,
                data.date.toDate().toLocaleDateString(),
                data.category
            ]).draw();
        });
    }).catch((error) => {
        console.error("Errore nel caricamento delle spese:", error);
    });
});
