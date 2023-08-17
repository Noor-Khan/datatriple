<script>
	export let title = '';
</script>

<div class="relative">
	<div class="bg-[#0db1d180] absolute w-full h-full top-0 left-0 z-10" />
	<div class="bg-img absolute w-full h-full top-0 left-0" />
	<div class="py-32 page-header relative z-20">
		<div class="max-w-7xl mx-auto text-left px-6">
			<h2 class="text-4xl font-bold text-white">{title}</h2>
		</div>
	</div>
</div>

<style>
	.bg-img {
		background-image: url('/images/header-bg.jpeg');
		background-position: 50% 50%;
		background-size: cover;
		background-repeat: no-repeat;
		inset: 0px;
		overflow: hidden;
		background-attachment: fixed;
		filter: grayscale(1);
	}
</style>
