function addTodo(ev) {
        var newItem = document.createElement("li");
        newItem.innerHTML = document.getElementById("txt").value;
        document.getElementById("nitem").appendChild(newItem);
      }