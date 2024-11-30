export const FontSizes = {
  pageTitle: "font-size-largest",
  pageTitle2: "font-size-largest-2",
  larger: "font-size-larger",
  large: "font-size-large",
  medium: "font-size-medium",
  small: "font-size-small",
  smaller: "font-size-smaller",
} as const

export type FontSize = (typeof FontSizes)[keyof typeof FontSizes];