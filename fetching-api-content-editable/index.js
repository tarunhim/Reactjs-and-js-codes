fetch("https://api.publicapis.org/entries")
.then(data => data.json())
.then(data => render(data["entries"]));
let body = document.querySelector("table");
const render = (item) => {
item.map(i => {
let tr = document.createElement("tr");
let td = document.createElement("td");
td.textContent = `${i["Description"]}`
let input = document.createElement("input");
input.type = "checkbox";
input.addEventListener("click", (e) =>{
td.contentEditable = true;
});
body.appendChild(input);

tr.appendChild(td);
body.appendChild(tr);
})
	console.log(item[0]["Description"]);
  
}