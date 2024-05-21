"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import {
  Box,
  InputAdornment,
  InputBase,
  Link,
  Stack,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Navbar.module.css";
import Icon from "../../assets/icons-linkedin.svg";
import HomeIcon from "../../assets/home-icon2.svg";
import NetworkIcon from "../../assets/network-icons.svg";
import JobsIcon from "../../assets/jobs-icon.svg";
import MessagingIcon from "../../assets/message-icon.svg";
import NotificationIcon from "../../assets/notification-icon.svg";
import { useRouter } from "next/navigation";


export default function Navbar() {
  
  const [value, setValue] = React.useState(0);
  
  const links = ["/", "/my-network", "/jobs", "/messaging", "/notifications"]
  const router = useRouter()
  const handleChange = (newValue: number) => {
    setValue(newValue)
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

      <Tabs
        value={value}
        onChange={() => {
          handleChange(value)
          router.push(links[value]);
        }}
        TabIndicatorProps={{ sx: { backgroundColor: "black" } }}
        textColor={"secondary"}
      >
        
          <Tab
            icon={<HomeIcon />}
            
            label="Home"
            className={styles.tabs}
            iconPosition={"top"}
            sx={{ ".MuiTab-iconWrapper": { mb: "1px" } }}
             
          />
          <Tab
          
            icon={<NetworkIcon />}
            label="My Network"
            className={styles.tabs}
            sx={{ ".MuiTab-iconWrapper": { mb: "1px" } }}
          />
       
        <Tab
        
          icon={<JobsIcon />}
          label="Jobs"
          className={styles.tabs}
          sx={{ ".MuiTab-iconWrapper": { mb: "1px" } }}
        />
        <Tab
        
          icon={<MessagingIcon />}
          label="Messaging"
          className={styles.tabs}
          sx={{ ".MuiTab-iconWrapper": { mb: "1px" } }}
        />
        <Tab
        
          icon={<NotificationIcon />}
          label="Notifications"
          className={styles.tabs}
          sx={{ ".MuiTab-iconWrapper": { mb: "1px" } }}
        />
      </Tabs>
    </Stack>
  );
}
