import {
    Box,
    Button,
    FormControl,
    InputAdornment,
    InputBase,
    InputLabel,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import styles from "./Login.module.css";
  import "../UserSignup/UserSignup.css";
  import { z } from "zod"; 
  import AppleIcon from '@mui/icons-material/Apple';
  import Logo from "../../assets/Linkedin-logo2.png";
  import GoogleIcon from "../../assets/icons-google.svg";
  import LinkIcon from "../../assets/link-icon.svg";
import { useAppDispatch } from "@/store/hooks";
import Image from "next/image";
import Footer from "../Footer/Footer";
import router from "next/router";
 
  
  

  export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password must be atleast 6 characters"),
  });
  
  export type registerationSchema = z.infer<typeof loginSchema>;

  
  const UserLogin = () => {
    const dispatch = useAppDispatch();
  
    const [showPassword, setShowPassword] = useState(false);

  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

  
    return (
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        className={styles.loginPage}
        sx={{ backgroundColor: "#fff", width: '100%', height: '100%' }}
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{
            width: "100%",
            marginLeft: "114px",
            marginTop: "32px",
          }}
        >
          <Image src={Logo} alt="Logo" className={styles.loginLogo} />
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
              paragraph="true"
              align="left"
              sx={{
                width: "100%",
                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ",
                fontSize: "14px",
                
            }}
            >
              Stay updated on your professional world
            </Typography>
  
            <form 
            // onSubmit={}
            >
            <TextField
              label="Email"
              // variant="filled"
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
                }}
                
                />
            <Typography style={{ color: "red" }}>{emailErrorMsg}</Typography>
              
              <FormControl sx={{ width: "100%", display: 'flex', alignItems: 'center' }} variant="standard">
            <InputLabel sx={{padding: '7px 15px'}} htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <InputBase
                id="standard-adornment-password"
                inputProps={{
                    style: {
                        
                        height: "3px",
                        borderWidth: "1px",
                        
                        padding: "14px 16px 14px 16px",
                    },
                }}
                sx={{
                    marginTop: '10px',
                    paddingRight: "0",
                    border: '1px solid #dadada',
                    borderRadius: '4px',
                    height: '58px'
                }}
                value={inputs.password}
                disableUnderline={true}
                onChange={(e) => {
                    handlePassword(e)
                    validate(e.target.value)
                }}
                type={showPassword ? "text" : "password"}
                endAdornment={
                    
                    <InputAdornment position="end">
                    <Button
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
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
              <Typography paragraph='true'>
                {errorMessage === "" ? null : (
                    <span
                    style={{
                        fontWeight: "normal",
                        color: "red",
                    }}
                    >
                    {errorMessage}
                  </span>
                )}
              </Typography>
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
            </form>
                
  
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
              <p className='login-text'>
                By clicking to Continue, you agree to the LinkedIn's 
              <span className='login-text-span'>User Agreement</span>, 
              <span className='login-text-span'>Privacy Policy</span>, 
              and 
              <span className='login-text-span'>Cookie Policy</span>.
              </p>
            </Box>
              {/* 
            <Box className="third-party-container-login">
              <Button
                variant="outlined"
                startIcon={
                  <GoogleIcon
                    style={{ width: "21px", height: "21px", minWidth: "18px" }}
                  />
                }
                className="third-party-btns"
              >
                Continue with Google
              </Button>
            </Box>
            <Box className="third-party-container-login">
              <Button
                variant="outlined"
                startIcon={
                  <AppleIcon
                    style={{ width: "21px", height: "21px", minWidth: "18px" }}
                  />
                }
                className="third-party-btns"
              >
                Sign in with Apple
              </Button>
            </Box>
            <Box className="third-party-container-login">
              <Button
                variant="outlined"
                startIcon={
                  <LinkIcon
                    style={{ width: "21px", height: "21px", minWidth: "18px" }}
                  />
                }
                className="third-party-btns"
              >
                Sign in with a one-time link
              </Button>
            </Box>
            <Box className="third-party-container-login">
              <Button
                variant="outlined"
                className="third-party-btns"
              >
                Sign in with a passkey
              </Button>
            </Box>
        */}
        
          </Stack>
        </Box>
        
         <Box>
           <Typography paragraph={true} className={styles.loginFooterText}>New to LinkedIn? 
           <span className={styles.loginFooterTextBtn} onClick={() => router.push('/register')}>Join Now</span> </Typography>
         </Box>
  
         <footer style={{ width: "100%" }}>
           <Footer />
         </footer>
      </Stack> 
    );
  };
  
  export default UserLogin;
  