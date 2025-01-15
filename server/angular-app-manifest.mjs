
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://moelsherif26.github.io/Angular-App1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://moelsherif26.github.io/Angular-App1"
  },
  {
    "renderMode": 2,
    "route": "/https://moelsherif26.github.io/Angular-App1/about"
  },
  {
    "renderMode": 2,
    "route": "/https://moelsherif26.github.io/Angular-App1/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/https://moelsherif26.github.io/Angular-App1/contact"
  }
],
  assets: {
    'index.csr.html': {size: 8412, hash: '4b7ebbcc9e27d789f339d742ea4e5516b273d876b659b5855a0126cf0b073067', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1109, hash: 'eabcb37a6849c2c15ce0c935d8249ef3c5cc13468466c941c34a340fa98cede5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 45232, hash: 'c9fbb36b13be482681834331e18df5fd4dcf7a7cbf988db4b9ec3aea640ec9e0', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 45232, hash: 'c9fbb36b13be482681834331e18df5fd4dcf7a7cbf988db4b9ec3aea640ec9e0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 45232, hash: 'c9fbb36b13be482681834331e18df5fd4dcf7a7cbf988db4b9ec3aea640ec9e0', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 45232, hash: 'c9fbb36b13be482681834331e18df5fd4dcf7a7cbf988db4b9ec3aea640ec9e0', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-IAXDWIRU.css': {size: 460173, hash: 'T/Vrs0fqGco', text: () => import('./assets-chunks/styles-IAXDWIRU_css.mjs').then(m => m.default)}
  },
};
