const NOTION_API = 'https://api.notion.com/v1';
const token = process.env.NOTION_TOKEN;
const PARENT = process.env.NOTION_PARENT_PAGE_ID;
const headers = {
  'Authorization': `Bearer ${token}`,
  'Notion-Version': '2022-06-28',
  'Content-Type': 'application/json',
};

async function createDB(name, properties, icon) {
  const res = await fetch(`${NOTION_API}/databases`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      parent: { page_id: PARENT },
      icon: { type: 'emoji', emoji: icon },
      title: [{ type: 'text', text: { content: name } }],
      properties,
    }),
  });
  const data = await res.json();
  if (data.id) {
    console.log(`OK ${name}: ${data.id}`);
    return data.id;
  }
  console.log(`ERR ${name}:`, JSON.stringify(data).slice(0, 200));
  return null;
}

(async () => {
  const tasksId = await createDB('Tasks', {
    'Titulo': { title: {} },
    'ProjectId': { rich_text: {} },
    'AreaId': { rich_text: {} },
    'Estado': { select: { options: [
      { name: 'Bandeja', color: 'gray' }, { name: 'Próxima', color: 'blue' },
      { name: 'En curso', color: 'yellow' }, { name: 'Esperando', color: 'orange' },
      { name: 'Hecho', color: 'green' }, { name: 'Cancelado', color: 'red' },
    ]}},
    'Prioridad': { select: { options: [
      { name: 'Alta', color: 'red' }, { name: 'Media', color: 'yellow' }, { name: 'Baja', color: 'gray' },
    ]}},
    'Bloque': { rich_text: {} },
    'Fecha': { date: {} },
    'DuracionEstimadaMin': { number: {} },
    'ProximaAccion': { rich_text: {} },
    'EnergiaRequerida': { select: { options: [
      { name: 'Alta', color: 'red' }, { name: 'Media', color: 'yellow' }, { name: 'Baja', color: 'green' },
    ]}},
    'Regla10Min': { checkbox: {} },
    'SuficientementeBueno': { checkbox: {} },
    'UrlReferencia': { url: {} },
    'Creado': { rich_text: {} },
    'Actualizado': { rich_text: {} },
  }, '📋');

  const careerId = await createDB('Career Applications', {
    'Empresa': { title: {} },
    'Rol': { rich_text: {} },
    'Estado': { select: { options: [
      { name: 'Prospecto', color: 'gray' }, { name: 'Preparar', color: 'blue' },
      { name: 'Aplicado', color: 'yellow' }, { name: 'Seguimiento', color: 'orange' },
      { name: 'Entrevista', color: 'purple' }, { name: 'Oferta', color: 'green' },
      { name: 'Rechazado', color: 'red' }, { name: 'Cerrado', color: 'gray' },
    ]}},
    'Url': { url: {} },
    'UbicacionRemoto': { select: { options: [
      { name: 'Remoto', color: 'green' }, { name: 'Híbrido', color: 'yellow' },
      { name: 'Onsite', color: 'red' },
    ]}},
    'FechaAplicacion': { date: {} },
    'ProximaAccion': { rich_text: {} },
    'FechaSeguimiento': { date: {} },
    'CvVersion': { rich_text: {} },
    'PortfolioVersion': { rich_text: {} },
    'ProyectoDestacado': { rich_text: {} },
    'Contacto': { rich_text: {} },
    'Fuente': { rich_text: {} },
    'Notas': { rich_text: {} },
    'ConsentimientoEnvio': { checkbox: {} },
  }, '💼');

  console.log('\n.env:');
  if (tasksId) console.log(`NOTION_TASKS_DB_ID=${tasksId.replace(/-/g, '')}`);
  if (careerId) console.log(`NOTION_CAREER_DB_ID=${careerId.replace(/-/g, '')}`);
})();
