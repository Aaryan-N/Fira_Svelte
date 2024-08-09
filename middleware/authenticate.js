import { createRequire } from "module";
const require = createRequire(import.meta.url);
const cookieParser = require("cookie-parser");
import express from 'express';
const jwt = require('jsonwebtoken');

const app = express();
app.use(cookieParser());

export default async (res, req) => {





}