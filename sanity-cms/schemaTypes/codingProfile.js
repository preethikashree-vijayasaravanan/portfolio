import { defineField, defineType } from "sanity";

export default defineType({
  name: "codingProfile",
  title: "Coding Profile",
  type: "document",

  fields: [
    defineField({
      name: "platform",
      title: "Platform Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "username",
      title: "Username",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "profileUrl",
      title: "Profile URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "logo",
      title: "Platform Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),


  ],

  preview: {
    select: {
      title: "platform",
      subtitle: "username",
      media: "logo",
    },
  },
});