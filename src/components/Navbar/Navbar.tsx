"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Avatar,
  Box,
  Divider,
  InputBase,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Navbar.module.css";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Icon from "../../assets/icons-linkedin.svg";
import HomeIcon from "../../assets/home-icon.svg";
import HomeIcon2 from "../../assets/home-icon2.svg";
import NetworkIcon from "../../assets/network-icons.svg";
import NetworkIcon2 from "../../assets/network-icon2.svg";
import JobsIcon from "../../assets/jobs-icon.svg";
import JobsIcon2 from "../../assets/jobs-icon2.svg";
import MessagingIcon from "../../assets/message-icon.svg";
import MessagingIcon2 from "../../assets/messaging-icon2.svg";
import NotificationIcon from "../../assets/notification-icon.svg";
import NotificationIcon2 from "../../assets/notification-icon2.svg";
import BusinessIcon from "../../assets/business-icon.svg";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const links = ["/", "/my-network", "/jobs", "/messaging", "/notifications"];
  const router = useRouter();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    router.push(links[newValue]);
  };

  return (
    <Stack className={styles.Navbar} direction={"row"} gap={8}>
      <Stack direction={"row"} alignItems={"center"}>
        <Icon />
        <InputBase
          placeholder="Search"
          className={styles.searchField}
          startAdornment={<SearchIcon sx={{ width: 19.5, p: 1 }} />}
          sx={{ width: { lg: "280px" } }}
        />
      </Stack>
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ sx: { backgroundColor: "black" } }}
          textColor={"secondary"}
        >
          <Tab
            icon={value === 0 ? <HomeIcon /> : <HomeIcon2 />}
            label="Home"
            className={styles.tabs}
            iconPosition={"top"}
            sx={{ ".MuiTab-iconWrapper": { mb: "1px" } }}
          />
          <Tab
            icon={value === 1 ? <NetworkIcon2 /> : <NetworkIcon />}
            label="My Network"
            className={styles.tabs}
            sx={{ ".MuiTab-iconWrapper": { mb: "1px" } }}
          />

          <Tab
            icon={value === 2 ? <JobsIcon2 /> : <JobsIcon />}
            label="Jobs"
            className={styles.tabs}
            sx={{ ".MuiTab-iconWrapper": { mb: "1px" } }}
          />
          <Tab
            icon={value === 3 ? <MessagingIcon2 /> : <MessagingIcon />}
            label="Messaging"
            className={styles.tabs}
            sx={{ ".MuiTab-iconWrapper": { mb: "1px" } }}
          />
          <Tab
            icon={value === 4 ? <NotificationIcon2 /> : <NotificationIcon />}
            label="Notifications"
            className={styles.tabs}
            sx={{ ".MuiTab-iconWrapper": { mb: "1px" } }}
          />
        </Tabs>
        <Stack height={'100%'} justifyContent={'flex-end'}>
          <Avatar sx={{ width: "20px", height: "20px" }} />
          <Box display={"flex"} alignItems={'flex-end'} justifyContent={'center'}  >
            <span className={styles.profileText}>Me
            </span>
            <ArrowDropDownOutlinedIcon sx={{width: "20px", height: "15px"}} />
          </Box>
        </Stack>
        <Divider orientation="vertical" sx={{ height: '52px'}} />
        <Stack alignItems={'center'} >
          <BusinessIcon fill={ onmouseover ? "#000" : '#676667'} style={{cursor: 'pointer'}} />
          <Box display={"flex"} alignItems={'flex-end'} justifyContent={'center'}  >
            <span className={styles.profileText}>
              For Business
            </span>
            <ArrowDropDownOutlinedIcon sx={{width: "20px", height: "15px"}} />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}
