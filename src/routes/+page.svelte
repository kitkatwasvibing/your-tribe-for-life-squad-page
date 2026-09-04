<script>
	import Studentcard from '$lib/components/studentcard.svelte';

	let { data } = $props();
	const persons = data.persons;
</script>
 
 <h1 class="h1"> Squad 2</h1>

 <div class="person-container">
{#each persons as person}
	<Studentcard {person} />
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