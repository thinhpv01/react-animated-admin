import { Grid } from "@mui/material";
import React from "react";
import SummaryGrid from "../components/common/SummaryGrid";
import ToursData from "../components/common/ToursData";
import Animate from "../components/common/Animate";

const DashboardPage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SummaryGrid />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Animate delay={1}>
              <ToursData />
            </Animate>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
