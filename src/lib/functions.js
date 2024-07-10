export const addFlagToCountryCode = (/** @type {string} */ countryCode) => {
	return `${countryCode} <span class="fi fi-${countryCode.toLowerCase()} ${countryCode.toLowerCase() === 'ch' ? 'fis' : ''}"></span>`;
};
