export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "The Byte Array",
  description: "Building software that actually works. We build tools, libraries, and applications with care.",
  email: "contact@thebytearray.org",
  navItems: [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Team",
      href: "#team",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  navMenuItems: [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Team",
      href: "#team",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  links: {
    github: "https://github.com/thebytearray",
  },
  team: {
    founder: {
      username: "codewithtamim",
      name: "Tamim",
      role: "Founder & Lead Developer",
      bio: "Building software and sharing what I learn along the way.",
      github: "https://github.com/codewithtamim",
      avatar: "https://github.com/codewithtamim.png",
    },
  },
  githubApi: {
    repos: "https://api.github.com/users/thebytearray/repos?sort=updated&per_page=100",
  },
};
