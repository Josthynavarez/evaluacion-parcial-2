import React, { useState } from 'react';
import './App.css';

function App() {
  const calcularAreaCuadrado = (lado) => {
    return lado * lado;
  };
  const ladoEjemplo = 5;

  const sumarElementos = (arreglo) => {
    return arreglo.reduce((acumulador, actual) => acumulador + actual, 0);
  };
  const arregloEjemplo = [10, 20, 30, 40];

  const arregloOriginal = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const arregloDividido = arregloOriginal.map(numero => numero / 5);

  const alumnos = [
    { name: 'Viviana', edad: 19, calificacion: 10 },
    { name: 'Wendy', edad: 20, calificacion: 8 },
    { name: 'Gerson', edad: 18, calificacion: 9 }
  ];
  const calcularPromedioCalificaciones = (listaAlumnos) => {
    const suma = listaAlumnos.reduce((acc, alumno) => acc + alumno.calificacion, 0);
    return suma / listaAlumnos.length;
  };

  const [acumulador, setAcumulador] = useState(25);
  const incrementar = () => setAcumulador(acumulador + 5);
  const disminuir = () => setAcumulador(acumulador - 5);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '30px' }}>Desarrollo de Proyecto en React JS</h1>
      
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
        <h3>Ejercicio 1: Área de un cuadrado</h3>
        <p>Lado del cuadrado: <strong>{ladoEjemplo}</strong></p>
        <p>El área calculada es: <strong>{calcularAreaCuadrado(ladoEjemplo)}</strong></p>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
        <h3>Ejercicio 2: Suma de elementos de un arreglo</h3>
        <p>Arreglo original: <strong>{JSON.stringify(arregloEjemplo)}</strong></p>
        <p>La suma de los elementos es: <strong>{sumarElementos(arregloEjemplo)}</strong></p>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
        <h3>Ejercicio 3: Arreglo dividido por 5 (map)</h3>
        <p>Arreglo original: <strong>{JSON.stringify(arregloOriginal)}</strong></p>
        <p>Arreglo dividido (/5): <strong>{JSON.stringify(arregloDividido)}</strong></p>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
        <h3>Ejercicio 4: Promedio de calificaciones de alumnos</h3>
        <p>Alumnos: {alumnos.map(a => `${a.name} (${a.calificacion} pts)`).join(', ')}</p>
        <p>El promedio de las calificaciones es: <strong>{calcularPromedioCalificaciones(alumnos)}</strong></p>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', marginTop: '20px', textAlign: 'center' }}>
        <h3>Ejercicio 5: Acumulador con useState</h3>
        <div style={{ fontSize: '24px', margin: '15px 0', fontWeight: 'bold', border: '2px solid green', display: 'inline-block', padding: '10px 20px', borderRadius: '5px' }}>
          {acumulador}
        </div>
        <div style={{ marginTop: '10px' }}>
          <button onClick={incrementar} style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', marginRight: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>
            +5
          </button>
          <button onClick={disminuir} style={{ backgroundColor: '#dc3545', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>
            -5
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;