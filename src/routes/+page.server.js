export async function load({ url }) {
    const res = await fetch("https://fdnd.directus.app/items/person?fields=*&filter[squads][squad_id][cohort][_eq]=2627");
    const data = await res.json();

    const selectedId = url.searchParams.get('student');

    const selectedPerson =
        data.data.find((person) => String(person.id) === selectedId) ?? data.data[0];
 
    const studentId = url.searchParams.get("student")
    const selectedPerson = data.data.find(
        person=> person.id == studentId
    )
    return{
        persons: data.data,
        selectedPerson: selectedPerson
    }

}