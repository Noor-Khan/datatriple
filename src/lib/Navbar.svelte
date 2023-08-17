<script>
	import { page } from '$app/stores';
	import { faBarsStaggered, faClose } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { sidebar } from '../stores/sidebar.store';
	import { fly, slide } from 'svelte/transition';
	export let scrolled = false;
	$: isHome = $page.url.pathname === '/';
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
{#if $sidebar.isShow}
	<div class="fixed top-0 left-0 w-64 h-full z-50">
		<div class="relative bg-white z-40 h-screen" transition:fly={{ x: -250, opacity: 1 }}>
			<button
				class="absolute -right-8 top-4 text-white text-2xl z-40 md:hidden"
				on:click={() => ($sidebar.isShow = false)}
			>
				<Fa icon={faClose} />
			</button>
			<ul class="flex flex-col text-left md:space-x-8 transition-colors">
				<li class="py-3 px-4 border border-b-gray-200">
					<a href="/workers">전문가소개</a>
				</li>
				<li class="py-3 px-4 border border-b-gray-200">
					<a href="/process">진행방식</a>
				</li>
				<li class="py-3 px-4 border border-b-gray-200">
					<a href="/portfolio">포트폴리오</a>
				</li>
			</ul>
		</div>

		<div class="absolute bg-black w-screen h-screen z-30 top-0 left-0 opacity-50" />
	</div>
{/if}

{#if isHome}
	<header class="fixed left-0 top-0 z-40 w-full transition-colors {scrolled ? 'bg-white' : ''}">
		<div class="flex items-center justify-between py-6 max-w-7xl px-6 mx-auto">
			{#if isMobile}
				<button
					class="text-xl {!scrolled ? 'text-white' : ''}"
					on:click={() => ($sidebar.isShow = true)}
				>
					<Fa icon={faBarsStaggered} />
				</button>
			{/if}
			<a href="/">
				<img
					src={scrolled ? '/images/logo-color.png' : '/images/logo.png'}
					class="transition-all"
					alt=""
					width="162"
				/>
			</a>
			{#if !isMobile}
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
			{/if}
			{#if isMobile}
				<div />
			{/if}
		</div>
	</header>
{:else}
	<header class="fixed left-0 top-0 z-40 w-full transition-colors bg-white">
		<div class="flex items-center justify-between py-6 max-w-7xl px-6 mx-auto">
			{#if isMobile}
				<button class="text-xl" on:click={() => ($sidebar.isShow = true)}>
					<Fa icon={faBarsStaggered} />
				</button>
			{/if}
			<a href="/">
				<img src="/images/logo-color.png" class="transition-all" alt="" width="162" />
			</a>
			{#if !isMobile}
				<ul class="flex items-center md:space-x-8 transition-colors">
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
			{/if}
			{#if isMobile}
				<div />
			{/if}
		</div>
	</header>
{/if}
