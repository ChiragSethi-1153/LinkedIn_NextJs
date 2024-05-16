"use client";
/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputBase,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./Login.module.css";
import { z } from "zod";
import AppleIcon from "@mui/icons-material/Apple";
import Logo from "../../assets/Linkedin-logo2.png";
import GoogleIcon from "../../assets/icons-google.svg";
import LinkIcon from "../../assets/link-icon.svg";
import { useAppDispatch } from "@/store/hooks";
import Image from "next/image";
import Footer from "../Footer/Footer";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be atleast 6 characters"),
});

export type loginginSchema = z.infer<typeof loginSchema>;

const UserLogin = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<loginginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    console.log(data)
    // dispatch(registerUsers(data));
    // reset();
    // if(user?.status === 200){
    //   handleClick()
    //   setTimeout(() => {
    //     router.push('/login')
    //   }, 2000)
    // }
    // else if(user?.status === 409){
    //   setConflict(true)
    // }
    // else if(user?.status === 500){
    //   setErr(true)
    // }
    // else {
    //   setErr(true)
    }

  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      className={styles.loginPage}
      sx={{ backgroundColor: "#fff" }}
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          width: "90%",
          marginLeft: "114px",
          marginTop: "32px",
        }}
      >
        <Image
          src={Logo}
          alt="Logo"
          width={108}
          height={30}
          className={styles.loginLogo}
        />
      </Stack>

      <Box className={styles.loginFormBox}>
        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          className={styles.loginForm}
        >
          <Typography
            align="left"
            sx={{
              width: "100%",
              fontFamily:
                "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ",
              fontWeight: "600",
              fontSize: "32px",
            }}
          >
            Sign in
          </Typography>
          <Typography
            align="left"
            sx={{
              width: "100%",
              fontFamily:
                "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ",
              fontSize: "14px",
            }}
          >
            Stay updated on your professional world
          </Typography>

          <form
          onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              label="Email"
              {...register("email")}
              sx={{
                width: "100%",
                fontFamily:
                  "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ",
                fontWeight: "400",
                fontSize: "32px",
                position: "relative",
                zIndex: "1",
                borderRadius: "4px !important",
                background: "none",
                mt: 1,
              }}
            />
            {errors.email && (
                  <Typography
                    sx={{ color: "red" }}
                  >{`${errors.email.message}`}</Typography>
                )}

            <FormControl
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                mt: 2,
              }}
              variant="outlined"
            >
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                {...register("password")}// label="Password"
                placeholder="Password"
                endAdornment={
                  <InputAdornment position="end">
                    <Button
                      onClick={handleClickShowPassword}
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
              {errors.password && (
                  <Typography
                    sx={{ color: "red" }}
                  >{`${errors.password.message}`}</Typography>
                )}
            </FormControl>

            <Typography
              align="left"
              sx={{
                color: "#0b66c2",
                fontWeight: "500",
                width: "100%",
                marginTop: "10px",
                cursor: "pointer",
                fontFamily:
                  '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
              }}
            >
              Forgot password?
            </Typography>

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
                marginTop: "20px",
                fontFamily:
                  '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
                backgroundColor: "#0a66c2",
              }}
              type="submit"
            >
              Sign in
            </Button>

            {/* <Divider>or</Divider> */}

            <Box className={styles.formDivider}>
                <span>
                  <span className={styles.dividerLine}></span>
                </span>
                <span className={styles.dividerTextContent}>
                  <span className={styles.dividerText}>or</span>
                </span>
              </Box>

            <Box>
              <p className={styles.loginText}>
                By clicking to Continue, you agree to the LinkedIn's
                <span className={styles.loginTextSpan}>User Agreement</span>,
                <span className={styles.loginTextSpan}>Privacy Policy</span>,
                and <span className={styles.loginTextSpan}>Cookie Policy</span>.
              </p>
            </Box>

            <Box className={styles.thirdPartyContainerLogin}>
              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                className={styles.thirdPartyBtns}
              >
                Continue with Google
              </Button>
            </Box>
            <Box className={styles.thirdPartyContainerLogin}>
              <Button
                variant="outlined"
                startIcon={
                  <AppleIcon
                    style={{ width: "21px", height: "21px", minWidth: "18px" }}
                  />
                }
                className={styles.thirdPartyBtns}
              >
                Sign in with Apple
              </Button>
            </Box>

            <Box className={styles.thirdPartyContainerLogin}>
              <Button
                variant="outlined"
                startIcon={
                  <LinkIcon
                    style={{ width: "21px", height: "21px", minWidth: "18px" }}
                  />
                }
                className={styles.thirdPartyBtns}
              >
                Sign in with a one-time link
              </Button>
            </Box>
            <Box className={styles.thirdPartyContainerLogin}>
              <Button variant="outlined" className={styles.thirdPartyBtns}>
                Sign in with a passkey
              </Button>
            </Box>
          </form>
        </Stack>
      </Box>

      <Box>
        <Typography className={styles.loginFooterText}>
          New to LinkedIn?
          <span
            className={styles.loginFooterTextBtn}
            onClick={() => router.push("/register")}
          >
            Join Now
          </span>{" "}
        </Typography>
      </Box>

        <Footer />

    </Stack>
  );
};

export default UserLogin;
