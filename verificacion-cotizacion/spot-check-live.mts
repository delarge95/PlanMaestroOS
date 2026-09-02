import { computeQuote } from './src/data/services/formula.ts';
const casos: Array<[string,string,number,number]> = [
  ['WEB-01','S',400000,855000],   // lo que muestra el sitio vivo ahora mismo
  ['WEB-01','XS',440000,1140000], // referencia matriz-web.json
  ['WEB-01','M',800000,2195000],
  ['CAD-01','S',400000,599000],
  ['WEB-05','S',440000,1140000],
];
let ok = 0;
for (const [id, lv, eMin, eMax] of casos) {
  const q: any = computeQuote(id, lv as any, 'COP');
  const pass = q.totalMin === eMin && q.totalMax === eMax;
  if (pass) ok++;
  console.log(`${pass ? 'OK ' : 'DIFF'} ${id}|${lv}: motor=${q.totalMin}-${q.totalMax} esperado=${eMin}-${eMax}`);
}
console.log(`${ok}/${casos.length} spot-checks correctos`);
