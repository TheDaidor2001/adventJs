//Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

// Reglas:

// Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
// Cada nombre debe estar en una línea, alineado a la izquierda.
// El marco está construido con * y tiene un borde de una línea de ancho.
// La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.

function createFrame(names) {
  let maxLength = 0;

  names.forEach((name) => {
    maxLength = Math.max(maxLength, name.length + 4);
  });

  return `${"*".repeat(maxLength)}
${names
  .map((name) => `* ${name}${" ".repeat(maxLength - name.length - 3)}*`)
  .join("\n")}
${"*".repeat(maxLength)}`;
}

createFrame(["midu", "madeval", "educalvolpz"]);
