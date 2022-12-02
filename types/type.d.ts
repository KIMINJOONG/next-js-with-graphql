import { SnackbarOrigin } from "@mui/material";

export interface ISanck extends SnackbarOrigin {
    open: boolean,
    message: string,
    sx: object
}