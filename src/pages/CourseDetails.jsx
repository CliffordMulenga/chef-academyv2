import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import mockDb from '../data/mockDb';
import PageHero from '../components/PageHero';
import sectionImg from '../assets/food2.jpg';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area";
import NotSureHowToApplyCard from '@/components/NotSureHowToApplyCard';



const DEFAULT_PRODUCT = {
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

const CourseDetails = ({ onImageChange, showImageCounter = true, showDotIndicator = true, showThumbnailNavigator = true }) => {

  const { id } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const allCourses = [
    ...mockDb.courses.onlineCourses,
    ...mockDb.courses.cookingCourses,
  ];

  const course = allCourses.find(course => course.id === id);

  const images = course.images && course.images.length > 0 ? course.images : DEFAULT_PRODUCT.images;

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

  if (!course) {
    return (
      <div className="p-10 text-center text-red-600">
        <h2>Course not found!</h2>
      </div>
    );
  }

  return (
    <section>
      <PageHero image={sectionImg} title={course.title} desc={''} />

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
        <p className="text-gray-700 mb-6">{course.description}</p>

        {/* images or videos */}

        <div className='my-8'>
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
              <div className="absolute top-2 right-2 z-20 rounded-full bg-black/40 backdrop-blur-sm px-2 py-0.5 text-xs font-medium text-white border border-white/20">
                {activeIndex + 1} / {totalImages}
              </div>
            )}
          </div>

          {/* thumbnail slider */}

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

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Overview</h3>
            <p className="text-gray-600">{course.courseOverview}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Schedule</h3>
            <p className="text-gray-600">{course.courseSchedule}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Price</h3>
            <p className="text-gray-600">{course.price}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Duration</h3>
            <p className="text-gray-600">{course.duration}</p>
          </div>
          {course.location && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">{course.location}</p>
            </div>
          )}
          {course.studyType && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Study Type</h3>
              <p className="text-gray-600">{course.studyType}</p>
            </div>
          )}
        </div>

        {course.entryRequirements?.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Entry Requirements</h3>
            <ul className="list-disc list-inside text-gray-600">
              {course.entryRequirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        )}

        {course.certificate && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Certificate</h3>
            <p className="text-gray-600">{course.certificate}</p>
          </div>
        )}

        <button className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
          Apply Now
        </button>
      </section>


        <NotSureHowToApplyCard/>

    </section>

  );
};

export default CourseDetails;
