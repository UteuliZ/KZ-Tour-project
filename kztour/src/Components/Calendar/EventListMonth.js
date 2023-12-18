import React from 'react';
import { format } from 'date-fns';

function EventListMonth({ events, deleteEvent }) {
    return (
        <ul>
            {events.map((event) => (
                <li key={event.id}>
                    {event.title} - {format(new Date(event.date), 'dd.MM.yyyy')}
                    <button onClick={() => deleteEvent(event.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default EventListMonth;