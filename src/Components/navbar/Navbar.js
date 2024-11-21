// import React, { useState } from "react";
// import Logo from "../../Assets/Startup_hirer_for_dark_bg (1).png";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
// import "./navbar.css";
// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const menuOptions = [
//     {
//       text: "Home",
//       icon: <HomeIcon />,
//     },
//     {
//       text: "About",
//       icon: <InfoIcon />,
//     },
//     {
//       text: "Testimonials",
//       icon: <CommentRoundedIcon />,
//     },
//     {
//       text: "Contact",
//       icon: <PhoneRoundedIcon />,
//     },
//     {
//       text: "Cart",
//       icon: <ShoppingCartRoundedIcon />,
//     },
//   ];
//   return (
//     <nav className="nav-container-1">
//       <div className="nav-logo-container">
//         <img src={Logo} className="img-logo" alt="" style={{ width: "100%" }} />
//       </div>
//       <div className="navbar-links-container">
//         <a className="color-text">Contact Us</a>
//         <a className="color-text">+91 90423 86429</a>
//       </div>
//       <div className="navbar-menu-container">
//         {/* <HiOutlineBars3 onClick={() => setOpenMenu(true)} /> */}
//       </div>
//       <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
//         <Box
//           sx={{ width: "100%" }}
//           role="presentation"
//           onClick={() => setOpenMenu(false)}
//           onKeyDown={() => setOpenMenu(false)}
//         >
//           <List>
//             {menuOptions.map((item) => (
//               <ListItem key={item.text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//         </Box>
//       </Drawer>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import Logo from "../../Assets/Startup_hirer_for_dark_bg (1).png";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import "./navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, href: "#" },
    { text: "About", icon: <InfoIcon />, href: "#about" },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      href: "#testimonials",
    },
    { text: "Contact", icon: <PhoneRoundedIcon />, href: "#contact" },
    { text: "Cart", icon: <ShoppingCartRoundedIcon />, href: "#cart" },
  ];

  return (
    <nav className="nav-container-1">
      {/* Logo Section */}
      <div className="nav-logo-container">
        <img src={Logo} className="img-logo" alt="Startup Hirer Logo" />
      </div>

      {/* Links Section */}
      <div className="navbar-links-container">
        <a href="#contact-us" className="color-text">
          Contact Us
        </a>
        <a href="tel:+919042386429" className="color-text">
          +91 90423 86429
        </a>
      </div>

      {/* Drawer Section */}

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component="a" href={item.href}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
