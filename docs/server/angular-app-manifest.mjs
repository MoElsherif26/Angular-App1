
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Angular-App1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Angular-App1"
  },
  {
    "renderMode": 2,
    "route": "/Angular-App1/about"
  },
  {
    "renderMode": 2,
    "route": "/Angular-App1/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Angular-App1/contact"
  }
],
  assets: {
    'index.csr.html': {size: 8382, hash: 'b431137431e0aca3b628c4e02b30dc2548722e605698c8ada7e45cf7d12c132b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1079, hash: 'b33aef00f901a17abc44f8527ed79ab722c9f252519481fb93b9afd548c22add', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 46798, hash: 'bd487f9cfc7058de9333cfd5f7bcf7f1da7d93f7c881b0f861fa6a8f732c2eba', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 46555, hash: 'ce7de8773bf14aefb2fd4a1e04529e7c8534dc04ec583b07263536ac45466c89', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 49261, hash: 'd59a9954594bae18e50a5430f5bd703c36e674a64ecc720628c048f0d00e9ee1', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 56451, hash: '2c7479088e8942e76263f055b7afabc80c3727741a5a03d4a8fdea9d15c0f893', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-IAXDWIRU.css': {size: 460173, hash: 'T/Vrs0fqGco', text: () => import('./assets-chunks/styles-IAXDWIRU_css.mjs').then(m => m.default)}
  },
};
