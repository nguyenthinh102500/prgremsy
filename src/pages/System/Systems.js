import "../../assets/css/Systems.css";

import Box from "@mui/material/Box";

import { useState } from "react";
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

//IMPORT API
import HandleExample from "../../services/handleExample";

const SYSTEMS = () => {
  const [IR_IMAGE_TYPE, setIR_IMAGE_TYPE] = useState("");
  const [VIDEO_FORMAT, setVIDEO_FORMAT] = useState("");
  const [SCALE, setSCALE] = useState("");
  const [AUTO_SPEED, setAUTO_SPEED] = useState("");

  /// VIDEO STREAMING
  const [AUTO_CONNECT, setAUTO_CONNECT] = useState("");
  const [RESOLUTION, setRESOLUTION] = useState("");
  const [BITRATE, setBITRATE] = useState("");
  const [FormVideoStream, setFormVideoStream] = useState({
    PORT: "",
    MOUNT_POINT: "",
  });
  const onHandleChange = (e) => {
    setFormVideoStream({ ...FormVideoStream, [e.target.name]: e.target.value });
  };
  const handleApply = async () => {
    let FormShowOrSendAPI = {
      ...FormVideoStream,
      AUTO_CONNECT: AUTO_CONNECT,
      BITRATE: BITRATE,
      RESOLUTION: RESOLUTION,
    };
    let rs = await HandleExample(FormShowOrSendAPI);
    alert(JSON.stringify(FormShowOrSendAPI, null, 2));
    //Tuong tac voi API
  };

  const handleChangeIR = (event) => {
    setIR_IMAGE_TYPE(event.target.value);
  };
  const handleChangeVIDEO_FORMAT = (event) => {
    setVIDEO_FORMAT(event.target.value);
  };
  const handleChangeSCALE = (event) => {
    setSCALE(event.target.value);
  };
  const handleChangeAUTOSPEED = (event) => {
    setAUTO_SPEED(event.target.value);
  };

  const handleChangeAUTOCONNECT = (event) => {
    setAUTO_CONNECT(event.target.value);
  };
  const handleChangeRESOLUTION = (event) => {
    setRESOLUTION(event.target.value);
  };
  const handleChangeBITRATE = (event) => {
    setBITRATE(event.target.value);
  };
  return (
    <>
      <Box
        margin={"auto"}
        marginTop={"0px"}
        display={"flex"}
        // maxHeight={"100vh"}
        // height={"100vh"}
        // overflow={"scroll"}
        flexDirection={"column"}
        justifyContent={"space-evenly"}
        className="container rps"
        p={"1rem"}
        // sx={{ overflowY: "scroll" }}
      >
        {/* row 1 */}
        <Divider
          sx={{ fontSize: "1.2rem", fontWeight: "700", display: "none" }}
          className="show-mobile"
        >
          SYSTEMS
        </Divider>
        <Box className="row">
          <Box p={1} className="col-xs-12 col-md-4">
            {" "}
            <div className="contact-form-container">
              <form className="contact-form">
                <h2 className="form-title">IP Address</h2>
                <div className="form-group">
                  <FormControl
                    fullWidth
                    variant="standard"
                    sx={{ m: 1, minWidth: 120 }}
                  >
                    <TextField
                      id="outlined-multiline-static"
                      label="IP ADDRESS"
                      multiline
                      rows={1}
                    />
                  </FormControl>
                </div>

                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="primary">
                    Apply
                  </Button>

                  <Button variant="contained" color="error">
                    Format
                  </Button>
                </Stack>
              </form>
            </div>{" "}
          </Box>
          <Box p={1} className="col-xs-12 col-md-4">
            <div className="contact-form-container">
              <form className="contact-form">
                <h2 className="form-title">IR Camera Setting</h2>
                <div className="form-group">
                  <FormControl
                    fullWidth
                    variant="standard"
                    sx={{ m: 1, minWidth: 120 }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      SCALE
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={SCALE}
                      onChange={handleChangeSCALE}
                      label="IR Camera Setting"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="primary">
                    Apply
                  </Button>
                </Stack>
              </form>
            </div>
          </Box>
          <Box p={1} className="col-xs-12 col-md-4">
            <div className="contact-form-container">
              <form className="contact-form">
                <h2 className="form-title">Gimbal Control</h2>
                <div className="form-group">
                  <FormControl
                    fullWidth
                    variant="standard"
                    sx={{ m: 1, minWidth: 120 }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      AUTO SPEED
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={AUTO_SPEED}
                      onChange={handleChangeAUTOSPEED}
                      label="AUTO SPEED"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="primary">
                    Apply
                  </Button>
                </Stack>
              </form>
            </div>
          </Box>
        </Box>

        {/* row 2 */}

        <Box mt={2} className="row">
          <Box p={1} className="col-xs-12 col-md-6">
            <div className="contact-form-container">
              <form className="contact-form">
                <h2 className="form-title">Storage</h2>
                <div className="form-group">
                  <FormControl
                    fullWidth
                    variant="standard"
                    sx={{ m: 1, minWidth: 120 }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      IR IMAGE TYPE
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={IR_IMAGE_TYPE}
                      onChange={handleChangeIR}
                      label="IR_IMAGE_TYPE"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="form-group">
                  <FormControl
                    fullWidth
                    variant="standard"
                    sx={{ m: 1, minWidth: 120 }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      VIDEO FORMAT
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={VIDEO_FORMAT}
                      onChange={handleChangeVIDEO_FORMAT}
                      label="VIDEO FORMAT"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="primary">
                    Apply
                  </Button>
                  <Button variant="contained" color="error">
                    Format
                  </Button>
                </Stack>
              </form>
            </div>
          </Box>

          <Box p={1} className="col-xs-12 col-md-6">
            <div className="contact-form-container">
              <form className="contact-form">
                <h2 className="form-title">Storage</h2>
                <div
                  className="row"
                  style={{
                    justifyContent: "space-evenly",
                    minHeight: "60px",
                    marginBottom: "1rem",
                  }}
                >
                  <FormControl
                    fullWidth
                    className="col-xs-12 col-md-4"
                    variant="standard"
                    sx={{ m: 1, minWidth: 100 }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      AUTO CONNECT
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={AUTO_CONNECT}
                      onChange={handleChangeAUTOCONNECT}
                      label="Video Streaming"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl
                    fullWidth
                    variant="standard"
                    className="col-xs-12 col-md-3"
                    sx={{ m: 1, minWidth: 100 }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      BITRATE
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={BITRATE}
                      onChange={handleChangeBITRATE}
                      label="IR Camera Setting"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl
                    fullWidth
                    variant="standard"
                    className="col-xs-12 col-md-3"
                    sx={{ m: 1, minWidth: 100 }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      RESOLUTION
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={RESOLUTION}
                      onChange={handleChangeRESOLUTION}
                      label="RESOLUTION"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div
                  style={{
                    justifyContent: "space-evenly",
                    minHeight: "60px",
                    marginBottom: "1rem",
                  }}
                  className="row"
                >
                  <FormControl
                    fullWidth
                    variant="standard"
                    className="col-xs-12 col-md-5"
                    sx={{ m: 1, minWidth: 120 }}
                  >
                    <TextField
                      id="outlined-multiline-static"
                      label="PORT"
                      multiline
                      rows={1}
                      name="PORT"
                      value={FormVideoStream.PORT}
                      onChange={onHandleChange}
                    />
                  </FormControl>
                  <FormControl
                    fullWidth
                    variant="standard"
                    className="col-xs-12 col-md-5"
                    sx={{ m: 1, minWidth: 120 }}
                  >
                    <TextField
                      id="outlined-multiline-static"
                      label="MOUNT POINT"
                      multiline
                      rows={1}
                      name="MOUNT_POINT"
                      value={FormVideoStream.MOUNT_POINT}
                      onChange={onHandleChange}
                    />
                  </FormControl>
                </div>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="primary">
                    Apply
                  </Button>
                </Stack>
              </form>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default SYSTEMS;
