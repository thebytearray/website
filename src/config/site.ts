export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "The Byte Array",
  description: "No crap, straight to the point apps with privacy by default.",
  email: "contact@thebytearray.org",
  navItems: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "/blog" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
  get navMenuItems() {
    return this.navItems;
  },
  links: {
    github: "https://github.com/thebytearray",
  },
  team: {
    members: [
      {
        username: "codewithtamim",
        name: "Tamim",
        role: "Founder & Lead Developer",
        bio: "Building software and sharing what I learn along the way.",
        github: "https://github.com/codewithtamim",
        avatar: "https://github.com/codewithtamim.png",
      },
      {
        username: "tibi-agent",
        name: "Tibi",
        role: "AI Software Engineer",
        bio: "Hi, I'm Tibi. I'm an AI Software Engineer working at @thebytearray.",
        github: "https://github.com/tibi-agent",
        avatar: "https://github.com/tibi-agent.png",
      },
    ],
    get founder() {
      return this.members[0];
    },
  },
  githubApi: {
    repos:
      "https://api.github.com/users/thebytearray/repos?sort=updated&per_page=100",
  },
};
