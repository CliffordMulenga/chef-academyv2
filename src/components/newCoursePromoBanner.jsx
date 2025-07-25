import { useState } from "react"
import { ArrowRightIcon, Eclipse, Sparkles, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function NewCoursePromoBanner({data}) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="dark bg-muted text-foreground px-4 py-3">
      <div className="flex gap-2">
        <div className="flex grow gap-3">
          <Sparkles className="mt-0.5 shrink-0 opacity-60 text-amber-400" size={16} aria-hidden="true" />
          <div className="flex grow flex-col justify-between gap-2 md:flex-row">
            <p className="text-sm">
              {data.title}
            </p>
            <Link to={`/courses/${data.to}`} onClick={() => setIsVisible(false)} className="group text-sm font-medium whitespace-nowrap">
              Learn more
              <ArrowRightIcon
                className="ms-1 -mt-0.5 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
                size={16}
                aria-hidden="true" />
            </Link>
          </div>
        </div>
        <Button
          variant="ghost"
          className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
          onClick={() => setIsVisible(false)}
          aria-label="Close banner">
          <XIcon
            size={16}
            className="opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
