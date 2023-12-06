"use strict";

const domain = "https://jsonplaceholder.typicode.com";

const displayUsers = async () => {
  try {
    const response = await fetch(`${domain}/users`);
    const users = await response.json();

    const selectUsers = document.getElementById("users");

    users.forEach(user => {
      const option = document.createElement("option");
      option.value = user.id;
      option.text = user.name;
      selectUsers.appendChild(option);
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

const displayTodos = async userId => {
  try {
    const response = await fetch(`${domain}/todos?userId=${userId}`);
    const todos = await response.json();

    const listDiv = document.getElementById("list");

    listDiv.innerHTML = "";

    if (todos.length === 0) {
      listDiv.textContent = "No to-do items found for this user.";
      return;
    }

    const table = document.createElement("table");
    const headerRow = table.insertRow();
    headerRow.innerHTML = "<th>ID</th><th>Title</th><th>Completed</th>";

    todos.forEach(todo => {
      const row = table.insertRow();
      row.innerHTML = `<td>${todo.id}</td><td>${todo.title}</td><td>${todo.completed ? "Yes" : "No"}</td>`;
    });

    listDiv.appendChild(table);
  } catch (error) {
    console.error("Error fetching to-do items:", error);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  await displayUsers();

  const viewListButton = document.getElementById("view_list");
  viewListButton.addEventListener("click", async () => {
    const selectedUserId = document.getElementById("users").value;
    await displayTodos(selectedUserId);
  });
});
