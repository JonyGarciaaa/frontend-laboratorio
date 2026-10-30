// =============================================================================
// LABORATORIO: Conexión Frontend (Vercel) <-> Backend (Render)
// =============================================================================

// URL pública de Render en producción:
const API_URL = 'https://backend-laboratorio-dtf4.onrender.com/api/mensaje';

document.getElementById('consultar').addEventListener('click', async () => {
  const resultado = document.getElementById('resultado');
  resultado.textContent = 'Consultando backend en Render...';

  try {
    const respuesta = await fetch(API_URL);

    if (!respuesta.ok) {
      throw new Error(`HTTP ${respuesta.status} - ${respuesta.statusText}`);
    }

    const datos = await respuesta.json();
    resultado.textContent = JSON.stringify(datos, null, 2);
  } catch (error) {
    resultado.textContent = '❌ No se pudo consultar la API:\n' + error.message + 
      '\n\n💡 Consejos de solución:\n' +
      '1. Si el backend estuvo inactivo en Render, el contenedor gratuito puede tardar unos 30-50 segundos en despertar.\n' +
      '2. Vuelve a presionar el botón en unos segundos.';
  }
});
