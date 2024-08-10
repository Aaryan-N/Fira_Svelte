import * as dotenv from 'dotenv';
dotenv.config({ path: '../../.env', encoding: 'utf8' });
import mongoose from 'mongoose';

export function connectDBs() {
	if (process.env.NODE_ENV !== 'production') {
			const usersDb = mongoose.createConnection(process.env.MONGOURLUSERS, {});
			console.log("Connected to Mongo DB!");
			return { usersDb };
} else {
		console.log("Currently building hold it!")
	}
}
