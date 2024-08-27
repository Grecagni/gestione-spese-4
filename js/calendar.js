document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [],
    });

    db.collection('expenses').get().then((querySnapshot) => {
        const events = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            events.push({
                title: data.description,
                start: data.date.toDate(),
            });
        });
        calendar.addEventSource(events);
        calendar.render();
    });
});
