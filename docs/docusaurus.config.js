/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: 'AIPM Researcher',
  tagline: 'The leading autonomous AI research agent',
  url: 'https://docs.gptr.dev',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  //deploymentBranch: 'master',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ResearchRAG',
  trailingSlash: false,
  projectName: 'gpt-researcher',
  themeConfig: {
    navbar: {
      title: 'AIPM Researcher',
      logo: {
        alt: 'AIPM Researcher',
        src: 'img/gptr-logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'welcome',
          position: 'left',
          label: '文档',
        },

        {to: 'blog', label: '研究', position: 'left'},
        {
          type: 'doc',
          docId: 'faq',
          position: 'left',
          label: '常问',
        },
        {
            href: 'mailto:ai.flyingwheel@gmail.com',
            position: 'left',
            label: '联系',
        },
        {
          href: 'https://github.com/ResearchRAG/aipm-researcher',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '社区',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/ResearchRAG/aipm-researcher',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ai_flyingwheel',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/theflywheel/',
            },
          ],
        },
        {
          title: '关于我们',
          items: [
            {
              label: '官网网站',
              href: 'https://theforage.cn',
            },
            {
              label: '联系我们',
              href: 'mailto:ai.flyingwheel@gmail.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AIPM Researcher.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ResearchRAG/aipm-researcher/tree/master/docs',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
        href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
        integrity: "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
        crossorigin: "anonymous",
    },
  ],

  plugins: [
    // ... Your other plugins.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        blogDir:"./blog/",
        language: ["zh"],
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],
};
