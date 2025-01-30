let side_length=4;

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