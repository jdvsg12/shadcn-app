'use client'

import { Button } from "@/components/ui/button"
import { Badge, ChevronDown, Loader } from "lucide-react"


export default function Page() {
    return (
        <section className="grid grid-cols-4 gap-4 place-items-center">
            <Button capitalize={false} variant='destructive'>destructive</Button>
            <Button variant='destructive'>destructive</Button>
            <Button variant='secondary'>secondary</Button>
            <Button variant='ghost'>ghost</Button>
            <Button variant='link'>link</Button>
            <Button onClick={() => { console.log(`funciona`) }}><ChevronDown /></Button>
            <Button disabled variant='secondary' size='icon'><Badge /></Button>
            <Button className="flex gap-2" disabled variant='secondary'><Loader className="animate-spin" />Please wait
            </Button>
        </section>
    )
}