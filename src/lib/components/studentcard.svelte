<script>
	let { person } = $props();

	const mugshot = person.mugshot
		? `https://fdnd.directus.app/assets/${person.mugshot}`
		: '/images/profile-dummy.jpeg';
</script>

<article class="student-card">
	<img
		class="person-mugshot"
		src={mugshot}
		alt={person.name}
		width="200"
		height="200"
	>

	<p class="person-name">{person.name}</p>

	<a class="profile-link" href={person.profilecard}>Profilecard 
		<img 
			class="extern-link-icon" 	
			src="/images/extern-link-arrow.svg" 
			alt="Externe link" 
			width="13px" 
			height="13px"
		>
	</a>
</article>


<style>
	.student-card{
		background: rgb(238, 238, 238);
		padding: .3rem;
		width: 170px;
		min-height: 195px;
		height: auto;
		border-radius: 5px;
		border: 1px solid rgb(207, 207, 207);
		transition: transform 0.2s ease, box-shadow 0.2s ease;

		@media (min-width:768px){
			width: 230px;
			height: 250px;
			padding: .3rem 0rem;
		} 
	}

	.student-card:hover {
		transform: scale(1.03);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.person-name{
		text-align: center;
		font-size: 20px;
	}

	.profile-link{
		display: block;
		text-align: center;
	}

	.person-mugshot{
		width: 170px;
		height: 130px;
		display: block;
		margin: 0 auto;

		@media (min-width:768px){
			width: 220px;
			height: 160px;
		}
	}
</style>