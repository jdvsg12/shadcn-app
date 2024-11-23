"use client"

import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { DateRange } from "react-day-picker";


export default function Page() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [multiple, setMultiple] = useState<Date[] | undefined>()
    const [range, setRange] = useState<DateRange | undefined>();

    const fromDate = range?.from
    const toDate = range?.to

    return (
        <section className="grid grid-cols-4 gap-4 place-items-center">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
            />
            <Calendar
                mode="multiple"
                selected={multiple}
                onSelect={setMultiple}
                max={3}
                className="rounded-md border"
            />
            <Calendar
                mode="range"
                selected={range}
                onSelect={setRange}
                className="rounded-md border"
            />
            <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">Information</h3>
                <div className="border-2 border-black rounded-lg">
                    <h2 className="font-bold text-lg">Single</h2>
                    {date?.toLocaleDateString("es-Es", { weekday: 'short', month: 'short', day: 'numeric' })}
                </div>
                <div className="border-2 border-black rounded-lg">
                    <h2 className="font-bold text-lg">Multiple</h2>
                    {multiple?.map((date) => (
                        <p
                            key={date.toISOString()}>{date.toLocaleDateString("es-Es", { weekday: 'short', month: 'short', day: 'numeric' })}</p>
                    ))}
                </div>
                <div className="border-2 border-black rounded-lg">
                    <h2 className="font-bold text-lg">Range</h2>
                    <p><b>From:</b> {fromDate?.toLocaleDateString("es-Es", { weekday: 'short', month: 'short', day: 'numeric' })}</p>
                    <p><b>To:</b> {toDate?.toLocaleDateString("es-Es", { weekday: 'short', month: 'short', day: 'numeric' })}</p>
                </div>
            </div>
        </section>
    )
}