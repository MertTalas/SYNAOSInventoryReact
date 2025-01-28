import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, CssBaseline, Container, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HeaderComponent from "./components/Header/HeaderComponent.tsx";
import ItemListComponent from "./components/ItemList/ItemListComponent.tsx";
import SidebarComponent from "./components/Sidebar/SidebarComponent.tsx";
import { InventoryItem, InventoryItems } from "./models/model.ts";
import inventoryData from "./data/example_items.json";

const theme = createTheme();

function App() {
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const items = inventoryData as InventoryItems;

  useEffect(() => {
    const itemId = searchParams.get("itemId");
    if (itemId && items[itemId]) {
      setSelectedItem(items[itemId]);
    }
  }, [searchParams]);

  const handleItemSelect = (item: InventoryItem) => {
    setSelectedItem(item);
    setSearchParams({ itemId: item.id });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ flexGrow: 1, bgcolor: "background.default", minHeight: "100vh" }}
      >
        <HeaderComponent />
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <ItemListComponent
                items={Object.values(items)}
                selectedItemId={selectedItem?.id}
                onItemSelect={handleItemSelect}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <SidebarComponent selectedItem={selectedItem} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
