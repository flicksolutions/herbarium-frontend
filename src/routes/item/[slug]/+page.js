import itemData from '$lib/data.json';
import structure from '$lib/structure.json';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	const item = itemData.find((item) => item.materialEntityID === params.slug);

	return {
		key: params.slug,
		metadata: item,
		iiif:
			(await fetch(`https://iiif.ub.unibe.ch/image/v3/${item?.['ImageGUID']}/info.json`).then(
				(res) => {
					return res.ok ? res.json() : false;
				}
			)) ?? false,
		structure
	};
}
