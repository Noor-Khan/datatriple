<script>
	import { CustomerCard } from '$lib/index';
	let customers = [
		{
			id: 1,
			review:
				'서비스에 대한 개념만 가지고 앱 개발을 의뢰했는데  기획 단계부터 체계적으로 도와주셔서 우리가 원하는 완벽한 앱을 개발할 수 있었습니다.',
			name: '한국주택환경연구원',
			check: '조회 2'
		},
		{
			id: 2,
			review:
				'저희 회사의 핵심 소프트웨어 파트너입니다.  항상 완성도 높은 소프트웨어를 제공 받고 있습니다.  높은 책임감과 최고 전문성을 겸비한 믿을 수 있는 파트너입니다.',
			name: '주식회사 C2K 크리에이티브',
			check: '조회 2'
		},
		{
			id: 3,
			review:
				'대표님의 인공지능 분야의 전문지식이 프로젝트 성공에 큰 도움이 되었습니다.  앞으로도 서로 도움이 되는 파트너십 기대합니다.',
			name: '네이버 클라우드 플랫폼',
			check: '조회 1'
		},
		{
			id: 4,
			review:
				'산림청 산림풍종센터 종자, 유전자 관리 시스템 개발을 의뢰했습니다. 여러 개발사 가운데 가장 높은 이해도를 지녔다고 생각합니다. 대표자가 직접 프로젝트에 참여해 모든 코드를 관리하',
			name: '국립산림품종관리센터',
			check: '조회 1'
		},
		{
			id: 5,
			review:
				'대표님의 코드리뷰에 감탄했습니다. 프로젝트가 끝난 후에도 서비스 개선을 위해 도와주셔서 감사했습니다. ',
			name: 'KOTITI 시험연구원',
			check: '조회 1'
		},
		{
			id: 6,
			review:
				'실제 개발에 참여하는 전문가들의 능력과 이력이 투명해 믿음직스러웠습니다.  전문적인 기획자가 개발사 내에 있어 협업하기 좋았다는 것도 장점이었습니다.',
			name: 'LG생산연구원',
			check: '조회 1'
		},
		{
			id: 7,
			review:
				'확실히 다양한 프로젝트를 맡아본 경험이 무엇인지 알 수 있었습니다. 저희가 생각하지 못한 부분까지 섬세하게 기획해주썼어요. 프로젝트가 끝날 때까지 기획자님께서 열심히 프로젝트를 컨',
			name: '엘프 프로페셔널',
			check: '조회 2'
		}
	];
</script>

<div class="py-24">
	<div class="max-w-7xl mx-auto text-center px-6">
		<h2 class="text-4xl font-bold text-black tracking-wider">고객사들의 한마디</h2>
		<div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-16 sm:pt-36">
			{#each customers as item (item.id)}
				<CustomerCard {item} />
			{/each}
		</div>
	</div>
</div>

<style>
	.person-img {
		@apply visible inline-block w-[367px] h-[367px] mx-auto;
		image-rendering: -webkit-optimize-contrast;
	}
	.person-img img {
		@apply rounded-full;
	}
</style>
