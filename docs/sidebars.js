// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  docsSidebar: [
    "introduction",
    {
      type: "category",
      label: "Getting started",
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "getting-started",
        },
      ],
    },
    {
      type: "category",
      label: "Chat",
      items: [
        {
          type: "autogenerated",
          dirName: "chat",
        },
      ],
    },
    {
      type: "category",
      label: "Autocomplete",
      items: [
        {
          type: "autogenerated",
          dirName: "autocomplete",
        },
      ],
    },
    {
      type: "category",
      label: "Edit",
      items: [
        {
          type: "autogenerated",
          dirName: "edit",
        },
      ],
    },
    {
      type: "category",
      label: "Agent",
      items: [
        {
          type: "autogenerated",
          dirName: "agent",
        },
      ],
    },
    "telemetry",
    "troubleshooting",
    {
      type: "link",
      label: "Hub",
      href: "/hub/introduction",
    },
  ],
  customizingSidebar: [
    "customize/overview",
    {
      type: "category",
      label: "Model providers",
      collapsed: false,
      link: {
        slug: "/customize/model-providers",
        type: "generated-index",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "customize/model-providers/top-level",
        },
        {
          type: "category",
          label: "More",
          link: {
            slug: "/customize/model-providers/more",
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "customize/model-providers/more",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Model roles",
      link: {
        slug: "/customize/model-roles",
        type: "generated-index",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "customize/model-roles",
        },
      ],
    },
    {
      type: "category",
      label: "Deep dives",
      items: [
        {
          type: "autogenerated",
          dirName: "customize/deep-dives",
        },
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      items: [
        {
          type: "autogenerated",
          dirName: "customize/tutorials",
        },
      ],
    },
    {
      type: "link",
      label: "Reference",
      href: "/reference",
    },
  ],
  hubSidebar: [
    "hub/introduction",
    {
      type: "category",
      label: "Assistants",
      items: [
        "hub/assistants/intro",
        "hub/assistants/use-an-assistant",
        "hub/assistants/create-an-assistant",
        "hub/assistants/edit-an-assistant",
      ],
    },
    {
      type: "category",
      label: "Blocks",
      items: [
        "hub/blocks/intro",
        "hub/blocks/block-types",
        "hub/blocks/use-a-block",
        "hub/blocks/create-a-block",
        "hub/blocks/bundles",
      ],
    },
    {
      type: "category",
      label: "Secrets",
      items: ["hub/secrets/secret-types", "hub/secrets/secret-resolution"],
    },
    {
      type: "category",
      label: "Governance",
      items: ["hub/governance/org-permissions", "hub/governance/pricing"],
    },
    {
      type: "link",
      label: "Customize",
      href: "/customize/overview",
    },
  ],
};

module.exports = sidebars;
