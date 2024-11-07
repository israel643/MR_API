import express from 'express';
import exampleRoute from './services/Example_Services/routerExample';
import productsRoute from './services/product_Service/productsRoutes';
import categoriesRoute from './services/category_Service/categoriesRouter';
import suppliersRoute from './services/suppliers_Service/suppliersRouter';
import clientsRoute from './services/customers_Service/customersRouter';
import brandRoute from './services/brand_Service/brandRouter';
import measurementUnitRouter from './services/measurementUnits_Service/measurementUnitsRouter';
import paymentMethodRouter from './services/paymentMethod_Service/paymentMethodRouter';
import purchasePriceHistoryRouter from './services/product_Service/purchase_price_history_Service/purchasePriceHistoryRouter';
import salesRouter from './services/sales_Service/salesRouter';
import movementsRouter from './services/movements_Service/movementsRouter';
import adjustmentRouter from './services/adjustment_Service/adjustmentRouter';

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/api', exampleRoute);
app.use('/api/products', productsRoute);
app.use('/api/categories', categoriesRoute);
app.use('/api/suppliers', suppliersRoute);
app.use('/api/customers', clientsRoute);
app.use('/api/brands', brandRoute);
app.use('/api/um', measurementUnitRouter);
app.use('/api/paymentMethod', paymentMethodRouter);
app.use('/api/priceHistory', purchasePriceHistoryRouter);
app.use('/api/sales', salesRouter);
app.use('/api/movements', movementsRouter);
app.use('/api/adjustment', adjustmentRouter);

// Error middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

export default app;
