import React from "react";
import { Alert, Snackbar as MuiSnackbar } from "@mui/material";
const Snackbar = ({ isOpen, onClose, message, severity }) => {
  return (
    <div>
      <MuiSnackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={onClose}
        message="Note archived"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </MuiSnackbar>
    </div>
  );
};
export default Snackbar;
