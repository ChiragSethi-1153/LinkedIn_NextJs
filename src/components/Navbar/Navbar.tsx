"use client"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import styles from './Navbar.module.css'

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack className={styles.Navbar}>
      <Image src={'/../../assets/Linkedin-icon.png'} alt='icon' width={100} height={100} />
    <Tabs value={value} onChange={handleChange} >
      <Tab icon={<PhoneIcon />} label="RECENTS" />
      <Tab icon={<FavoriteIcon />} label="FAVORITES" />
      <Tab icon={<PersonPinIcon />} label="NEARBY" />
    </Tabs>
    </Stack>
  );
}
