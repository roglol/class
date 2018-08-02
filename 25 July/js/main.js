let divElement = document.createElement('div');
// console.log(divElement);
document.body.appendChild(divElement);

divElement.textContent = "Dynamic Text!...";
divElement.classList.add('box');

let liElement = document.createElement('li');
liElement.innerText = "Li Element";
liElement.style.fontSize = '20px';
// liElement.append(' Append String');
let strongElement = document.createElement('strong');
strongElement.textContent = " I am a strong element";
// liElement.append(strongElement); 
// mylist.insertBefore(liElement, mylist.children[2]);
mylist.children[1].after(liElement);
let clonedLiElement = liElement.cloneNode(true)
mylist.children[1].after(clonedLiElement);
// mylist.children[1].replaceWith(liElement);

// mylist.children[mylist.children.length - 1].remove();

let removeElement = mylist.children[mylist.children.length - 1];
mylist.removeChild(removeElement);
console.log(removeElement.textContent)

// new Date(year, month, 0).getDate(); => count