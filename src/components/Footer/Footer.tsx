import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../assets/logo-black.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>

       <ul className={styles.footerContent} itemType="none">
        <li className={styles.listTag} >
          <span className={styles.footerYear}>
          <Image src={Logo} alt='icon' width={56} />
           © 2024 </span>
        </li>
        
        <li className={styles.listTag} >About</li>
        <li className={styles.listTag} >Accessibility</li>
        <li className={styles.listTag} >User Agreement</li>
        <li className={styles.listTag} >Privacy Policy</li>
        <li className={styles.listTag} >Cookie Policy</li>
        <li className={styles.listTag} >Copyright Policy</li>
        <li className={styles.listTag} >Brand Policy</li>
        <li className={styles.listTag} >Guest Controls</li>
        <li className={styles.listTag} >Community Guidelines</li>
        <li className={styles.listTag} >Language</li>
        </ul>
    </div>
  );
};
export default Footer;

