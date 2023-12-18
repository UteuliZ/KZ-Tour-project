import React from 'react';
import { format, addMonths, subMonths } from 'date-fns';

function CalendarHeader({ currentDate, setCurrentDate }) {
    return (
        <div className="header">
            <button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>{'<'}</button>
            <h1>{format(currentDate, 'LLLL yyyy')}</h1>
            <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>{'>'}</button>
        </div>
    );
}

export default CalendarHeader;