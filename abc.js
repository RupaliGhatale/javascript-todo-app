
let taskInput=document.querySelector('#taskInput')
let addBtn=document.querySelector('.addBtn')
let todocontainer = document.querySelector('.todocontainer');

let API='https://6a48118dabfcbaade1193577.mockapi.io/todos';

addBtn.addEventListener('click', postData)

//add post data
async function postData(){
  let value=taskInput.value;
  console.log(value);

let objData={
  text:value.trim()
}

  let response= await fetch(API,{
    method:'POST',
    headers:{
     'Content-Type':'application/json',
    },
    body:JSON.stringify(objData),
  })
if(response.status===201){
  fetchData();
}
}

//get data read data
async function fetchData(){
   let response= await fetch(API);
   let data=await response.json();
  
if (data) {
    todocontainer.innerHTML = "";
}

//object itrate   
   data.forEach(obj=> {
     let div=document.createElement('div');
   div.className='todo';
   div.innerHTML=`
   <p>${obj.text}</p>
   <button type="button" class="deleteBtn">Delete</button>
   <button type="button" class="editBtn">Edit</button>
   `

   //delete logic
   let deleteBtn=div.querySelector('.deleteBtn');
   deleteBtn.addEventListener('click',function(){ 
     deleteData(obj.id)
   })


   //updated logic
   let editBtn=div.querySelector('.editBtn');
editBtn.addEventListener("click",function(){
   let updatedText=prompt("Enter new task:",obj.text);
   if(updatedText != null && updatedText.trim()!==""){
    updateData(obj.id,updatedText)
   }
})
   todocontainer.append(div)
   });
}

//delete data
async function deleteData(id){
  let response=await fetch(`${API}/${id}`,{
    method:'DELETE',

  })
  if(response.status===200){
    fetchData()
  }
}


//update data

async function updateData(id,updatedText){
  const objData={
    text:taskInput.value.trim()
  }
  let response=await fetch(`${API}/${id}`,{
   method:'PUT',
   headers:{
   "Content-Type":"application/json"
   },
   body: JSON.stringify(objData)
  });
  if(response.ok){
    await response.json();
    taskInput.value="";
    fetchData()
  }

}

fetchData();

console.log("helooo");