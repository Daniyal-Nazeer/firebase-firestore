import {
    collection,
    addDoc,
    getDocs,
  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

  import { db } from "./config.js";

const form = document.querySelector('#form');
const addTodo = document.querySelector('#toDo');
const addTodoButton = document.querySelectorAll('#addtodo_btn');
const ul = document.querySelector('#ul');
const toDoArry = [];


async function getData() {
    const querySnapshot = await getDocs(collection(db, "todoValue"));
    querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
      toDoArry.push(doc.data());
    });
    // console.log(toDoArry);
    rendardTodo();
  }
  
  getData();

const rendardTodo = () => {
    ul.innerHTML = `
        <h1 class='title'>Show Records</h1>
        <table id="customers">
            <thead>
                <tr>
                    <th>List</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                ${toDoArry.map((item, index) => `
                    <tr data-id="${index}">
                        <td>${item.todoValue}</td>
                        <td>
                            <button class="deleteBtn"><i class="fa-solid fa-trash"></i></button> | 
                            <button class="editBtn"><i class="fa-solid fa-pen-to-square"></i></button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    document.querySelectorAll('.deleteBtn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.closest('tr').getAttribute('data-id');
            deleteItem(index);
        });
    });

    document.querySelectorAll('.editBtn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.closest('tr').getAttribute('data-id');
            editItem(index);
        });
    });
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    toDoArry.push({ 
        todoValue: addTodo.value 
    });

    rendardTodo();    

    try {
        const docRef = await addDoc(collection(db, "todoValue"), {
            todoValue: addTodo.value,
        });
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

     addTodo.value = "";
});

const deleteItem = (index) => {
    toDoArry.splice(index, 1);
    rendardTodo();
}

const editItem = (index) => {
    addTodo.value = toDoArry[index].todoValue;
    deleteItem(index);
}
