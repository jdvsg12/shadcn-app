"use client"

import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"


export default function Page() {
    const [date, setDate] = useState<Date | undefined>(new Date())

    const smallDate = date?.toLocaleDateString("es-ES", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "UTC",
    })

    return (
        <section className="grid grid-cols-4 gap-4 place-items-center">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
            />
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
            />
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
            />
            <div>
                <h3 className="text-2xl font-bold">Information</h3>
                {smallDate}
            </div>
        </section>
    )
}