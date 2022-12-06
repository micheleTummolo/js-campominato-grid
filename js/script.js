const playButton = document.getElementById('play_button')

playButton.addEventListener ('click', function(){
    let grid = document.getElementById('grid');
    
    function createGridSquare() {
        const element = document.createElement ('div');
    
        element.classList.add ('square');
    
        return element;
    };
    
    for (let i = 0; i < 100; i++) {
        const square = createGridSquare()
        grid.appendChild(square)
        console.log(i)
        square.addEventListener ('click', function(){
            this.classList.add ('clicked')
            console.log("Hai cliccato il quadratino numero " + (i + 1))
        })
    };
})



