import "../../assets/css/Systems.css";

import Box from "@mui/material/Box";

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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const IradioMetric = () => {
  return (
    <>
      <Box
        margin={"auto"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-evenly"}
        className="container rps"
        marginTop={"-0.25rem"}
      >
        {/* row 1 */}
        <Divider
          sx={{ fontSize: "1.2rem", fontWeight: "700", display: "none" }}
          className="show-mobile"
        >
          ENVIRONMENTAL FACTORS
        </Divider>
        <Box className="row">
          <Box p={1} className="col-xs-12 col-md-6">
            {" "}
            <div className="contact-form-container">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography> ENVIRONMENTAL FACTORS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <form
                    className="contact-form"
                    style={{
                      height: "60vh",
                      maxHeight: "46rem",
                      overflowY: "auto",
                      overflowX: "hidden",
                    }}
                  >
                    <h2 className="form-title">Video Streaming</h2>
                    {/* Atmos_Temp (K) Distance (m)  */}
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
                        variant="standard"
                        className="col-xs-12 col-md-5"
                        sx={{ m: 1, minWidth: 100 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Atmos_Temp (K)
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
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
                        className="col-xs-12 col-md-5"
                        sx={{ m: 1, minWidth: 100 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Distance (m)
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
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

                    {/* EmissiviTy Target (%)  Humidity (%)*/}
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
                        variant="standard"
                        className="col-xs-12 col-md-5"
                        sx={{ m: 1, minWidth: 100 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          EmissiviTy Target (%)
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
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
                        className="col-xs-12 col-md-5"
                        sx={{ m: 1, minWidth: 100 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Humidity (%)
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
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

                    {/* ModifyB ModifyK */}
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
                        variant="standard"
                        className="col-xs-12 col-md-5"
                        sx={{ m: 1, minWidth: 100 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          ModifyB
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
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
                        className="col-xs-12 col-md-5"
                        sx={{ m: 1, minWidth: 100 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          ModifyK
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
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

                    {/* Window Reflect Temp (K) */}
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
                        variant="standard"
                        className="col-xs-12 col-md-5"
                        sx={{ m: 1, minWidth: 100 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Window Reflect Temp (K)
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
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
                        className="col-xs-12 col-md-5"
                        sx={{ m: 1, minWidth: 100 }}
                      >
                        <TextField
                          id="outlined-multiline-static"
                          label="Temperature Unit"
                          multiline
                          rows={1}
                        />
                      </FormControl>
                    </div>

                    <Stack direction="row" spacing={2}>
                      <Button variant="contained" color="primary">
                        Apply
                      </Button>
                    </Stack>
                  </form>
                </AccordionDetails>
              </Accordion>
            </div>{" "}
          </Box>
          <Box p={1} className="col-xs-12 col-md-6">
            {" "}
            <div className="contact-form-container">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography> ISOTHERMS REGIONS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <form
                    className="contact-form"
                    style={{
                      height: "60vh",
                      maxHeight: "46rem",
                      overflowY: "auto",
                      overflowX: "hidden",
                    }}
                  >
                    <h2 className="form-title">Video Streaming</h2>
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
                        className="col-xs-12 col-md-5"
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Mode
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
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
                        className="col-xs-12 col-md-5"
                        sx={{ m: 1, minWidth: 120 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Range
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
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
                          label="Lower Temp (℃)"
                          multiline
                          rows={1}
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
                          label="Upper Temp (℃)"
                          multiline
                          rows={1}
                        />
                      </FormControl>
                    </div>

                    <Stack direction="row" spacing={2}>
                      <Button variant="contained" color="primary">
                        Apply
                      </Button>
                    </Stack>
                  </form>
                </AccordionDetails>
              </Accordion>
            </div>{" "}
          </Box>
        </Box>
        {/* row 2 */}
      </Box>
    </>
  );
};
export default IradioMetric;
