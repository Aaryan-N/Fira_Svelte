let decryptedToken = '';
import { redirect } from '@sveltejs/kit'
import { createRequire } from "node:module";
import { usersSchemaExport } from '../../../models/userModel.js';
const require = createRequire(import.meta.url);
const { decode } = require('jsonwebtoken');
import axios from 'axios';

let decodeToken = '';

export const load = async ({ locals }) => {

	const token = locals.user;

	try {
		const decoderToken = await decode(token);
		decodeToken = decoderToken.sub
		console.log(decodeToken)
	} catch (e) {
		throw redirect(303, '/errors')
	}

	let userOAuthInfo = await usersSchemaExport.findOne({
		userId: decodeToken
	});

	let access_token = '';

	if (userOAuthInfo === null) {
		throw redirect(303, '/errors');
	} else {
		access_token = userOAuthInfo.access_token;
	}

	const userGuilds = await axios.get(
		'https://discord.com/api/users/@me/guilds', {
			headers: {
				authorization: `Bearer ${access_token}`,
			}
		});

	const userGuild = userGuilds.data;
	const userGuildMap = userGuild.map(guild => guild.id)
	const userPermGuildMap = userGuild.map(guild => guild.permissions)
	const userIconGuildMap = userGuild.map(guild => guild.icon)
	const userGuildNameMap = userGuild.map(guild => guild.name)

	function findValuesAtPositions(arr1, value, arr2, arr3, arr4) {
		let indices = [];
		let resultFromArr2 = [];
		let resultFromArr3 = [];
		let resultFromArr4 = [];

		arr1.forEach((element, index) => {
			if (element === value) {
				indices.push(index);
			}
		});

		indices.forEach(index => {
			resultFromArr2.push(arr2[index]);
			resultFromArr3.push(arr3[index]);
			resultFromArr4.push(arr4[index]);
		});

		return {
			arr2Values: resultFromArr2,
			arr3Values: resultFromArr3,
			arr4Values: resultFromArr4
		};
	}

	const resultsOfGuilds = findValuesAtPositions(userPermGuildMap, 2147483647, userGuildNameMap, userGuildMap, userIconGuildMap);

	const serverIdsArray = resultsOfGuilds.arr3Values
	const serverNameArray = resultsOfGuilds.arr2Values
	const serverIconIdsArray = resultsOfGuilds.arr4Values

	let guildDataArrays = serverIdsArray.map((id, index) => ({
		id: id,
		name: serverNameArray[index],
		icon: serverIconIdsArray[index],
	}));

	return {
		finalGuildOutputMap: guildDataArrays
	}
}

