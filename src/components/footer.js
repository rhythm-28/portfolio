import { react, useState, useEffect, useRef } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Box,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import "../stylesheets/footer.css";

function Footer() {

  const [value, setValue] = useState(0);
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
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="About" icon={<InfoIcon />} />
            <BottomNavigationAction label="Contact" icon={<PermContactCalendarIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
      ); }
    </div>
  );
}

export default Footer;
