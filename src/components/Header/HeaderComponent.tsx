import { AppBar, Toolbar, Typography } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";

export default function HeaderComponent() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#fc3b53" }}>
      <Toolbar>
        <InventoryIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div">
          Inventory Management
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
