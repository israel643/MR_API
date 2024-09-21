import express from 'express';
import exampleRoute from './services/Example_Services/routerExample';


const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/api', exampleRoute);

// Error middleware


export default app;
