import type { CSSProperties } from "react";

export interface StrokeTextProps {
  /** Heading copy rendered as measured SVG glyphs */
  text?: string;
  /** Color of the drawing outline */
  strokeColor?: string;
  /** Color that floods into the glyphs after the outline draws */
  fillColor?: string;
  strokeWidth?: number;
  drawDuration?: number;
  fillDelay?: number;
  stagger?: number;
  ease?: string;
  trigger?: "mount" | "hover" | "scroll" | "loop";
  fillMode?: "fade" | "wipe" | "none";
  wipeFrom?: "left" | "right" | "top" | "bottom";
  fontSize?: number;
  fontWeight?: number | string;
  fontFamily?: string;
  letterSpacing?: number;
  reverse?: boolean;
  strokeStyle?: "solid" | "dashed" | "dotted";
  dashLength?: number;
  marching?: boolean;
  hoverRedraw?: boolean;
  shadow?: boolean;
  shadowColor?: string;
  className?: string;
  style?: CSSProperties;
}

export default function StrokeText(props: StrokeTextProps): React.ReactElement;
