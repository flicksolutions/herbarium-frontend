<script>
	let className = '';

	export { className as class };
	export let dark = false;
</script>

<section class="w-full px-8 my-8 {dark ? 'bg-tertiary-500 text-black' : ''}">
	<div class="container mx-auto {className}">
		<slot />
	</div>
</section>
