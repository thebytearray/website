import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-bold",
  variants: {
    color: {
      primary: "from-[#1890ff] to-[#40a9ff]",
      secondary: "from-[#2f54eb] to-[#597ef7]",
      success: "from-[#52c41a] to-[#73d13d]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#A1A1A1]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: ["primary", "secondary", "success", "foreground"],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});
