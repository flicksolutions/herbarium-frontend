<script>
	import { base } from '$app/paths';
	import { addFlagToCountryCode } from '$lib/functions';
	import { blur, fly } from 'svelte/transition';
	/**
	 * @type {any[]}
	 */
	export let items = [];

	/**
	 * @type {Array<{label: string, key: string}>}
	 */
	export let structure = [];

	/**
	 * @type IntersectionObserver
	 */
	let intersectionObserver;

	function ensureIntersectionObserver() {
		if (intersectionObserver) return;

		intersectionObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.target.tagName === 'THEAD') {
					if (entry.isIntersecting) {
						showHelperElements = false;
					} else if (entry.boundingClientRect.y < 0) {
						showHelperElements = true;
					}
				} else {
					if (entry.isIntersecting) {
						if (visibleNumber < items.length) {
							visibleNumber += 30;
							intersectionObserver.unobserve(entry.target);
						} else {
							showHelperScrollbar = false;
						}
					} else {
						showHelperScrollbar = true;
					}
				}
			});
		});
	}

	/**
	 *
	 * Function that creates an IntersectionObserver instance and observes the element
	 *
	 * @param element {HTMLElement}
	 * @param abort {boolean}
	 */
	function viewport(element, abort) {
		// we only want the observer on the last Element, so we abort all but the last one i !== visibleItems.length - 1
		if (abort) return;
		ensureIntersectionObserver();

		intersectionObserver.observe(element);

		return {
			destroy() {
				intersectionObserver.unobserve(element);
			}
		};
	}

	const handleSort =
		/**
		 * @param {MouseEvent} event
		 * @param {string} key
		 */
		(event, key) => {
			// @ts-ignore
			const i = event.target?.querySelector('i');

			const sort = (/** @type {string} */ key, /** @type {string} */ order) => {
				items = items.sort((a, b) => {
					if (order === 'asc') {
						if (a[key] < b[key]) return -1;
						if (a[key] > b[key]) return 1;
						return 0;
					} else {
						if (a[key] > b[key]) return -1;
						if (a[key] < b[key]) return 1;
						return 0;
					}
				});
			};

			if (i) {
				if (i.classList.contains('fa-sort')) {
					i.classList.remove('fa-sort');
					i.classList.add('fa-sort-up');
					// set 'fa-sort' to all other i
					const elements = document.querySelectorAll('.fa-sort-up, .fa-sort-down');
					elements.forEach((element) => {
						if (element !== i) {
							element.classList.remove('fa-sort-up');
							element.classList.remove('fa-sort-down');
							element.classList.add('fa-sort');
						}
					});
					sort(key, 'asc');
				} else if (i.classList.contains('fa-sort-up')) {
					i.classList.remove('fa-sort-up');
					i.classList.add('fa-sort-down');
					sort(key, 'desc');
				} else {
					i.classList.remove('fa-sort-down');
					i.classList.add('fa-sort');
					if (items[0].hasOwnProperty('score')) {
						sort('score', 'desc');
					} else {
						sort('catalogNumber', 'desc');
					}
				}
			}
		};
	let visibleNumber = 30;
	$: visibleItems = items.slice(0, visibleNumber);

	let showHelperElements = false;
	let showHelperScrollbar = false;

	/**
	 * @type {HTMLDivElement}
	 */
	let table;

	/**
	 * @type {HTMLDivElement}
	 */
	let helperScrollbar;

	/**
	 * @type {HTMLDivElement}
	 */
	let innerScrollbar;

	$: {
		if (helperScrollbar && innerScrollbar) {
			setScrollbarSizes();
		}
	}

	const setScrollbarSizes = () => {
		helperScrollbar.style.width = `${table.clientWidth}px`;
		innerScrollbar.style.width = `${table.scrollWidth}px`;
	};
</script>

<svelte:window
	on:resize={() => {
		setScrollbarSizes();
	}}
/>

<!-- Responsive Container (recommended) -->
<div class="table-container" bind:this={table}>
	{#if showHelperElements}
		<button
			class="btn-icon variant-ghost-primary fixed top-24 right-6 z-50"
			on:click={() => {
				table.scrollIntoView({ behavior: 'smooth' });
			}}
			in:fly={{ x: 100 }}
			out:blur
		>
			<i class="fa-solid fa-arrows-up-to-line"></i>
		</button>
	{/if}
	<table class="table table-interactive">
		<thead use:viewport={false}>
			<tr>
				<th class="table-cell-fit">Scientific Name</th>
				{#each structure as { key, label }}
					<th class="hover:cursor-pointer table-cell-fit" on:click={(e) => handleSort(e, key)}>
						{label} <i class="fa-solid pointer-events-none fa-sort"></i>
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each visibleItems as row, i (row.catalogNumber)}
				<tr use:viewport={i !== visibleItems.length - 1}>
					<td class="table-cell-fit">
						<a href={`${base}/item/${row.catalogNumber}`}>
							<i class="fa-solid fa-camera"></i>
							{row.genus}
							{row.specificEpithet}
						</a>
					</td>
					{#each structure as { key }}
						{#if key === 'countryCode'}
							<td class="table-cell-fit">
								{@html addFlagToCountryCode(row[key])}
							</td>
						{:else}
							<td class="table-cell-fit"
								><a href={`${base}/item/${row.catalogNumber}`}>{row[key]}</a></td
							>
						{/if}
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
{#if showHelperScrollbar}
	<div
		class="helper-scrollbar fixed bottom-0 overflow-x-auto h-4"
		bind:this={helperScrollbar}
		on:scroll={(e) => {
			// @ts-ignore
			table.scrollLeft = e.target.scrollLeft;
		}}
	>
		<div class="inner-scrollbar h-px" bind:this={innerScrollbar}></div>
	</div>
{/if}
