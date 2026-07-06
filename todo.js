let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector(".addBtn");
let todocontainer = document.querySelector(".todocontainer");

let API = "https://6a48118dabfcbaade1193577.mockapi.io/todos";

// ===================== FETCH DATA =====================
async function fetchData() {
    let response = await fetch(API);
    let data = await response.json();

    todocontainer.innerHTML = "";

    data.forEach((obj) => {

        let div = document.createElement("div");
        div.className = "todo";

        div.innerHTML = `
            <p>${obj.text}</p>
            <button class="deleteBtn">Delete</button>
            <button class="editBtn">Edit</button>
            <button class="saveBtn" style="display:none;">Save</button>
        `;

        let p = div.querySelector("p");
        let deleteBtn = div.querySelector(".deleteBtn");
        let editBtn = div.querySelector(".editBtn");
        let saveBtn = div.querySelector(".saveBtn");

        // ===================== DELETE =====================
        deleteBtn.addEventListener("click", function () {
            deleteData(obj.id);
        });

        // ===================== EDIT =====================
        editBtn.addEventListener("click", function () {

            let input = document.createElement("input");
            input.type = "text";
            input.value = p.innerText;

            div.replaceChild(input, p);

            editBtn.style.display = "none";
            saveBtn.style.display = "inline-block";
        });

        // ===================== SAVE =====================
        saveBtn.addEventListener("click", async function () {

            let input = div.querySelector("input");

            await updateData(obj.id, input.value);

        });

        todocontainer.appendChild(div);
    });
}

fetchData();


// ===================== POST DATA =====================
async function postData() {

    let value = taskInput.value.trim();

    if (value === "") return;

    const objData = {
        text: value
    };

    let response = await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objData)
    });

    if (response.status === 201) {
        taskInput.value = "";
        fetchData();
    }
}

addBtn.addEventListener("click", postData);


// ===================== DELETE DATA =====================
async function deleteData(id) {

    let response = await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    if (response.ok) {
        fetchData();
    }
}


// ===================== UPDATE DATA =====================
async function updateData(id, updatedText) {

    const objData = {
        text: updatedText.trim()
    };

    let response = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objData)
    });

    if (response.ok) {
        fetchData();
    }
}