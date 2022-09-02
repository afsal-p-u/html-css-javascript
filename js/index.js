const popupClass = document.getElementById('pop-up');
const cancelPopup = document.getElementById('cancel-popup');
const todoData = document.getElementById('todo-data');

const addTodo = () => {
    popupClass.classList.add('prop');
}

const cancelPopupBox = () => {
    popupClass.classList.remove('prop');
}

const todoDataContainer = () => {

    //create todos
    if(document.querySelector('#todo-name input').value == ''){
        popupClass.classList.add('prop')
    }else{
        todoData.innerHTML += 
        `
        <div class="container-bottom" id='cbID'>
            <div class="todos">
                <div class="todo">${document.querySelector('#todo-name input').value}</div>
            </div>

            <div class="buttons">
                <button class="delete">Delete</button>
            </div>
        </div>

        `
    
        popupClass.classList.remove('prop');

        //mark and unmark
        var marked = document.querySelectorAll('#cbID');

        for(var i=0; i<marked.length; i++){
            marked[i].onclick = function(){
                this.classList.toggle('disabledDiv')
            }
        }

        //delete todos
        var deleted = document.querySelectorAll('.delete');

        for(var i=0; i<deleted.length; i++){
            deleted[i].onclick = function(){
                this.parentNode.parentNode.remove();
            }
        }

        //clear input field
        document.querySelector('#todo-name input').value = '';
    }

}

