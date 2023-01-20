import "reflect-metadata";
import { Router } from "express";
import { container } from "tsyringe";
import { GalleryController } from "../controllers/GalleryController";

const Gallery = container.resolve(GalleryController);

const router = Router();

router.post("/create_gallery", Gallery.create);
router.get("/list_gallery", Gallery.index);
router.patch("/update_gallery/:id", Gallery.update);
router.delete("/delete/:id([0-9]+)", Gallery.delete);

export default router;
