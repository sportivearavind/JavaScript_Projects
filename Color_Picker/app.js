// Initial references to DOM elements
let pickColor = document.getElementById("pick-color");
let error = document.getElementById("error");
let fileInput = document.getElementById("file");
let image = document.getElementById("image");
let hexValRef = document.getElementById("hex-val-ref");
let rgbValRef = document.getElementById("rgb-val-ref");
let customAlert = document.getElementById("custom-alert");
let pickedColorRef = document.getElementById("picked-color-ref");
let eyeDropper;

window.onload = () => {
    if("EyeDropper" in window){
        pickColor.classList.remove("hide");
        eyeDropper = new EyeDropper();
    }else{
        error.classList.remove("hide");
        error.innerHTML("Your message does't support Eyedropper API");
        pickColor.classList.add("hide");
        return false;
    }
}