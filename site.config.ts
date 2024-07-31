import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'dbc087389cad4869b0d1d5495a7f642d',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: "Het's Home",
  domain: 'hetnothate.com',
  author: 'Het',

  // open graph metadata (optional)
  description: "Het's dump ground",

  // social usernames (optional)
  // twitter: 'hetnothate',
  // github: 'het-25',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  // defaultPageIcon: null,      
  // defaultPageCover: null,
  // defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  // isPreviewImageSupportEnabled: ,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/hamster' : 'f6e59e0654b5484fb5a9c290cec2cabc',
    '/pet-projects' : '52b909580238408c98e74ae3bb363c5b',
    '/neuromorphic': '0685bc4330214a4492f860bcdebfbecc',
    '/geometric-dl': 'f37d53a1be5d4cbb977f7533f7b165e7',
    '/objective-mismatch': '2516f8155ab64945bd449eec3cf6b246',
    '/hamilton': '7e25def356954f4d9a6850a63c4fcab6',
    '/strokes': '16d1a7a8678047388013da7065d14b4c',
    '/carmy-is-not-okay': 'd8fc1feb7a154b76ad699cda6317ca02',
    '/war-of-ze-ratz': '61c2c123f13849dba50c32747a705f66',
    '/puzzles': 'fed557ec64eb43b783e0f92573574798',
    '/multiple-homes': '23395052040c408dbcc2b08198130e38'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
