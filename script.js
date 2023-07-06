function volume_sphere(event) {
    event.preventDefault();
    //Write your code here
    let radius = document.getElementById("radius").value;
    let volume = (4/3) * Math.PI * Math.pow(radius, 3);
    // Update the volume field with the calculated volume
    // ...
}

window.onload = function() {
    let submit  = document.getElementById("submit");
    submit.onclick = volume_sphere;
    document.getElementById('MyForm').onsubmit = volume_sphere;
};