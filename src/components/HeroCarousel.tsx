"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { getBlurPlaceholder } from "@/lib/blur-placeholders";
import RotatingText from "./RotatingText";
import StrokeText from "./StrokeText";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Eye,
  Target,
} from "lucide-react";

interface HeroSlide {
  src: string;
  alt: string;
  blurCategory: "clinical" | "warm" | "green";
  /** Custom object-position for the image (e.g., "center top", "center center") */
  objectPosition?: string;
  /** Custom gradient overlay for text readability */
  gradientOverlay?: string;
}

interface HeroCarouselProps {
  /** Array of 3 hero slides */
  slides: HeroSlide[];
  /** Auto-rotate interval in milliseconds */
  interval?: number;
  /** Alt text for the hero */
  alt: string;
  /** Priority loading for first image */
  priority?: boolean;
  /** Additional className */
  className?: string;
}

// Text content that stays the same across all slides
const HERO_CONTENT = {
  trustBadge: "🛡 Trusted Healthcare Partner",
  headingLine1: "Advancing Healthcare,",
  headingLine2: "Ethically.",
  description:
    "Delivering premium, research-driven pharmaceutical solutions backed by our promise of Advanced • Verified • Quality — where trust meets scientific excellence.",
  primaryCTA: { label: "Discover Averiq", href: "/about" },
  secondaryCTA: { label: "Watch Our Story", href: "#" },
  cards: [
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be a trusted and leading name in the Indian pharmaceutical sector, recognized for our ethical standards, premium product quality, and diverse multi-specialty healthcare offerings.",
      iconBg: "bg-gradient-to-br from-primary-600 to-primary-700",
    },
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To continuously expand our therapeutic reach by introducing scientifically backed formulations across various medical disciplines, ensuring that healthcare professionals have access to the best possible treatments for their patients.",
      iconBg: "bg-gradient-to-br from-accent-500 to-accent-600",
    },
  ],
};

// Vision/Mission Card - matches About page design exactly, but more compact for hero
function VisionMissionCard({
  card,
  delay,
  animState,
}: {
  card: { icon: React.ElementType; title: string; description: string; iconBg: string };
  delay: string;
  animState: boolean;
}) {
  return (
    <div
      className={cn(
        "h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-soft",
        animState
          ? "animate-fade-in-up opacity-100"
          : "opacity-0 translate-y-4"
      )}
      style={{ transitionDelay: delay }}
    >
      <span className={cn("inline-flex h-10 w-10 items-center justify-center rounded-lg shadow-md", card.iconBg)}>
        <card.icon className="h-5 w-5 text-white" />
      </span>
      <h2 className="mt-4 font-display text-xl font-bold text-primary-900">
        {card.title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {card.description}
      </p>
    </div>
  );
}

export function HeroCarousel({
  slides,
  interval = 6000,
  alt,
  priority = true,
  className,
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef(true);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Animation states for text elements
  const [animStates, setAnimStates] = useState({
    badge: false,
    heading1: false,
    heading2: false,
    underline: false,
    description: false,
    primaryCTA: false,
    secondaryCTA: false,
    card1: false,
    card2: false,
  });

  // Trigger animations for current slide
  const triggerAnimations = useCallback(() => {
    // Reset all
    setAnimStates({
      badge: false,
      heading1: false,
      heading2: false,
      underline: false,
      description: false,
      primaryCTA: false,
      secondaryCTA: false,
      card1: false,
      card2: false,
    });

    // Staggered animation sequence
    const sequence = [
      { key: "badge", delay: 0 },
      { key: "heading1", delay: 100 },
      { key: "heading2", delay: 200 },
      { key: "underline", delay: 300 },
      { key: "description", delay: 400 },
      { key: "primaryCTA", delay: 500 },
      { key: "secondaryCTA", delay: 550 },
      { key: "card1", delay: 600 },
      { key: "card2", delay: 650 },
    ];

    sequence.forEach(({ key, delay }) => {
      const timeout = setTimeout(() => {
        setAnimStates((prev) => ({ ...prev, [key]: true }));
      }, delay);
    });
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    isMountedRef.current = true;

    const rotate = () => {
      if (!isMountedRef.current) return;
      setIsTransitioning(true);
      setIsAnimating(true);

      setTimeout(() => {
        if (!isMountedRef.current) return;
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
        // Trigger new animations after transition
        setTimeout(() => {
          if (!isMountedRef.current) return;
          triggerAnimations();
        }, 50);
      }, 300);
    };

    intervalRef.current = setInterval(rotate, interval);

    return () => {
      isMountedRef.current = false;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slides.length, interval, triggerAnimations]);

  // Trigger initial animations
  useEffect(() => {
    const timeout = setTimeout(() => {
      triggerAnimations();
    }, 100);
    return () => clearTimeout(timeout);
  }, [triggerAnimations]);

  // Pause on hover
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (!intervalRef.current && isMountedRef.current) {
      const rotate = () => {
        if (!isMountedRef.current) return;
        setIsTransitioning(true);
        setIsAnimating(true);
        setTimeout(() => {
          if (!isMountedRef.current) return;
          setCurrentIndex((prev) => (prev + 1) % slides.length);
          setIsTransitioning(false);
          setTimeout(() => {
            if (!isMountedRef.current) return;
            triggerAnimations();
          }, 50);
        }, 300);
      };
      intervalRef.current = setInterval(rotate, interval);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Touch swipe support
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const touchEnd = e.changedTouches[0];
    const deltaX = touchEnd.clientX - touchStartRef.current.x;
    const deltaY = touchEnd.clientY - touchStartRef.current.y;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        goToPrev();
      } else {
        goToNext();
      }
    }
    touchStartRef.current = null;
  };

  const goToPrev = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => {
      if (!isMountedRef.current) return;
      triggerAnimations();
    }, 350);
    setTimeout(() => {
      if (!intervalRef.current && isMountedRef.current) {
        const rotate = () => {
          if (!isMountedRef.current) return;
          setIsTransitioning(true);
          setTimeout(() => {
            if (!isMountedRef.current) return;
            setCurrentIndex((prev) => (prev + 1) % slides.length);
            setIsTransitioning(false);
            setTimeout(() => triggerAnimations(), 50);
          }, 300);
        };
        intervalRef.current = setInterval(rotate, interval);
      }
    }, 400);
  };

  const goToNext = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => {
      if (!isMountedRef.current) return;
      triggerAnimations();
    }, 350);
    setTimeout(() => {
      if (!intervalRef.current && isMountedRef.current) {
        const rotate = () => {
          if (!isMountedRef.current) return;
          setIsTransitioning(true);
          setTimeout(() => {
            if (!isMountedRef.current) return;
            setCurrentIndex((prev) => (prev + 1) % slides.length);
            setIsTransitioning(false);
            setTimeout(() => triggerAnimations(), 50);
          }, 300);
        };
        intervalRef.current = setInterval(rotate, interval);
      }
    }, 400);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => {
      if (!isMountedRef.current) return;
      triggerAnimations();
    }, 350);
    setTimeout(() => {
      if (!intervalRef.current && isMountedRef.current) {
        const rotate = () => {
          if (!isMountedRef.current) return;
          setIsTransitioning(true);
          setTimeout(() => {
            if (!isMountedRef.current) return;
            setCurrentIndex((prev) => (prev + 1) % slides.length);
            setIsTransitioning(false);
            setTimeout(() => triggerAnimations(), 50);
          }, 300);
        };
        intervalRef.current = setInterval(rotate, interval);
      }
    }, 400);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div
      className={cn("relative overflow-hidden min-h-[100svh]", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}

    >
      {/* Background Slides */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + slides.length) % slides.length;
          const isNext = index === (currentIndex + 1) % slides.length;

          let transform = "translateX(100%)";
          let opacity = 0;
          let zIndex = 0;

          if (isActive) {
            transform = "translateX(0)";
            opacity = 1;
            zIndex = 2;
          } else if (isPrev) {
            transform = "translateX(-100%)";
            opacity = 0;
            zIndex = 1;
          } else if (isNext) {
            transform = "translateX(100%)";
            opacity = 0;
            zIndex = 1;
          }

          const blurDataURL = getBlurPlaceholder(slide.blurCategory);

          return (
            <div
              key={slide.src}
              className="absolute inset-0"
              style={{
                transform,
                opacity,
                zIndex,
                transition: isTransitioning
                  ? "transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 500ms ease"
                  : "none",
              }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={priority && index === 0}
                placeholder="blur"
                blurDataURL={blurDataURL}
                sizes="(max-width: 1023px) 100vw, 50vw"
                className={cn("object-cover", slide.objectPosition ? `object-[${slide.objectPosition}]` : "")}
                quality={90}
              />
              {/* Per-slide gradient overlay for text readability */}
              {slide.gradientOverlay && (
                <div className={cn("absolute inset-0", slide.gradientOverlay)} />
              )}
            </div>
          );
        })}

        {/* Each slide carries its own light wash (see the `gradientOverlay` prop) */}

      </div>

      {/* Decorative Healthcare Graphics */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
        <div className="absolute top-1/4 right-1/6 w-32 h-32 border-2 border-primary-300/30 rounded-full animate-pulse-slow" />
        <div className="absolute top-3/5 right-1/8 w-24 h-24 border-2 border-accent-300/30 rounded-[50%] animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/5 w-20 h-20 border-2 border-primary-300/20 rounded-lg animate-spin-slow" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 flex items-start pb-6 pt-16 sm:min-h-[calc(100svh-5rem)] sm:items-center sm:pb-0 sm:pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:items-start w-full">
                      {/* Left Content */}
                                            <div className="flex-1 max-w-2xl mx-auto lg:mx-0 text-left mt-0 sm:mt-10 lg:mt-14">
                                    {/* Trust Badge */}
                                    <div
                                      className={cn(
                                        "mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur border border-primary-200 text-sm font-semibold text-primary-800",
                                        animStates.badge
                                          ? "animate-fade-in-up opacity-100"
                                          : "opacity-0 translate-y-4"
                                      )}
                                      style={{ transitionDelay: animStates.badge ? "0ms" : "0ms" }}
                                    >
                                      <span className="text-lg">🛡</span>
                                      Trusted Healthcare Partner
                                    </div>

              {/* Heading */}
                            <div className="mt-6">
                              {/* "Advancing Healthcare," line */}
                              <div
                                className={cn(
                                  "font-manrope text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight",
                                  animStates.heading1
                                    ? "animate-fade-in-up opacity-100"
                                    : "opacity-0 translate-y-4"
                                )}
                                style={{ transitionDelay: animStates.heading1 ? "0ms" : "0ms" }}
                              >
                                <StrokeText
                                  text="Advancing Healthcare,"
                                  strokeColor="#0868F5"
                                  fillColor="currentColor"
                                  strokeWidth={2}
                                  drawDuration={1.3}
                                  fillDelay={0.2}
                                  stagger={0.035}
                                  ease="power2.out"
                                  trigger="mount"
                                  fillMode="wipe"
                                  wipeFrom="left"
                                  fontSize={72}
                                  fontWeight={800}
                                  letterSpacing={-5}
                                  className="text-primary-950"
                                />
                              </div>
                              {/* "Ethically." line with animated gradient */}
                              <div
                                className={cn(
                                  "font-manrope text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight",
                                  animStates.heading2
                                    ? "animate-fade-in-up opacity-100"
                                    : "opacity-0 translate-y-4"
                                )}
                                style={{ transitionDelay: animStates.heading2 ? "200ms" : "0ms" }}
                              >
                                <span className="relative inline-block">
                                  <span className="bg-gradient-to-r from-[#20D84A] via-[#16CDA5] to-[#0868F5] bg-clip-text text-transparent animate-gradient-shift">
                                    Ethically.
                                  </span>
                                  {/* Blue underline draw animation */}
                                  <span
                                    className={cn(
                                      "absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-primary-700",
                                      animStates.underline ? "animate-draw-underline" : "w-0 opacity-0"
                                    )}
                                    style={{
                                      transitionDelay: animStates.underline ? "300ms" : "0ms",
                                    }}
                                  />
                                </span>
                              </div>
                            </div>

              {/* Rotating specialty line */}
              <div
                className={cn(
                  "mt-5 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm font-bold text-primary-700 sm:text-base",
                  animStates.description
                    ? "animate-fade-in-up opacity-100"
                    : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: animStates.description ? "350ms" : "0ms" }}
              >
                <span>Specialised in</span>
                <RotatingText
                  texts={["Dermatology", "Trichology", "Dental Care", "Women's Health"]}
                  effect="slide"
                  direction="up"
                  highlight
                  highlightColor="#0868F5"
                  rotationInterval={2200}
                  staggerDuration={0.02}
                  staggerFrom="last"
                  splitLevelClassName="overflow-hidden pb-0.5"
                  pauseOnHover
                />
              </div>

              {/* Description */}
              <p
                className={cn(
                  "mt-6 text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-primary-800 max-w-xl",
                  animStates.description
                    ? "animate-fade-in-up opacity-100"
                    : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: animStates.description ? "400ms" : "0ms" }}
              >
                Delivering premium, research-driven pharmaceutical solutions
                {" "}<br className="hidden sm:inline" />
                backed by our promise of
                {" "}<strong className="text-primary-900">Advanced • Verified • Quality</strong>{" "}
                — where trust meets scientific excellence.
              </p>

              {/* CTA Buttons */}
              <div
                className={cn(
                  "mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4",
                  animStates.primaryCTA
                    ? "animate-fade-in-up opacity-100"
                    : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: animStates.primaryCTA ? "500ms" : "0ms" }}
              >
                <a
                  href="/about"
                  className={cn(
                    "inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-xl",
                    animStates.primaryCTA
                      ? "animate-fade-in-up opacity-100"
                      : "opacity-0 translate-y-4"
                  )}
                  style={{
                    transitionDelay: animStates.primaryCTA ? "500ms" : "0ms",
                  }}
                >
                  Discover Averiq
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#"
                  className={cn(
                    "inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-primary-600 text-primary-700 font-bold text-sm sm:text-base bg-white/80 backdrop-blur transition-all hover:bg-primary-50 hover:border-primary-700 hover:text-primary-800",
                    animStates.secondaryCTA
                      ? "animate-fade-in-up opacity-100"
                      : "opacity-0 translate-y-4"
                  )}
                  style={{
                    transitionDelay: animStates.secondaryCTA ? "550ms" : "0ms",
                  }}
                >
                  <Play className="h-5 w-5" />
                  Watch Our Story
                </a>
              </div>

              {/* Vision & Mission Cards */}
                            <div
                              className={cn(
                                "mt-12 grid gap-6 sm:grid-cols-2",
                                animStates.card1
                                  ? "animate-fade-in-up opacity-100"
                                  : "opacity-0 translate-y-4"
                              )}
                              style={{ transitionDelay: animStates.card1 ? "600ms" : "0ms" }}
                            >
                              {HERO_CONTENT.cards.map((card, idx) => (
                                <VisionMissionCard
                                  key={card.title}
                                  card={card}
                                  delay={idx === 1 && animStates.card2 ? "650ms" : "0ms"}
                                  animState={idx === 1 ? animStates.card2 : animStates.card1}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Carousel Controls */}
      <div className="relative z-30 pointer-events-none lg:absolute lg:inset-0">
        {/* Previous Arrow */}
        <button
          onClick={() => {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
            setIsTransitioning(true);
            setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
            setTimeout(() => triggerAnimations(), 350);
            setTimeout(() => {
              if (!intervalRef.current && isMountedRef.current) {
                const rotate = () => {
                  if (!isMountedRef.current) return;
                  setIsTransitioning(true);
                  setTimeout(() => {
                    if (!isMountedRef.current) return;
                    setCurrentIndex((prev) => (prev + 1) % slides.length);
                    setIsTransitioning(false);
                    setTimeout(() => triggerAnimations(), 50);
                  }, 300);
                };
                intervalRef.current = setInterval(rotate, interval);
              }
            }, 400);
          }}
          className={cn(
            "absolute left-6 top-1/2 -translate-y-1/2 z-40 pointer-events-auto",
            "hidden h-14 w-14 items-center justify-center rounded-full bg-white/90 backdrop-blur border border-slate-200 shadow-lg text-primary-900 transition-all hover:bg-white hover:shadow-xl hover:scale-105 lg:inline-flex"
          )}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>

        {/* Next Arrow */}
        <button
          onClick={() => {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
            setIsTransitioning(true);
            setCurrentIndex((prev) => (prev + 1) % slides.length);
            setTimeout(() => triggerAnimations(), 350);
            setTimeout(() => {
              if (!intervalRef.current && isMountedRef.current) {
                const rotate = () => {
                  if (!isMountedRef.current) return;
                  setIsTransitioning(true);
                  setTimeout(() => {
                    if (!isMountedRef.current) return;
                    setCurrentIndex((prev) => (prev + 1) % slides.length);
                    setIsTransitioning(false);
                    setTimeout(() => triggerAnimations(), 50);
                  }, 300);
                };
                intervalRef.current = setInterval(rotate, interval);
              }
            }, 400);
          }}
          className={cn(
            "absolute right-6 top-1/2 -translate-y-1/2 z-40 pointer-events-auto",
            "hidden h-14 w-14 items-center justify-center rounded-full bg-white/90 backdrop-blur border border-slate-200 shadow-lg text-primary-900 transition-all hover:bg-white hover:shadow-xl hover:scale-105 lg:inline-flex"
          )}
          aria-label="Next slide"
        >
          <ChevronRight className="h-7 w-7" />
        </button>

        {/* Pagination Dots */}
        <div className="relative mx-auto mb-8 flex justify-center gap-3 pointer-events-auto lg:absolute lg:bottom-8 lg:left-1/2 lg:mx-0 lg:mb-0 lg:-translate-x-1/2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "relative h-2.5 w-2.5 rounded-full transition-all duration-300 pointer-events-auto",
                index === currentIndex
                  ? "bg-primary-600 w-8 shadow-lg shadow-primary-500/50"
                  : "bg-slate-300 hover:bg-slate-400 hover:scale-125"
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}