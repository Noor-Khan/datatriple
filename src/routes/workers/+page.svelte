<script>
	import PageHeader from '$lib/PageHeader.svelte';
	import PersonCard from './components/PersonCard.svelte';
	let workers = [
		{
			id: 1,
			name: '강병주 대표',
			role: 'Full Stack Developer',
			description: [
				'30년 이상의 풀스택 개발자',
				'삼성 SDS, NHN, 시맨틱웹',
				'카이스트 전산학과 박사',
				'스탠포드 컴퓨터과학 석사'
			]
		},
		{
			id: 2,
			name: '김동영',
			role: 'Full Stack Developer',
			description: ['7년차 풀스택 개발자 ', 'Sound Journey & Picky Pick', '멀티미디어공학']
		},
		{
			id: 3,
			name: '김석현',
			role: 'AI Developer',
			description: [
				'4년차 AI 개발자 ',
				'Beiging Language and Culture College',
				'Computer Science 전공'
			]
		},
		{
			id: 4,
			name: '김정현',
			role: 'Project Manager',
			description: [
				'4년차 Project Manager ',
				'네오코믹스 & 위움(we:um)',
				'카이스트 경영공학 IT 석사'
			]
		},
		{
			id: 5,
			name: '김윤혜',
			role: 'UI/UX Designer',
			description: [
				'4년차 UIUX Designer',
				'이베이코리아 전략 프로모션',
				'남양유업  SNS 마케팅',
				'컴퓨터그래픽스운용기능사'
			]
		},
		{
			id: 6,
			name: '박근영',
			role: 'System SW Developer',
			description: [
				'9년차 시스템 SW 개발자 ',
				'삼성 MOSAIC시스템 & 국립국제교육원',
				'국제 무역 , 노사발전재단 시스템 구축'
			]
		},
		{
			id: 7,
			name: '박성준',
			role: 'Project operation and planning',
			description: ['2년차 운영/기획', 'Reward-type Funding Project', '동아대학교 컴퓨터 AI 공학']
		},
		{
			id: 8,
			name: '김도윤',
			role: 'Web Designer/Publisher',
			description: [
				'1년차 웹디자이너/퍼블리셔',
				'웹표준 기반 디지털콘텐츠 디자인',
				'전문가 웹디자인 기능사'
			]
		}
	];
</script>

<div class="mt-24">
	<PageHeader title="Workers" />
	<div class="max-w-7xl mx-auto px-6">
		<div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 sm:gap-4 py-36">
			{#each workers as person}
				<PersonCard {person} />
			{/each}
		</div>
		<hr />
	</div>
</div>
