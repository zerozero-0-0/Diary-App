import type { ReactNode } from "react"
import { css } from "styled-system/css"
import { isHoliday } from "@holiday-jp/holiday_jp";

const Each_Week_Calendar = ({ children, bgColor } : { children : ReactNode, bgColor: string }) => {
    return (
        <div
            className={css({
                width: "70%",
                border: "1px solid",
                borderColor: "gray.400",
                borderRadius: 16,
            })}
        >
            <div
                className={css({
                    fontSize: "2xl",
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 100,
                    margin: 1,
                })}
                style={{ backgroundColor: bgColor }}
            >
                <span
                    className={css({
                        color: "white",
                    })}
                >
                    {children}
                </span>
            </div>
        </div>
    )
}

type DayInfo = {
    date: number;
    bgColor: string;
}


function getWeekDatesNumbers(today = new Date()): DayInfo[] {
    const days: DayInfo[] = [];
    const dayOfWeek = today.getDay();
    const sunday = new Date(today);

    sunday.setDate(today.getDate() - dayOfWeek);

    for (let i = 0; i < 7; i++) {
        const date = new Date(sunday);
        date.setDate(sunday.getDate() + i);

        let bgColor : string = "black";

        if (i === 0 || isHoliday(date)) {
            bgColor = "#ef4444";
        }
        else if (i === 6) {
            bgColor = "#3b82f6";
        }

        days.push({
            date: date.getDate(),
            bgColor
        });
    }

    return days;
}

export const Week_Calendar = () => {
    const days = getWeekDatesNumbers();

    return (
        <>
        <div
            className={css({
                gap: 2
            })}
        >
        {days.map((day, index) => (
            <Each_Week_Calendar key={index} bgColor={day.bgColor}>
                {day.date}
            </Each_Week_Calendar>
        ))}
        </div>
        </>
    )
}
