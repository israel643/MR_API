import express from 'express';
import exampleRoute from './services/Example_Services/routerExample';
import productsRoute from './services/product_Service/productsRoutes'

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/api', exampleRoute);
app.use('/api/products', productsRoute)

// Error middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

export default app;
