export const addFlagToCountry = (/** @type {string} */ country) => {
	return `${country} <span class="fi fi-${country.toLowerCase()} ${country.toLowerCase() === 'ch' ? 'fis' : ''}"></span>`;
};

export const setGenusAndSpeciesItalic = (
	/** @type {string} */ input,
	/** @type {string} */ genus,
	/** @type {string} */ species
) => {
	return input.replace(new RegExp(`${genus}|${species}`, 'g'), `<span class="italic">$&</span>`);
};
