"use client";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ReduxProvider from "@/store/reduxProvider";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";
import { Stack } from "@mui/material";
import Navbar from "@/components/Navbar/Navbar";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <ReduxProvider>
              <Stack>
                {path === "/login" || path === "/register" ? <></> : <Navbar />}
                {children}
              </Stack>
            </ReduxProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
