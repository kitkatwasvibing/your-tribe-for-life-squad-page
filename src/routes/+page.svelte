<script>
	import Studentcard from '$lib/components/studentcard.svelte';

	let { data } = $props();
	const persons = data.persons;
</script>

{#each persons as person}
	<Studentcard {person} />
{/each}