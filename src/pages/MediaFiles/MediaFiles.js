import "../../assets/css/Systems.css";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  DATAIMAGESMOCK as itemData,
  DATAVIDEOSMOCK as itemVideo,
} from "../../data/mockData";

import { Button, Divider, Stack, Typography } from "@mui/material";
const MEDIAFILES = () => {
  return (
    <>
      <Box
        margin={"auto"}
        marginTop={"0px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-evenly"}
        className="container rps"
      >
        <Divider
          sx={{ fontSize: "1.2rem", fontWeight: "700", display: "none" }}
          className="show-mobile"
        >
          MEDIA-FILES
        </Divider>
        <Box mt={2} className="row">
          <Box p={1} className="col-xs-12 col-md-6">
            <div style={{ padding: "0px" }} className="contact-form-container">
              <form
                className="contact-form"
                style={{ height: "80vh", maxHeight: "710px" }}
              >
                <Typography
                  variant="h5"
                  color={"#333333"}
                  fontWeight={"700"}
                  alignItems={"flex-start"}
                >
                  IMAGES
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="primary">
                    DOWLOAD ALL IMAGES
                  </Button>
                  <Button variant="contained" color="error">
                    DELETE ALL IMAGES
                  </Button>
                </Stack>
                <ImageList sx={{ width: "100%" }} cols={3} rowHeight={200}>
                  {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                        className="TriggerHover"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </form>
            </div>
          </Box>
          <Box p={1} className="col-xs-12 col-md-6">
            <div style={{ padding: "0px" }} className="contact-form-container">
              <form
                className="contact-form"
                style={{ height: "80vh", maxHeight: "710px" }}
              >
                <Typography
                  variant="h5"
                  color={"#333333"}
                  fontWeight={"700"}
                  alignItems={"flex-start"}
                >
                  VIDEOS
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="primary">
                    DOWLOAD ALL VIDEO
                  </Button>
                  <Button variant="contained" color="error">
                    DELETE ALL VIDEO
                  </Button>
                </Stack>
                <Box
                  className="row"
                  sx={{
                    height: "100%",
                    overflowY: "scroll",
                    overflowX: "hidden",
                  }}
                >
                  {itemVideo.map((item, index) => (
                    <Box
                      mb={3}
                      className="col-xs-12 col-md-12"
                      mr={2}
                      key={index}
                    >
                      <Typography variant="caption">{item.title}</Typography>
                      <video
                        controls
                        height={"150"}
                        width={"100%"}
                        loading="lazy"
                      >
                        <source src={item.video} type="video/mp4" />
                      </video>
                    </Box>
                  ))}
                </Box>
              </form>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default MEDIAFILES;
