<script>
	import { base } from '$app/paths';
	export let items = [];
	export let structure = [];

	let className = '';

	/**
	 * @type IntersectionObserver
	 */
	let intersectionObserver;

	function ensureIntersectionObserver() {
		if (intersectionObserver) return;

		intersectionObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
				entry.target.dispatchEvent(new CustomEvent(eventName));
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

	let visibleNumber = 30;
	$: visibleItems = items.slice(0, visibleNumber);
</script>

<!-- Responsive Container (recommended) -->
<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
			<tr>
				<th>Scientific Name</th>
				{#each structure as { label }}
					<th>{label}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each visibleItems as row (row.catalogNumber)}
				<tr>
					<td
						><a href={`${base}/item/${row.catalogNumber}`}>{row.genus} {row.specificEpithet}</a></td
					>
					{#each structure as { key }}
						<td>{row[key]}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
