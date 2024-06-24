const input = document.getElementById("search");
const listItems = document.querySelectorAll("li");

input.addEventListener("input", function () {
  const filter = input.value.toLowerCase(); // Get the search input value and convert it to lowercase

  listItems.forEach((item) => {
    const text = item.textContent.toLowerCase(); // Get the text content of the list item and convert it to lowercase
    if (text.includes(filter)) {
      // If the text content includes the filter text
      item.style.display = ""; // Show the item
    } else {
      // If the text content does not include the filter text
      item.style.display = "none"; // Hide the item
    }
  });
});
