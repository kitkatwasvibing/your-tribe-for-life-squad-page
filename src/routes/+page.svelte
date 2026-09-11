<script>
	import Studentcard from '$lib/components/studentcard.svelte';

	let { data } = $props();
	const persons = data.persons;
</script>
 
<div class="ds-container">
    <h1 class="h1"> Squad 2</h1>

    <div class="person-container">
    {#each persons as person}
        <Studentcard {person} />
    {/each}
    </div>
</div>

<style>
    .h1{
        text-align:center;
    }
    .person-container{
        display:flex;
        flex-wrap: wrap;
        gap:10px;
        justify-content: center;
        height: 35em;
        overflow-y: scroll;

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