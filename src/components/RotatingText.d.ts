import type { CSSProperties, ForwardRefExoticComponent, MouseEventHandler, RefAttributes } from "react";

export interface RotatingTextHandle {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

export interface RotatingTextProps {
  /** Texts to rotate through */
  texts: string[];
  effect?: "slide" | "flip" | "blur" | "scale" | "drop";
  direction?: "up" | "down";
  highlight?: boolean;
  highlightColor?: string;
  rotationInterval?: number;
  blur?: number;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | "random" | number;
  splitBy?: "characters" | "words" | "lines" | string;
  loop?: boolean;
  auto?: boolean;
  pauseOnHover?: boolean;
  onNext?: (index: number) => void;
  onMouseEnter?: MouseEventHandler<HTMLSpanElement>;
  onMouseLeave?: MouseEventHandler<HTMLSpanElement>;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
  className?: string;
  style?: CSSProperties;
  animatePresenceMode?: "wait" | "sync" | "popLayout";
  animatePresenceInitial?: boolean;
  transition?: Record<string, unknown>;
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
  exit?: Record<string, unknown>;
}

declare const RotatingText: ForwardRefExoticComponent<
  RotatingTextProps & RefAttributes<RotatingTextHandle>
>;

export default RotatingText;
