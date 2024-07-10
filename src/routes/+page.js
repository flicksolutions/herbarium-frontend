import itemData from '$lib/combined-data.json';
import structure from '$lib/structure.json';

/** @type {import('./$types').PageLoad} */
export async function load() {
	return {
		categories: Object.keys(itemData[0]),
		itemstructure: structure,
		items: itemData.sort((a, b) => {
			if (a.genus < b.genus) return -1;
			if (a.genus > b.genus) return 1;
			if (a.specificEpithet < b.specificEpithet) return -1;
			if (a.specificEpithet > b.specificEpithet) return 1;
			return 0;
		})
	};
}
