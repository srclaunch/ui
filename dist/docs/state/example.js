import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { DateTime } from 'luxon';
const propertyAdapter = createEntityAdapter();
export const selectors = propertyAdapter.getSelectors((state) => state.properties);
const propertySlice = createSlice({
    initialState: propertyAdapter.getInitialState({
        in_progress: false,
        initialized: false,
    }),
    name: 'properties',
    reducers: {
        addProperties: (state, action) => {
            propertyAdapter.upsertMany(state, action.payload);
            if (!state.initialized) {
                state.initialized = true;
            }
            state.last_updated = DateTime.now();
        },
        addProperty: propertyAdapter.upsertOne,
        setInProgress: (state, action) => {
            state.in_progress = action.payload;
        },
    },
});
export async function getProperty() { }
export async function getProperties() { }
export async function createProperty() { }
export async function updateProperty() { }
export async function deleteProperty() { }
export default propertySlice.reducer;
//# sourceMappingURL=example.js.map