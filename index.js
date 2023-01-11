// var ele = document.getElementById('sec-2');
var ele = document.getElementById('art-1');

// var ele = document.getElementsByClassName('art-1');
console.log(ele);
// ele.innerHTML =" hello";



for(let i=0; i<9;i++)
{
    ele.innerHTML += `
    
    <div class="card">
        <img src="700x400.gif" alt="image not found...">
        <div class="name">Project name</div>
        <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident excepturi tempore, harum assumenda iure doloremque!</div>
    </div>
    
    `;
}


// console.log(newele);

// let arr = [];
