const input = document.querySelector('#favchap'); //establish references to HTML element objects
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || []; // initializes array returned by getChapterList function OR an empty array if the function call returns null or undefined (if first visit or no localsotrage)

chaptersArray.forEach(chapter => displayList(chapter));

button.addEventListener('click', function() {
    if (input.value.trim() !== '') { //checks if input is empty
        displayList(input.value); //calls the function to display the chapter
        chaptersArray.push(input.value); //adds chapter to the array
        setChapterList(); //updates localStorage with new array
        input.value = ''; //clears the input
        input.focus(); //sets focus back to input
    };
    
});

function displayList(item) {
    const li = document.createElement('li'); // create list element to hold each chapter title and delete button
    const deleteButton = document.createElement('button'); // create delete button
    li.textContent = item; // populates li element's text content to variable items value 
    deleteButton.textContent = '❌'; // populates delete button with x emoji
    deleteButton.classList.add('delete'); //references css rule to size delete button
    li.append(deleteButton); //add delete button to li element variable
    list.append(li); //add li element variable to unordered HTML list
    deleteButton.addEventListener('click', function () {
        list.removeChild(li); //removes li element variable from HTML list
        deleteChapter(li.textContent); //new function to delete chapter from array and localStorage
        input.focus(); //set focus back to input
    });
}

function setChapterList() {
    localStorage.setItem('list', JSON.stringify(chaptersArray)); //converts array to string
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('list')); //turns stored string back into an array
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // removes last character in the string
    chaptersArray = chaptersArray.filter(item => item !== chapter); //returns everything except the chapter to be removed
    setChapterList(); // updates local storage item
}


