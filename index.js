// Write your code here!`

// let element = document.createElement('div') 
// document.body.appendChild(element)
// let ul = document.createElement('ul')

// for (let i = 0; i < 3; i++) {
//   let li = document.createElement('li')
//   li.innerHTML = (i + 1).toString()
//   ul.appendChild(li)
// }

// element.appendChild(ul) 

// let element = document.querySelector("p#greeting");
// element.innerHTML = 'Hello, DOM!' 

// let header = document.getElementById("header");
// console.log('header')
// header.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>"; 

document.querySelector('main#main').remove()

let newHeader = document.createElement('h1')
console.log(newHeader)

newHeader.id = 'victory'
newHeader.textContent = "YOUR-NAME is the champion"