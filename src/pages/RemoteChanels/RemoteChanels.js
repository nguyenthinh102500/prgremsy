import "../../assets/css/Systems.css";

import Box from "@mui/material/Box";

import { Button, Divider, FormControl, TextField } from "@mui/material";
const RemoteChanels = () => {
  return (
    <>
      <Box
        margin={"auto"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-evenly"}
        className="container rps"
        height={"100%"}
        pb={10}
        sx={{ overflowY: "scroll" }}
      >
        {/* row 1 */}
        <Divider
          sx={{ fontSize: "1.2rem", fontWeight: "700", display: "none" }}
          className="show-mobile"
        >
          REMOTE CHANNELS
        </Divider>
        <Box mt={2} className="row">
          <Box p={1} className="col-xs-12 col-md-6">
            <div className="contact-form-container">
              <form
                className="contact-form"
                style={{
                  height: "auto",
                  minHeight: "628px",
                  maxHeight: "max-content",
                }}
              >
                <h2 className="form-title">Remote Channels Setting</h2>
                <Box>
                  <label>Controls Mode</label>
                  <select>
                    <option>Autopilot convert</option>
                    <option>Disable</option>
                    <option>Raw Input</option>
                  </select>
                </Box>
                <label>Chanels</label>
                <div
                  style={{ justifyContent: "space-between" }}
                  className=" row"
                >
                  <FormControl
                    fullWidth
                    variant="standard"
                    className="col-xs-12 col-md-4"
                    sx={{ m: 2, minWidth: 100 }}
                  >
                    <TextField
                      id="outlined-multiline-static"
                      label="Image Capture"
                      multiline
                      rows={1}
                    />
                  </FormControl>
                  <FormControl
                    fullWidth
                    variant="standard"
                    className="col-xs-12 col-md-4"
                    sx={{ m: 2, minWidth: 100 }}
                  >
                    <TextField
                      id="outlined-multiline-static"
                      label="Video Record"
                      multiline
                      rows={1}
                    />
                  </FormControl>
                </div>

                <div
                  style={{ justifyContent: "space-between" }}
                  className=" row"
                >
                  <FormControl
                    fullWidth
                    variant="standard"
                    className="col-xs-12 col-md-4"
                    sx={{ m: 2, minWidth: 100 }}
                  >
                    <TextField
                      id="outlined-multiline-static"
                      label="Zooming"
                      multiline
                      rows={1}
                    />
                  </FormControl>
                  <FormControl
                    fullWidth
                    variant="standard"
                    className="col-xs-12 col-md-4"
                    sx={{ m: 2, minWidth: 100 }}
                  >
                    <TextField
                      //   color="black"
                      id="outlined-multiline-static"
                      label="Change View Source"
                      multiline
                      rows={1}
                    />
                  </FormControl>
                </div>
                <div style={{ justifyContent: "flex-start" }} className=" row">
                  <FormControl
                    fullWidth
                    variant="standard"
                    className="col-xs-12 col-md-4"
                    sx={{ m: 2, minWidth: 100 }}
                  >
                    <TextField
                      id="outlined-multiline-static"
                      label="Change Record Source"
                      defaultValue={-1}
                      multiline
                      rows={1}
                    />
                  </FormControl>
                </div>
              </form>
            </div>
          </Box>
          <Box p={1} className="col-xs-12 col-md-6">
            <div className="contact-form-container">
              <form
                className="contact-form"
                style={{
                  height: "auto",
                  minHeight: "628px",
                  maxHeight: "max-content",
                }}
              >
                <h2 className="form-title">Gimbal Controls</h2>
                <Box>
                  <label>Chanels</label>
                  <div
                    style={{ justifyContent: "space-between" }}
                    className=" row"
                  >
                    <FormControl
                      fullWidth
                      variant="standard"
                      className="col-xs-12 col-md-4"
                      sx={{ m: 2, minWidth: 100 }}
                    >
                      <TextField
                        id="outlined-multiline-static"
                        label="Tilt"
                        multiline
                        rows={1}
                      />
                    </FormControl>
                    <FormControl
                      fullWidth
                      variant="standard"
                      className="col-xs-12 col-md-4"
                      sx={{ m: 2, minWidth: 100 }}
                    >
                      <TextField
                        id="outlined-multiline-static"
                        label="Roll"
                        multiline
                        rows={1}
                      />
                    </FormControl>
                  </div>

                  <div
                    style={{ justifyContent: "space-between" }}
                    className=" row"
                  >
                    <FormControl
                      fullWidth
                      variant="standard"
                      className="col-xs-12 col-md-4"
                      sx={{ m: 2, minWidth: 100 }}
                    >
                      <TextField
                        id="outlined-multiline-static"
                        label="Pan"
                        multiline
                        rows={1}
                      />
                    </FormControl>
                    <FormControl
                      fullWidth
                      variant="standard"
                      className="col-xs-12 col-md-4"
                      sx={{ m: 2, minWidth: 100 }}
                    >
                      <TextField
                        id="outlined-multiline-static"
                        label="Mode"
                        multiline
                        rows={1}
                      />
                    </FormControl>
                  </div>
                  <div
                    style={{ justifyContent: "flex-start" }}
                    className=" row"
                  >
                    <FormControl
                      fullWidth
                      variant="standard"
                      className="col-xs-12 col-md-4"
                      sx={{ m: 2, minWidth: 100 }}
                    >
                      <TextField
                        id="outlined-multiline-static"
                        label="Return Home"
                        defaultValue={-1}
                        multiline
                        rows={1}
                      />
                    </FormControl>
                  </div>
                </Box>
                <Box>
                  <label>DeadZone</label>
                  <div
                    style={{ justifyContent: "space-between" }}
                    className=" row"
                  >
                    <FormControl
                      fullWidth
                      variant="standard"
                      className="col-xs-12 col-md-4"
                      sx={{ m: 2, minWidth: 100 }}
                    >
                      <TextField
                        id="outlined-multiline-static"
                        label="Tilt"
                        multiline
                        rows={1}
                      />
                    </FormControl>
                    <FormControl
                      fullWidth
                      variant="standard"
                      className="col-xs-12 col-md-4"
                      sx={{ m: 2, minWidth: 100 }}
                    >
                      <TextField
                        id="outlined-multiline-static"
                        label="Roll"
                        multiline
                        rows={1}
                      />
                    </FormControl>
                  </div>

                  <div
                    style={{ justifyContent: "flex-start" }}
                    className=" row"
                  >
                    <FormControl
                      fullWidth
                      variant="standard"
                      className="col-xs-12 col-md-4"
                      sx={{ m: 2, minWidth: 100 }}
                    >
                      <TextField
                        id="outlined-multiline-static"
                        label="Pan"
                        sx={{ textAlign: "center" }}
                        defaultValue={-1}
                        multiline
                        rows={1}
                      />
                    </FormControl>
                  </div>
                </Box>
              </form>
            </div>
          </Box>
        </Box>
        {/* Row 2 */}
        <Box mt={2} className="row">
          <Box p={1} className="col-xs-12 col-md-6">
            <div className="contact-form-container">
              <form className="contact-form" style={{ height: "249px" }}>
                <h2 className="form-title">TRACKING TRIGGER</h2>

                <label>Chanels</label>
                <div
                  style={{ justifyContent: "space-between", width: "100%" }}
                  className=" row"
                >
                  <FormControl
                    fullWidth
                    variant="standard"
                    className="col-xs-12 col-md-4"
                    sx={{ m: 2, minWidth: "100%" }}
                  >
                    <TextField
                      id="outlined-multiline-static"
                      label="Trigger"
                      multiline
                      rows={1}
                    />
                  </FormControl>
                </div>
              </form>
            </div>
          </Box>
          <Box p={1} className="col-xs-12 col-md-6">
            <div className="contact-form-container">
              <form
                className="contact-form"
                style={{ height: "249px", justifyContent: "space-between" }}
              >
                <h2 className="form-title">CONFIRM ALL</h2>

                <Button sx={{ marginBottom: "1rem" }} variant="contained">
                  APPLY
                </Button>
              </form>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default RemoteChanels;
