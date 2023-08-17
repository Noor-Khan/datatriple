<script>
	import Fa from 'svelte-fa';
	import {
		faDonate,
		faHandshake,
		faSquareCheck,
		faThumbsUp
	} from '@fortawesome/free-solid-svg-icons';
	let features = [
		{
			icon: 'donate',
			title: '예산 내 최적의 방안 제안',
			description:
				'주어진 예산과 기간에 맞춰 가장 효율적인 개발 방식을 제안합니다. 비용을 절감하고 지속가능한 데이타트리플의 혁신을 경험하세요.'
		},
		{
			icon: 'tick',
			title: '정부 지원 사업도 OK!',
			description:
				'중개플랫폼에서 쓸 수 없는 정부지원사업, 데이타트리플은 정부지원사업에 맞춰 최고의 프로세스를 제공한 다년간의 경험을 보유하고 있습니다.'
		},
		{
			icon: 'thumbsup',
			title: '최고들이 모였다!',
			description:
				'네이버, 카이스트, CTO, COO급 개발자와 기획자들이 모여 프로젝트를 컨트롤 및 개발합니다. 저희의 경험과 노하우를 보여드리겠습니다.'
		},
		{
			icon: 'hand-shake',
			title: '전문 파트너',
			description:
				'마치 우리의 프로젝트인 것처럼. 개발에서 제일 중요한 것은 ‘책임감’입니다. 기획부터 개발까지 여러분의 개발 파트너가 되어드립니다. '
		}
	];
</script>

<div class="w-full py-32">
	<div class="grid md:grid-cols-2 max-w-7xl px-6 mx-auto">
		<div>
			<h3 class="text-4xl font-semibold text-appGray mb-6">남다른 데이타트리플</h3>
			<h2 class="text-4xl font-semibold text-primary">데이타트리플만의 강점</h2>
			<img src="/images/triangle.png" alt="" />
		</div>
		<div class="grid sm:grid-cols-2 gap-8">
			{#each features as feature (feature.title)}
				<div>
					<span class="text-5xl text-gray-300">
						{#if feature.icon === 'donate'}
							<Fa icon={faDonate} />
						{/if}
						{#if feature.icon === 'tick'}
							<Fa icon={faSquareCheck} />
						{/if}
						{#if feature.icon === 'thumbsup'}
							<Fa icon={faThumbsUp} />
						{/if}
						{#if feature.icon === 'hand-shake'}
							<Fa icon={faHandshake} />
						{/if}
					</span>
					<h3 class="text-2xl font-semibold tracking-wider mt-8">{feature.title}</h3>
					<p class="text-xl text-gray-500 mt-4 font-light">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
