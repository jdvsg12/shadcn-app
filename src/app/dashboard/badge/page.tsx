import { Badge } from "@/components/ui/badge"
import { secureHeapUsed } from "crypto"



export default function Page() {
    return (
        <section className="grid grid-cols-4 gap-4 place-items-center">
            <Badge>badge</Badge>
            <Badge capitalize variant="secondary">secondary</Badge>
            <Badge variant="destructive">destructive</Badge>
            <Badge capitalize variant="outline">outline</Badge>
            <Badge capitalize variant="warnings">warning</Badge>
            <Badge variant="info">info</Badge>
        </section>
    )
}