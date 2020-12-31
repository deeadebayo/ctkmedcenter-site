const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\dev_code\\ctkmedcenter.com\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\dev_code\\ctkmedcenter.com\\src\\pages\\404.js"))),
  "component---src-pages-about-us-js": hot(preferDefault(require("C:\\dev_code\\ctkmedcenter.com\\src\\pages\\about-us.js"))),
  "component---src-pages-appointment-js": hot(preferDefault(require("C:\\dev_code\\ctkmedcenter.com\\src\\pages\\appointment.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("C:\\dev_code\\ctkmedcenter.com\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\dev_code\\ctkmedcenter.com\\src\\pages\\index.js"))),
  "component---src-pages-our-services-js": hot(preferDefault(require("C:\\dev_code\\ctkmedcenter.com\\src\\pages\\our-services.js")))
}

