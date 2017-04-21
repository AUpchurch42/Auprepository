var addTodo = () =>
{
    var task = document.getElementById('task');
    myTodo.add(task.value);

    task.value = '';
}

var Todo = function(List)
{
    var count = 0;

    var toggleClassName = function(event){
        console.log(event.target.className);
        if(event.target.className === 'completed') {
            event.target.className = '';
        }
        else {
            event.target.className = 'completed';
        }
    };

    var addTodo = function(task)
    {
        let taskLi = document.createElement('li');
        let check = document.createElement('input');
        let label = document.createElement('label');
        let textElement = document.createTextNode(' - ' + task);
        let removeButton = document.createElement('button');
    
        removeButton.innerHTML = 'Remove Task';
        check.type = "checkbox";
        check.addEventListener('click', function(event){
            if(event.target.parentElement.className === 'completed') {
            event.target.parentElement.className = '';
        }
            else{
                event.target.parentElement.className = 'completed';
            }
        });

        removeButton.addEventListener('click', function(event){
        List.removeChild(event.target.parentElement);
        });

        label.appendChild(check);
        label.appendChild(textElement);
        taskLi.appendChild(label);
        List.appendChild(taskLi);
        taskLi.appendChild(removeButton);
      
        ++count;

    };

    return {
        add: addTodo
    };
}   

/*
This is what i tried intially

let check = function() {
let elements = document.getElementsByTagName('input')
    for (let i=0; i<elements.length; i++){
        if (document.getElementsByTagName('input')[i] .checked === true) {
            document.getElementsByTagName('input') [i] .parentElement.style.textDecoration = 'line-through';
        }
        else {
            document.getElementsByTagName('input')[i] .parentElement.style.textDecoration = 'none';
        }
     }
}
 */   


 var todoNode = document.getElementById('todo');
 var myTodo = new Todo(todoNode);
 document.getElementById('btn').addEventListener('click', addTodo)
