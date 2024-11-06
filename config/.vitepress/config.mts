import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "一日记账用户手册",
  description: "由用户们倾情巨献",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '手册', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '记账',
        items: [
          { text: '概览', link: '/markdown-examples' },
          { text: '扫码记账', link: '/api-examples' },
          { text: '选择钱包' },
          { text: '添加图片' },
          { text: '选择货币' },
          { text: '添加地理信息' },
          { text: '添加标记' }
        ]
      },
      {
        text: '资产管理',
        items: [
          { text: '添加账户' }
        ]
      },
      {
        text: '账本管理',
        items: [
          { text: '添加账本' },
          { text: '账单类别管理' }
        ]
      },
      {
        text: '其它',
        items: [
          { text: '支出严格模式' },
          { text: '反转键盘类型' },
          { text: '首页布局' },
          { text: '结算货币' },
          { text: '发送日志' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/one-day-accounting/daily-accounting-user-manual' }
    ]
  }
})
