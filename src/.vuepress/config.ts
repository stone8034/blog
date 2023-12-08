import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/", // 和git仓库名称相同     gitpage地址  stone8034.github.io/仓库名/   【stone8034.github.io/blog/】
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "小石的博客",
      description: "小石的博客",
    },
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
