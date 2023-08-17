<script>
	import { Navbar } from '$lib/index';
	import '../app.css';
	// Default theme
	import '@splidejs/svelte-splide/css';

	// or other themes
	import '@splidejs/svelte-splide/css/skyblue';
	import '@splidejs/svelte-splide/css/sea-green';

	// or only core styles
	import '@splidejs/svelte-splide/css/core';
	let scrolled = false;
	const switchComp = () => {
		if (window.scrollY > 20) {
			scrolled = true;
		} else {
			scrolled = false;
		}
	};
</script>

<div>
	<div class="">
		<Navbar {scrolled} />
		<slot />
	</div>
</div>

<svelte:window on:scroll={switchComp} />
