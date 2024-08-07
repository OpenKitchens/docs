export const SITE = {
  title: 'Docs',
  description: 'Your website description.',
  defaultLanguage: 'ja'
} as const

export const OPEN_GRAPH = {
  image: {
    src: 'default-og-image.png',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground'
  },
  twitter: 'astrodotbuild'
}

export const KNOWN_LANGUAGES = {
  Japanese: 'ja',
  English: 'en'
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const EDIT_URL = `https://github.com/advanced-astro/astro-docs-template/tree/main`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  appId: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX'
}

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>
export const SIDEBAR: Sidebar = {
  ja: {
    'ガイド': [
      { text: 'インターネットの呪い', link: 'ja/guide/about' },
      { text: 'Introduction', link: 'ja/guide/introduction' },
      { text: 'アーキテクチャ', link: 'ja/guide/about_architecture' },
      { text: '水Protocolを入手', link: 'ja/guide/howtodeploy' }
    ],
    'アーキテクチャ(Taila Engine)目次': [
      { text: 'Identity', link: 'ja/arc/identity' },
      { text: 'Taila API', link: 'ja/guide/page-2' },
      { text: 'Taila Call', link: 'ja/guide/page-3' }
    ],
    'Identity': [
      { text: 'アカウント作成機能/招待状受理機能', link: 'ja/identity/create_account' }
    ],
    'Taila API': [

    ],
    'Taila Call': [

    ],
    '具体的な実装例': [
      { text: 'アプリケーションの実装例', link: 'ja/guide/page-1' },
      { text: 'プラグインの実装例', link: 'ja/guide/page-2' },
    ]
  },
  en: {
    'guide': [
      { text: 'Introduction', link: 'en/introduction' },
      { text: 'Page 2', link: 'en/page-2' },
      { text: 'Page 3', link: 'en/page-3' }
    ],
    'specification': [
      { text: 'Page 1', link: 'en/page-1' },
      { text: 'Page 2', link: 'en/page-2' },
      { text: 'Page 3', link: 'en/page-3' }
    ]
  }
}
