<!-- <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> -->

<script>
    let {data} = $props();
    const persons = data.persons;
</script>
 
 <h1 class="h1"> Squad 2</h1>

 <div class="person-container">
{#each persons as person}
<div class="person">
    <img class= "person-img"  src="https://fdnd.directus.app/assets/{person.mugshot}" alt={person.name}>
    <p class="person-name">{person.name} </p>
    <a class="profilecard" href={person.profilecard}>Profilecard</a>
    </div>
{/each}
</div>


<style>
    .h1{
        text-align:center;
    }
    .person-container{
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        gap:5px;
        justify-content: center;

            @media (min-width:550px){
                grid-template-columns: repeat(3, 1fr);
                gap:5px;
            }

            @media (min-width:768px){
            grid-template-columns: repeat(4, 1fr);
            gap:5px; 
            }

        @media (min-width:1024px){
            grid-template-columns: repeat(5,1fr);
            gap: 5px;
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