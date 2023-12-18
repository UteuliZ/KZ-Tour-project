import React from 'react';
import { format } from 'date-fns';

function EventForm({ addEvent, selectedDate, setSelectedDate, title, setTitle }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && selectedDate) {
            const newEvent = {
                id: Date.now(),
                title,
                date: format(selectedDate, 'MM.dd.yyyy'),
            };
            addEvent(newEvent);
            setTitle('');
            setSelectedDate(null);
        }
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };
    return (
        <form className="event-form" onSubmit={handleSubmit}>
            <label>
                <h2>Tour date</h2>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            <h3>Selected date</h3>
            <p>{selectedDate ? format(selectedDate, 'dd.MM.yyyy') : 'No date selected'}</p>
            <button onClick={() => handleDateClick(new Date())}>Select today's date</button>
            <button type="submit">Add a tour day</button>
        </form>
    );
}

export default EventForm;
