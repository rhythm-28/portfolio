import { react, useState, useEffect, useRef } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

function Footer(props) {
  const { current, setCurrent } = props;

  const [value, setValue] = useState("home");
  const ref = useRef(null);

  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [value]);

  return (
    <div>
      <Box sx={{ pb: 7 }} ref={ref}>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              console.log("id", event);
              setValue(newValue);
              setCurrent(newValue);
            }}
            style={{ backgroundColor: "#212121", color: "white" }}
          >
            <BottomNavigationAction
              id="2"
              style={
                current === "about" ? { color: "#1976d2" } : { color: "white" }
              }
              value="about"
              label="About"
              icon={<InfoIcon />}
            />
            <BottomNavigationAction
              id="1"
              style={
                current === "home" ? { color: "#1976d2" } : { color: "white" }
              }
              value="home"
              label="Home"
              icon={<HomeIcon />}
            />

            <BottomNavigationAction
              id="3"
              style={
                current === "contact"
                  ? { color: "#1976d2" }
                  : { color: "white" }
              }
              value="contact"
              label="Contact"
              icon={<PermContactCalendarIcon />}
            />
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  );
}

export default Footer;
