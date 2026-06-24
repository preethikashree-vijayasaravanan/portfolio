export default {
  name: "profile",
  title: "Profile",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      name: "role",
      title: "Role",
      type: "string",
    },

    {
      name: "bio",
      title: "Bio",
      type: "text",
    },

    {
      name: "about",
      title: "About Me",
      type: "text",
    },

    {
      name: "phone",
      title: "Phone Number",
      type: "string",
    },

    {
      name: "email",
      title: "Email",
      type: "string",
    },

    {
      name: "location",
      title: "Location",
      type: "string",
    },

    {
      name: "available",
      title: "Available for Work",
      type: "boolean",
    },

    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "resume",
      title: "Resume PDF",
      type: "file",
    },

    {
      name: "github",
      title: "GitHub URL",
      type: "url",
    },

    {
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    },
  ],
};