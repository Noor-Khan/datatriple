<script lang="ts">
	import { faHeart } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let item: any = {};
</script>

<div class="text-left border border-gray-200 px-5 py-8">
	<img src="/images/customers/{item.id}.png" alt="" />
	<p class="text-yellow-400 text-sm tracking-widest mb-2">★★★★★</p>
	<h3 class="text-textColor text-sm tracking-wider">
		{item.review}
	</h3>
	<div class="flex items-center space-x-1 text-blue-300 mt-6 mb-3">
		<Fa icon={faHeart} />
		<span>1</span>
	</div>
	<p class="text-textColor text-sm">{item.name}</p>
	<p class="text-textColor text-sm">
		<small>{item.check}</small>
	</p>
</div>
