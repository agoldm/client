import { createTheme } from "@mui/material/styles";
import typography from "./typography";
import palette from "./palette";

export default createTheme({
    direction: "rtl",
    typography: typography,
    palette: palette
});
