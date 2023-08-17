<script lang="ts">
	export let person: any = {};
</script>

<div class="">
	<div class="overflow-hidden">
		<img
			src="/images/person-{person.id}.png"
			alt=""
			class="hover:scale-110 transition-transform duration-500"
		/>
	</div>
	<div class="py-5">
		<h3 class="text-xl text-primary font-semibold mb-2">{person.name}</h3>
		<h4 class="text-xl text-textColor">
			{person.role}
		</h4>
	</div>

	<hr class="mb-4" />
	{#each person.description as item}
		<p class="text-lg leading-8 text-black tracking-widest">{item}</p>
	{/each}
</div>
