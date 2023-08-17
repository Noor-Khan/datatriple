<script>
	export let scrolled = false;
</script>

<header class="fixed left-0 top-0 z-50 w-full transition-colors {scrolled ? 'bg-white' : ''}">
	<div class="flex items-center justify-between py-6 max-w-7xl px-6 mx-auto">
		<a href="/">
			<img
				src={scrolled ? '/images/logo-color.png' : '/images/logo.png'}
				class="transition-all"
				alt=""
				width="162"
			/>
		</a>
		<ul class="flex items-center md:space-x-8 transition-colors {scrolled ? '' : 'text-white'}">
			<li>
				<a href="/workers">전문가소개</a>
			</li>
			<li>
				<a href="/process">진행방식</a>
			</li>
			<li>
				<a href="/portfolio">포트폴리오</a>
			</li>
		</ul>
	</div>
</header>
