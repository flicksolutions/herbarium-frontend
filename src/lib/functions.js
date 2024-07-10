export const addFlagToCountryCode = (/** @type {string} */ countryCode) => {
	return `${countryCode} <span class="fi fi-${countryCode.toLowerCase()} ${countryCode.toLowerCase() === 'ch' ? 'fis' : ''}"></span>`;
};

export const setGenusAndSpeciesItalic = (
	/** @type {string} */ input,
	/** @type {string} */ genus,
	/** @type {string} */ species
) => {
	return input.replace(new RegExp(`${genus}|${species}`, 'g'), `<span class="italic">$&</span>`);
};
