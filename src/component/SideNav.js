import React from "react";
import { menuItems } from "../mockJson";

import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import Icon from "awesome-react-icons";

// const buildSideNav = () => {
//   return (
//     <SideNav
//       onSelect={(selected) => {
//         // Add your code here
//       }}
//     >
//       <SideNav.Toggle />
//       <SideNav.Nav defaultSelected="hr">
//         {menuItems.message.pages
//           .filter(
//             (order) =>
//               order.parent_page === "" &&
//               order.title != "HR" &&
//               order.title != "Payroll"
//           )
//           .map((res) => {
//             return (
//               <>
//                 <NavItem eventKey="home">
//                   <NavIcon>
//                     <i
//                       className="fa fa-fw fa-home"
//                       style={{ fontSize: "1.75em" }}
//                     />
//                   </NavIcon>
//                   <NavText>{res.title} </NavText>
//                 </NavItem>
//               </>
//             );
//           })}

//         <NavItem eventKey="hr">
//           <NavIcon>
//             <i
//               className="fa fa-fw fa-line-chart"
//               style={{ fontSize: "1.75em" }}
//             />
//           </NavIcon>
//           <NavText>HR</NavText>
//         </NavItem>
//         {menuItems.message.pages
//           .filter((order) => order.parent_page == "HR")
//           .map((res) => {
//             return (
//               <>
//                 <NavItem eventKey={"hr/" + res.icon}>
//                   <NavText> {res.title}</NavText>
//                 </NavItem>
//               </>
//             );
//           })}

//         {/* <NavItem eventKey="charts/linechart">
//             <NavText>Line Chart</NavText>
//           </NavItem>
//           <NavItem eventKey="charts/barchart">
//             <NavText>Bar Chart</NavText>
//           </NavItem> */}

//         <NavItem eventKey="charts">
//           <NavIcon>
//             <i
//               className="fa fa-fw fa-line-chart"
//               style={{ fontSize: "1.75em" }}
//             />
//           </NavIcon>
//           <NavText>Charts</NavText>
//           <NavItem eventKey="charts/linechart">
//             <NavText>Line Chart</NavText>
//           </NavItem>
//           <NavItem eventKey="charts/barchart">
//             <NavText>Bar Chart</NavText>
//           </NavItem>
//         </NavItem>
//       </SideNav.Nav>
//     </SideNav>
//   );
// };

// const test = () => {
//   for (let i = 0; i < menuItems.message.pages.length; i++) {
//     console.log(menuItems.message.pages[i]);
//   }
// };

export default function Header() {
  return (
    <>
      <Navigation
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
      />
    </>
  );
}
