import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InvoiceState {
  firstName: string;
  lastName: string;
  contactNumber: string;
  age: number;
  purchaseAmount: number;
  selectedItem: string; 
  
}

const initialState: InvoiceState = {
  firstName: '',
  lastName: '',
  contactNumber: '',
  age: 0,
  purchaseAmount: 0,
  selectedItem: '', 
};

const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    setCustomerInfo: (state, action: PayloadAction<InvoiceState>) => {
      return { ...state, ...action.payload };
    },
    setSelectedItem: (state, action: PayloadAction<string>) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { setCustomerInfo, setSelectedItem } = invoiceSlice.actions;

export const store = configureStore({
  reducer: {
    invoice: invoiceSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
