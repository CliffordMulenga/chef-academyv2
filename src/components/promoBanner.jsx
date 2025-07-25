import { useState } from "react"
import { ArrowRightIcon, PiggyBank, RocketIcon, XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function DiscountPromoBanner({to}) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="dark bg-muted text-foreground px-4 py-3">
      <div className="flex gap-2 md:items-center">
        <div className="flex grow gap-3 md:items-center">
          <div
            className="bg-amber-600/15 flex size-9 shrink-0 items-center justify-center rounded-full max-md:mt-0.5"
            aria-hidden="true">
            <PiggyBank className="opacity-80 text-amber-300" size={16} />
          </div>
          <div
            className="flex grow flex-col justify-between gap-1 md:gap-3 md:flex-row md:items-center">
            <div className="space-y-0.5">
              <p className="text-sm md:text-lg font-bold">
                Save Big Today😮🤯
              </p>
              <p className="w-full text-muted-foreground text-[12px] md:text-sm">
                Get discounts on selected courses
              </p>
            </div>
            <div className="flex gap-2 max-md:flex-wrap">
              <Link to={to} className="group text-sm font-medium whitespace-nowrap">
              Learn more
              <ArrowRightIcon
                className="ms-1 -mt-0.5 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
                size={16}
                aria-hidden="true"
              />
            </Link>
            </div>
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
