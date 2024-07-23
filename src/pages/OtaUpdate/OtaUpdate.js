import "../../assets/css/Systems.css";

import Box from "@mui/material/Box";

import { Button, Divider, Stack } from "@mui/material";
const OTAUPDATES = () => {
  return (
    <>
      <Box
        margin={"auto"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-evenly"}
        className="container "
      >
        <Divider
          sx={{ fontSize: "1.2rem", fontWeight: "700", display: "none" }}
          className="show-mobile"
        >
          OTA UPDATES
        </Divider>
        <Box p={1} className="col-xs-12 col-md-12">
          <div className="contact-form-container">
            <form className="contact-form">
              <h2 className="form-title">Software Version</h2>
              <Stack
                direction="row"
                alignContent={"center"}
                justifyContent={"center"}
                spacing={2}
              >
                <Button component="label" variant="contained" tabIndex={-1}>
                  Update
                </Button>
              </Stack>{" "}
            </form>
          </div>
        </Box>
      </Box>
    </>
  );
};
export default OTAUPDATES;
