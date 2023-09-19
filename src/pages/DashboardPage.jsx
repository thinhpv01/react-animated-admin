import { Grid } from "@mui/material";
import React from "react";
import SummaryGrid from "../components/common/SummaryGrid";

const DashboardPage = () => {
  return (
    <Grid>
      <Grid item xs={12}>
        <SummaryGrid />
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
