<script>
	let gallery = [
		'가이드짱',
		'골프카트맵',
		'넥스트 스테이션',
		'터치라이크',
		'KOTITI 생산연구원',
		'엘프선곡집',
		'LG생산연구원 프로젝트',
		'KFSV',
		'익스프레스'
	];
</script>

<div class="mt-24">
	<div class="max-w-7xl mx-auto px-6 pb-36">
		<h2 class="uppercase text-4xl font-bold text-black text-center py-16">portfolio</h2>
		<div class="spotlight-group grid grid-cols-2 gap-3">
			{#each gallery as i, index}
				<a class="spotlight" href="/images/portfolio/{index + 1}.png" data-description={i}>
					<img src="/images/portfolio/{index + 1}.png" />
				</a>
			{/each}
		</div>
	</div>
</div>
