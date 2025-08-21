import { Request, Response } from 'express';
import path from "path";
import fs from "fs";
import multer from "multer";

class Handle_UploadAImage {

    constructor() {}

    upload = (): multer.Multer => {
        const imagePath = path.join(process.cwd(), 'data', "image");
        if (!fs.existsSync(imagePath)) {
            fs.mkdirSync(imagePath);
        }

        const storage = multer.diskStorage({
            destination: (_req, _file, cb) => {
                cb(null, imagePath);
            },
            filename: (_req, file, cb) => {
                cb(null, Date.now() + path.extname(file.originalname));
            },
        });
        const upload = multer({ storage });

        return upload;
    };

    main = async (req: Request, res: Response) => {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }
        res.json({ file: req.file.filename });
    }
}

export default Handle_UploadAImage;
