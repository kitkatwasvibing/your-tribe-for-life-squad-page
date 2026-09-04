<script>
	let { person } = $props();
</script>

<article>
	<img
		src={`https://fdnd.directus.app/assets/${person.mugshot}`}
		alt={person.name}
	>

	<p>{person.name}</p>

	<a href={person.profilecard}>Profilecard</a>
</article>