<script>
	let { person } = $props();
</script>

<article class="student-card">
	<img
		class="person-mugshot"
		src={`https://fdnd.directus.app/assets/${person.mugshot}`}
		alt={person.name}
		width="200"
		height="200"
	>

	<p class="person-name">{person.name}</p>

	<a class="profile-link" href={person.profilecard}>Profilecard</a>
</article>


<style>
	.student-card{
		background: rgb(238, 238, 238);
		padding: .7rem;
		width: 160px;
		height: 195px;
		border-radius: 5px;
		border: 1px solid rgb(207, 207, 207);

		@media (min-width:768px){
			width: 230px;
			height: 230px;
		}
	}

	.person-name{
		text-align: center;
	}

	.profile-link{
		display: block;
		text-align: center;
	}

	.person-mugshot{
		width: 160px;
		height: 130px;
		display: block;
		margin: 0 auto;

		@media (min-width:768px){
			width: 220px;
			height: 160px;
		}
	}
</style>