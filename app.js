// =============================================================================
// LABORATORIO: Conexión Frontend (Vercel) <-> Backend (Render)
// =============================================================================

// NOTA IMPORTANTE:
// 1. Para probar LOCALMENTE: descomente la siguiente línea y comente la de Render:
// const API_URL = 'http://localhost:3000/api/mensaje';

// 2. Para DESPLIEGUE EN VERCEL: sustituya 'https://SU-SERVICIO.onrender.com'
// por la URL pública generada por Render cuando su Web Service esté activo.
const API_URL = 'https://SU-SERVICIO.onrender.com/api/mensaje';

document.getElementById('consultar').addEventListener('click', async () => {
  const resultado = document.getElementById('resultado');
  resultado.textContent = 'Consultando backend en ' + API_URL + ' ...';

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
      '1. Si está en producción, verifique que la URL de Render sea correcta y esté activa.\n' +
      '2. En Render Free Tier el servicio se suspende por inactividad; la primera petición puede demorar 30 a 60 segundos en despertar.\n' +
      '3. Si prueba localmente, asegúrese de haber ejecutado "node server.js" en la carpeta backend-laboratorio.';
  }
});
