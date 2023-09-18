import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
  circularProgressClasses,
  colors,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { images } from "../assets/index";
import Animate from "../components/common/Animate";

const LoginPage = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginProgress, setLoginProgress] = useState(0);
  const [onRequest, setOnRequest] = useState(false);

  const onSignIn = (e) => {
    e.preventDefault();
    setOnRequest(true);

    const interval = setInterval(() => {
      setLoginProgress((prev) => prev + 100 / 40);
    }, 50);
    setTimeout(() => {
      clearInterval(interval);
    }, 2000);
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 2200);
    setTimeout(() => {
      navigate("/dashboard");
    }, 3200);
  };

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
          position: "absolute",
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
            justifyContent: "space-between",
            opacity: isLoggedIn ? 0 : 1,
            transition: "all 0.3s ease-in-out",
            height: "100%",
            "::-webkit-scrollbar": { display: "none" },
          }}
        >
          {/* logo */}
          <Box sx={{ textAlign: "center", p: 5 }}>
            <Animate type="fade" delay={0.5}>
              <img src={images.logo} alt="logo" height={60} />
            </Animate>
          </Box>
          {/* Logo */}
          {/* form */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "::-webkit-scrollbar": { display: "none" },
            }}
          >
            <Animate type="fade" sx={{ maxWidth: 400, width: "100%" }}>
              <Box
                component="form"
                maxWidth={400}
                width="100%"
                onSubmit={onSignIn}
              >
                <Stack spacing={3}>
                  <TextField label="username" fullWidth />
                  <TextField label="password" type="password" fullWidth />
                  <Button
                    type="submit"
                    size="large"
                    variant="contained"
                    color="success"
                  >
                    Sign In
                  </Button>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <FormGroup>
                      <FormControl>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Remember me"
                        />
                      </FormControl>
                      <Typography color="error" fontWeight="hold">
                        <Link to="#">Forget Password</Link>
                      </Typography>
                    </FormGroup>
                  </Stack>
                </Stack>
              </Box>
            </Animate>
          </Box>

          {/* form */}
          {/* footer */}
          <Box sx={{ textAlign: "center", p: 5, zIndex: 2 }}>
            <Animate type="fade" delay={1}>
              <Typography
                display="inline"
                fontWeight="bold"
                sx={{ "& > a": { color: colors.red[900], ml: "5px" } }}
              >
                Don't have an account -<Link to="#">Register now</Link>
              </Typography>
            </Animate>
          </Box>
          {/* footer */}
          {/* Loading box */}
          {onRequest && (
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                bgcolor: colors.common.white,
                zIndex: 100,
              }}
            >
              <Box position="relative">
                <CircularProgress
                  variant="determinate"
                  sx={{ color: colors.grey[200] }}
                  size={100}
                  value={100}
                />
                <CircularProgress
                  variant="determinate"
                  disableShrink
                  value={loginProgress}
                  size={100}
                  sx={{
                    [`& .${circularProgressClasses.circle}`]: {
                      strokeLinecap: "round",
                    },
                    position: "absolute",
                    left: 0,
                    color: colors.green[600],
                  }}
                />
              </Box>
            </Stack>
          )}
          {/* Loading box */}
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
