<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<script>
    let {data} = $props();
    const persons = data.persons;
</script>
 
{#each persons as person}
    <img src="https://fdnd.directus.app/assets/{person.mugshot}" alt={person.name}>
    {person.name} <br>
{/each}