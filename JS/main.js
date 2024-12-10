

let lists =document.getElementsByClassName("list");
let leftBox=document.getElementById("left");
let rightBox=document.getElementById("right");

for (list of lists) {
    list.addEventListener("dragstart",function(e){
        let selectedItem=e.target;

        rightBox.addEventListener("dragover",function(e){
            e.preventDefault();
        });

        rightBox.addEventListener("drop",function(e){
            rightBox.appendChild(selectedItem);
            selectedItem=null;
        });

        leftBox.addEventListener("dragover",function(e){
            e.preventDefault();
        });

        leftBox.addEventListener("drop",function(e){
            leftBox.appendChild(selectedItem);
            selectedItem=null;
        });
    });
};
