<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	let options = {
		type: 'fade',
		rewind: true,
		arrows: false,
		pagination: true,
		padding: 0,
		cover: true,
		fixedHeight: '96vh',
		classes: {
			pagination: 'splide__pagination your-class-pagination',
			page: 'splide__pagination__page your-class-page bg-red-500å'
		}
	};
</script>

<Splide aria-label="My Favorite Images" {options}>
	<SplideSlide>
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src="/images/slide-1.png" alt="Image 1" />
		<div class="grid grid-cols-1 mx-auto text-left text-white max-w-7xl w-full px-6">
			<div>
				<h2 class="text-4xl font-bold">‘책임감’, ‘합리적 비용’</h2>
				<h2 class="text-4xl font-bold mb-10">데이타트리플은 IT전문 개발 파트너입니다.</h2>
				<p class="text-2xl">기획부터 디자인 개발까지 다년간의 노하우로</p>
				<p class="text-2xl">스타트업을 위한 개발 서비스를 제공합니다.</p>
				<p class="text-2xl">여러분의 상상을 구현해보세요.</p>
			</div>
		</div>
	</SplideSlide>
	<SplideSlide>
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src="/images/slide-2.png" alt="Image 2" />
		<div class="grid grid-cols-1 mx-auto text-left text-white max-w-7xl w-full">
			<div>
				<h2 class="text-4xl font-bold">지속가능한 파트너십을 원합니다.</h2>
				<h2 class="text-4xl font-bold mb-10">
					데이타트리플이 여러분의 전문 개발파트너가 되겠습니다.
				</h2>
				<p class="text-2xl">유지보수부터 추가개발까지 전문 개발 파트너</p>
				<p class="text-2xl">데이타트리플과 함께 성장하세요.</p>
			</div>
		</div>
	</SplideSlide>
</Splide>
