import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from 'gatsby'

export default function Header() {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Link to="/">
          <Typography variant="h6">Home page</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
