import "../../assets/css/Systems.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

const CUSTOMEMODELS = () => {
  const [CameraEO, setCameraEO] = useState("");

  const [CameraIR, setCameraIR] = useState("");
  const handleChangeCameraEO = (event) => {
    setCameraEO(event.target.value);
  };
  const handleChangeCameraIR = (event) => {
    setCameraIR(event.target.value);
  };

  const [formData, setFormData] = useState({
    camEO: "",
    camIR: "",
    file: "",
  });
  const [errors, setErrors] = useState("");
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  const validate = () => {
    const newErrors = {};
    if (!formData.file) {
      newErrors.file = "File is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} className="container rps">
        {/* row 1 */}
        <Divider
          sx={{ fontSize: "1.2rem", fontWeight: "700", display: "none" }}
          className="show-mobile"
        >
          CUSTOM MODEL
        </Divider>
        <Box mt={2} className="row">
          <Box p={1} className="col-xs-12 col-md-6">
            <div className="contact-form-container">
              <form className="contact-form">
                <h2 className="form-title">Default Models</h2>
                <div className="form-group">
                  <FormControl
                    fullWidth
                    variant="standard"
                    sx={{ m: 1, minWidth: 120 }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      Camera EO:
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      label="IR_IMAGE_TYPE"
                      onChange={handleChangeCameraEO}
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
                      Camera IR:
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      label="VIDEO FORMAT"
                      onChange={handleChangeCameraIR}
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
          <Box p={1} className="col-xs-12 col-md-6">
            <div className="contact-form-container">
              <form
                className="contact-form"
                style={{ justifyContent: "space-between" }}
              >
                <h2 className="form-title">Setup Models with Parameters</h2>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                  height={"100px"}
                  mb={10}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    width={"50%"}
                  >
                    <Typography variant="h5">Camera EO:</Typography>
                    <span style={{ color: "green", fontSize: "20px" }}>
                      {CameraEO}
                    </span>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    width={"50%"}
                  >
                    <Typography variant="h5">Camera IR:</Typography>
                    <span style={{ color: "green", fontSize: "20px" }}>
                      {CameraIR}
                    </span>
                  </Box>
                </Box>
              </form>
            </div>
          </Box>
        </Box>
        {/* row 2 */}
        <Box mt={2} className="row">
          <Box p={1} className="col-xs-12 col-md-12">
            <div className="contact-form-container">
              <form className="contact-form">
                <h2 className="form-title">Default Models</h2>
                <Stack
                  direction="row"
                  alignContent={"center"}
                  justifyContent={"center"}
                  spacing={2}
                >
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    color="secondary"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                  >
                    Choose File
                    <VisuallyHiddenInput name="file" id="file" type="file" />
                  </Button>
                  <Button
                    component="label"
                    onClick={() => {
                      console.log("haha");
                      validate();
                    }}
                    variant="contained"
                    tabIndex={-1}
                  >
                    Upload file
                  </Button>
                </Stack>{" "}
                {errors.file ? (
                  <Typography
                    textAlign={"center"}
                    variant="body2"
                    color={"red"}
                  >
                    * {errors.file}
                  </Typography>
                ) : (
                  ""
                )}
              </form>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default CUSTOMEMODELS;
