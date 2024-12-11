// ¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

// Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:

// Recibirás un string que contiene letras y paréntesis.
// Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
// Si hay paréntesis anidados, resuelve primero los más internos.
// Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.
// Nos ha dejado algunos ejemplos:

function fixPackages(packages) {
  while (packages.includes("(")) {
    // Busca el paréntesis más interno
    packages = packages.replace(/\(([^()]+)\)/g, (match, contenido) => {
      // Invierte el contenido dentro del paréntesis
      return contenido.split("").reverse().join("");
    });
  }
  return packages; // Devuelve el resultado sin paréntesis
}

fixPackages("abc(def(gh)i)jk");
