// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
// import starlightBlog from "starlight-blog";
// import starlightLinksValidator from "starlight-links-validator";

const site = "https://wp-theme.github.io";
// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    starlight({
      title: "wp-theme",
      logo: {
        src: "./src/assets/themes.svg",
        alt: "Liferay Studio",
      },
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          href: "https://www.linkedin.com/in/maratibali",
        },

        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/maratib",
        },
      ],
      sidebar: [
        {
          label: "Projects",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Just-Blade", slug: "just-blade" },
            { label: "WP-Blade", slug: "wp-blade" },
            { label: "WP-Theme", slug: "wp-theme" },
          ],
        },
      ],
      // plugins: [
      //   starlightBlog({
      //     metrics: { readingTime: true, words: false },
      //     authors: {
      //       maratib: {
      //         name: "Maratib Ali",
      //         title: "Developer",
      //         picture: "/headshots/maratib.png",
      //         url: "https://linkedin.com/in/maratibali",
      //       },
      //     },
      //   }),
      //   starlightLinksValidator({
      //     errorOnFallbackPages: false,
      //     errorOnInconsistentLocale: true,
      //     exclude: [
      //       "/blog/**",
      //       "http://localhost:8080",
      //       "http://localhost:8080/**",
      //     ],
      //   }),
      // ],
      customCss: [
        "./src/assets/global.css",
        // ,"./src/assets/landing.css"
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
