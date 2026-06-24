export default {
  name: "skill",
  title: "Skills",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Skill Name",
      type: "string",
    },

    {
      name: "category",
      title: "Category",
      type: "string",

      options: {
        list: [
          { title: "Frontend", value: "Frontend" },
          { title: "Backend", value: "Backend" },
          { title: "Database", value: "Database" },
          { title: "Tools", value: "Tools" },
        ],
      },
    },

    {
      name: "percentage",
      title: "Percentage",
      type: "number",
    },
  ],
};