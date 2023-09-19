import {
  ChatBubbleOutlineOutlined,
  DashboardCustomizeOutlined,
  DirectionsCarFilledOutlined,
  MailOutline,
  NotificationsOutlined,
  OtherHousesOutlined,
  SavingsOutlined,
  SportsMotorsportsOutlined,
  SwapHorizOutlined,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  colors,
} from "@mui/material";
import React from "react";
import { images } from "../../assets";
import Animate from "./Animate";

const menus = [
  {
    title: "Inbox",
    icon: <MailOutline />,
    status: "inbox",
  },
  {
    title: "Overview",
    icon: <DashboardCustomizeOutlined />,
    status: "overview",
  },
  {
    title: "Notification",
    icon: <NotificationsOutlined />,
    status: "notification",
  },
];

const serviceMenus = [
  {
    title: "Mortage",
    icon: <OtherHousesOutlined />,
    status: "mortage",
  },
  {
    title: "Car loans",
    icon: <DirectionsCarFilledOutlined />,
    status: "carloans",
  },
  {
    title: "Insurance",
    icon: <SportsMotorsportsOutlined />,
    status: "insurance",
  },
];

const investmentMenus = [
  {
    title: "Stocks reade",
    icon: <SwapHorizOutlined />,
    state: "stocktrade",
  },
  {
    title: "Finance advice",
    icon: <ChatBubbleOutlineOutlined />,
    state: "financeadvice",
  },
  {
    title: "Savings accounts",
    icon: <SavingsOutlined />,
    state: "savingaccount",
  },
];

const Sidebar = ({ sidebarWidth }) => {
  const activeState = "overview";

  const MenuItem = (props) => {
    return (
      <ListItem
        key={props.index}
        disableGutters
        disablePadding
        sx={{ py: 0.5 }}
      >
        <ListItemButton
          sx={{
            borderRadius: "10px",
            bgcolor: props.isActive ? colors.green[600] : "",
            color: props.isActive ? colors.common.white : "",
            "&:hover": {
              bgcolor: props.isActive ? colors.green[600] : "",
              color: props.isActive ? colors.common.white : "",
            },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: "40px",
              color: props.isActive ? colors.common.white : "",
            }}
          >
            {props.item.icon}
          </ListItemIcon>
          <ListItemText>
            <Typography fontWeight={600}>{props.item.title}</Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    );
  };

  const drawer = (
    <Box
      padding={3}
      paddingBottom={0}
      display="flex"
      flexDirection="column"
      height="100vh"
      sx={{
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {/* Logo */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Animate type="fade" delay={1}>
          <img src={images.logo} alt="logo" height={60} />
        </Animate>
      </Box>
      {/* Logo */}
      <Animate sx={{ flexGrow: 1 }}>
        <Paper
          elevation={0}
          square
          sx={{
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            p: 2,
            height: "100%",
            boxShadow:
              "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
          }}
        >
          {/* Menu 1 */}
          <List>
            {menus.map((item, index) => (
              <MenuItem
                key={index}
                item={item}
                isActive={item.state === activeState}
              />
            ))}
          </List>
          {/* Menu 1 */}
          {/* Menu 2 */}
          <List>
            <ListItem>
              <Typography fontWeight={600} mt={1} color={colors.grey[600]}>
                Services
              </Typography>
            </ListItem>
            {serviceMenus.map((item, index) => (
              <MenuItem
                key={index}
                item={item}
                isActive={item.state === activeState}
              />
            ))}
          </List>
          {/* Menu 2 */}

          {/* Menu 3 */}
          <List>
            <ListItem>
              <Typography fontWeight={600} mt={1} color={colors.grey[600]}>
                Investments
              </Typography>
            </ListItem>
            {investmentMenus.map((item, index) => (
              <MenuItem
                key={index}
                item={item}
                isActive={item.state === activeState}
              />
            ))}
          </List>
          {/* Menu 3 */}
        </Paper>
      </Animate>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { md: sidebarWidth },
        flexShrink: { md: 0 },
      }}
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: sidebarWidth,
            borderWidth: 0,
            bgcolor: "transparent",
            "::-webkit-scrollbar": {
              display: "none",
            },
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
