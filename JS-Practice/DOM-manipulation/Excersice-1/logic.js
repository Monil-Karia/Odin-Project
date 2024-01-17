const container = document.querySelector('#container');

//For paragraph addition in the HTML file
const paragraph = document.createElement('p');
const node  = document.createTextNode("Hi i am a RED PARAGRAPH");
paragraph.appendChild(node);
paragraph.style.color = 'red';

//Heading H3 property
const heading3 = document.createElement('H3');
const headNode = document.createTextNode("Hi am Blue H3");
heading3.appendChild(headNode);
// heading3.textContent = "I'm Blue h3";
heading3.style.color = 'blue';


//Custom Div
const customDiv = document.createElement('div');
customDiv.style.border = "2px solid black";
customDiv.style.backgroundColor = 'pink';
customDiv.style.padding = '10px';

const customDivh1 = document.createElement('h1');
customDivh1.textContent = 'I am H1 Inside Custom div';

const customDivP = document.createElement('p');
customDivP.textContent = 'I am P inside Custom P';

customDiv.appendChild(customDivP);
customDiv.appendChild(customDivh1);

container.appendChild(paragraph);
container.appendChild(heading3);
container.appendChild(customDiv); 