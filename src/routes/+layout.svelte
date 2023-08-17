<script>
	import { Navbar, Footer } from '$lib/index';
	import '../app.css';
	// Default theme
	import '@splidejs/svelte-splide/css';

	// or other themes
	import '@splidejs/svelte-splide/css/skyblue';
	import '@splidejs/svelte-splide/css/sea-green';

	// or only core styles
	import '@splidejs/svelte-splide/css/core';
	import { onMount } from 'svelte';
	let scrolled = false;
	const switchComp = () => {
		if (window.scrollY > 20) {
			scrolled = true;
		} else {
			scrolled = false;
		}
	};
	onMount(() => {
		if (window.scrollY > 20) {
			scrolled = true;
		} else {
			scrolled = false;
		}
	});
</script>

<div>
	<div class="">
		<Navbar {scrolled} />
		<slot />
		<Footer />
	</div>
</div>

<svelte:window on:scroll={switchComp} />
