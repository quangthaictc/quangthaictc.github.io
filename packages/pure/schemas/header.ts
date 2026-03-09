import { z } from 'astro/zod'

export const HeaderMenuSchema = () =>
  z
    .array(
      z.object({
        title: z.string(),
        link: z.string()
      })
    )
    .default([
      { title: 'Bài viết', link: '/blog' },
      { title: 'Công cụ', link: '/tools' }
    ])
    .describe('Thanh menu cho website.')
