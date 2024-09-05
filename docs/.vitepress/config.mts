import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tony Xiao's Weird Portfolio",
  description: "6.1040 Fall 2024",
  base: "/portfoliio-tony/",
  // TODO: add your base here; this should be your repo name!
  // base: "/<REPO_NAME>/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blogs", link: "/blogs" },
      { text: "About Me", link: "/about"}
    ],

    sidebar: [
      {
        text: "Blogs",
        link: "/blogs",
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/tonyx1107/portfoliio-tony" }],
  },
});
