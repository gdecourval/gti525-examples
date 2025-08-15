import express from 'express';
import artistsRouter from './routers/artists.js';
import albumsRouter from './routers/albums.js';
import tracksRouter from './routers/tracks.js';

const PORT = process.env.NODE_PORT || 3000;

const app = express();
app.use(express.json());

app.use("/api/artists", artistsRouter);
app.use("/api/albums", albumsRouter);
app.use("/api/tracks", tracksRouter);

app.listen(PORT, () => {
    console.log(`Serveur écoutant sur le port ${PORT}`)
});