import { type CanvasContextType, type Item } from "./context";

export const defaultValue: CanvasContextType = {
    items: [],
    addItem: function(item: Item) {
        debugger
        this.items = [...this.items, item];
    },
}