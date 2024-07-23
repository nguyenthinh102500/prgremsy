import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import "../../assets/css/Base.css";
const Base = ({ childrend }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      className="bgBase"
      height={"100vh"}
    >
      <Navbar></Navbar>
      <Box display={"flex"} height={"100%"}>
        {childrend}
      </Box>
    </Box>
  );
};
export default Base;
