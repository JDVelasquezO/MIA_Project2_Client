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

export const MyWeeklyCalendar = (props: { dates: any }) => {
    return (
        <WeeklyCalendar week={new Date()}>
            <WeeklyContainer>
                <WeeklyDays />
                <WeeklyBody
                    style={{ color: "white" }}
                    events={
                        props.dates
                    }
                    renderItem={({ item, showingFullWeek }) => (
                        // @ts-ignore
                        <div className={`${item.color} has-text-primary-light`}>
                            <DefaultWeeklyEventItem
                                key={item.date.toISOString()}
                                // @ts-ignore
                                title={item.title}
                                date={
                                    showingFullWeek
                                        ? format(item.date, 'MMM do k:mm')
                                        : format(item.date, 'k:mm')
                                }
                            />
                        </div>
                    )}
                />
            </WeeklyContainer>
        </WeeklyCalendar>
    );
};