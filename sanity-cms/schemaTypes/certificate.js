export default {
  name: "certificate",
  title: "Certificates",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Certificate Title",
      type: "string",
    },

    {
      name: "issuer",
      title: "Issued By",
      type: "string",
    },

    {
      name: "date",
      title: "Date",
      type: "date",
    },

    {
      name: "image",
      title: "Certificate Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "certificateUrl",
      title: "Certificate URL",
      type: "url",
    },
  ],
};