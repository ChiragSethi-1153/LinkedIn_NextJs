"use client";
import React, { useState } from "react";
import Logo from "../../assets/Linkedin-logo.png";
import styles from "./Register.module.css";
import {
  Box,
  Stack,
  Button,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
// import Footer from '../../components/Footer/Footer'
import GoogleIcon from "../../assets/icons-google.svg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { useAppDispatch } from "@/store/hooks";
import Link from "next/link";
import Image from "next/image";
// import { registerUsers } from '../../redux/slice/signup/signupAction'

export const registerSchema = z.object({
  role: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8, "Password must be atleast 8 characters"),
});

export type registerationSchema = z.infer<typeof registerSchema>;

const Register = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<registerationSchema>({
    resolver: zodResolver(registerSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [inputs, setInputs] = useState({ email: "", password: "" });
  //   const [errorMessage, setErrorMessage] = useState("");
  //   const [emailErrorMsg, setEmailErrorMsg] = useState("");
  //   const [navigation, setNavigation] = useState(true)

  //   const validate = (value: string) => {
  //     if (
  //       validator.isStrongPassword(value, {
  //         minLength: 6,
  //         minLowercase: 1,
  //         minUppercase: 1,
  //         minNumbers: 1,
  //         minSymbols: 1,
  //       })
  //     ) {
  //       setErrorMessage("");
  //       setNavigation(true)
  //     } else {
  //       setErrorMessage("Is Not Strong Password");
  //       setNavigation(false)
  //     }
  //   };

  // const handleEmail = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setInputs({...inputs, email: e.target.value})
  //   let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  //     if (!emailRegex.test(e.target.value)) {
  //       setEmailErrorMsg("Please enter a valid email address.");
  //       setNavigation(false)
  //     } else {
  //       setEmailErrorMsg("");
  //       setNavigation(true)
  //     }
  // }
  // const handlePassword = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setInputs({...inputs, password: e.target.value})
  // }

  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault()
  //    if(navigation === false){
  //       alert('Kindly enter Correct Credentials')
  //    }
  //    else{
  //     console.log(inputs)
  //     // dispatch(registerUsers(inputs))
  //     // navigate('/login')
  //    }

  //   }

  return (
    <Stack className={styles.signupPage}>
      <Stack className={styles.signupMain}>
        <header className={styles.signupHeader}>
          <Box className={styles.signupPageLogoDiv}>
            <Image
              src={Logo}
              alt="Logo"
              width={134}
              height={134}
              className={styles.signupLogo}
            />
          </Box>
          <h1 className={styles.signupTitle}>
            Make the most of your professional life
          </h1>
        </header>

        <Box className={styles.signupFormWrapper}>
          <form
            className={styles.signuForm}
            // onSubmit={(e) => {handleSubmit(e)}}
          >
            <section className={styles.signupFormSection}>
              <Stack className={styles.signupInputs}>
                <label htmlFor="email" className={styles.signupInputsLabel}>Email</label>
                <TextField
                  name="email"
                  className={styles.email}
                  inputProps={{
                    style: { height: "3px", padding: "14px 16px 14px 16px" },
                  }}
                  sx={{
                    border: "1px solid black",
                    outline: "none",
                    "&.Mui-focused fieldset": {
                      border: "none",
                      outline: "none",
                    },
                  }}
                  // value={inputs.email}
                  // onChange={(e) => {handleEmail(e)}}
                  required
                />

                <br />
                <label htmlFor="password" className={styles.signupInputsLabel} >Password (6+ characters)</label>
                <OutlinedInput
                  type={showPassword ? "text" : "password"}
                  inputProps={{
                    style: {
                      height: "3px",
                      borderWidth: "1px",
                      padding: "14px 16px 14px 16px",
                    },
                  }}
                  sx={{
                    paddingRight: "0",
                    border: "1px solid black",
                    outline: "none",
                    "&.Mui-focused fieldset": {
                      border: "none",
                      outline: "none",
                    },
                  }}
                  // value={inputs.password}
                  // onChange={(e) => {
                  //   handlePassword(e)
                  //   validate(e.target.value)
                  // }}
                  endAdornment={
                    <InputAdornment position="end">
                      <Button
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        sx={{
                          textTransform: "none",
                          fontSize: "16px",
                          fontWeight: 500,
                          fontFamily:
                            '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',

                          "&:hover": { background: "none", border: "none" },
                        }}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputAdornment>
                  }
                />
              </Stack>
            </section>
          </form>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Register;
