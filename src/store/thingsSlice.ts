import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Thing } from "@/interfaces/Thing";

interface ThingsState {
  things: Thing[];
}

const initialState: ThingsState = {
  things: [],
};

const thingsSlice = createSlice({
  name: "things",
  initialState,
  reducers: {
    addThing: (state, action: PayloadAction<string>) => {
      const newThing: Thing = {
        id: uuidv4(),
        text: action.payload,
        done: false,
      };
      state.things.push(newThing);
    },
    toggleThing: (state, action: PayloadAction<string>) => {
      const thing = state.things.find((thing) => thing.id === action.payload);
      if (thing) {
        thing.done = !thing.done;
      }
    },
    deleteThing: (state, action: PayloadAction<string>) => {
      state.things = state.things.filter(
        (thing) => thing.id !== action.payload
      );
    },
  },
});

export const { addThing, toggleThing, deleteThing } = thingsSlice.actions;
export default thingsSlice.reducer;
