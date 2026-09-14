<script>
	//Waarde meegeven 
	let { person, selectedPerson} = $props();

	// svelte-ignore state_referenced_locally
	const mugshot = person.mugshot
		? `https://fdnd.directus.app/assets/${person.mugshot}`
		: '/images/profile-dummy.jpeg';

</script>

<a
	href={`?student=${person.id}`}
	class:selected={selectedPerson.id === person.id}
	style={`--selected-color: ${person.fav_color || 'black'}`}
>
	<button type="submit" name="student" value={person.id}  class="person">
		<article class="student-card">
			<img
				class="person-mugshot"
				src={mugshot}
				alt={person.name}
				width="200"
				height="200"
			>
		</article>
	</button>
</a>

<style>
	.student-card{
		background: rgb(238, 238, 238);
		width: auto;
		height: auto;
		border-radius: 10px;
		border: 1px solid rgb(207, 207, 207);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.student-card:hover {
		transform: scale(1.03);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		outline: 3px solid var(--selected-color);
		border-radius: 10px;
	}
/* 
	.person-name{
		text-align: center;
		font-size: 18px;
	}

	.profile-link{
		display: block;
		text-align: center;
	} */

	.person-mugshot{
		width: 140px;
		height: 120px;
		display: block;
		margin: 0 auto;
		border-radius: 10px;
	}

	.selected {
        outline: 3px solid var(--selected-color);
		border-radius: 10px;
    }
	button.person{
		all:unset; /*haalt de standaart browser styling van de knop weg */
		cursor: pointer; /*dan komt er wel nog een handje te zien */
	}
</style>