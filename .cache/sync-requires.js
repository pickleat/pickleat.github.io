const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/Andy/Desktop/portfolio/pickleat.github.io/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/Andy/Desktop/portfolio/pickleat.github.io/src/templates/blog-post.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/Andy/Desktop/portfolio/pickleat.github.io/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/Andy/Desktop/portfolio/pickleat.github.io/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Andy/Desktop/portfolio/pickleat.github.io/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/Andy/Desktop/portfolio/pickleat.github.io/src/pages/projects.js")))
}

