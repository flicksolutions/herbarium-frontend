import categories from './becher_categories_json.json';
import items from './becher_full_json.json';
import fullstructure from './structure.json';

/**
 * @typedef {Object.<import('@skeletonlabs/skeleton').TreeViewNode, {id: number}>} TreeNodeInteger
 */

/**
 * creates a node from a category recursively
 * @param {{id: number, title: string, title2: string, subcats?: number[]}} category
 * @returns {import('@skeletonlabs/skeleton').TreeViewNode}
 */
const createNode = (category) => {
	const subcats = [...new Set(category?.subcats?.filter((subcat) => subcat !== category.id))];
	return {
		content:
			category?.title ||
			(category?.title2 ? `no title, title2: ${category.title2}` : `No title2, id: ${category.id}`),
		id: category.id.toString(),
		children: subcats?.length
			? subcats.map((id) =>
					createNode(
						// @ts-ignore
						categories.find((cat) => cat.id === id)
					)
				)
			: []
	};
};
/**
 * @param {number[]} subcats
 * @param {Set<any>} seenIds
 */
function addSubcatsToSeenIDs(subcats, seenIds) {
	for (const subcat of subcats) {
		if (seenIds.has(subcat)) {
			continue;
		}
		seenIds.add(subcat);
		const category = categories.find((cat) => cat.id === subcat);
		if (category.subcats) {
			seenIds = addSubcatsToSeenIDs(category.subcats, seenIds);
		}
	}
	return seenIds;
}

/**
 * @param {any[]} data
 */
function getUniqueFields(data) {
	/** @type {Object} */
	const uniqueFields = {}; // Object to hold unique label-key pairs

	// Iterate through each item in the data array
	data.forEach((item) => {
		// Iterate through each field in the current item
		item.fields.forEach((field) => {
			// Use label and key as a unique identifier
			const identifier = `${field.label}-${field.key}`;

			// If this identifier hasn't been seen before, add it to uniqueFields
			if (!uniqueFields[identifier]) {
				uniqueFields[identifier] = { label: field.label, key: field.key };
			}
		});
	});

	// Convert the uniqueFields object back into an array of its values
	return Object.values(uniqueFields);
}

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	/** @type {import('@skeletonlabs/skeleton').TreeViewNode[]} */
	const filteredCategories = [];
	let seenIds = new Set();
	categories.sort((a, b) => {
		if (a.subcats && !b.subcats) {
			return -1; // 'a' comes first
		} else if (!a.subcats && b.subcats) {
			return 1; // 'b' comes first
		}
		// If both have 'subcats' or neither have it, keep original order
		return 0;
	});
	const filteredItems = items
		.filter((item) => item.prototype) // Filter out items that don't belong in the prototype
		.map((item) => {
			// eslint-disable-next-line no-unused-vars
			let { entry_type, prototype, iiif, ...rest } = item;
			iiif = iiif.replaceAll('\\', '');
			return { ...rest, iiif };
		});

	// filter the categories to only include those that have items
	const categoryIds = filteredItems.map((item) => item.category);
	const filteredCategoriesIds = new Set(categoryIds);

	for (const category of categories) {
		// does an intersection exist between the category and the filtered category ids? e.g. does the category have items?
		const intersection = [...filteredCategoriesIds].some((id) =>
			new Set([category.id, ...(category?.subcats || [])]).has(id)
		);
		if (!seenIds.has(category.id) && intersection) {
			if (category.subcats) {
				category.subcats = [
					...new Set(category.subcats.filter((subcat) => subcat !== category.id))
				];
				if (category.subcats.length === 0) {
					// @ts-ignore
					delete category.subcats;
				} else {
					seenIds = addSubcatsToSeenIDs(category.subcats, seenIds);
				}
			}
			filteredCategories.push(createNode(category));
			seenIds.add(category.id);
		}
	}

	return {
		categories: filteredCategories,
		itemstructure: fullstructure,
		allFields: getUniqueFields(fullstructure),
		items: filteredItems
	};
}
