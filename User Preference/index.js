const selectFontSize = document.querySelector("#selectFontSize");
const selectBgSize = document.querySelector("#selectBgSize");
const selectBtn = document.querySelector("button");
const selectmain = document.querySelector("main");


const storageSetValues = (getStorageFont,getStorageColor) =>{
    selectFontSize.value = getStorageFont;
    selectBgSize.value = getStorageColor;
    selectmain.style.fontSize = getStorageFont;
    selectmain.style.backgroundColor = getStorageColor;
}



const StorageGet =() =>{
    getStorageFont = localStorage.getItem("Font Size");
    getStorageColor = localStorage.getItem("Background Color");

    if(getStorageFont && getStorageColor){
        storageSetValues(getStorageFont,getStorageColor);
    }
    if( !getStorageFont && !getStorageColor){
        storageSetValues("16px","bisque");
    }
    if( getStorageFont && !getStorageColor){
        storageSetValues(getStorageFont,"bisque");
    }
    if( !getStorageFont && getStorageColor){
        storageSetValues("16px",getStorageColor);
    }
}
StorageGet();


// Font Size
selectFontSize.addEventListener("change", function (e){
    const storageFont = e.target.value;
    selectmain.style.fontSize = storageFont;
    localStorage.setItem("Font Size", storageFont);
    

});

// Background Color
selectBgSize.addEventListener("change", function (e){
    const storageColor = e.target.value;
    selectmain.style.backgroundColor = storageColor;
    localStorage.setItem("Background Color", storageColor);


});

// Reset Button
selectBtn.addEventListener("click", function (){

    storageSetValues("16px","bisque");
    localStorage.removeItem("Font Size");
    localStorage.removeItem("Background Color");
});