
let signn = document.getElementById("sign");
let overlayers = document.getElementById("overlayer")
let overlayerboxs = document.getElementById("overlayerbox")
let btn = document.getElementById("btn")



function update() {
    overlayers.style.display = "block"
    overlayerboxs.style.display = "block"
};
signn.addEventListener("click", (e) => {
    e.preventDefault();
    update();


});

function update2() {
    overlayers.style.display = "none"
    overlayerboxs.style.display = "none"
  


};



// btn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     update2();


// });



document.getElementById("form1").addEventListener("submit", (e) => {

    e.preventDefault();

    getValues();
    update2();

});


function getValues() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;


    const data = {
        username: username,
        password: password,
        email: email

    }

    console.log(data);

    fetchApi(`http://localhost:3000/post`, data, 'POST')
    .then(data => {
        console.log(data);
        return data;
    })
}

 


    fetchApi(`http://localhost:3000/getAll`, null, 'GET')
.then(data => {
    console.log(data);
    return data;
})
// .then((data)=>{

//     var commonValue=` <table>
//             <tr><th>S.NO</th>
//                 <th>USERNAME</th>
//                 <th>EMAIL</th>
//             </tr>
       
// `;


// for(let i in data){

//     commonValue+=`
//     <tr>

// <td>${i}</td>
// <td>${data[i].username}</td>
// <td>${data[i].email}</td>

//     </tr>
    
//     `
// }

//   commonValue+=`</table>`;
//   console.log(commonValue);
  

//   document.getElementById("result").innerHTML=commonValue;

// })


fetchApi(`http://localhost:3000/getbyid/${6}`, null, 'GET')
.then(data => {
    console.log(data);
    return data;
})

fetchApi(`http://localhost:3000/deletebyid/5`, null, 'DELETE')
.then(data => {
    console.log(data);
    return data;
})


const dataForUpdate = {
    username: "sugan",
    password: "12345678",
    email: "sugan@gmail.com"

}

fetchApi(`http://localhost:3000/updatebyid/${7}`, dataForUpdate, 'PUT')
.then(data => {
    console.log(data);
    return data;
})




function fetchApi(path, data, method) {
    let options = {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    if (method === 'POST' || method === 'PUT') {
      options.body = JSON.stringify(data);
    }
  
    return fetch(`${path}`, options)
      .then(response => {
          return response.json();
      })
}
 
//    PostValues(data).then((res)=>{

//   console.log(res);
  

//    })

// }


// window.onload =() => {

//   getAllValues();
//   //.then((res)=>{

// //         document.getElementById("result").innerHTML=JSON.stringify(res);

// //     })

//    getbyid().then((res)=>{
//         console.log(JSON.stringify(res));
        
//     })


// }


// function getAllValues() {

//    return fetch('http://localhost:3000/getAll')
//         .then(response => {return response.json()})
        
// }


// function PostValues(data) {

//  return fetch('http://localhost:3000/post', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
//         .then(response => {
//             return response.json()
//         })
    
// }

// function getbyid() {

//     return fetch('http://localhost:3000/getbyid/1')
//          .then(response => {return response.json()})
         
//  }
 

