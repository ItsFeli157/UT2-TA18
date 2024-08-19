document.addEventListener('DOMContentLoaded', () => {
    const people = ["Juan", "María", "Carlos", "Ana", "Luis", "Isabel", "Pedro", "Lucía", "José", "Marta"];
    const peopleList = document.getElementById('peopleList');
    const searchInput = document.getElementById('searchInput');

    function renderList(items) {
        peopleList.innerHTML = "";
        items.forEach(person => {
            const listItem = document.createElement('li');
            listItem.textContent = person;
            peopleList.appendChild(listItem);
        });
    }

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredPeople = people.filter(person => person.toLowerCase().includes(searchTerm));
        renderList(filteredPeople);
    });

    renderList(people);
});
