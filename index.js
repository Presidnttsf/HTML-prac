const people = [
  { id: 1, name: "Alice", age: 28, city: "New York" },
  { id: 2, name: "Bob", age: 34, city: "Los Angeles" },
  { id: 3, name: "Charlie", age: 25, city: "Chicago" },
  { id: 4, name: "Diana", age: 30, city: "Houston" },
  { id: 5, name: "Ethan", age: 22, city: "Phoenix" }
];

function renderPeopleList(filteredPeople) {
  const container = document.getElementById("people-list");
  container.innerHTML = "";  // Clear previous content

  filteredPeople.forEach(person => {
    const li = document.createElement("li");
    li.textContent = person.id + " " + person.name;
    container.appendChild(li);
  });
}
// Function to search people by name using regex
function searchPeople() {
  const searchQuery = document.getElementById("search-box").value;
  const regex = new RegExp(searchQuery, "i"); // "i" for case-insensitive search

  // Filter people based on the search query
  const filteredPeople = people.filter(person => regex.test(person.name));

  // Render the filtered list
  renderPeopleList(filteredPeople);
}

// Initial render of all people
renderPeopleList(people);

document.getElementById("search-box").addEventListener("input", searchPeople);

// Initial render of all people
renderPeopleList(people);