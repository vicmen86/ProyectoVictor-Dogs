export default function validate(input) {
  let errors = {};
  var regex = new RegExp("^[0-9-]+$");
  if (!input.name) {
    errors.name = "Se requiere un nombre valido";
  } else if (input.name.length < 3 || input.name.length > 20) {
    errors.name = "El nombre debe tener una longitud de 3 a 20 caractares";
  } else if (/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>\d/?~]/.test(input.name)) {
    errors.name = "Solo letras mayusculas y minusculas!";
  } else if (
    input.name.includes("-") ||
    input.name.charAt(input.name.length - 1) == " " ||
    input.name.charAt(0) == " "
  ) {
    errors.name = "Ingrese un nombre vaido con convinaciones correctas!";
  }
  /////////////////
  else if (!input.height) {
    errors.height = "El formato a ingresar debe ser: 'Hmin-Hmax'";
  } else if (!input.height.charAt(input.height.indexOf("-") + 1)) {
    errors.height = "El formato a ingresar debe ser: 'Hmin-Hmax'";
  } else if (!input.height.includes("-")) {
    errors.height = "El formato a ingresar debe ser: 'Hmin-Hmax'";
  } else if (
    Number(input.height.split("-")[0]) > Number(input.height.split("-")[1])
  ) {
    errors.height = "La altura maxima debe ser mayor a la altura minima";
  } else if (regex.test(input.height) == false) {
    errors.height = "Los numeros deben ser positivos!";
  } else if (input.height.charAt(0) == "-") {
    errors.height = "Los numeros deben ser positivos!";
  }
  ////////////////////
  else if (!input.weight) {
    errors.weight = "El formato a ingresar debe ser: 'Wmin-Wmax'";
  } else if (!input.weight.includes("-")) {
    errors.weight = "El formato a ingresar debe ser: 'Wmin-Wmax'";
  } else if (!input.weight.charAt(input.weight.indexOf("-") + 1)) {
    errors.weight = "El formato a ingresar debe ser:  'Wmin-Wmax'.";
  } else if (
    Number(input.weight.split("-")[0]) > Number(input.weight.split("-")[1])
  ) {
    errors.weight = "El peso maxima debe ser mayor al peso minimo";
  } else if (regex.test(input.weight) == false) {
    errors.weight = "Los numeros deben ser positivos!";
  } else if (input.weight.charAt(0) == "-") {
    errors.weight = "Los numeros deben ser positivos!";
  }
  ////////////////////
  else if (!input.life_span) {
    errors.life_span = "El formato a ingresar debe ser: 'Vmin-Vmax'";
  } else if (!input.life_span.includes("-")) {
    errors.life_span = "El formato a ingresar debe ser: 'Vmin-Vmax'";
  } else if (!input.life_span.charAt(input.life_span.indexOf("-") + 1)) {
    errors.life_span = "El formato a ingresar debe ser: 'Vmin-Vmax'";
  } else if (
    Number(input.life_span.split("-")[0]) >
    Number(input.life_span.split("-")[1])
  ) {
    errors.life_span =
      "Ls esperanza de vida maxima debe ser mayor al minimo ingresado!";
  } else if (regex.test(input.life_span) == false) {
    errors.life_span = "Los numeros deben ser positivos!";
  } else if (input.life_span.charAt(0) == "-") {
    errors.life_span = "Los numeros deben ser positivos!";
  }
  ////////////////////////////////
  else if (input.temperament?.length == 5) {
    errors.temperament = "You can only add up to six temperaments";
  }
  //////////////////////////////////
  if (!errors.name && !errors.height && !errors.weight && !errors.life_span) {
    document.getElementById("Create").disabled = false;
  } else {
    document.getElementById("Create").disabled = true;
  }
  return errors;
}
