"use client";

import React, { useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, CircleArrowOutUpRight, PiggyBank, Sparkles } from "lucide-react";
import { cn } from "../../../lib/utils";
import { Button } from "../../../components/ui/button";
import { ScrollArea, ScrollBar } from "../../../components/ui/scroll-area";
import PromoBage from "@/components/promoBage";

const DEFAULT_PRODUCT = {
  title: "Introduction to the Professional Chef Online Course",
  price: "1495",
  overview:
    "Learn professional kitchen skills at your own pace. This course gives you access to practical lessons from expert chefs online.",
  action: {
    slug: "shsf-work",
    label: "Explore workspace",
  },
  images: [
    {
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=640&h=360&auto=format&fit=cover",
      alt: "Sample Image",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=640&h=360&auto=format&fit=cover",
      alt: "Sample Image",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1553484771-898ed465e931?q=80&w=640&h=360&auto=format&fit=cover",
      alt: "Sample Image",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=640&h=360&auto=format&fit=cover",
      alt: "Sample Image",
    },
  ],
  id: "default-id"
};

const DetailSwapCard = forwardRef(({ data = DEFAULT_PRODUCT, className, onImageChange, showImageCounter = true, showDotIndicator = false, showThumbnailNavigator = true, ...restProps }, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
//   const images = data.images || DEFAULT_PRODUCT.images;
  const images = data.images && data.images.length > 0 ? data.images : DEFAULT_PRODUCT.images;

  const totalImages = images.length;

  const handleImageChange = (index) => {
    if (isTransitioning || index === activeIndex) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    if (onImageChange) onImageChange(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => handleImageChange((activeIndex + 1) % totalImages);
  const handlePrevious = () => handleImageChange((activeIndex - 1 + totalImages) % totalImages);

  // icon for new course
  const newCourseIcon = <Sparkles className="text-amber-400" size={16} aria-hidden="true"/>

  // icon for discount
  const courseDiscountIcon = <PiggyBank className="opacity-80 text-amber-300" size={16} aria-hidden="true"/>

  return (
    <div
      ref={ref}
      className={cn("w-full space-y-2 rounded-lg bg-white p-4 border max-w-[320px] sm:max-w-96 shadow-lg", className)}
      {...restProps}
    >
      {/* Image Slider */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          {images.map((image, index) => (
            <div
              key={image.thumbnail}
              className={cn(
                "absolute inset-0 h-full w-full transition-all duration-500 ease-out",
                activeIndex === index
                  ? "opacity-100 transform-none z-10"
                  : "opacity-0 scale-95 z-0"
              )}
              style={{
                transform:
                  activeIndex === index
                    ? "none"
                    : index < activeIndex
                    ? "translateX(-100%)"
                    : "translateX(100%)",
              }}
            >
              <img
                src={image.thumbnail}
                alt={image.alt || `Detail image ${index + 1}`}
                className="h-full w-full object-cover transition-all duration-500"
                style={{ objectPosition: index === 0 ? "top" : "center" }}
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        {totalImages > 1 && (
          <>
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-2 top-1/2 z-20 size-8 -translate-y-1/2 rounded-full bg-black/40 text-white shadow-md hover:bg-black/60"
              onClick={handlePrevious}
              disabled={isTransitioning}
            >
              <ChevronLeft size={16} />
              <span className="sr-only">Previous image</span>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-2 top-1/2 z-20 size-8 -translate-y-1/2 rounded-full bg-black/40 text-white shadow-md hover:bg-black/60"
              onClick={handleNext}
              disabled={isTransitioning}
            >
              <ChevronRight size={16} />
              <span className="sr-only">Next image</span>
            </Button>
          </>
        )}

        {/* Dots */}
        {totalImages > 1 && showDotIndicator && (
          <div className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 flex gap-1.5 rounded-full bg-black/40 backdrop-blur-sm px-2 py-1 shadow-sm border border-white/20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleImageChange(index)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-300 cursor-pointer",
                  activeIndex === index
                    ? "bg-white scale-110 ring-1 ring-white/50"
                    : "bg-white/60 hover:bg-white/80"
                )}
                aria-label={`View image ${index + 1} of ${totalImages}`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        )}

        {/* Counter */}
        {showImageCounter && (
          <div className="absolute top-2 right-2 z-20 px-2 py-0.5 text-xs font-medium text-white flex gap-1 flex-col">
            {/* {activeIndex + 1} / {totalImages} */}
            <div>
              {data.isNew && (
                <PromoBage desc={'New Course'} icon={newCourseIcon}/>
              )}
              
            </div>
            <div>
              {data.isOnPromo && (
                <PromoBage desc={data.promoDesc} icon={courseDiscountIcon}/>
                
              )}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h2 className="font-medium text-gray-900">{data.title}</h2>
        <p className="text-gray-700 font-semibold">Fee: <span>{data.price}</span></p>
        <p className="line-clamp-3 text-sm text-gray-600">{data.courseOverview}</p>

        <div className="flex gap-4">
          <button className="bg-black text-white px-4 py-2 rounded text-sm cursor-pointer">Apply Now</button>
          <Link
            to={`/courses/${data.id}`}
            className="text-sm font-medium text-primary transition-colors duration-300 hover:text-primary/80 flex items-center gap-1"
          >
            View details <CircleArrowOutUpRight size={'14'} />
          </Link>
        </div>
      </div>

      {/* Thumbnails */}
      {totalImages > 2 && showThumbnailNavigator && (
        <ScrollArea className="w-full">
          <div className="flex gap-2 px-1 pt-2 pb-2.5">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleImageChange(index)}
                className={cn(
                  "relative h-12 w-18 shrink-0 overflow-hidden rounded border transition-all duration-200 aspect-video",
                  activeIndex === index
                    ? "ring-2 ring-primary ring-offset-1"
                    : "opacity-70 hover:opacity-100"
                )}
                disabled={isTransitioning}
              >
                <img
                  src={image.thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  className={cn("object-cover", activeIndex !== index && "grayscale")}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="h-1.5" />
        </ScrollArea>
      )}
    </div>
  );
});

DetailSwapCard.displayName = "DetailSwapCard";
export default DetailSwapCard;
