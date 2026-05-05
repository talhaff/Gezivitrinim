import { defineField, defineType } from 'sanity'

export const tourType = defineType({
  name: 'tour',
  title: 'Turlar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tur Adı',
      type: 'string',
      validation: (Rule) => Rule.required().error('Tur adı zorunludur.'),
    }),
    defineField({
      name: 'slug',
      title: 'URL (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Günübirlik', value: 'gunubirlik' },
          { title: 'Konaklamalı', value: 'konaklamali' },
          { title: 'Yurt Dışı', value: 'yurtdisi' },
          { title: 'Kültür Turu', value: 'kultur' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'departureLocation',
      title: 'Kalkış Noktası',
      type: 'string',
      initialValue: 'Malatya Çıkışlı',
    }),
    defineField({
      name: 'price',
      title: 'Başlangıç Fiyatı',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'dates',
      title: 'Tur Tarihleri',
      type: 'array',
      of: [{ type: 'date' }],
    }),
    defineField({
      name: 'coverImage',
      title: 'Ana Kapak Görseli',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'galleryImages',
      title: 'Galeri',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'itinerary',
      title: 'Tur Programı (Gün Gün)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day', title: 'Gün No', type: 'string', description: 'Örn: 1. Gün' },
            { name: 'title', title: 'Başlık', type: 'string' },
            { name: 'description', title: 'Açıklama', type: 'text' },
          ],
        },
      ],
    }),
    defineField({
      name: 'included',
      title: 'Fiyata Dahil Hizmetler',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'excluded',
      title: 'Dahil Olmayan Hizmetler',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage',
    },
  },
})
