import { useUnit } from "effector-react";
import React, { FC } from "react";
import { $scheduleWeek, Day as TDay } from "../store/schedule";
import Block from "./MainBlock";

interface DayProps extends TDay {}
const Day: FC<DayProps> = ({ name, events }) => {
    return (
        <div className="aspect-4/5">
            <p className="uppercase">{name}</p>
            {events.map((event) => (
                <div className="flex justify-between w-full">
                    <p className="uppercase">
                        {event.time.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </p>
                    <p className="uppercase">{event.title}</p>
                </div>
            ))}
        </div>
    );
};

interface CalendarProps {}
const Calendar: FC<CalendarProps> = () => {
    const { days } = useUnit($scheduleWeek);

    return (
        <Block title="SCHEDULE" className="mt-2">
            <div className="grid grid-cols-7 gap-2 w-full mx-2">
                {days.map((day, i) => (
                    <Day {...day} key={i} />
                ))}
            </div>
        </Block>
    );
};

export default Calendar;
