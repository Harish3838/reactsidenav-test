import React, { useEffect, useState } from "react";
import { menuItems } from "../mockJson";

import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import Icon from "awesome-react-icons";

export default function Header() {
  const [menuVal, setMenuval] = useState({});

  useEffect(() => {
    let items = [];
    items.push();
    console.log(items);
    setMenuval({
      title: "Build",
      itemId: "/dashboard",
      elemBefore: () => <Icon name="inbox" />,
    });
    console.log(JSON.stringify(menuVal));
  }, []);

  return (
    <>
      {/* <Navigation
        activeItemId="/management/members"
        onSelect={({ itemId }) => {}}
        items={[
          {
            title: "Build",
            itemId: "/dashboard",
            elemBefore: () => <Icon name="inbox" />,
          },
          {
            title: "HR",
            itemId: "/dashboard",
            subNav: [
              {
                title: "Recruitment",
                itemId: "/management/projects",
                elemBefore: () => <Icon name="cloud-snow" />,
              },
              {
                title: "Employee Lifecycle",
                itemId: "/management/members",
                elemBefore: () => <Icon name="coffee" />,
              },

              {
                title: "Performance",
                itemId: "/management/projects",
                elemBefore: () => <Icon name="cloud-snow" />,
              },
              {
                title: "Shift & Attendance",
                itemId: "/management/members",
                elemBefore: () => <Icon name="coffee" />,
              },

              {
                title: "Expense Claims",
                itemId: "/management/projects",
                elemBefore: () => <Icon name="cloud-snow" />,
              },
              {
                title: "Leaves",
                itemId: "/management/members",
                elemBefore: () => <Icon name="coffee" />,
              },
            ],
            elemBefore: () => <Icon name="inbox" />,
          },
          {
            title: "Customization",
            itemId: "/dashboard",
            elemBefore: () => <Icon name="inbox" />,
          },
          {
            title: "Projects",
            itemId: "/dashboard",
            elemBefore: () => <Icon name="inbox" />,
          },
          {
            title: "Payroll",
            itemId: "/management",
            elemBefore: () => <Icon name="users" />,
            subNav: [
              {
                title: "Salary Payout",
                itemId: "/management/projects",
                elemBefore: () => <Icon name="cloud-snow" />,
              },
              {
                title: "Tax & Benefits",
                itemId: "/management/members",
                elemBefore: () => <Icon name="coffee" />,
              },
            ],
          },
          {
            title: "Integrations",
            itemId: "/another",
            elemBefore: () => <Icon name="coffee" />,
          },
        ]}
      /> */}
    </>
  );
}
