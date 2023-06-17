import React, { useEffect, useState } from "react";
import { menuItems } from "../mockJson";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import Icon from "awesome-react-icons";

export default function Header() {
  const [val, setVal] = useState({});
  useEffect(() => {
    let menuItemsValues = [];
    menuItems.message.pages.map((res) => {
      if (
        res.title == res.module ||
        res.module == "Core" ||
        res.module == "Custom"
      ) {
        menuItemsValues.push({
          title: res.title,
          itemId: "",
          elemBefore: () => <Icon name="inbox" />,
          subNav: [],
        });
      }
    });
    menuItems.message.pages.map((res) => {
      if (res.parent_page == res.module) {
        menuItemsValues.map((res1) => {
          if (res.parent_page == res1.title) {
            res1.subNav.push({
              title: res.title,
              itemId: "",
              elemBefore: () => <Icon name="cloud-snow" />,
            });
          }
        });
      }
    });
    console.log(menuItemsValues);
    setVal(menuItemsValues);
  }, []);

  return (
    <>
      <Navigation
        activeItemId="/management/members"
        onSelect={({ itemId }) => {}}
        items={val}
      />
    </>
  );
}
