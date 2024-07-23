import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import "../../assets/css/HomePage.css";
import VIOLOGO from "../../assets/img/vio-logo-1(transparent).png";
import GIF from "../../assets/img/VIO.gif";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SVG from "./svg";

const HomePage = () => {
  let nav = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Box className="row containerContent" height={"104vh"}>
        <Box className="div-corner  show-in-moblie">
          <ButtonGroup
            variant="text"
            sx={{ display: "flex", justifyContent: "space-between" }}
            aria-label="Basic button group"
          >
            <Button
              sx={{ color: "white" }}
              onClick={() => {
                nav("/SYSTEMS");
              }}
            >
              SYSTEMS
            </Button>
            <Button
              sx={{ color: "white" }}
              onClick={() => {
                nav("/MEDIA-FILES");
              }}
            >
              MEDIA FILES
            </Button>
            <Button
              sx={{ color: "white" }}
              onClick={() => {
                nav("/IR-RADIOMETRIC");
              }}
            >
              IR RADIOMETRIC
            </Button>
          </ButtonGroup>

          <ButtonGroup
            variant="text"
            sx={{ display: "flex", justifyContent: "space-between" }}
            aria-label="Basic button group"
          >
            <Button
              sx={{ color: "white" }}
              onClick={() => {
                nav("/REMOTE-CHANNELS");
              }}
            >
              REMOTE CHANNELS
            </Button>
            <Button
              sx={{ color: "white" }}
              onClick={() => {
                nav("/CUSTOM-MODELS");
              }}
            >
              CUSTOM MODELS
            </Button>
            <Button
              sx={{ color: "white" }}
              onClick={() => {
                nav("/OTA-UPDATES");
              }}
            >
              OTA UPDATES
            </Button>
          </ButtonGroup>
        </Box>
        <Box top={"89%"} className="div-corner show-in-moblie">
          <ButtonGroup
            variant="text"
            sx={{ display: "flex", justifyContent: "space-between" }}
            aria-label="Basic button group"
          >
            <Button sx={{ color: "white" }}>© 2024 Gremsy</Button>
            <Button sx={{ color: "white" }}>Version 1.0.8</Button>
            <Button sx={{ color: "white" }}>Build Date: May 21, 2024</Button>
          </ButtonGroup>
        </Box>
        <SVG></SVG>

        <Box
          className="col-xs-12 col-md-7 hide-in-moblie"
          display={"flex"}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <ul
            data-aos="slide-left"
            data-aos-duration="2000"
            className="LisItem "
          >
            <li
              onClick={() => {
                nav("/SYSTEMS");
              }}
              className="Item"
            >
              SYSTEMS
            </li>

            <li
              className="Item"
              onClick={() => {
                nav("/MEDIA-FILES");
              }}
            >
              MEDIA FILES
            </li>

            <li
              className="Item"
              onClick={() => {
                nav("/IR-RADIOMETRIC");
              }}
            >
              IR RADIOMETRIC
            </li>
            <li
              className="Item"
              onClick={() => {
                nav("/REMOTE-CHANNELS");
              }}
            >
              REMOTE CHANNELS
            </li>
            <li
              className="Item"
              onClick={() => {
                nav("/CUSTOM-MODELS");
              }}
            >
              CUSTOM MODELS
            </li>

            <li
              className="Item"
              onClick={() => {
                nav("/OTA-UPDATES");
              }}
            >
              OTA UPDATE
            </li>
            <li>
              <hr style={{ backgroundColor: "white" }}></hr>
            </li>
            <li style={{ textAlign: "end" }}>
              <Typography color={"white"} variant="subtitle2">
                © 2024 Gremsy
              </Typography>
            </li>
            <li style={{ textAlign: "end" }}>
              {" "}
              <Typography color={"white"} variant="subtitle2">
                Version 1.0.8
              </Typography>
            </li>
            <li style={{ textAlign: "end" }}>
              <Typography color={"white"} variant="subtitle2">
                Build Date: May 21, 2024
              </Typography>
            </li>
          </ul>
        </Box>
        <Box
          className={isMobile ? "col-xs-12 col-md-12" : "col-xs-12 col-md-5"}
          display={"flex"}
          style={{ padding: isMobile ? "22%" : "0px" }}
          //   bgcolor={"white"}
        >
          <Box
            sx={{ paddingBottom: isMobile ? "0" : "10%" }}
            display={"flex"}
            flexDirection="column"
            alignItems="start"
            justifyContent="center"
            margin={"auto"}
          >
            <img
              style={{ alignSelf: "center" }}
              src={VIOLOGO}
              alt="1"
              width={isMobile ? "70%" : "30%"}
              height={"auto"}
              data-aos="zoom-in"
              data-aos-duration="2000"
            />
            <img
              style={{ alignSelf: "center" }}
              src={GIF}
              height={"auto"}
              data-aos="zoom-in"
              data-aos-duration="2000"
              alt="GIF"
              className="main-gif"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default HomePage;
