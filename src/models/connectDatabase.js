import * as dotenv from 'dotenv';
dotenv.config({ path: '../../.env', encoding: 'utf8' });
import mongoose from 'mongoose';

export function connectDBs() {
	try {
		const usersDb = mongoose.createConnection(process.env.MONGOURLUSERS, {});
		return { usersDb };
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
}

try {
	console.log("Connected to Mongo DB!");
} catch (e) {
	console.log(error);
}
