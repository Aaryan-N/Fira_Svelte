import { connectDBs } from './connectDatabase.js';
import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
	userId: {
		type: String,
		required: true,
	}, username: {
		type: String,
		required: true,
	}, avatar: {
		type: String,
		required: true,
	}, global_name: {
		type: String,
		required: true,
	}
});

const { usersDb } = connectDBs();

export const usersSchemaExport = usersDb.model('users', usersSchema);

