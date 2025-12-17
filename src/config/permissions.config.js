export const appConfig = {
    user: {
      id: 101,
      name: "Alex CRM Admin",
      role: "Admin",
    },
    permissions: [
      {
        id: "crm",
        label: "CRM",
        enabled: true,
        children: [
          {
            id: "leads",
            label: "Leads",
            path: "/crm/leads",
            enabled: true,
          },
          {
            id: "customers",
            label: "Customers",
            path: "/crm/customers",
            enabled: true,
          },
          {
            id: "reports",
            label: "Reports",
            path: "/crm/reports",
            enabled: false,
          },
        ],
      },
      {
        id: "settings",
        label: "Settings",
        enabled: true,
        children: [
          {
            id: "profile",
            label: "Profile",
            path: "/settings/profile",
            enabled: true,
          },
        ],
      },
    ],
  };
  