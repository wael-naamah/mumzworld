import { bodyFont, headingFont } from "@/src/theme/fonts";
import tokens from "@/src/theme/tokens";

export type Variant = 'heading' | 'body';
export type Size = keyof typeof bodyFont.size | keyof typeof headingFont.size;
export type Weight = keyof typeof bodyFont.weight;
export type Color = keyof typeof tokens.color;