<script>
	import Studentcard from '$lib/components/studentcard.svelte';

	let { data } = $props();
	const persons = data.persons;

    const person = persons[0];

	const mugshot = person.mugshot
		? `https://fdnd.directus.app/assets/${person.mugshot}`
		: '/images/profile-dummy.jpeg';

    const age = new Date().getFullYear() - new Date(person.birthdate).getFullYear();
</script>

<div class="ds-container bottom">
   <h1 class="h1"> Squad 2</h1>

<article class="student-detail">
	<img
        class="mugshot-detail"
		src={mugshot}
		alt={person.name}
		width="200"
		height="200"
	>

	<div class="student-info">
		<header>
			<h2>{person.name}</h2>
			<p>{age} jaar</p>

            <a href={`https://github.com/${person.github_handle}`}>
				GitHub
			</a>
		</header>

    <dl>
        <div class="info-item">
            <dt>Nickname</dt>
            <dd>{person.nickname}</dd>
        </div>

        <div class="info-item">
            <dt>Favoriet dier</dt>
            <dd>{person.fav_animal}</dd>
        </div>

        <div class="info-item">
            <dt>Hobby</dt>
            <dd>{person.fav_hobby}</dd>
        </div>

        <div class="info-item">
            <dt>Favoriete keuken</dt>
            <dd>{person.fav_kitchen}</dd>
        </div>
    </dl>

		<a href={person.profilecard}>Profile card</a>
	</div>
</article>

    <div class="person-container">
    {#each persons as person}
        <Studentcard {person} />
    {/each}
    </div>
</div>

<style>

    .student-detail{
        display: grid;
	    grid-template-columns: 1fr;
        gap: 2rem;
        padding: 2rem 3rem;
        max-width: 800px;
        margin: 0 auto;

        @media (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
            align-items: start;
            max-width: 900px;
        }
    }

    .mugshot-detail {
        width: 100%;
        max-width: 400px;
        height: auto;
        display: block;
        margin: 0 auto;
    }

    .student-info {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
	    margin: 0 auto;

        @media (min-width: 768px) {
           margin: 0;
           width: 500px;
        }
    }

    .student-info h2{
        margin: 0;
    }

    .student-info header {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .student-info dl {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin: 0;

        @media (min-width: 768px) {
           	display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem 4rem;
            margin: 0;
        }
    }

    .info-item {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #ddd;
    }

    .info-item dt,
    .info-item dd {
        margin: 0;
    }

    .info-item dd {
        text-align: right;
    }



    .h1{
        text-align:center;
    }
    .person-container{
        display:flex;
        flex-wrap: wrap;
        flex-direction: column;
        gap:10px;
        justify-content: center;
        height: 50vh;
        overflow-x: scroll;
        scrollbar-color: darkred lightgray;
        scrollbar-width: thin;

            @media (min-width:550px){
                grid-template-columns: repeat(3, 1fr);
                gap:15px;
            }

            @media (min-width:768px){
            grid-template-columns: repeat(4, 1fr);
            gap:15px; 
            padding: 0 7rem;
            }

        @media (min-width:1024px){
            grid-template-columns: repeat(5,1fr);
            gap: 15px;

        }
    }
    .person{
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .person-img{
        width:clamp(6.25rem, -7.0833rem + 66.6667vw, 10.625rem);
        height:auto;
    }
</style>