const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".text-mensaje");
const copiar = document.querySelector(".copiar");

// The letter "e" is converted to "enter"
// The letter "i" is converted to "imes"
// The letter "a" is converted to "ai"
// The letter "o" is converted to "ober"
// The letter "u" is converted to "ufat"

function botonEncriptar() {
	const textoEncriptado = encriptar(textArea.value);
	mensaje.value = textoEncriptado;
    textArea.value = "";  
    mensaje.style.backgroundImage = "none";
}    


function encriptar(stringEncritada) {
	let matrizCodigo = [
		["e", "enter"],
		["i", "imes"],
		["a", "ai"],
		["o", "ober"],
		["u", "ufat"],
	];
	stringEncritada = stringEncritada.toLowerCase();

	for (let i = 0; i < matrizCodigo.length; i++) {
		if (stringEncritada.includes(matrizCodigo[i][0])) {
			stringEncritada = stringEncritada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
		}
	}
	return stringEncritada;
}
function botonDesencriptar() {
	const textoEncriptado = desencriptar(textArea.value);
	mensaje.value = textoEncriptado;
    textArea.value = ""; 
}    
function desencriptar(stringDesencriptada) {
	let matrizCodigo = [
		["e", "enter"],
		["i", "imes"],
		["a", "ai"],
		["o", "ober"],
		["u", "ufat"],
	];
	stringDesencriptada = stringDesencriptada.toLowerCase();

	for (let i = 0; i < matrizCodigo.length; i++) {
		if (stringDesencriptada.includes(matrizCodigo[i][1])) {
			stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
		}
	}
	return stringDesencriptada;
}
function botonCopiar() {
    mensaje.select();
    document.execCommand("copy");
    copiar.innerHTML = "Copiado!"; 
    setTimeout(() => {
        copiar.innerHTML = "Copiar";
    }, 1000);   
}