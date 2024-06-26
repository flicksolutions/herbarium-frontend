import itemData from '$lib/combined-data.json';
import structure from '$lib/structure.json';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	const item = itemData.find((item) => item.catalogNumber === params.slug);

	return {
		key: params.slug,
		metadata: item,
		iiif: await fetch(`https://iiif.ub.unibe.ch/image/v3/${item?.['Image GUID']}/info.json`).then(
			(res) => res.json()
		),
		structure
	};
}
