import { Paper, MenuList, MenuItem, Typography } from "@mui/material";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
const Sidebar = () => {
  return (
    <Paper sx={{ minHeight: "100vh" }}>
      <MenuList>
        <MenuItem>
          <AccountBalanceOutlinedIcon
            sx={{ color: "skyblue", fontSize: "210%", paddingX: "18px" }}
          />
        </MenuItem>
        <MenuItem sx={{ display: "flex", flexDirection: "column" }}>
          <GridViewOutlinedIcon
            sx={{
              color: "skyblue",
              marginTop: "20px",
              fontSize: "160%",
              paddingX: "10px",
            }}
          />
          <Typography
            variant="text"
            sx={{ color: "skyblue", fontSize: "13px", fontWeight: "bold" }}
          >
            Master
          </Typography>
        </MenuItem>
        <MenuItem sx={{ display: "flex", flexDirection: "column" }}>
          <FileDownloadOutlinedIcon
            sx={{
              color: "",
              marginTop: "20px",
              fontSize: "160%",
              paddingX: "10px",
            }}
          />
          <Typography
            variant="text"
            sx={{ color: "", fontSize: "13px", fontWeight: "bold" }}
          >
            Inward
          </Typography>
        </MenuItem>
        <MenuItem sx={{ display: "flex", flexDirection: "column" }}>
          <AssessmentOutlinedIcon
            sx={{
              color: "",
              marginTop: "20px",
              fontSize: "160%",
              paddingX: "10px",
            }}
          />
          <Typography
            variant="text"
            sx={{ color: "", fontSize: "13px", fontWeight: "bold" }}
          >
            Reports
          </Typography>
        </MenuItem>
        <MenuItem sx={{ display: "flex", flexDirection: "column" }}>
          <Diversity3OutlinedIcon
            sx={{
              color: "",
              marginTop: "20px",
              fontSize: "160%",
              paddingX: "10px",
            }}
          />
          <Typography
            variant="text"
            sx={{ color: "", fontSize: "13px", fontWeight: "bold" }}
          >
            References
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};

export default Sidebar;
