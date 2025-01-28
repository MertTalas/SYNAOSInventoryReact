import {
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import BatteryAlertIcon from "@mui/icons-material/BatteryAlert";
import { InventoryItem } from "../../models/model.ts";

interface ItemListProps {
  items: InventoryItem[];
  selectedItemId?: string;
  onItemSelect: (item: InventoryItem) => void;
}

export default function ItemListComponent({
  items,
  selectedItemId,
  onItemSelect,
}: ItemListProps) {
  return (
    <Paper elevation={2}>
      <Box p={2}>
        <Typography variant="h6" gutterBottom>
          Inventory Items
        </Typography>
        <List>
          {items.map((item) => (
            <ListItem
              key={item.id}
              disablePadding
              secondaryAction={
                <Box>
                  <Chip
                    icon={
                      item.batteryChargePercentage > 20 ? (
                        <BatteryFullIcon />
                      ) : (
                        <BatteryAlertIcon />
                      )
                    }
                    label={`${item.batteryChargePercentage}%`}
                    color={
                      item.batteryChargePercentage > 20 ? "success" : "error"
                    }
                    size="small"
                    sx={{ mr: 1 }}
                  />
                  {item.loaded && (
                    <Chip label="Loaded" color="primary" size="small" />
                  )}
                </Box>
              }
            >
              <ListItemButton
                selected={selectedItemId === item.id}
                onClick={() => onItemSelect(item)}
              >
                <ListItemText
                  primary={item.itemName}
                  secondary={`Status: ${item.fleetState.replace(/_/g, " ")}`}
                  />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );
}
