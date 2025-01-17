import { connectDBs } from './connectDatabase.js';
import mongoose from 'mongoose';

let usersSchemaExport = null;

if (process.env.NODE_ENV !== 'production') {
	const usersSchema = mongoose.Schema({
		userId: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		avatar: {
			type: String,
			required: true,
		},
		global_name: {
			type: String,
			required: true,
		},
		access_token: {
			type: String,
			required: true,
		},
		refresh_token: {
			type: String,
			required: true,
		}
	});

	const { usersDb } = connectDBs();

	usersSchemaExport = usersDb.model('users', usersSchema);
}

export { usersSchemaExport };