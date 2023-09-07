const listaContactos = [];

function agregarContacto() {
  const nombreInput = document.getElementById("nombre");
  const telefonoInput = document.getElementById("telefono");
  const nombre = nombreInput.value.trim();
  const telefono = telefonoInput.value.trim();

  if (nombre !== "" && telefono !== "") {
    listaContactos.push({ nombre, telefono });
    ordenarContactos();
    mostrarContactos();
    nombreInput.value = "";
    telefonoInput.value = "";
  }
}

function mostrarContactos() {
  const listaContactosElement = document.getElementById("listaContactos");
  listaContactosElement.innerHTML = "";
  listaContactos.forEach((contacto, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. Nombre: ${contacto.nombre}, Teléfono: ${
      contacto.telefono
    }`;
    listaContactosElement.appendChild(li);
  });
}

function ordenarContactos() {
  listaContactos.sort((a, b) => a.nombre.localeCompare(b.nombre));
}

function buscarContactos() {
  const busquedaInput = document.getElementById("busqueda");
  const filtro = busquedaInput.value.trim().toLowerCase();

  const contactosFiltrados = listaContactos.filter((contacto) => {
    return (
      contacto.nombre.toLowerCase().includes(filtro) ||
      contacto.telefono.includes(filtro)
    );
  });

  mostrarContactosFiltrados(contactosFiltrados);
}

function mostrarContactosFiltrados(contactos) {
  const listaContactosElement = document.getElementById("listaContactos");
  listaContactosElement.innerHTML = "";

  contactos.forEach((contacto, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. Nombre: ${contacto.nombre}, Teléfono: ${
      contacto.telefono
    }`;
    listaContactosElement.appendChild(li);
  });
}
