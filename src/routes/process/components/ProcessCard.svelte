<script lang="ts">
	import { onMount } from 'svelte';

	export let step: any = {};
	let isMobile = false;
	const switchNav = () => {
		if (window.innerWidth <= 767) {
			isMobile = true;
		} else {
			isMobile = false;
		}
	};
	onMount(() => {
		if (window.innerWidth <= 767) {
			isMobile = true;
		} else {
			isMobile = false;
		}
	});
</script>

<svelte:window on:resize={switchNav} />
<div class="mb-36 last:mb-0">
	<div class="flex {isMobile ? 'flex-col' : ''} {step.reverse ? 'md:flex-row-reverse' : ''}">
		<div class="md:max-w-lg">
			<div
				class="mb-6 {step.reverse && !isMobile
					? 'text-right'
					: isMobile
					? 'text-center'
					: 'text-left'}"
			>
				<h2 class="text-2xl text-primary font-bold mb-6">
					Step {step.id}.
				</h2>
				<h3 class="text-4xl font-bold text-black">{step.title}</h3>
			</div>

			{#if isMobile}
				<div>
					<img src="/images/step-{step.id}.png" alt="" />
				</div>
			{/if}

			{#each step.description as item}
				<p class="text-xl text-textColor tracking-wider {isMobile ? 'text-center' : 'text-left'}">
					{item}
				</p>
			{/each}
		</div>
		{#if !isMobile}
			<div>
				<img src="/images/step-{step.id}.png" alt="" />
			</div>
		{/if}
	</div>
</div>
