export const sizes = {
  tablet: 480,
  desktop: 1280,
};

export const breakpoint = {
  tablet: `(min-width: ${sizes.tablet}px)`,
  desktop: `(min-width: ${sizes.desktop}px)`,
};

export const media = {
  tablet: `@media ${breakpoint.tablet}`,
  desktop: `@media ${breakpoint.desktop}`,
};
