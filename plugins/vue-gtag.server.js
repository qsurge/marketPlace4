// import VueGtag, { trackRouter } from "vue-gtag-next";

// export default defineNuxtPlugin(({vueApp}) => {
//   const preloadLinks = [
//     {
//       rel: "preload",
//       as: "script",
//       href: `https://www.googletagmanager.com/gtag/js?id`,
//     },
//     {
//       rel: "preconnect",
//       href: "https://www.google-analytics.com/",
//     },
//   ];
//   console.log("nuxt-server",vueApp.config.globalProperties.$head);
//   console.log(this);
//   nuxtApp.vueApp.use(VueGtag, {
//     property: {
//       id: "G-2LMS6D5WM8",
//       disabled: true,
//     },
//   });
//   trackRouter(useRouter());
// });

// const vueGtag = ({ app, env }) => {

//     if (process.env.NODE_ENV === 'production') {
//       if (typeof app.head === 'function') {
//         console.error("We can't add the preload links if head is a function")
//       } else if (app.head) {
//         app.head.link = [...(app.head.link || []), ...preloadLinks]
//       } else {
//         app.head = {
//           link: preloadLinks,
//         }
//       }
//     }
//   }
const vueGtag = defineNuxtPlugin(({ app }) => {
  const preloadLinks = [
    {
      rel: "preload",
      as: "script",
      href: `https://www.googletagmanager.com/gtag/js?id=G-2LMS6D5WM8`,
    },
    {
      rel: "preconnect",
      href: "https://www.google-analytics.com/",
    },
  ];
  if (process.env.NODE_ENV === "production") {
    if (typeof app.head === "function") {
      console.error("We can't add the preload links if head is a function");
    } else if (app.head) {
      app.head.link.push(...preloadLinks);
    } else {
      app.head = {
        link: preloadLinks,
      };
    }
  } else {
    console.log("not server");
  }
});
export default vueGtag;
