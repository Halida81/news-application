import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <Box sx={{ margin: "200px auto" }}>
      <CircularProgress />
    </Box>
  );
}
