import { CheckIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

export default function PromoBage({ desc, styles, icon }) {
  return (
    <Badge className={` py-1 ${styles}`}>
       <span>{icon}</span> <span className="text-[10px]">{desc}</span>
    </Badge>
  );
}
