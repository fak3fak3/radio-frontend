import { createStore } from "effector";

type Slot = {
    time: Date;
    title: string;
};

type Day = {
    name: string;
    events: Slot[];
};

type Week = {
    days: Day[];
};

const now = new Date();
const addHours = (base: Date, h: number) =>
    new Date(base.getTime() + h * 3600 * 1000);

const $scheduleWeek = createStore<Week>({
    days: [
        {
            name: "mon",
            events: [
                { time: addHours(now, 1), title: "morning show" },
                { time: addHours(now, 3), title: "news hour" },
            ],
        },
        {
            name: "tue",
            events: [],
        },
        {
            name: "wed",
            events: [{ time: addHours(now, 2), title: "special guest" }],
        },
        {
            name: "thu",
            events: [],
        },
        {
            name: "fri",
            events: [
                { time: addHours(now, 1), title: "live DJ set" },
                { time: addHours(now, 4), title: "interview" },
                { time: addHours(now, 6), title: "evening mix" },
            ],
        },
        {
            name: "sat",
            events: [],
        },
        {
            name: "sun",
            events: [{ time: addHours(now, 2), title: "chill vibes" }],
        },
    ],
});

export { $scheduleWeek };
export type { Day };
