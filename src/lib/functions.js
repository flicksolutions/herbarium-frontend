import { get } from 'svelte/store';
import { biggerPicture } from './stores';

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

export const openLightbox = (/** @type {any} */ target) => {
	get(biggerPicture).open({
		// @ts-ignore
		items: {
			img: target.src,
			width: target.attributes.width.value,
			height: target.attributes.height.value
		}
	});
};
