<script>
	import PageHeader from '$lib/PageHeader.svelte';
	import { ProcessCard, CallToAction } from './components/index';
	let steps = [
		{
			id: 1,
			reverse: false,
			title: '제대로 알고 시작하세요.',
			description: [
				'데이타트리플은 타 개발사와 달리 실제 프로젝트에',
				'투입되는 전문가를 투명하게 관리합니다.',
				'여러분 프로젝트에 직접 참여하는 기획자, 디자이너, 개발자들과 온라인 플랫폼을 이용해 실시간으로 소통해보세요.'
			]
		},
		{
			id: 2,
			reverse: true,
			title: '전문가와 함께 기획을 검토하세요.',
			description: [
				'개발의 시작은 철저한 기획입니다.',
				'프로젝트가 처음이시라면 꼭 필요한 기능들과 요소들이 빠져있을 수 있습니다. 담당 기획자가 아이템의 의도와 목표를 파악하고 빠진 부분이 ',
				'없도록 철저히 검토하고 있습니다.'
			]
		},
		{
			id: 3,
			reverse: false,
			title: '트렌디한 디자인',
			description: [
				'아이템의 특성과 목적에 적합한 트렌디한 디자인이 진행됩니다.',
				'1차적으로 와이어프레임을 잡고 디자인 후 프로토타입으로 제작해 예상되는 개발 결과물을 미리 경험해보실 수 있습니다.'
			]
		},
		{
			id: 4,
			reverse: true,
			title: '미래를 생각한 꼼꼼한 개발',
			description: [
				'당장의 결과보다 미래의 유지 관리가 더 중요합니다. ',
				'마치 내 프로젝트처럼 꼼꼼하게 책임지고  개발하겠습니다. ',
				'진짜 실력있는 개발자들과 여러분의 프로젝트를 성공적으로 완료해보세요.'
			]
		}
	];
</script>

<div class="mt-24">
	<PageHeader title="진행방식" />
	<div class="max-w-7xl mx-auto px-6">
		<div class="py-36">
			{#each steps as step}
				<ProcessCard {step} />
			{/each}
		</div>
	</div>
	<CallToAction />
</div>
