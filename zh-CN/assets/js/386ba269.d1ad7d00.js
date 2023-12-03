"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1255],{49522:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var s=d(85893),i=d(11151),r=d(10869);const t={sidebar_position:1,id:"docs"},c="\ud83d\udce6 plugin-content-docs",o={id:"docusaurus-mdx/plugin-contents/docs",title:"\ud83d\udce6 plugin-content-docs",description:"Provides the docs functionality and is the default docs plugin for Docusaurus.",source:"@site/docs/docusaurus-mdx/plugin-contents/docs.mdx",sourceDirName:"docusaurus-mdx/plugin-contents",slug:"/docusaurus-mdx/plugin-contents/docs",permalink:"/site/zh-CN/docs/docusaurus-mdx/plugin-contents/docs",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"docs"},sidebar:"docusaurusSidebar",previous:{title:"Plugin Contents",permalink:"/site/zh-CN/docs/docusaurus-mdx/plugin-contents/intro"},next:{title:"\ud83d\udce6 plugin-content-blog",permalink:"/site/zh-CN/docs/docusaurus-mdx/plugin-contents/blog"}},l={},a=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Types",id:"types",level:3},{value:"<code>EditUrlFunction</code>",id:"EditUrlFunction",level:4},{value:"<code>PrefixParser</code>",id:"PrefixParser",level:4},{value:"<code>SidebarGenerator</code>",id:"SidebarGenerator",level:4},{value:"<code>VersionsConfig</code>",id:"VersionsConfig",level:4},{value:"Example configuration",id:"ex-config",level:3},{value:"Markdown front matter",id:"markdown-front-matter",level:2},{value:"i18n",id:"i18n",level:2},{value:"Translation files location",id:"translation-files-location",level:3},{value:"Example file-system structure",id:"example-file-system-structure",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"-plugin-content-docs",children:"\ud83d\udce6 plugin-content-docs"}),"\n","\n","\n",(0,s.jsx)(n.p,{children:"Provides the docs functionality and is the default docs plugin for Docusaurus."}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install --save @docusaurus/plugin-content-docs\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["If you use the preset ",(0,s.jsx)(n.code,{children:"@docusaurus/preset-classic"}),", you don't need to install this plugin as a dependency."]}),(0,s.jsx)(n.p,{children:"You can configure this plugin through the preset options."})]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,s.jsx)(r.Z,{children:(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"path"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'docs'"})}),(0,s.jsx)(n.td,{children:"Path to the docs content directory on the file system, relative to site directory."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"editUrl"})}),(0,s.jsx)(n.td,{children:(0,s.jsxs)("code",{children:["string | ",(0,s.jsx)("a",{href:"#EditUrlFunction",children:"EditUrlFunction"})]})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsxs)(n.td,{children:["Base URL to edit your site. The final URL is computed by ",(0,s.jsx)(n.code,{children:"editUrl + relativeDocPath"}),". Using a function allows more nuanced control for each file. Omitting this variable entirely will disable edit links."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"editLocalizedFiles"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsxs)(n.td,{children:["The edit URL will target the localized file, instead of the original unlocalized file. Ignored when ",(0,s.jsx)(n.code,{children:"editUrl"})," is a function."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"editCurrentVersion"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsxs)(n.td,{children:["The edit URL will always target the current version doc instead of older versions. Ignored when ",(0,s.jsx)(n.code,{children:"editUrl"})," is a function."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"routeBasePath"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'docs'"})}),(0,s.jsxs)(n.td,{children:["URL route for the docs section of your site. ",(0,s.jsx)(n.strong,{children:"DO NOT"})," include a trailing slash. Use ",(0,s.jsx)(n.code,{children:"/"})," for shipping docs without base path."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"tagsBasePath"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'tags'"})}),(0,s.jsxs)(n.td,{children:["URL route for the tags list page of your site. It is prepended to the ",(0,s.jsx)(n.code,{children:"routeBasePath"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"include"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string[]"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"['**/*.{md,mdx}']"})}),(0,s.jsx)(n.td,{children:"Array of glob patterns matching Markdown files to be built, relative to the content path."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"exclude"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string[]"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"See example configuration"})}),(0,s.jsxs)(n.td,{children:["Array of glob patterns matching Markdown files to be excluded. Serves as refinement based on the ",(0,s.jsx)(n.code,{children:"include"})," option."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sidebarPath"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"false | string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsxs)(n.td,{children:["Path to sidebar configuration. Use ",(0,s.jsx)(n.code,{children:"false"})," to disable sidebars, or ",(0,s.jsx)(n.code,{children:"undefined"})," to create a fully autogenerated sidebar."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sidebarCollapsible"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"true"})}),(0,s.jsxs)(n.td,{children:["Whether sidebar categories are collapsible by default. See also ",(0,s.jsx)(n.code,{children:"Collapsible categories"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sidebarCollapsed"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"true"})}),(0,s.jsxs)(n.td,{children:["Whether sidebar categories are collapsed by default. See also ",(0,s.jsx)(n.code,{children:"Expanded categories by default"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sidebarItemsGenerator"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("a",{href:"#SidebarGenerator",children:(0,s.jsx)("code",{children:"SidebarGenerator"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"Omitted"})}),(0,s.jsxs)(n.td,{children:["Function used to replace the sidebar items of type ",(0,s.jsx)(n.code,{children:"'autogenerated'"})," with real sidebar items (docs, categories, links...). See also ",(0,s.jsx)(n.code,{children:"Customize the sidebar items generator"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"numberPrefixParser"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)("code",{children:"boolean |"})," ",(0,s.jsx)("a",{href:"#PrefixParser",children:(0,s.jsx)("code",{children:"PrefixParser"})})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"Omitted"})}),(0,s.jsxs)(n.td,{children:["Custom parsing logic to extract number prefixes from file names. Use ",(0,s.jsx)(n.code,{children:"false"})," to disable this behavior and leave the docs untouched, and ",(0,s.jsx)(n.code,{children:"true"})," to use the default parser. See also ",(0,s.jsx)(n.code,{children:"Using number prefixes"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"docsRootComponent"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'@theme/DocsRoot'"})}),(0,s.jsx)(n.td,{children:"Parent component of all the docs plugin pages (including all versions). Stays mounted when navigation between docs pages and versions."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"docVersionRootComponent"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'@theme/DocVersionLayout'"})}),(0,s.jsx)(n.td,{children:"Parent component of all docs pages of an individual version (doc pages with sidebars, tags pages). Stays mounted when navigation between pages of that specific version."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"docRootComponent"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'@theme/DocPage'"})}),(0,s.jsx)(n.td,{children:"Parent component of all doc pages with sidebars (regular docs pages, category generated index pages). Stays mounted when navigation between such pages."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"docItemComponent"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'@theme/DocItem'"})}),(0,s.jsx)(n.td,{children:"Main doc container, with TOC, pagination, etc."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"docTagsListComponent"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'@theme/DocTagsListPage'"})}),(0,s.jsx)(n.td,{children:"Root component of the tags list page"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"docTagDocListComponent"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'@theme/DocTagDocListPage'"})}),(0,s.jsx)(n.td,{children:'Root component of the "docs containing tag X" page.'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"docCategoryGeneratedIndexComponent"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'@theme/DocCategoryGeneratedIndexPage'"})}),(0,s.jsx)(n.td,{children:"Root component of the generated category index page."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"remarkPlugins"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"any[]"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"[]"})}),(0,s.jsx)(n.td,{children:"Remark plugins passed to MDX."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"rehypePlugins"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"any[]"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"[]"})}),(0,s.jsx)(n.td,{children:"Rehype plugins passed to MDX."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"beforeDefaultRemarkPlugins"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"any[]"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"[]"})}),(0,s.jsx)(n.td,{children:"Custom Remark plugins passed to MDX before the default Docusaurus Remark plugins."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"beforeDefaultRehypePlugins"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"any[]"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"[]"})}),(0,s.jsx)(n.td,{children:"Custom Rehype plugins passed to MDX before the default Docusaurus Rehype plugins."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"showLastUpdateAuthor"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"Whether to display the author who last updated the doc."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"showLastUpdateTime"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"Whether to display the last date the doc was updated."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"breadcrumbs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"true"})}),(0,s.jsx)(n.td,{children:"Enable or disable the breadcrumbs on doc pages."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"disableVersioning"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsxs)(n.td,{children:["Explicitly disable versioning even when multiple versions exist. This will make the site only include the current version. Will error if ",(0,s.jsx)(n.code,{children:"includeCurrentVersion: false"})," and ",(0,s.jsx)(n.code,{children:"disableVersioning: true"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"includeCurrentVersion"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"true"})}),(0,s.jsx)(n.td,{children:"Include the current version of your docs."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"lastVersion"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["First version in ",(0,s.jsx)(n.code,{children:"versions.json"})]}),(0,s.jsx)(n.td,{children:"The version navigated to in priority and displayed by default for docs navbar items."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"onlyIncludeVersions"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string[]"})}),(0,s.jsx)(n.td,{children:"All versions available"}),(0,s.jsx)(n.td,{children:"Only include a subset of all available versions."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"versions"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("a",{href:"#VersionsConfig",children:(0,s.jsx)("code",{children:"VersionsConfig"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"{}"})}),(0,s.jsx)(n.td,{children:"Independent customization of each version's properties."})]})]})]})}),"\n",(0,s.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,s.jsx)(n.h4,{id:"EditUrlFunction",children:(0,s.jsx)(n.code,{children:"EditUrlFunction"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type EditUrlFunction = (params: {\n  version: string;\n  versionDocsDirPath: string;\n  docPath: string;\n  permalink: string;\n  locale: string;\n}) => string | undefined;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"PrefixParser",children:(0,s.jsx)(n.code,{children:"PrefixParser"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type PrefixParser = (filename: string) => {\n  filename: string;\n  numberPrefix?: number;\n};\n"})}),"\n",(0,s.jsx)(n.h4,{id:"SidebarGenerator",children:(0,s.jsx)(n.code,{children:"SidebarGenerator"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type SidebarGenerator = (generatorArgs: {\n  /** The sidebar item with type \"autogenerated\" to be transformed. */\n  item: {type: 'autogenerated'; dirName: string};\n  /** Useful metadata for the version this sidebar belongs to. */\n  version: {contentPath: string; versionName: string};\n  /** All the docs of that version (unfiltered). */\n  docs: {\n    id: string;\n    title: string;\n    frontMatter: DocFrontMatter & Record<string, unknown>;\n    source: string;\n    sourceDirName: string;\n    sidebarPosition?: number | undefined;\n  }[];\n  /** Number prefix parser configured for this plugin. */\n  numberPrefixParser: PrefixParser;\n  /** The default category index matcher which you can override. */\n  isCategoryIndex: CategoryIndexMatcher;\n  /**\n   * key is the path relative to the doc content directory, value is the\n   * category metadata file's content.\n   */\n  categoriesMetadata: {[filePath: string]: CategoryMetadata};\n  /**\n   * Useful to re-use/enhance the default sidebar generation logic from\n   * Docusaurus.\n   */\n  defaultSidebarItemsGenerator: SidebarGenerator;\n  // Returns an array of sidebar items \u2014 same as what you can declare in\n  // sidebars.js, except for shorthands. See https://docusaurus.io/docs/sidebar/items\n}) => Promise<SidebarItem[]>;\n\ntype CategoryIndexMatcher = (param: {\n  /** The file name, without extension */\n  fileName: string;\n  /**\n   * The list of directories, from lowest level to highest.\n   * If there's no dir name, directories is ['.']\n   */\n  directories: string[];\n  /** The extension, with a leading dot */\n  extension: string;\n}) => boolean;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"VersionsConfig",children:(0,s.jsx)(n.code,{children:"VersionsConfig"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type VersionConfig = {\n  /**\n   * The base path of the version, will be appended to `baseUrl` +\n   * `routeBasePath`.\n   */\n  path?: string;\n  /** The label of the version to be used in badges, dropdowns, etc. */\n  label?: string;\n  /** The banner to show at the top of a doc of that version. */\n  banner?: 'none' | 'unreleased' | 'unmaintained';\n  /** Show a badge with the version label at the top of each doc. */\n  badge?: boolean;\n  /** Prevents search engines from indexing this version */\n  noIndex?: boolean;\n  /** Add a custom class name to the <html> element of each doc */\n  className?: string;\n};\n\ntype VersionsConfig = {[versionName: string]: VersionConfig};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,s.jsx)(n.p,{children:"You can configure this plugin through preset options or plugin options."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"config-tabs",children:"// Preset Options: docs\n// Plugin Options: @docusaurus/plugin-content-docs\n\nconst config = {\n  path: 'docs',\n  breadcrumbs: true,\n  // Simple use-case: string editUrl\n  // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',\n  // Advanced use-case: functional editUrl\n  editUrl: ({versionDocsDirPath, docPath}) =>\n    `https://github.com/facebook/docusaurus/edit/main/website/${versionDocsDirPath}/${docPath}`,\n  editLocalizedFiles: false,\n  editCurrentVersion: false,\n  routeBasePath: 'docs',\n  include: ['**/*.md', '**/*.mdx'],\n  exclude: [\n    '**/_*.{js,jsx,ts,tsx,md,mdx}',\n    '**/_*/**',\n    '**/*.test.{js,jsx,ts,tsx}',\n    '**/__tests__/**',\n  ],\n  sidebarPath: 'sidebars.js',\n  async sidebarItemsGenerator({\n    defaultSidebarItemsGenerator,\n    numberPrefixParser,\n    item,\n    version,\n    docs,\n    isCategoryIndex,\n  }) {\n    // Use the provided data to generate a custom sidebar slice\n    return [\n      {type: 'doc', id: 'intro'},\n      {\n        type: 'category',\n        label: 'Tutorials',\n        items: [\n          {type: 'doc', id: 'tutorial1'},\n          {type: 'doc', id: 'tutorial2'},\n        ],\n      },\n    ];\n  },\n  numberPrefixParser(filename) {\n    // Implement your own logic to extract a potential number prefix\n    const numberPrefix = findNumberPrefix(filename);\n    // Prefix found: return it with the cleaned filename\n    if (numberPrefix) {\n      return {\n        numberPrefix,\n        filename: filename.replace(prefix, ''),\n      };\n    }\n    // No number prefix found\n    return {numberPrefix: undefined, filename};\n  },\n  docLayoutComponent: '@theme/DocPage',\n  docItemComponent: '@theme/DocItem',\n  remarkPlugins: [require('./my-remark-plugin')],\n  rehypePlugins: [],\n  beforeDefaultRemarkPlugins: [],\n  beforeDefaultRehypePlugins: [],\n  showLastUpdateAuthor: false,\n  showLastUpdateTime: false,\n  disableVersioning: false,\n  includeCurrentVersion: true,\n  lastVersion: undefined,\n  versions: {\n    current: {\n      label: 'Android SDK v2.0.0 (WIP)',\n      path: 'android-2.0.0',\n      banner: 'none',\n    },\n    '1.0.0': {\n      label: 'Android SDK v1.0.0',\n      path: 'android-1.0.0',\n      banner: 'unmaintained',\n    },\n  },\n  onlyIncludeVersions: ['current', '1.0.0', '2.0.0'],\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"markdown-front-matter",children:"Markdown front matter"}),"\n",(0,s.jsxs)(n.p,{children:["Markdown documents can use the following Markdown front matter metadata fields, enclosed by a line ",(0,s.jsx)(n.code,{children:"---"})," on either side."]}),"\n",(0,s.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,s.jsx)(r.Z,{children:(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"id"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"file path (including folders, without the extension)"}),(0,s.jsx)(n.td,{children:"A unique document ID."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"title"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["Markdown title or ",(0,s.jsx)(n.code,{children:"id"})]}),(0,s.jsx)(n.td,{children:"The text title of your document. Used for the page metadata and as a fallback value in multiple places (sidebar, next/previous buttons...). Automatically added at the top of your doc if it does not contain any Markdown title."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"pagination_label"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"sidebar_label"})," or ",(0,s.jsx)(n.code,{children:"title"})]}),(0,s.jsx)(n.td,{children:"The text used in the document next/previous buttons for this document."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sidebar_label"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"title"})}),(0,s.jsx)(n.td,{children:"The text shown in the document sidebar for this document."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sidebar_position"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{children:"Default ordering"}),(0,s.jsxs)(n.td,{children:["Controls the position of a doc inside the generated sidebar slice when using ",(0,s.jsx)(n.code,{children:"autogenerated"})," sidebar items. See also ",(0,s.jsx)(n.code,{children:"Autogenerated sidebar metadata"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sidebar_class_name"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:"Gives the corresponding sidebar label a special class name when using autogenerated sidebars."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sidebar_custom_props"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"object"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:"Assign custom props to the sidebar item referencing this doc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"displayed_sidebar"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:"Force the display of a given sidebar when browsing the current document. Read the multiple sidebars guide for details."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"hide_title"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"Whether to hide the title at the top of the doc. It only hides a title declared through the front matter, and have no effect on a Markdown title at the top of your document."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"hide_table_of_contents"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"Whether to hide the table of contents to the right."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"toc_min_heading_level"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"2"})}),(0,s.jsx)(n.td,{children:"The minimum heading level shown in the table of contents. Must be between 2 and 6 and lower or equal to the max value."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"toc_max_heading_level"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"3"})}),(0,s.jsx)(n.td,{children:"The max heading level shown in the table of contents. Must be between 2 and 6."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"pagination_next"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string | null"})}),(0,s.jsx)(n.td,{children:"Next doc in the sidebar"}),(0,s.jsxs)(n.td,{children:['The ID of the documentation you want the "Next" pagination to link to. Use ',(0,s.jsx)(n.code,{children:"null"}),' to disable showing "Next" for this page.']})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"pagination_prev"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string | null"})}),(0,s.jsx)(n.td,{children:"Previous doc in the sidebar"}),(0,s.jsxs)(n.td,{children:['The ID of the documentation you want the "Previous" pagination to link to. Use ',(0,s.jsx)(n.code,{children:"null"}),' to disable showing "Previous" for this page.']})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"parse_number_prefixes"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"numberPrefixParser"})," plugin option"]}),(0,s.jsxs)(n.td,{children:["Whether number prefix parsing is disabled on this doc. See also ",(0,s.jsx)(n.code,{children:"Using number prefixes"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"custom_edit_url"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string | null"})}),(0,s.jsxs)(n.td,{children:["Computed using the ",(0,s.jsx)(n.code,{children:"editUrl"})," plugin option"]}),(0,s.jsxs)(n.td,{children:["The URL for editing this document. Use ",(0,s.jsx)(n.code,{children:"null"}),' to disable showing "Edit this page" for this page.']})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"keywords"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string[]"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:"Keywords meta tag for the document page, for search engines."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"description"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"The first line of Markdown content"}),(0,s.jsxs)(n.td,{children:["The description of your document, which will become the ",(0,s.jsx)(n.code,{children:'<meta name="description" content="..."/>'})," and ",(0,s.jsx)(n.code,{children:'<meta property="og:description" content="..."/>'})," in ",(0,s.jsx)(n.code,{children:"<head>"}),", used by search engines."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"image"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:"Cover or thumbnail image that will be used when displaying the link to your post."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"slug"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"File path"}),(0,s.jsxs)(n.td,{children:["Allows to customize the document URL (",(0,s.jsx)(n.code,{children:"/<routeBasePath>/<slug>"}),"). Support multiple patterns: ",(0,s.jsx)(n.code,{children:"slug: my-doc"}),", ",(0,s.jsx)(n.code,{children:"slug: /my/path/myDoc"}),", ",(0,s.jsx)(n.code,{children:"slug: /"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"tags"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Tag[]"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsxs)(n.td,{children:["A list of strings or objects of two string fields ",(0,s.jsx)(n.code,{children:"label"})," and ",(0,s.jsx)(n.code,{children:"permalink"})," to tag to your docs."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"draft"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"Draft documents will only be available during development."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"unlisted"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:'Unlisted documents will be available in both development and production. They will be "hidden" in production, not indexed, excluded from sitemaps, and can only be accessed by users having a direct link.'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"last_update"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"FileChange"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsxs)(n.td,{children:["Allows overriding the last updated author and/or date. Date can be any ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse",children:"parsable date string"}),"."]})]})]})]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type Tag = string | {label: string; permalink: string};\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type FileChange = {date: string; author: string};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"---\nid: doc-markdown\ntitle: Docs Markdown Features\nhide_title: false\nhide_table_of_contents: false\nsidebar_label: Markdown\nsidebar_position: 3\npagination_label: Markdown features\ncustom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md\ndescription: How do I find you when I cannot solve this problem\nkeywords:\n  - docs\n  - docusaurus\nimage: https://i.imgur.com/mErPwqL.png\nslug: /myDoc\nlast_update:\n  date: 1/1/2000\n  author: custom author name\n---\n\n# Markdown Features\n\nMy Document Markdown content\n"})}),"\n",(0,s.jsx)(n.h2,{id:"i18n",children:"i18n"}),"\n",(0,s.jsx)(n.p,{children:"Read the i18n introduction first."}),"\n",(0,s.jsx)(n.h3,{id:"translation-files-location",children:"Translation files location"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Base path"}),": ",(0,s.jsx)(n.code,{children:"website/i18n/[locale]/docusaurus-plugin-content-docs"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Multi-instance path"}),": ",(0,s.jsx)(n.code,{children:"website/i18n/[locale]/docusaurus-plugin-content-docs-[pluginId]"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"JSON files"}),": extracted with ",(0,s.jsx)(n.code,{children:"docusaurus write-translations"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Markdown files"}),": ",(0,s.jsx)(n.code,{children:"website/i18n/[locale]/docusaurus-plugin-content-docs/[versionName]"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example-file-system-structure",children:"Example file-system structure"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"website/i18n/[locale]/docusaurus-plugin-content-docs\n\u2502\n\u2502 # translations for website/docs\n\u251c\u2500\u2500 current\n\u2502   \u251c\u2500\u2500 api\n\u2502   \u2502   \u2514\u2500\u2500 config.md\n\u2502   \u2514\u2500\u2500 getting-started.md\n\u251c\u2500\u2500 current.json\n\u2502\n\u2502 # translations for website/versioned_docs/version-1.0.0\n\u251c\u2500\u2500 version-1.0.0\n\u2502   \u251c\u2500\u2500 api\n\u2502   \u2502   \u2514\u2500\u2500 config.md\n\u2502   \u2514\u2500\u2500 getting-started.md\n\u2514\u2500\u2500 version-1.0.0.json\n"})})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},10869:(e,n,d)=>{d.d(n,{Z:()=>l});var s=d(67294),i=d(16550);const r={apiTable:"apiTable_e8hp"};var t=d(85893);function c(e,n){let{name:d,children:r}=e;const c=function(e){let n=e;for(;(0,s.isValidElement)(n);)[n]=s.Children.toArray(n.props.children);return n}(r),o=d?`${d}-${c}`:c,l=`#${o}`,a=(0,i.k6)();return(0,t.jsx)("tr",{id:o,tabIndex:0,ref:a.location.hash===l?n:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||a.push(l)},onKeyDown:e=>{"Enter"===e.key&&a.push(l)},children:r.props.children})}const o=s.forwardRef(c);function l(e){let{children:n,name:d}=e;const[i,c]=s.Children.toArray(n.props.children),l=(0,s.useRef)(null);(0,s.useEffect)((()=>{l.current?.focus()}),[l]);const a=s.Children.map(c.props.children,(e=>(0,t.jsx)(o,{name:d,ref:l,children:e})));return(0,t.jsxs)("table",{className:r.apiTable,children:[i,(0,t.jsx)("tbody",{children:a})]})}},11151:(e,n,d)=>{d.d(n,{Z:()=>c,a:()=>t});var s=d(67294);const i={},r=s.createContext(i);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);