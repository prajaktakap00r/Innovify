import multer from "multer";
import DataParser from "datauri/parser.js";
import path from "path";
const storage = multer.memoryStorage();
const upload = multer({ storage });
export const formatImage = (file) => {
  console.log(file);
};
export default upload;
