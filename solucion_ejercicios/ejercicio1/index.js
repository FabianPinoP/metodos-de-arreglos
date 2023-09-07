const listaTareas = [];

function agregarTarea() {
  const tareaInput = document.getElementById("tarea");
  const tarea = tareaInput.value.trim();
  if (tarea !== "") {
    listaTareas.push({ tarea, completada: false });
    mostrarTareas();
    tareaInput.value = "";
  }
}

function mostrarTareas() {
  const listaTareasElement = document.getElementById("listaTareas");
  listaTareasElement.innerHTML = "";
  listaTareas.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${item.tarea} (${item.completada ? 'Completada' : 'Pendiente'})`;
    li.onclick = () => marcarTareaComoCompletada(index);
    listaTareasElement.appendChild(li);
  });
}

function marcarTareaComoCompletada(index) {
  listaTareas[index].completada = true;
  mostrarTareas();
}
