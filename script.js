let allSpans = document.querySelectorAll('span');
let result = document.querySelector('.results > span');

let theInput = document.getElementById('the-input');

for (let i = 0; i < localStorage.length; i++) {
    result.textContent += localStorage.getItem(localStorage.key(i)) + '  ';
}
allSpans.forEach(span => {
    span.addEventListener('click', (e) => {
        if (e.target.classList.contains('check-item')) {
            checkItem();
        }
        if (e.target.classList.contains('add-item')) {
            addItem();
        }
        if (e.target.classList.contains('delete-item')) {
            deleteItem();
        }
        if (e.target.classList.contains('show-item')) {
            showItem();
        }
    })
})

function checkItem() {
    console.log(localStorage.getItem(theInput.value))
}
function addItem() {
    localStorage.setItem(theInput.value , theInput.value);

}
function deleteItem() {
    if (theInput.value === localStorage.getItem(theInput.value)) {
        localStorage.removeItem(theInput.value)
    }
}
function showItem() {
    result.textContent = localStorage
}


