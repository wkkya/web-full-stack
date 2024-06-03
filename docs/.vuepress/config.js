const baiduCode = require('./config/baiduCode.js'); // 百度统计hm码
const htmlModules = require('./config/htmlModules.js');


module.exports = {

  //theme: 'vdoing', // 使用依赖包主题
  theme: require.resolve('../../vdoing'), // 使用本地主题 (先将vdoing主题文件下载到本地：https://github.com/xugaoyi/vuepress-theme-vdoing)

  title: "Web全栈知识体系",
  description: 'Web开发全栈知识体系',
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/png/编程.png' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: 'vuepress,theme,blog,vdoing' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色

    // ['meta', { name: 'wwads-cn-verify', content: '6c4b761a28b734fe93831e3fb400ce87' }], // 广告相关，你可以去掉
    // ['script', { src: 'https://cdn.wwads.cn/js/makemoney.js', type: 'text/javascript' }], // 广告相关，你可以去掉
  ],

  // 主题配置
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '|'},
      {
        text: '面试', link: '/pagesTest/a2f161/', items: [
          { text: '面试', link: '/pagesTest/088c16/' },
          { text: '产品设计', link: '/pagesTest/088c16/' },
          { text: '算法', link: '/pagesTest/52d5c3/' },
          { text: 'JAVA', link: '/pagesTest/a2f161/' },
          { text: '框架&中间件', link: '/pagesTest/793dcb/' },
          { text: '数据库', link: '/pagesTest/2f674a/' },
          { text: '数据挖掘', link: '/pagesTest/2f674a/' },
          { text: '运维', link: '/pagesTest/33d574/' },
          { text: '架构设计', link: '/pagesTest/33d574/' },
          { text: '产品设计', link: '/pagesTest/088c16/' },
          { text: '项目管理', link: '/pagesTest/d0d7eb/' },
          { text: 'Markdown 中使用组件', link: '/pagesTest/197691/' },
          {
            text: '相关文章', items: [
              // { text: '使目录栏支持h2~h6标题', link: '/pagesTest/8dfab5/' },
              // { text: '如何让你的笔记更有表现力', link: '/pagesTest/dd027d/' },
              // { text: '批量操作front matter工具', link: '/pagesTest/2b8e22/' },
              // { text: '部署', link: '/pagesTest/0fc1d2/' },
              // { text: '关于写文章和H1标题', link: '/pagesTest/9ae0bd/' },
              // { text: '关于博客搭建与管理', link: '/pagesTest/26997d/' },
              // { text: '在线编辑和新增文章的方法', link: '/pagesTest/c5a54d/' },
            ]
          }
        ]
      },
      { text: '算法', link: '/pagesTest/52d5c3/' },
      { text: 'JAVA', link: '/pagesTest/a2f161/' },
      { text: '框架&中间件', link: '/pagesTest/793dcb/' },
      { text: '数据库', link: '/pagesTest/2f674a/' },
      { text: '数据挖掘', link: '/pagesTest/2f674a/' },
      { text: '运维', link: '/pagesTest/33d574/' },
      { text: '架构设计', link: '/pagesTest/33d574/' },
      { text: '产品设计', link: '/pagesTest/088c16/' },
      { text: '项目管理', link: '/pagesTest/d0d7eb/' },
      // { text: '前端基础', link: '/pagesTest/33d574/' },
      // { text: 'JavaScript进阶', link: '/pagesTest/33d574/' },
      // { text: 'Vue', link: '/pagesTest/088c16/' },
      // { text: 'React', link: '/pagesTest/d0d7eb/' },
      // { text: 'Node.js', link: '/pagesTest/d0d7eb/' },
      // { text: '工程化', link: '/pagesTest/d0d7eb/' },
      // { text: '计算机网络', link: '/pagesTest/d0d7eb/' },
      // { text: '组成原理', link: '/pagesTest/d0d7eb/' },
      // { text: '操作系统', link: '/pagesTest/d0d7eb/' },
      // { text: '数据结构', link: '/pagesTest/d0d7eb/' },

      // { text: '资源', link: '/pagesTest/db78e2/' },
      // { text: '案例', link: '/pagesTest/5d571c/' },
      // { text: '问答', link: '/pagesTest/9cc27d/' },
      // { text: '赞助', link: '/pagesTest/1b12ed/' },
      // {
      //   text: '配置', link: '/pagesTest/a20ce8/', items: [
      //     { text: '主题配置', link: '/pagesTest/a20ce8/' },
      //     { text: '首页配置', link: '/pagesTest/f14bdb/' },
      //     { text: 'front matter配置', link: '/pagesTest/3216b0/' },
      //     { text: '目录页配置', link: '/pagesTest/54651a/' },
      //     { text: '添加摘要', link: '/pagesTest/1cc523/' },
      //     { text: '修改主题颜色和样式', link: '/pagesTest/f51918/' },
      //     { text: '评论栏', link: '/pagesTest/ce175c/' },
      //   ]
      // },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/png/编程.png', // 导航栏logo
    repo: 'wkkya/web-full-stack', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 20, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

    // docsDir: 'docs', // 编辑的文件夹
    // editLinks: true, // 编辑链接
    // editLinkText: '编辑',

    // 以下配置是Vdoing主题改动的和新增的配置
    sidebar: { mode: 'structuring', collapsable: false }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    updateBar: { // 最近更新栏
      showToArticle: true, // 显示到文章页底部，默认true
      // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],

    pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

    // contentBgStyle: 1,

    category: true, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: true, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: 'wkkya', // 必需
      href: 'https://github.com/wkkya' // 可选的
    },
    social: { // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:wkkyahahaha@gmail.com'
        },
        {
          iconClass: 'icon-gitee',
          title: 'Gitee',
          link: 'https://github.com/wkkya/web-full-stack'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/wkkya/web-full-stack'
        }
        
      ]
    },
    footer: { // 页脚信息
      createYear: 2024, // 博客创建年份
      copyrightInfo: 'wkkya | MIT License', // 博客版权信息，支持a标签
    },
    htmlModules,
  },

  // 插件
  plugins: [
    [require('./plugins/love-me'), { // 鼠标点击爱心特效
      color: '#11a8cd', // 爱心颜色，默认随机色
      excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    }],

    ['fulltext-search'], // 全文搜索

    // ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
    //   thirdparty: [ // 可选，默认 []
    //     {
    //       title: '在GitHub中搜索',
    //       frontUrl: 'https://github.com/search?q=', // 搜索链接的前面部分
    //       behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
    //     },
    //     {
    //       title: '在npm中搜索',
    //       frontUrl: 'https://www.npmjs.com/search?q=',
    //     },
    //     {
    //       title: '在Bing中搜索',
    //       frontUrl: 'https://cn.bing.com/search?q='
    //     }
    //   ]
    // }],

    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode || '01293bffa6c3962016c08ba685c79d78'
      }
    ],

    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://jsd.cdn.zzko.cn/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    }],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs') // https://day.js.org/
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      }
    ]
  ],

  markdown: {
    // lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.js',
    '.vuepress/config/htmlModules.js',
  ]
}
