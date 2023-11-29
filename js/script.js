// Change Wood for Shelf
var myModels_shelf = ["/models/shelf_pine.glb", "/models/shelf.glb"]
var counter = 0;
document.getElementById("change-wood").addEventListener("click", function() {
    counter++;
    if (counter==2) { 
        counter = 0;
    }
    document.getElementById("model_shelf").src = myModels_shelf[counter];
});

// Change Fabric for Stool
var myModels_stool = ["/models/stool_denim.glb", "/models/stool_flannel.glb", "/models/stool.glb",]
var counter = 0;
document.getElementById("change-fabric").addEventListener("click", function() {
    counter++;
    if (counter==3) { 
        counter = 0;
    }
    document.getElementById("model_stool").src = myModels_stool[counter];
});

// Change Material for Chair
var myModels_chair = ["/models/chair_denim.glb", "/models/chair_leather.glb", "/models/chair_white.glb",]
var counter = 0;
document.getElementById("change-material").addEventListener("click", function() {
    counter++;
    if (counter==3) { 
        counter = 0;
    }
    document.getElementById("model_chair").src = myModels_chair[counter];
});