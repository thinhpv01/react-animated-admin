import React from "react";
import MPaper from "./MPaper";
import { Avatar, Box, Stack, Typography, colors } from "@mui/material";
import { images } from "../../assets";
import { CalendarMonthOutlined, PeopleAltOutlined } from "@mui/icons-material";

const UserBookingCard = () => {
  return (
    <MPaper title="Laster booking">
      <Stack spacing={3}>
        {/* user profile */}
        <Stack direction="row" spacing={2}>
          <Avatar alt="user" src={images.userProfile} />
          <Stack justifyContent="space-between">
            <Typography variant="subtitle2">Thinh Pham</Typography>
            <Typography variant="caption" color={colors.grey[200]}>
              18 may 2023 11:11
            </Typography>
          </Stack>
        </Stack>
        {/* user profile */}

        {/* booking info */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={5}
          sx={{ color: colors.grey[600] }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <CalendarMonthOutlined fontSize="small" />
            <Typography variant="body2" fontWeight={600}>
              4 days 3 nights
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <PeopleAltOutlined fontSize="small" />
            <Typography variant="body2" fontWeight={600}>
              4 - 6 guests
            </Typography>
          </Stack>
        </Stack>
        {/* booking info */}
        {/* image */}
        <Box
          sx={{
            pt: "100%",
            position: "relative",
            "& img": {
              position: "absolute",
              top: 0,
              height: "100%",
              width: "100%",
              borderRadius: 8,
            },
          }}
        >
          <img src={images.bookingImage} alt="booking" />
        </Box>
        {/* image */}
      </Stack>
    </MPaper>
  );
};

export default UserBookingCard;
