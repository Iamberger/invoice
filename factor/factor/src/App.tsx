import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomerInfo, setSelectedItem } from './store';
import { RootState } from './store';
import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const customerInfo = useSelector((state: RootState) => state.invoice);

  const handleChange = (key: keyof typeof customerInfo) => (
    event: React.ChangeEvent<HTMLInputElement | { value: unknown }>
  ) => {
    const value = 'value' in event.target ? event.target.value : event.target.value;
    dispatch(setCustomerInfo({ ...customerInfo, [key]: value }));
  };

  const handleGenerateInvoice = () => {
    console.log('Generating invoice:', customerInfo);
  };

  const handleItemChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedItem = event.target.value as string;
    dispatch(setSelectedItem(selectedItem));
  };

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Classified Invoice
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              value={customerInfo.firstName}
              onChange={handleChange('firstName')}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              value={customerInfo.lastName}
              onChange={handleChange('lastName')}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Contact Number"
              value={customerInfo.contactNumber}
              onChange={handleChange('contactNumber')}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Residence"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="Age"
              value={customerInfo.age}
              onChange={handleChange('age')}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="Purchase Amount"
              value={customerInfo.purchaseAmount}
              onChange={handleChange('purchaseAmount')}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel id="items-label">Items</InputLabel>
              <Select
                labelId="items-label"
                id="items"
                value={customerInfo.selectedItem}
                label="Items"
                onChange={handleItemChange}
              >
                <MenuItem value="nike">Nike</MenuItem>
                <MenuItem value="adidas">Adidas</MenuItem>
                <MenuItem value="puma">Puma</MenuItem>
                <MenuItem value="jordans">Jordans</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="primary" onClick={handleGenerateInvoice}>
            Generate Invoice
          </Button>
        </Box>
        {customerInfo.firstName && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" align="center" gutterBottom>
              Invoice Details
            </Typography>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography>Name: {customerInfo.firstName} {customerInfo.lastName}</Typography>
              <Typography>Contact Number: {customerInfo.contactNumber}</Typography>
              <Typography>Age: {customerInfo.age}</Typography>
              <Typography>Purchase Amount: ${customerInfo.purchaseAmount}</Typography>
              <Typography>Selected Item: {customerInfo.selectedItem}</Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1">Credit Card Details:</Typography>
                <Typography>Card Number: 1122 2211 4321 1234</Typography>
                <Typography>Expiry Date: 12/24</Typography>
                <Typography>CVV: 908</Typography>
              </Box>
            </Paper>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default App;
