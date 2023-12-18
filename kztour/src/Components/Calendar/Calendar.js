import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isWeekend, startOfWeek, endOfWeek } from 'date-fns';
import CalendarHeader from './CalendarHeader';
import EventForm from './EventForm';
import EventList from './EventList';
import './Calendar.css';

function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [title, setTitle] = useState('');

    const addEvent = (event) => {
        setEvents([...events, event]);
    };

    const deleteEvent = (id) => {
        setEvents(events.filter((event) => event.id !== id));
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const getMonthEvents = () => {
        return events.filter((event) => {
            const eventDate = new Date(event.date);
            return eventDate >= startOfMonth(currentDate) && eventDate <= endOfMonth(currentDate);
        });
    };

    const DayCell = ({ day, isWeekend, handleDateClick, events }) => {
        const formattedDay = format(day, 'dd');

        const isToday = () => {
            const today = new Date();
            return (
                day.getDate() === today.getDate() &&
                day.getMonth() === today.getMonth() &&
                day.getFullYear() === today.getFullYear()
            );
        };

        return (
            <td
                onClick={() => handleDateClick(day)}
                className={`day-cell ${isWeekend ? 'weekend' : ''} ${isToday() ? 'today' : ''}`}
            >
                <div className={`day-number ${isToday() ? 'today' : ''}`}>{formattedDay}</div>
                <div className="day-events">
                    {events
                        .filter(
                            (event) => format(new Date(event.date), 'dd.MM.yyyy') === format(day, 'dd.MM.yyyy')
                        )
                        .map((event) => (
                            <div key={event.id}>{event.title}</div>
                        ))}
                </div>
            </td>
        );
    };

    const daysInMonth = eachDayOfInterval({
        start: startOfWeek(startOfMonth(currentDate), { weekStartsOn: 1 }),
        end: endOfWeek(endOfMonth(currentDate), { weekStartsOn: 1 }),
    });

    const daysMatrix = [];
    let week = [];
    daysInMonth.forEach((day, index) => {
        week.push(day);
        if (index % 7 === 6 || index === daysInMonth.length - 1) {
            daysMatrix.push(week);
            week = [];
        }
    });

    return (
        <div className="calendar-container">
            <CalendarHeader currentDate={currentDate} setCurrentDate={setCurrentDate} />
                <table className="calendar-table">
                    <thead>
                    <tr>
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                            <th key={index} className={index >= 5 ? 'weekend' : ''}>
                                {day}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {daysMatrix.map((week, weekIndex) => (
                        <tr key={weekIndex}>
                            {week.map((day, dayIndex) => (
                                <DayCell
                                    key={dayIndex}
                                    day={day}
                                    isWeekend={isWeekend(day)}
                                    handleDateClick={handleDateClick}
                                    events={getMonthEvents()}
                                />
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            <div className="events-container">
                <EventForm
                    date={selectedDate}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    title={title}
                    setTitle={setTitle}
                    addEvent={addEvent}
                />
                <EventList events={getMonthEvents()} deleteEvent={deleteEvent} />
            </div>
        </div>
    );
}

export default Calendar;
