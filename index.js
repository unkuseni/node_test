import express from 'express';
import routes from './routes/loginRoutes.js';

// declare the ports
const PORT = process.env.PORT || 3000;
// declare the app
const app = express();


// declasre and use the routes defined in routes/loginRoutes.js
app.use('/', routes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));