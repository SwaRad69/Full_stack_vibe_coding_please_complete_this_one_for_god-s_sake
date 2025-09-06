const panels = document.querySelectorAll('.panel')
// searches all the id or classes with the name panel and stores it in a variable panels

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
       //idk why this line is working twice both here and in the function below
        // when a panel is clicked the active class is added to it
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
        // removes the active class from all the panels
    })
}