import React from 'react';
import {
    WeeklyCalendar,
    WeeklyContainer,
    WeeklyDays,
    DefaultWeeklyEventItem,
    WeeklyBody,
} from '@zach.codes/react-calendar';
import '@zach.codes/react-calendar/dist/calendar-tailwind.css';
import {format} from "util";
import {subHours} from "date-fns";

export const MyWeeklyCalendar = () => {
    return (
        <WeeklyCalendar week={new Date()}>
            <WeeklyContainer>
                <WeeklyDays />
                <WeeklyBody
                    events={
                        [
                            { title: 'Jane doe', date: subHours(new Date(), 1) },
                            { title: 'Daniel', date: subHours(new Date("April 18, 2021 11:13:00"), 2) }
                        ]
                    }
                    renderItem={({ item, showingFullWeek }) => (
                        <DefaultWeeklyEventItem
                            key={item.date.toISOString()}
                            title={item.title}
                            date={
                                showingFullWeek
                                    ? format(item.date, 'MMM do k:mm')
                                    : format(item.date, 'k:mm')
                            }
                        />
                    )}
                />
            </WeeklyContainer>
        </WeeklyCalendar>
    );
};