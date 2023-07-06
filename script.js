function volume_sphere() {
    //Write your code here
	let radius = document.getElementById("radius").value;
	let volume = (4/3) * Math.PI * Math.pow(radius, 3);

	let submit  = document.getElementById("submit");
	submit.onclick = volume_sphere;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
