import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const root = "E:/Laboral/_roadmap_laboral";
const outputPath = `${root}/tracker/Tracker_Estrategia_Laboral_Alexander_v1.xlsx`;
const previewDir = `${root}/build`;

const theme = {
  accent: "#245E6F",
  accent2: "#7A5A20",
  soft: "#EEF7F5",
  warn: "#FFF4D6",
  good: "#E6F4EA",
  bad: "#FCE8E6",
  text: "#1F2933",
  grid: "#D7DEE2",
};

const statuses = ["Not Started", "In Progress", "Blocked", "Done", "Paused"];
const appStatuses = ["Saved", "Applied", "Contacted", "Interview", "Test", "Offer", "Rejected", "No Fit", "Paused"];
const priorities = ["High", "Medium", "Low"];
const layers = ["A1", "A2", "B1", "B2", "C", "Watchlist"];
const roleFamilies = ["Unity Technical Artist", "Unity WebGL", "Technical Visualization", "XR/Simulation", "Python/AI Tooling", "3D/Blender", "Marketing-adjacent"];
const yesNo = ["Yes", "No", "Partial", "Unknown"];
const contractTypes = ["Contractor/B2B", "EOR", "Employee", "Freelance Project", "Unknown"];

function daysFromStart(week) {
  return new Date(Date.UTC(2026, 5, 15 + (week - 1) * 7));
}

function setTitle(sheet, title, subtitle, lastCol = "L") {
  sheet.showGridLines = false;
  const titleRange = sheet.getRange(`A1:${lastCol}1`);
  titleRange.merge();
  titleRange.values = [[title]];
  titleRange.format = {
    fill: theme.accent,
    font: { bold: true, color: "#FFFFFF", size: 16 },
    horizontalAlignment: "center",
  };
  const subRange = sheet.getRange(`A2:${lastCol}2`);
  subRange.merge();
  subRange.values = [[subtitle]];
  subRange.format = {
    fill: theme.soft,
    font: { color: theme.text, italic: true },
    horizontalAlignment: "center",
  };
}

function styleHeader(range) {
  range.format = {
    fill: theme.accent,
    font: { bold: true, color: "#FFFFFF" },
    wrapText: true,
    borders: { preset: "all", style: "thin", color: theme.grid },
  };
}

function styleBody(range) {
  range.format = {
    fill: "#FFFFFF",
    font: { color: theme.text },
    wrapText: true,
    borders: { preset: "all", style: "thin", color: theme.grid },
  };
}

function setWidths(sheet, widths) {
  widths.forEach(([col, px]) => {
    sheet.getRange(`${col}1:${col}220`).format.columnWidthPx = px;
  });
}

function addListValidation(sheet, range, values) {
  sheet.getRange(range).dataValidation = { rule: { type: "list", values } };
}

function addTable(sheet, range, name) {
  const table = sheet.tables.add(range, true, name);
  table.showFilterButton = true;
  table.showBandedRows = true;
  try {
    table.style = "TableStyleMedium2";
  } catch {
    // Style names can vary by renderer; structural table behavior is what matters.
  }
}

const workbook = Workbook.create();
const dashboard = workbook.worksheets.add("Dashboard");
const weekly = workbook.worksheets.add("Weekly Plan");
const apps = workbook.worksheets.add("Applications");
const assets = workbook.worksheets.add("Assets");
const study = workbook.worksheets.add("Study");
const offers = workbook.worksheets.add("Offers");
const lists = workbook.worksheets.add("Lists");

// Dashboard
setTitle(dashboard, "Plan de Estrategia Laboral - Dashboard", "Actualizar tracker semanalmente. El PDF define la estrategia; este workbook mide ejecucion.", "L");
dashboard.getRange("A4:D4").values = [["KPI", "Valor", "Objetivo", "Lectura"]];
styleHeader(dashboard.getRange("A4:D4"));
dashboard.getRange("A5:D15").values = [
  ["Semanas Done", null, "16", "Avance del roadmap"],
  ["Activos Done", null, "8", "Portfolio/GitHub/CV/etc."],
  ["Aplicaciones enviadas", null, "40", "Volumen acumulado bueno"],
  ["Conversaciones afines", null, "4", "Contacted+Interview+Test+Offer"],
  ["Entrevistas", null, "2", "Senal de conversion"],
  ["Ofertas", null, "1", "Resultado"],
  ["Study outputs Done", null, "12", "Estudio con evidencia"],
  ["Fit promedio aplicaciones", null, ">=10", "Calidad de targeting"],
  ["Ofertas aceptables", null, "1", "Score >=3.5 y fit >=4"],
  ["Bloqueos activos", null, "0", "Blocked en Weekly/Assets"],
  ["Proxima accion", null, "Viernes", "Se revisa semanalmente"],
];
styleBody(dashboard.getRange("A5:D15"));
dashboard.getRange("B5:B15").formulas = [
  ['=COUNTIF(\'Weekly Plan\'!$J$6:$J$21,"Done")'],
  ['=COUNTIF(Assets!$F$6:$F$25,"Done")'],
  ['=COUNTIF(Applications!$N$6:$N$125,"Applied")+COUNTIF(Applications!$N$6:$N$125,"Contacted")+COUNTIF(Applications!$N$6:$N$125,"Interview")+COUNTIF(Applications!$N$6:$N$125,"Test")+COUNTIF(Applications!$N$6:$N$125,"Offer")+COUNTIF(Applications!$N$6:$N$125,"Rejected")'],
  ['=COUNTIF(Applications!$N$6:$N$125,"Contacted")+COUNTIF(Applications!$N$6:$N$125,"Interview")+COUNTIF(Applications!$N$6:$N$125,"Test")+COUNTIF(Applications!$N$6:$N$125,"Offer")'],
  ['=COUNTIF(Applications!$N$6:$N$125,"Interview")+COUNTIF(Applications!$N$6:$N$125,"Test")+COUNTIF(Applications!$N$6:$N$125,"Offer")'],
  ['=COUNTIF(Applications!$N$6:$N$125,"Offer")'],
  ['=COUNTIF(Study!$G$6:$G$45,"Done")'],
  ['=IFERROR(AVERAGEIF(Applications!$M$6:$M$125,">0",Applications!$M$6:$M$125),0)'],
  ['=COUNTIF(Offers!$M$6:$M$25,"Accept")+COUNTIF(Offers!$M$6:$M$25,"Negotiate")'],
  ['=COUNTIF(\'Weekly Plan\'!$J$6:$J$21,"Blocked")+COUNTIF(Assets!$F$6:$F$25,"Blocked")'],
  ['=IFERROR(IF(INDEX(\'Weekly Plan\'!$M$6:$M$21,MATCH("In Progress",\'Weekly Plan\'!$J$6:$J$21,0))="","Set next action in Weekly Plan",INDEX(\'Weekly Plan\'!$M$6:$M$21,MATCH("In Progress",\'Weekly Plan\'!$J$6:$J$21,0))),"Review Weekly Plan")'],
];
dashboard.getRange("B5:B11").format.numberFormat = "0";
dashboard.getRange("B12").format.numberFormat = "0.0";
dashboard.getRange("B13:B14").format.numberFormat = "0";
dashboard.getRange("A18:B18").values = [["Application Status", "Applications"]];
dashboard.getRange("D18:E18").values = [["Roadmap Status", "Weekly Plan"]];
styleHeader(dashboard.getRange("A18:B18"));
styleHeader(dashboard.getRange("D18:E18"));
dashboard.getRange("A19:B27").values = appStatuses.map((s) => [s, null]);
dashboard.getRange("D19:E23").values = statuses.map((s) => [s, null]);
styleBody(dashboard.getRange("A19:B27"));
styleBody(dashboard.getRange("D19:E23"));
dashboard.getRange("B19:B27").formulas = appStatuses.map((s) => [`=COUNTIF(Applications!$N$6:$N$125,"${s}")`]);
dashboard.getRange("E19:E23").formulas = statuses.map((s) => [`=COUNTIF('Weekly Plan'!$J$6:$J$21,"${s}")`]);
dashboard.getRange("A30:D33").values = [
  ["Reglas", "", "", ""],
  ["Piso", "3 millones COP solo si da experiencia real en campo", "Ideal", "USD 2000"],
  ["Ambicioso", "USD 6000", "Foco", "Unity Technical Artist"],
  ["Evitar", "Marketing puro sin 3D/Unity/realtime", "Disponibilidad", "25h/semana"],
];
dashboard.getRange("A30:D30").merge();
dashboard.getRange("A30:D30").format = { fill: theme.accent2, font: { bold: true, color: "#FFFFFF" } };
styleBody(dashboard.getRange("A31:D33"));
setWidths(dashboard, [["A", 190], ["B", 150], ["C", 130], ["D", 310], ["E", 115], ["F", 140], ["G", 140], ["H", 140], ["I", 140], ["J", 140], ["K", 140], ["L", 140]]);
try {
  const chart = dashboard.charts.add("bar", dashboard.getRange("A18:B27"));
  chart.title = "Application Pipeline";
  chart.hasLegend = false;
  chart.xAxis = { axisType: "textAxis" };
  chart.yAxis = { numberFormatCode: "0" };
  chart.setPosition("F4", "L17");
} catch (error) {
  console.warn("Chart creation skipped:", error.message);
}

// Weekly Plan
setTitle(weekly, "16-Week Roadmap", "Cada viernes actualizar status, blocker y next action.", "J");
const weeklyHeaders = ["Week", "Start", "Phase", "Primary Goal", "Mon", "Tue", "Wed", "Thu", "Fri", "Status", "Completion %", "Blocker", "Next Action"];
weekly.getRange("A5:M5").values = [weeklyHeaders];
styleHeader(weekly.getRange("A5:M5"));
const weeklyRows = [
  [1, daysFromStart(1), "Focus", "Congelar narrativa y estructura", "Narrative", "Asset audit", "Targets seed", "Study blocker", "Review"],
  [2, daysFromStart(2), "Portfolio", "Homepage + TwinSight skeleton", "Hero", "Case sections", "Targets", "Visual", "QA"],
  [3, daysFromStart(3), "TwinSight", "Completar case study", "Problem/solution", "Pipeline", "Roles", "Media", "Claims"],
  [4, daysFromStart(4), "Demo", "Demo 90s + teaser", "Script", "Record", "Soft feedback", "Edit", "Publish"],
  [5, daysFromStart(5), "GitHub", "README and repo cleanup", "Overview", "Features", "Hygiene", "C# note", "Pins"],
  [6, daysFromStart(6), "Public profiles", "CV + LinkedIn", "CV", "LinkedIn", "3 apps", "Pitch", "Links"],
  [7, daysFromStart(7), "ArtStation", "Human renders + breakdown", "Renders", "Breakdown", "A1 list", "Visual polish", "Publish"],
  [8, daysFromStart(8), "Soft launch", "8-12 A1 targets", "Prep", "Apply", "Outreach", "Fix blocker", "Review"],
  [9, daysFromStart(9), "Iteration", "Improve conversion", "Adjust", "Apply", "Follow-up", "Interview prep", "Targeting"],
  [10, daysFromStart(10), "Main wave", "10-15 roles", "Setup", "Apply", "Outreach", "Study", "Conversion"],
  [11, daysFromStart(11), "Interviews", "Defense readiness", "Walkthrough", "Legal/salary", "Apply", "Test prep", "Objections"],
  [12, daysFromStart(12), "Main wave", "Second wave + follow-ups", "List", "Apply", "Follow-up", "Polish", "Gate"],
  [13, daysFromStart(13), "ARA", "ARA MVP if package ready", "Decision", "README/MVP", "Mixed roles", "AI study", "Claims"],
  [14, daysFromStart(14), "Pivot", "Evidence-based adjustment", "Decide", "Update", "Apply", "Pitch", "Compare"],
  [15, daysFromStart(15), "Negotiation", "Offers and contracts", "Ranges", "Clauses", "Pipeline", "Simulation", "Decision"],
  [16, daysFromStart(16), "Cycle close", "Audit and next 90 days", "Metrics", "Next cycle", "Final wave", "Retro", "Plan"],
];
weekly.getRange("A6:I21").values = weeklyRows.map((r) => r.slice(0, 9));
weekly.getRange("J6:M21").values = weeklyRows.map((_, i) => [i === 0 ? "In Progress" : "Not Started", 0, "", ""]);
styleBody(weekly.getRange("A6:M21"));
weekly.getRange("B6:B21").format.numberFormat = "yyyy-mm-dd";
weekly.getRange("K6:K21").format.numberFormat = "0%";
addListValidation(weekly, "J6:J21", statuses);
addTable(weekly, "A5:M21", "WeeklyPlanTable");
weekly.freezePanes.freezeRows(5);
setWidths(weekly, [["A", 55], ["B", 95], ["C", 110], ["D", 220], ["E", 105], ["F", 105], ["G", 105], ["H", 105], ["I", 105], ["J", 120], ["K", 95], ["L", 170], ["M", 220]]);

// Applications
setTitle(apps, "Applications Pipeline", "Score first, apply second. Fit Score >= 10 = aplicar rapido; 7-9 = investigar; <=6 = descartar.", "Q");
const appHeaders = ["Date", "Company", "Role", "Layer", "Role Family", "Role Fit", "Portfolio Match", "Remote", "Contract", "Authorization", "Salary", "Experience", "Fit Score", "Status", "Next Action Date", "Portfolio Angle", "Contact/URL", "Notes"];
apps.getRange("A5:R5").values = [appHeaders];
styleHeader(apps.getRange("A5:R5"));
const appSeed = [
  [new Date(Date.UTC(2026, 5, 17)), "Treeview Studio", "Unity/XR Technical Artist", "A1", "Unity Technical Artist", 2, 2, 2, 1, 2, 1, 2, null, "Saved", new Date(Date.UTC(2026, 5, 24)), "TwinSight pipeline + Unity/WebGL", "", "Verify remote/contractor route"],
  [new Date(Date.UTC(2026, 5, 17)), "Active Theory", "Realtime 3D/WebGL", "A1", "Unity WebGL", 2, 2, 1, 1, 1, 1, 2, null, "Saved", new Date(Date.UTC(2026, 5, 24)), "Browser-based 3D demo", "", "Creative tech but avoid pure marketing"],
  [new Date(Date.UTC(2026, 5, 17)), "Product Visualization Target", "Technical Visualization Developer", "A1", "Technical Visualization", 2, 2, 2, 1, 2, 1, 2, null, "Saved", new Date(Date.UTC(2026, 5, 24)), "CAD-to-realtime inspection", "", "Replace with real company"],
];
const blankApps = Array.from({ length: 117 }, () => [null, "", "", "", "", "", "", "", "", "", "", "", null, "", null, "", "", ""]);
apps.getRange("A6:R125").values = [...appSeed, ...blankApps];
apps.getRange("M6:M125").formulas = Array.from({ length: 120 }, (_, i) => [`=IF(C${i + 6}="","",SUM(F${i + 6}:L${i + 6}))`]);
styleBody(apps.getRange("A6:R125"));
apps.getRange("A6:A125").format.numberFormat = "yyyy-mm-dd";
apps.getRange("O6:O125").format.numberFormat = "yyyy-mm-dd";
addListValidation(apps, "D6:D125", layers);
addListValidation(apps, "E6:E125", roleFamilies);
["F", "G", "H", "I", "J", "K", "L"].forEach((col) => {
  apps.getRange(`${col}6:${col}125`).dataValidation = { rule: { type: "whole", operator: "between", formula1: 0, formula2: 2 } };
});
addListValidation(apps, "N6:N125", appStatuses);
addTable(apps, "A5:R125", "ApplicationsTable");
apps.freezePanes.freezeRows(5);
setWidths(apps, [["A", 95], ["B", 170], ["C", 190], ["D", 75], ["E", 160], ["F", 70], ["G", 95], ["H", 70], ["I", 75], ["J", 95], ["K", 70], ["L", 80], ["M", 80], ["N", 110], ["O", 110], ["P", 220], ["Q", 220], ["R", 260]]);

// Assets
setTitle(assets, "Assets Closure", "Cerrar paquete publico antes de volumen alto de aplicaciones.", "J");
assets.getRange("A5:J5").values = [["Asset", "Priority", "Current State", "Next Action", "Owner", "Status", "Completion %", "Due", "Definition of Done", "Link"]];
styleHeader(assets.getRange("A5:J5"));
const assetRows = [
  ["TwinSight case study", "High", "In progress", "Complete problem/solution/pipeline/features/metrics", "Alexander", "In Progress", 0.55, new Date(Date.UTC(2026, 5, 28)), "Readable end-to-end with demo/media", ""],
  ["Portfolio web", "High", "In progress", "Finish homepage and TwinSight route", "Alexander", "In Progress", 0.45, new Date(Date.UTC(2026, 5, 28)), "First viewport communicates role", ""],
  ["GitHub", "High", "Pending", "README TwinSight + pinned repos", "Alexander", "Not Started", 0.1, new Date(Date.UTC(2026, 6, 5)), "Reviewer can understand project", ""],
  ["CV Unity TA", "High", "Pending", "One-page CV with links", "Alexander", "Not Started", 0, new Date(Date.UTC(2026, 6, 8)), "ATS-friendly and focused", ""],
  ["LinkedIn", "High", "Pending", "Headline/About/Featured", "Alexander", "Not Started", 0, new Date(Date.UTC(2026, 6, 8)), "Coherent public profile", ""],
  ["Demo reel 90s", "High", "Pending", "Record and edit TwinSight", "Alexander", "Not Started", 0, new Date(Date.UTC(2026, 6, 1)), "Main demo + teaser", ""],
  ["ArtStation breakdown", "Medium", "Pending", "TwinSight/Human breakdown", "Alexander", "Not Started", 0, new Date(Date.UTC(2026, 6, 12)), "Technical art presentation", ""],
  ["Human CGCookie renders", "Medium", "Pending", "Extract 3-5 renders", "Alexander", "Not Started", 0, new Date(Date.UTC(2026, 6, 12)), "Visual proof asset", ""],
  ["ARA MVP", "Medium", "Pending", "Functional README/demo after main package", "Alexander", "Paused", 0, new Date(Date.UTC(2026, 7, 10)), "Secondary tooling proof", ""],
];
const blankAssets = Array.from({ length: 11 }, () => ["", "", "", "", "", "Not Started", 0, null, "", ""]);
assets.getRange("A6:J25").values = [...assetRows, ...blankAssets];
styleBody(assets.getRange("A6:J25"));
assets.getRange("G6:G25").format.numberFormat = "0%";
assets.getRange("H6:H25").format.numberFormat = "yyyy-mm-dd";
addListValidation(assets, "B6:B25", priorities);
addListValidation(assets, "F6:F25", statuses);
addTable(assets, "A5:J25", "AssetsTable");
assets.freezePanes.freezeRows(5);
setWidths(assets, [["A", 190], ["B", 90], ["C", 130], ["D", 260], ["E", 95], ["F", 120], ["G", 95], ["H", 95], ["I", 270], ["J", 200]]);

// Study
setTitle(study, "Study Outputs", "Estudio permitido solo si produce evidencia o desbloquea entrevista.", "I");
study.getRange("A5:I5").values = [["Week", "Topic", "Why", "Action", "Output", "Linked Asset", "Status", "Hours", "Notes"]];
styleHeader(study.getRange("A5:I5"));
const studyRows = [
  [1, "Narrative and pitch", "Coherence", "Write 30/60/120s pitch", "Pitch ready", "LinkedIn/CV", "In Progress", 3, ""],
  [2, "Unity WebGL constraints", "TwinSight defense", "Document build constraints", "README section", "GitHub", "Not Started", 4, ""],
  [3, "CAD-to-realtime optimization", "Technical art proof", "Before/after breakdown", "Portfolio section", "TwinSight", "Not Started", 4, ""],
  [4, "Interaction UX", "Feature clarity", "Record feature GIFs", "Demo clips", "Portfolio", "Not Started", 4, ""],
  [5, "UI Toolkit / interface", "Tool polish", "Improve panels", "UI screenshot", "TwinSight", "Not Started", 3, ""],
  [6, "README/documentation", "Technical reviewer", "Finalize README", "README v1", "GitHub", "Not Started", 3, ""],
  [7, "Visual presentation", "ArtStation", "Prepare breakdown", "ArtStation post", "Human/TwinSight", "Not Started", 4, ""],
  [8, "Interview defense", "Conversion", "Practice answer bank", "20 answers", "Interview", "Not Started", 3, ""],
  [9, "Application writing", "Outreach", "Templates + applications", "5 apps", "Applications", "Not Started", 3, ""],
  [10, "Test assignment readiness", "Hiring screen", "Mini test prep", "Checklist", "Interview", "Not Started", 3, ""],
  [11, "Negotiation", "Offer quality", "Prepare ranges", "Scorecard", "Offers", "Not Started", 2, ""],
  [12, "Pivot audit", "Strategy", "Analyze conversion", "Decision", "Dashboard", "Not Started", 2, ""],
];
const blankStudy = Array.from({ length: 28 }, () => ["", "", "", "", "", "", "Not Started", "", ""]);
study.getRange("A6:I45").values = [...studyRows, ...blankStudy];
styleBody(study.getRange("A6:I45"));
addListValidation(study, "G6:G45", statuses);
addTable(study, "A5:I45", "StudyTable");
study.freezePanes.freezeRows(5);
setWidths(study, [["A", 65], ["B", 180], ["C", 140], ["D", 230], ["E", 150], ["F", 130], ["G", 120], ["H", 70], ["I", 250]]);

// Offers
setTitle(offers, "Offer Scorecard", "Aceptar bajo pago solo si da experiencia real en el campo.", "N");
offers.getRange("A5:N5").values = [["Company", "Role", "Monthly Gross", "Currency", "Fit Unity/TA", "Learning", "Compensation", "Contract Clarity", "Remote Fit", "Sustainability", "Portfolio Value", "Average", "Decision", "Notes"]];
styleHeader(offers.getRange("A5:N5"));
const offerRows = Array.from({ length: 20 }, () => ["", "", "", "USD", "", "", "", "", "", "", "", null, "", ""]);
offers.getRange("A6:N25").values = offerRows;
offers.getRange("L6:L25").formulas = Array.from({ length: 20 }, (_, i) => [`=IF(A${i + 6}="","",AVERAGE(E${i + 6}:K${i + 6}))`]);
offers.getRange("M6:M25").formulas = Array.from({ length: 20 }, (_, i) => [`=IF(A${i + 6}="","",IF(AND(L${i + 6}>=3.5,E${i + 6}>=4),"Accept",IF(L${i + 6}>=3,"Negotiate","Reject")))`]);
styleBody(offers.getRange("A6:N25"));
offers.getRange("C6:C25").format.numberFormat = "$#,##0";
offers.getRange("L6:L25").format.numberFormat = "0.0";
["E", "F", "G", "H", "I", "J", "K"].forEach((col) => {
  offers.getRange(`${col}6:${col}25`).dataValidation = { rule: { type: "whole", operator: "between", formula1: 1, formula2: 5 } };
});
addListValidation(offers, "D6:D25", ["COP", "USD", "EUR"]);
addListValidation(offers, "M6:M25", ["Accept", "Negotiate", "Reject", "Pause"]);
addTable(offers, "A5:N25", "OffersTable");
offers.freezePanes.freezeRows(5);
setWidths(offers, [["A", 160], ["B", 190], ["C", 110], ["D", 80], ["E", 85], ["F", 85], ["G", 95], ["H", 105], ["I", 85], ["J", 105], ["K", 105], ["L", 80], ["M", 105], ["N", 260]]);

// Lists
setTitle(lists, "Lists and Rules", "Dropdown values, scoring rules and canonical notes.", "H");
lists.getRange("A5:H5").values = [["Statuses", "App Statuses", "Layers", "Role Families", "Contracts", "Yes/No", "Priorities", "Canonical Rules"]];
styleHeader(lists.getRange("A5:H5"));
const maxRows = Math.max(statuses.length, appStatuses.length, layers.length, roleFamilies.length, contractTypes.length, yesNo.length, priorities.length, 8);
const listRows = Array.from({ length: maxRows }, (_, i) => [
  statuses[i] ?? "",
  appStatuses[i] ?? "",
  layers[i] ?? "",
  roleFamilies[i] ?? "",
  contractTypes[i] ?? "",
  yesNo[i] ?? "",
  priorities[i] ?? "",
  [
    "Portuguese passport expected around 2028",
    "No current EU work authorization claim",
    "Primary role: Unity Technical Artist",
    "Accept 3M COP only if field-aligned",
    "Ideal realistic target: USD 2000",
    "Ambitious target: USD 6000",
    "Avoid pure marketing",
    "TwinSight is technical visualization, not live IoT digital twin",
  ][i] ?? "",
]);
lists.getRange(`A6:H${5 + maxRows}`).values = listRows;
styleBody(lists.getRange(`A6:H${5 + maxRows}`));
setWidths(lists, [["A", 130], ["B", 130], ["C", 80], ["D", 190], ["E", 150], ["F", 100], ["G", 100], ["H", 340]]);

await fs.mkdir(previewDir, { recursive: true });

const dashboardInspect = await workbook.inspect({
  kind: "table",
  range: "Dashboard!A4:D15",
  include: "values,formulas",
  tableMaxRows: 12,
  tableMaxCols: 4,
});
console.log(dashboardInspect.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 300 },
  summary: "final formula error scan",
});
console.log(errors.ndjson);

for (const sheetName of ["Dashboard", "Weekly Plan", "Applications", "Assets", "Study", "Offers", "Lists"]) {
  const preview = await workbook.render({ sheetName, autoCrop: "all", scale: 1, format: "png" });
  const bytes = new Uint8Array(await preview.arrayBuffer());
  await fs.writeFile(path.join(previewDir, `tracker_preview_${sheetName.replaceAll(" ", "_")}.png`), bytes);
}

const xlsx = await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(outputPath);
const validation = {
  generatedAt: new Date().toISOString(),
  outputPath,
  sheets: ["Dashboard", "Weekly Plan", "Applications", "Assets", "Study", "Offers", "Lists"],
  renderedPreviews: 7,
  formulaErrorScanClear: errors.ndjson.includes("matched 0 entries"),
};
await fs.writeFile(`${root}/tracker_validation.json`, JSON.stringify(validation, null, 2));
console.log(JSON.stringify(validation, null, 2));
