import React from 'react';
import EventListMonth from './EventListMonth';

function EventList({ events, deleteEvent }) {
    return (
        <div>
            <h2>Tours of the month</h2>
            <EventListMonth events={events} deleteEvent={deleteEvent} />
        </div>
    );
}

export default EventList;