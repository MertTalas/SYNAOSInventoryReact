export interface InventoryItem {
  id: string;
  itemName: string;
  mapPositionX: number;
  mapPositionY: number;
  mapPositionRotation: number;
  fleetState: "IN_FLEET" | "OUT_OF_FLEET";
  loaded: boolean;
  loadFromTransportOrder?: boolean;
  batteryChargePercentage: number;
}

export type InventoryItems = {
  [key: string]: InventoryItem;
};
