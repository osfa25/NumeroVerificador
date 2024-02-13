let numerosConDigitoVerificador = [];

    function generarDigitoVerificador() {
        const numeroInput = document.getElementById('numeroInput').value;
        const digitoVerificador = calcularDigitoVerificador(numeroInput);
        const numeroCompleto = `${numeroInput}-${digitoVerificador}`;
        numerosConDigitoVerificador.push(numeroCompleto);
        alert(`Número con dígito verificador generado: ${numeroCompleto}`);
    }

    function calcularDigitoVerificador(numero) {
        const rolSinGuion = numero.slice(0, -2);

        const numeroInvertido = rolSinGuion.split('').reverse().join('');

        let suma = 0;
        for (let i = 0; i < numeroInvertido.length; i++) {
            const digito = parseInt(numeroInvertido[i]);
            const multiplicador = [2, 3, 4, 5, 6, 7][i % 6];
            suma += digito * multiplicador;
        }
        const modulo11 = suma % 11;

        const digitoVerificador = 11 - modulo11;

        return (digitoVerificador === 11) ? '0' : digitoVerificador.toString();
    }

    function verificarExistencia() {
        const numeroVerificarInput = document.getElementById('numeroVerificarInput').value;
        if (numerosConDigitoVerificador.includes(numeroVerificarInput)) {
            alert('El número y dígito verificador existen en la lista.');
        } else {
            alert('El número y dígito verificador no existen en la lista.');
        }
    }

    function mostrarListado() {
        const listado = document.getElementById('listado');
        listado.innerHTML = '';
        for (const numero of numerosConDigitoVerificador) {
            const listItem = document.createElement('li');
            listItem.textContent = numero;
            listado.appendChild(listItem);
        }
        listado.style.display = 'block';
    }

    

    