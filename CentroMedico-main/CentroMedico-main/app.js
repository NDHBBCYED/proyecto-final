// Obteniendo la información por medio del DOM y los ID's
const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const identificacion = document.getElementById("identificacion");
const telefono = document.getElementById("telefono");
const especialidad = document.getElementById("especialidad");
// Campo específico de los médicos
const consultorio = document.getElementById("consultorio");
const email = document.getElementById("email");
// Campo específico de los pacientes
const edad = document.getElementById("edad");

// Llamado de los formularios
const formulario_medicos = document.getElementById("registro_medicos_form");
const formulario_pacientes = document.getElementById("registro_pacientes_form");

// Creación de la clase padre Usuario
class Usuario {
  constructor(nombres, apellidos, identificacion, telefono, especialidad) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.identificacion = identificacion;
    this.telefono = telefono;
    this.especialidad = especialidad;
  }
}

//Con window.location.href.endsWith() unicamente se ejecuta el addEventListener en la página HTML seleccionada

// Para registro-medicos.html
if (window.location.href.endsWith("registro-medicos.html")) {
  // La función se activa cuando se activa el evento con el botón submit (enviar)
  formulario_medicos.addEventListener("submit", function (event) {
    // Previene que la página se recargue sin antes hacer la lógica del addEventListener
    event.preventDefault();

    let valorNombres = nombres.value;
    let valorApellidos = apellidos.value;
    let valorIdentificacion = identificacion.value;
    let valorConsultorio = consultorio.value;
    let valorTelefono = telefono.value;
    let valorEmail = email.value;
    let valorEspecialidad = especialidad.value;

    const medico = new Usuario(
      valorNombres,
      valorApellidos,
      valorIdentificacion,
      valorTelefono,
      valorEspecialidad
    );
    medico.consultorio = valorConsultorio;
    medico.email = valorEmail;

    let medicos = [];

    let localMedicos = localStorage.getItem("medicos");

    //Si localMedicos no esta vacio lo convierte en objeto para hacer el push
    if (localMedicos) {
      medicos = JSON.parse(localMedicos);
    }
    medicos.push(medico);
    localStorage.setItem("medicos", JSON.stringify(medicos));
    alert("¡Médico registrado!");
  });
}

//Para registro-pacientes.html
if (window.location.href.endsWith("registro-pacientes.html")) {
  // La función se activa cuando se activa el evento con el botón submit (enviar)
  formulario_pacientes.addEventListener("submit", function (event) {
    // Previene que la página se recargue sin antes hacer la lógica del addEventListener
    event.preventDefault();

    let valorNombres = nombres.value;
    let valorApellidos = apellidos.value;
    let valorIdentificacion = identificacion.value;
    let valorEdad = edad.value;
    let valorTelefono = telefono.value;
    let valorEspecialidad = especialidad.value;

    const paciente = new Usuario(
      valorNombres,
      valorApellidos,
      valorIdentificacion,
      valorTelefono,
      valorEspecialidad
    );
    paciente.edad = valorEdad;

    let pacientes = [];

    let localPacientes = localStorage.getItem("pacientes");

    //Si localPacientes no esta vacio lo convierte en objeto para hacer el push
    if (localPacientes) {
      pacientes = JSON.parse(localPacientes);
    }
    pacientes.push(paciente);
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
    alert("¡Paciente registrado!");
  });
}

// Funciones para agregar los datos a la tabla

// Para la lista de médicos
const mostrarMedicos = function () {
  let medicos = [];
  let cuerpoTabla = document.getElementById("data_tabla_medicos");
  let localMedicos = localStorage.getItem("medicos");
  if (localMedicos) {
    medicos = JSON.parse(localMedicos);
  }
  medicos.forEach((medico) => {
    let fila = document.createElement("tr");
    //Para crear celda DOM tiene un metodo que es insertCell()
    let celdaNombres = fila.insertCell();
    let celdaApellidos = fila.insertCell();
    let celdaIdentificacion = fila.insertCell();
    let celdaConsultorio = fila.insertCell();
    let celdaTelefono = fila.insertCell();
    let celdaEmail = fila.insertCell();
    let celdaEspecialidad = fila.insertCell();
    let celdaPaciente = fila.insertCell();

    // Asigna los atributos data-cell a las celdas
    celdaNombres.setAttribute("data-cell", "nombres");
    celdaApellidos.setAttribute("data-cell", "apellidos");
    celdaIdentificacion.setAttribute("data-cell", "cédula");
    celdaConsultorio.setAttribute("data-cell", "consultorio");
    celdaTelefono.setAttribute("data-cell", "teléfono");
    celdaEmail.setAttribute("data-cell", "correo")
    celdaEspecialidad.setAttribute("data-cell", "especialidad");
    celdaPaciente.setAttribute("data-cell", "médico encargado");

    // Asignamos los valores a las celdas
    celdaNombres.textContent = medico.nombres;
    celdaApellidos.textContent = medico.apellidos;
    celdaIdentificacion.textContent = medico.identificacion;
    celdaConsultorio.textContent = medico.consultorio;
    celdaTelefono.textContent = medico.telefono;
    celdaEmail.textContent = medico.email;
    celdaEspecialidad.textContent = medico.especialidad;
    celdaPaciente.textContent = "Sin asignar";

    cuerpoTabla.appendChild(fila);
  });
};

// Para la lista de pacientes
const mostrarPacientes = function () {
  let pacientes = [];
  let cuerpoTabla = document.getElementById("data_tabla_pacientes");
  let localpacientes = localStorage.getItem("pacientes");
  if (localpacientes) {
    pacientes = JSON.parse(localpacientes);
  }
  pacientes.forEach((paciente) => {
    let fila = document.createElement("tr");
    let celdaNombres = fila.insertCell();
    let celdaApellidos = fila.insertCell();
    let celdaIdentificacion = fila.insertCell();
    let celdaEdad = fila.insertCell();
    let celdaTelefono = fila.insertCell();
    let celdaEspecialidad = fila.insertCell();
    let celdaMedico = fila.insertCell();

    // Asigna los atributos data-cell a las celdas
    celdaNombres.setAttribute("data-cell", "nombres");
    celdaApellidos.setAttribute("data-cell", "apellidos");
    celdaIdentificacion.setAttribute("data-cell", "cédula");
    celdaEdad.setAttribute("data-cell", "edad");
    celdaTelefono.setAttribute("data-cell", "teléfono");
    celdaEspecialidad.setAttribute("data-cell", "especialidad");
    celdaMedico.setAttribute("data-cell", "médico encargado");

    // Asignamos los valores a las celdas
    celdaNombres.textContent = paciente.nombres;
    celdaApellidos.textContent = paciente.apellidos;
    celdaIdentificacion.textContent = paciente.identificacion;
    celdaEdad.textContent = paciente.edad;
    celdaTelefono.textContent = paciente.telefono;
    celdaEspecialidad.textContent = paciente.especialidad;
    celdaMedico.textContent = "Sin asignar";

    cuerpoTabla.appendChild(fila);
  });
};


if (window.location.href.endsWith("listado-medicos.html")) {
    mostrarMedicos();
  }


if (window.location.href.endsWith("listado-pacientes.html")) {
    mostrarPacientes();
  }