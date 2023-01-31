var rows = document.getElementById("rows");
var clos = document.getElementById("clos");
var btn = document.querySelector("button");
var body = document.body;

btn.addEventListener("click", createTable);

function createTable() {
  var table = document.createElement("table");
  for (let i = 0; i < +rows.value; i++) {
    var tr = document.createElement("tr");
    table.appendChild(tr);
    for (let j = 0; j < +clos.value; j++) {
      var td = document.createElement("td");
      var txt = document.createTextNode("Text Item");
      td.appendChild(txt);
      tr.appendChild(td);
    }
  }
  body.appendChild(table);
}
