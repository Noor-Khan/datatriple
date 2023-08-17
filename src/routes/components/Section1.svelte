<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	let options = {
		type: 'fade',
		rewind: true,
		arrows: false,
		pagination: true,
		padding: 0,
		fixedHeight: '96vh',
		classes: {
			pagination: 'splide__pagination your-class-pagination'
		}
	};
</script>

<Splide aria-label="My Favorite Images" {options}>
	<SplideSlide>
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src="/images/slide-1.png" alt="Image 1" />
	</SplideSlide>
	<SplideSlide>
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src="/images/slide-2.png" alt="Image 2" />
	</SplideSlide>
</Splide>
