import { Paper, Typography, Box, Grid, Chip, Divider } from "@mui/material";
import { InventoryItem } from "../../models/model.ts";

interface SidebarProps {
  selectedItem: InventoryItem | null;
}

export default function SidebarComponent({ selectedItem }: SidebarProps) {
  if (!selectedItem) {
    return (
      <Paper elevation={2}>
        <Box p={3} textAlign="center">
          <Typography color="text.secondary">
            Select an item to view details
          </Typography>
        </Box>
      </Paper>
    );
  }

  return (
    <Paper elevation={2}>
      <Box p={3}>
        <Typography variant="h6" gutterBottom>
          Item Details
        </Typography>

        <Box my={3}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Name
          </Typography>
          <Typography variant="body1">{selectedItem.itemName}</Typography>
        </Box>

        <Box my={3}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Fleet State
          </Typography>
          <Typography variant="body1">
            {selectedItem.fleetState.replace(/_/g, " ")}
          </Typography>
        </Box>

        <Box my={3}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Position
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="caption" color="text.secondary">
                X
              </Typography>
              <Typography variant="body1">
                {selectedItem.mapPositionX.toFixed(2)}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="caption" color="text.secondary">
                Y
              </Typography>
              <Typography variant="body1">
                {selectedItem.mapPositionY.toFixed(2)}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="caption" color="text.secondary">
                Rotation
              </Typography>
              <Typography variant="body1">
                {(selectedItem.mapPositionRotation)}°
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider />

        <Box my={3}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Status
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6}>
              <Typography variant="body2">Battery</Typography>
            </Grid>
            <Grid item xs={6}>
              <Chip
                label={`${selectedItem.batteryChargePercentage}%`}
                color={
                  selectedItem.batteryChargePercentage > 20
                    ? "success"
                    : "error"
                }
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">Load Status</Typography>
            </Grid>
            <Grid item xs={6}>
              <Chip
                label={selectedItem.loaded ? "Loaded" : "Empty"}
                color={selectedItem.loaded ? "primary" : "default"}
                size="small"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Paper>
  );
}
