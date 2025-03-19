let nombres = [];

        function agregarNombre() {
            let nombreInput = document.getElementById("nombre").value.trim();
            if (nombreInput) {
                nombres.push(nombreInput);
                document.getElementById("nombre").value = "";
                actualizarLista();
            }
        }

        function actualizarLista() {
            let lista = document.getElementById("listaNombres");
            lista.innerHTML = "";
            nombres.forEach(nombre => {
                let li = document.createElement("li");
                li.textContent = nombre;
                lista.appendChild(li);
            });
        }

        function sortearAmigo() {
            if (nombres.length > 0) {
                let elegido = nombres[Math.floor(Math.random() * nombres.length)];
                document.getElementById("resultado").textContent = "Tu amigo secreto es: " + elegido;
            } 
            else {
                document.getElementById("resultado").textContent = "No hay amigos en la lista.";
            }
        }