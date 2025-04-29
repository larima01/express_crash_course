import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
import logger from  './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
const PORT = process.env.PORT || 9000;

const app = express();

//Logger middleware
app.use(logger);
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api/posts', posts);

//Errorhandler
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));