<script>
	import { page } from '$app/stores';
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		getDrawerStore,
		Drawer,
		initializeStores,
		Toast,
		getToastStore,
		localStorageStore
	} from '@skeletonlabs/skeleton';
	import '@fortawesome/fontawesome-free/css/solid.min.css';
	import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	afterNavigate((/** @type import('@sveltejs/kit').AfterNavigate */ params) => {
		const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});

	initializeStores();
	const drawerStore = getDrawerStore();
	const toastStore = getToastStore();

	const showWarning = localStorageStore('warning', true);

	$: classesActive = (/** @type {string} */ href) =>
		base + href === $page.url.pathname ? 'bg-primary-500' : '';

	function drawerOpen() {
		const /** @type {import('@skeletonlabs/skeleton').DrawerSettings} */ s = {
				id: 'topnav',
				position: 'top'
			};
		drawerStore.open(s);
	}

	const pages = [
		{ slug: 'Home', path: '/' },
		{ slug: 'about', path: '/about' }
	];
</script>

<Drawer height="h-auto">
	<nav class="list-nav">
		<ul>
			{#each pages as page}
				<li>
					<a href={`${base}${page.path}`}>
						<span class="flex-auto">{page.slug}</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</Drawer>
<Toast
	buttonAction="btn btn-icon-sm variant-ghost"
	buttonDismiss="btn-icon btn-icon-md variant-ghost"
/>
<!-- App Shell -->
<AppShell slotPageFooter="bg-secondary-500 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar padding="px-4" slotDefault="h-full" background="bg-surface-100-900-token">
			<nav class="flex-none items-center h-full hidden md:flex">
				{#each pages as page}
					<a
						href={`${base}${page.path}`}
						class="list-nav-item h-full p-4 bg-primary-hover-token {classesActive(page.path)}"
						>{page.slug}</a
					>
				{/each}
			</nav>
			<svelte:fragment slot="trail">
				<button class="md:!hidden btn-icon" on:click={drawerOpen}>
					<i class="fa-solid fa-bars"></i>
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="pageFooter">
		<div class="grid grid-cols-2 md:!grid-cols-5 gap-1 lg:ml-10 lg:mr-10">
			<a
				href="https://www.boga.unibe.ch/wissenschaft/herbarium/index_ger.html"
				target="_blank"
				rel="noopener"
			>
				<enhanced:img
					src="$lib/assets/BOGA.jpg"
					alt="Logo of the botanical garden"
					class="max-h-[80px]"
				/>
			</a>

			<p class="h5 md:h6 lg:h5 text-black col-span-2 justify-self-start">
				A project of the Herbarium of the botanical garden of the University of Bern
			</p>

			<a
				class="h5 anchor text-black col-span-2 md:col-span-1 justify-self-start md:justify-self-end"
				href="{base}/impressum"
			>
				Impressum
			</a>
		</div>
	</svelte:fragment>
</AppShell>
