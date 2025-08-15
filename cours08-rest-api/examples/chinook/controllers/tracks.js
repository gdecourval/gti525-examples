import model from '../models/tracks.js';
import { AbstractController, Response } from "./abstract.js";

class TracksController extends AbstractController {

    async all(req, res) {
        const page = super.currentPage(req);
        const pageSize = super.getPageSize(req);
        try {
            const count = await model.count();
            const results = await model.all(page, pageSize);
            let links = super.createLinks(req, count, page, pageSize);
            res.json(Response.ok(results, count, links));
        } catch (error) {
            res.status(505).json(Response.error("Erreur lors de la récupération des pistes."));
        }
    }

    async trackById(req, res) {
        const trackId = req?.params?.trackId;
        if (trackId) {
            const result = await model.trackById(parseInt(trackId));
            if (result) {
                return res.json(Response.ok(result));
            }
        }
        res.json(Response.notFound("Piste introuvable."));
    }

    async final_exam_q5(req, res) {
        try {
            const results = await model.final_exam_q5();
            res.json(Response.ok(results));
        } catch (error) {
            console.error("Erreur lors de la récupération des pistes pour l'examen final Q5:", error);
            res.status(505).json(Response.error("Erreur lors de la récupération des pistes."));
        }
    }
}

export default new TracksController();