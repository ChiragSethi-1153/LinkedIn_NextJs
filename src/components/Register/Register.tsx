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
  IconButton,
  Snackbar,
} from "@mui/material";
import GoogleIcon from '../../assets/icons-google.svg'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Link from "next/link";
import Image from "next/image";
import Footer from "../Footer/Footer";
import { useRouter } from "next/navigation";
import CloseIcon from '@mui/icons-material/Close';
import { registerUsers } from "@/features/Auth/authAction";
import { clearSignupData } from "@/features/Auth/registerSlice";

export const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6, "Password must be atleast 6 characters"),
});

export type registerationSchema = z.infer<typeof registerSchema>;

const Register = () => {
  const dispatch = useAppDispatch();
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<registerationSchema>({
    resolver: zodResolver(registerSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [conflict, setConflict] = React.useState(false)
  const [err, setErr] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setConflict(false)
    setErr(false)
  };
  const action = (
    <React.Fragment>
      
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const onSubmit = async (data: FieldValues) => {
    const signupData = await dispatch(registerUsers(data));
    reset();
    if(signupData?.payload?.status === 200){
      setOpen(true);
      setTimeout(() => {
        dispatch(clearSignupData(signupData))
        router.push('/login')
      }, 2000)
    }
    else if(signupData?.payload?.status === 409){
      setConflict(true)
    }
    else if(signupData?.payload?.status === 500){
      setErr(true)
    }
    else {
      setErr(true)
    }
  };

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
            className={styles.signupForm}
            onSubmit={handleSubmit(onSubmit)}
          >
            <section className={styles.signupFormSection}>
              <Stack className={styles.signupInputs}>
                <label htmlFor="name" className={styles.signupInputsLabel}>
                  Name
                </label>
                <TextField
                  {...register("name")}
                  name="name"
                  type="name"
                  className={styles.email}
                  inputProps={{
                    style: { height: "3px", padding: "14px 16px 14px 16px" },
                  }}
                  sx={{
                    border: "1px solid black",
                    outline: "none",
                    mb: 2,
                    "&.Mui-focused fieldset": {
                      border: "none",
                      outline: "none",
                    },
                  }}
                  required
                />
                <label htmlFor="email" className={styles.signupInputsLabel}>
                  Email
                </label>
                <TextField
                  {...register("email")}
                  name="email"
                  type="email"
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
                  required
                />
                {errors.email && (
                  <Typography
                    sx={{ color: "red" }}
                  >{`${errors.email.message}`}</Typography>
                )}
                <br />
                <label htmlFor="password" className={styles.signupInputsLabel}>
                  Password (6+ characters)
                </label>
                <OutlinedInput
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
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
           
                  endAdornment={
                    <InputAdornment position="end" >
                      <Button
                        onClick={handleClickShowPassword}
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
                {errors.password && (
                  <Typography
                    sx={{ color: "red" }}
                  >{`${errors.password.message}`}</Typography>
                )}
              </Stack>

              <p className={styles.signupText} >
                By clicking Agree & Join or Continue, you agree to the LinkedIn{" "}
                <span className={styles.signupTextSpan}>User Agreement</span>,{" "}
                <span className={styles.signupTextSpan}>Privacy Policy</span>, and{" "}
                <span className={styles.signupTextSpan}>Cookie Policy</span>.
              </p>
               <Button
                variant="contained"
                style={{
                  textTransform: "capitalize",
                  width: "100%",
                  boxShadow: "none",
                  height: "min-content",
                  minHeight: "48px",
                  borderRadius: "28px",
                  padding: "10px 24px 10px 24px",
                  textAlign: "center",
                  fontSize: "16px",
                  fontWeight: 500,
                  fontFamily:
                    '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
                  backgroundColor: "#0a66c2",
                }}
                type="submit"
              >
                Agree & Join
              </Button>

              <Box className={styles.formDivider}>
                <span>
                  <span className={styles.dividerLine}></span>
                </span>
                <span className={styles.dividerTextContent}>
                  <span className={styles.dividerText}>or</span>
                </span>
              </Box>
              <Box className={styles.thirdPartyContainer}>
                <Button
                  variant="outlined"
                  startIcon={
                    <GoogleIcon />
                  }
                  className={styles.googleBtn}
                >
                  Continue with Google
                </Button>
              </Box>
            
              <Box className={styles.formFooter}>
                <p className={styles.formFooterText}>
                  Already on LinkedIn?{" "}
                  <Link
                  href={'/login'}
                    className={styles.footerSigninLink}
                  >
                    {" "}
                    Sign In{" "}
                  </Link>
                </p>
              </Box>
            </section>
          </form>
        </Box>
      </Stack>
      <Footer />
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        message="Signed Up Successfully"
        action={action} 
      />
      <Snackbar
        open={conflict}
        autoHideDuration={2000}
        onClose={handleClose}
        message={"User Already Exists! Please Login Instead"}
        action={action}
      />
      <Snackbar
        open={err}
        autoHideDuration={2000}
        onClose={handleClose}
        message={"Error Occured! Try Again"}
        action={action}
      />
    </Stack>
  );
};

export default Register;
