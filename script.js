

function createSquareGrid(side_length){
    let squareGrid = document.querySelector('.square_grid');
    let single_cell = `<div class="gridcell"></div>`;
    let single_row = `<div class="gridrow">`;
    for(let i=0; i<side_length; i++)
        single_row+=single_cell;
    single_row+=`</div>`;
    let full_grid_inside = ``
    for(let i=0; i<side_length; i++)
        full_grid_inside+=single_row;
    squareGrid.innerHTML = full_grid_inside;
}

function addHoverEffect(){
    const cells = document.querySelectorAll('.gridcell');
    cells.forEach( cell => {
        cell.addEventListener('mouseenter', function(){
            this.classList.add('trail');
            //cell.style.backgroundColor = 'red';
            //console.log('enter');
        });
        cell.addEventListener('mouseleave', function(){
            this.classList.remove('trail');
            //cell.style.backgroundColor = 'green';
            //console.log('exit');
        });
    });
}

function addResizeOption(){
    const button = document.querySelector('.resizeButton');
    button.addEventListener('click', function(){
        let side_length = prompt("Enter side length in terms of no. cells in a row");
        createNewGrid(side_length);
    })
}

function createNewGrid(side_length){
    createSquareGrid(side_length);
    addHoverEffect();
}

function initialSetup(){
    createNewGrid(4);
    addResizeOption();
}

initialSetup();