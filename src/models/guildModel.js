import { connectDBs } from './connectDatabase.js';
import mongoose from 'mongoose';

let guildSchemaExport = null;

if (process.env.NODE_ENV !== 'production') {
const guildSchema = mongoose.Schema({
	guildId: {
		type: String,
		required: true,
	}, guildName: {
		type: String,
		required: true,
	}, guildCreatedAt: {
		type: Date,
	}, guildCreatedAtTimestamp: {
		type: Number,
	}, guildClientJoinedAt: {
		type: Date,
	}, guildJoinedCurrently: {
		type: Boolean,
		required: true,
	},
});
	const { usersDb } = connectDBs();
	guildSchemaExport = usersDb.model('guilds', guildSchema);
}
	export { guildSchemaExport }
