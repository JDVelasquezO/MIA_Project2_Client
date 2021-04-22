import React, {useState} from 'react';
import {
    MonthlyBody,
    MonthlyCalendar,
    MonthlyNav,
    DefaultMonthlyEventItem,
} from '@zach.codes/react-calendar';
import '@zach.codes/react-calendar/dist/calendar-tailwind.css';
import {startOfMonth, subHours} from 'date-fns';

export const MyMonthlyCalendar = (props: { dates: any }) => {
    let [currentMonth, setCurrentMonth] = useState<Date>(
        startOfMonth(new Date())
    );

    // console.log(props.dates);

    return (
        <MonthlyCalendar
            currentMonth={currentMonth}
            onCurrentMonthChange={date => setCurrentMonth(date)}
        >
            <MonthlyNav />
            <MonthlyBody
                events={ props.dates }
                renderDay={data =>
                    data.map((item, index) => (
                        <DefaultMonthlyEventItem
                            key={index}
                            // @ts-ignore
                            title={item.title}
                            date={item.date.toDateString()}
                        />
                    ))
                }
            />
        </MonthlyCalendar>
    );
};