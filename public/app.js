var list = document.getElementById("list");

function todo(){
    var todo_item = document.getElementById("todo-item");
    
    if(todo_item.value ===""){
        alert("Nothing to Add")        
    }
    else{
        var li = document.createElement('li')
        var liText = document.createTextNode(todo_item.value)
        li.appendChild(liText)
        li.setAttribute("class", "txt")
    }
    
    
    
    
    
    var delbtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delbtn.setAttribute("onclick", "deleteItem(this)")
    delbtn.appendChild(delText)
    delbtn.setAttribute("class","dlt")
    delbtn.innerHTML = '<img src="del.png"; style="height:20px" />'
    

    var EditBtn = document.createElement("button");
    var editText = document.createTextNode("Edit")
    EditBtn.appendChild(editText)
    EditBtn.setAttribute("onclick","EditText(this)")
    EditBtn.setAttribute("Class","xyz")
    EditBtn.innerHTML = '<img src="edit.png"; style="height:20px" />'

    li.appendChild(delbtn)
    
    li.appendChild(EditBtn)
    
    list.appendChild(li)
    todo_item.value = ""
    
}
function deleteItem(e){
    e.parentNode.remove()
}
function DeleteAll(){
    list.innerHTML = ""
}
function EditText(e){
    var val = prompt("Enter Updated Value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;

}
