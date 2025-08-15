import db from "../config/db.js";

class Tracks {
    async all(page = 1, pageSize = 10) {
        const offset = (page - 1) * pageSize;
        return await db.all("SELECT * FROM tracks LIMIT ? OFFSET ?", pageSize, offset);
    }

    async count() {
        const row = await db.get("SELECT COUNT(*) AS count FROM tracks");
        return row?.count || 0;
    }

    async trackById(trackId) {
        return await db.get("SELECT * FROM tracks WHERE TrackId = ?", trackId);
    }

    async final_exam_q5(){
        return await db.all(`
            SELECT tracks.Name, tracks.Composer 
            FROM tracks 
            JOIN playlist_track ON tracks.TrackId = playlist_track.TrackId
            JOIN playlists ON playlist_track.PlaylistId = playlists.PlaylistId
            WHERE playlists.Name = 'Brazilian Music'
            ORDER BY tracks.Name ASC
            LIMIT 10`);
    }
}

export default new Tracks();