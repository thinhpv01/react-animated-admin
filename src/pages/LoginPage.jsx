import { Box, colors } from "@mui/material";
import React from "react";
import { images } from "../assets/index";

const LoginPage = () => {
  return (
    <Box
      position="relative"
      height="100vh"
      sx={{ "::-webkit-scrollbar": { display: "none" } }}
    >
      <Box
        sx={{
          position: "absolute",
          right: 0,
          height: "100%",
          width: "70%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${images.loginBg})`,
        }}
      />
      <Box
        sx={{
          position: "relative",
          left: 0,
          height: "100%",
          width: isLoggedIn
            ? "100%"
            : { xl: "30%", lg: "40%", md: "50%", xs: "100%" },
          transition: "all 1s ease-in-out",
          bgcolor: colors.common.white,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            opacity: isLoggedIn ? 0 : 1,
            transition: "all 0.3s ease-in-out",
            height: "100%",
            "::-webkit-scrollbar": { display: "none" },
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
