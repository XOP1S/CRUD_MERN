import express from 'express';
import profesoresRoutes from '../routes/profesoresRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/docentes', profesoresRoutes);

const PORT = 3000; // Puerto en el que se ejecutará el servidor

const startServer = async () => {
  const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};


export default app;
