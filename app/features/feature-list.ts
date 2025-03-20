export interface Feature {
  name: string;
  description?: string;
  subFeatures?: Feature[];
}

export const featureList: Feature[] = [
  {
    name: "Sales Dashboard",
    description: "Landing page with member dashboard",
    subFeatures: [
      {
        name: "Leaderboard",
        description: "Display sales and performance rankings"
      },
      {
        name: "Custom Widgets",
        description: "Monitor and analyze sales data with custom date ranges",
        subFeatures: [
          {
            name: "Live Wash Count",
            description: "Track active washes across locations"
          },
          {
            name: "Online vs Membership Sales",
            description: "Compare sales channels"
          },
          {
            name: "Cash Handling Alerts",
            description: "Monitor cash transactions"
          },
          {
            name: "Average Use per Member",
            description: "Track member engagement metrics"
          }
        ]
      },
      {
        name: "Quick Links",
        description: "Navigation to reports and analytics",
        subFeatures: [
          {
            name: "Revenue Reports",
            description: "Track revenue and cash flow"
          },
          {
            name: "Membership Statistics",
            description: "Monitor membership metrics"
          },
          {
            name: "Churn Rate Tracking",
            description: "Monitor customer retention"
          },
          {
            name: "Free Wash Redemptions",
            description: "Track promotional usage"
          }
        ]
      }
    ]
  },
  {
    name: "Membership Management",
    subFeatures: [
      {
        name: "Memberships & Add-Ons",
        description: "Manage membership tiers and features",
        subFeatures: [
          {
            name: "Membership Configuration",
            description: "Manage tiers, features, and pricing"
          },
          {
            name: "Service Availability",
            description: "Enable/disable services by location"
          }
        ]
      },
      {
        name: "Prepaid Washes",
        description: "Manage prepaid wash packages",
        subFeatures: [
          {
            name: "Package Configuration",
            description: "Set up wash packages and pricing"
          },
          {
            name: "Expiration Policies",
            description: "Manage package validity periods"
          }
        ]
      },
      {
        name: "Location-Based Availability",
        description: "Configure service availability by location"
      }
    ]
  },
  {
    name: "Product Management",
    subFeatures: [
      {
        name: "Product Descriptions",
        description: "Manage product information"
      },
      {
        name: "Product Builder",
        description: "Create and configure products"
      },
      {
        name: "Product Inventory",
        description: "Track product stock levels"
      }
    ]
  },
  {
    name: "Marketing",
    description: "Sales and promotional tools",
    subFeatures: [
      {
        name: "Coupons",
        description: "Manage promotional offers",
        subFeatures: [
          {
            name: "Discount Configuration",
            description: "Set up membership and service discounts"
          },
          {
            name: "Limited Time Offers",
            description: "Create time-bound promotions"
          },
          {
            name: "DRB Coupon Codes",
            description: "Import and manage DRB coupons"
          }
        ]
      },
      {
        name: "Customer Targeting & Retention",
        description: "Customer engagement tools",
        subFeatures: [
          {
            name: "Discount Rules",
            description: "Configure discount eligibility"
          },
          {
            name: "Customer Analysis",
            description: "Identify inactive customers"
          },
          {
            name: "Bulk Actions",
            description: "Mass customer management",
            subFeatures: [
              {
                name: "Bulk Discounts",
                description: "Apply promotions to multiple customers"
              },
              {
                name: "Renewal Reminders",
                description: "Send bulk renewal notifications"
              },
              {
                name: "Account Purges",
                description: "Bulk account cleanup"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Reporting",
    description: "Financial and strategic analytics",
    subFeatures: [
      {
        name: "Sales & Revenue",
        description: "Track sales across locations"
      },
      {
        name: "Subscription Analytics",
        description: "Monitor growth and retention"
      },
      {
        name: "Financial Metrics",
        description: "Track refunds, chargebacks, and profitability"
      },
      {
        name: "Cash Reports",
        description: "Monitor cash transactions"
      },
      {
        name: "Employee & Corporate Tools",
        description: "Track employee performance",
        subFeatures: [
          {
            name: "Badge Wash Tracking",
            description: "Monitor employee wash counts"
          }
        ]
      },
      {
        name: "Business Reviews",
        description: "Monthly/quarterly performance analysis"
      },
      {
        name: "Customer Usage Reports",
        description: "Track customer engagement"
      },
      {
        name: "Retail Usage",
        description: "Monitor retail sales and usage"
      }
    ]
  }
]; 