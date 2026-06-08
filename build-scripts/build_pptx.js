const pptxgen = require("pptxgenjs");
const p = new pptxgen();
p.layout = "LAYOUT_WIDE"; // 13.3 x 7.5
p.author = "KT Global Business Division";
p.title = "KT WS1 Joint Working Session";

const NAVY = "1F3864", BLUE = "2E5496", MID = "2E75B6", LT = "D9E2F3", LT2 = "EAF0FA";
const AMBER = "B45F06", GREEN = "548235", RED = "B00020", GREY = "595959", TXT = "1A1A1A", WHITE = "FFFFFF";
const HF = "Calibri";
const W = 13.3;
const shadow = () => ({ type: "outer", color: "000000", blur: 5, offset: 2, angle: 135, opacity: 0.12 });

function footer(s, n) {
  s.addText("CONFIDENTIAL \u2014 KT Global Business Division", { x: 0.5, y: 7.06, w: 8, h: 0.3, fontSize: 8, color: GREY, fontFace: HF, margin: 0 });
  s.addText(`${n}`, { x: 12.3, y: 7.06, w: 0.5, h: 0.3, fontSize: 8, color: GREY, align: "right", fontFace: HF, margin: 0 });
}
function header(s, tag, title) {
  s.addShape(p.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 0.42, w: 1.5, h: 0.5, fill: { color: NAVY }, rectRadius: 0.06 });
  s.addText(tag, { x: 0.5, y: 0.42, w: 1.5, h: 0.5, fontSize: 12, bold: true, color: WHITE, align: "center", valign: "middle", fontFace: HF, margin: 0 });
  s.addText(title, { x: 2.15, y: 0.4, w: 10.6, h: 0.55, fontSize: 26, bold: true, color: NAVY, valign: "middle", fontFace: HF, margin: 0 });
}
function chip(s, x, y, w, text) {
  s.addShape(p.shapes.ROUNDED_RECTANGLE, { x, y, w, h: 0.32, fill: { color: "FCE9D6" }, line: { color: AMBER, width: 0.75 }, rectRadius: 0.04 });
  s.addText(text, { x: x + 0.05, y, w: w - 0.1, h: 0.32, fontSize: 9, italic: true, color: AMBER, valign: "middle", align: "center", fontFace: HF, margin: 0 });
}
function card(s, x, y, w, h, fill) {
  s.addShape(p.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: fill || WHITE }, line: { color: "D5DCE8", width: 1 }, rectRadius: 0.06, shadow: shadow() });
}

// ---------- 1. TITLE ----------
let s = p.addSlide(); s.background = { color: NAVY };
s.addShape(p.shapes.RECTANGLE, { x: 0, y: 5.7, w: W, h: 0.06, fill: { color: MID } });
s.addText("KT PROPOSAL", { x: 0.7, y: 1.5, w: 11, h: 0.4, fontSize: 14, color: "9DB4D8", charSpacing: 4, fontFace: HF, bold: true });
s.addText("WS1 Joint Working Session", { x: 0.7, y: 1.95, w: 12, h: 1.0, fontSize: 44, bold: true, color: WHITE, fontFace: HF });
s.addText("Deep-dive: STB Business Model \u00B7 STB Deployment \u00B7 Media AI Agent & TMS", { x: 0.7, y: 3.05, w: 12, h: 0.5, fontSize: 18, color: "CADCFC", fontFace: HF });
s.addText("AI-Powered MyTV \u2014 KT \u00D7 VNPT Joint Platform Initiative", { x: 0.7, y: 3.7, w: 12, h: 0.4, fontSize: 13, italic: true, color: "9DB4D8", fontFace: HF });
s.addText("KT Global Business Division  |  CONFIDENTIAL  |  Prepared for the joint working session", { x: 0.7, y: 6.4, w: 12, h: 0.4, fontSize: 11, color: "9DB4D8", fontFace: HF });

// ---------- 2. AGENDA ----------
s = p.addSlide(); s.background = { color: WHITE };
header(s, "Scope", "What this session covers");
const ag = [
  ["01", "STB Business Model", "Device pricing \u00B7 MG (Minimum Guarantee) \u00B7 commercial terms (OEM / License / Revenue Share, MOQ)"],
  ["02", "STB Deployment", "Technical scope (lineup, OS/launcher) \u00B7 implementation plan (fleet, OTA, phasing)"],
  ["03", "Media AI Agent & TMS", "Detailed feature scope & feasibility \u00B7 integration model \u00B7 TMS deployment \u00B7 implementation plan"],
];
let ay = 1.35;
ag.forEach(([n, t, d]) => {
  card(s, 0.5, ay, 12.3, 1.18, WHITE);
  s.addShape(p.shapes.RECTANGLE, { x: 0.5, y: ay, w: 0.12, h: 1.18, fill: { color: BLUE } });
  s.addText(n, { x: 0.75, y: ay, w: 1.0, h: 1.18, fontSize: 30, bold: true, color: LT, valign: "middle", align: "center", fontFace: HF });
  s.addText(t, { x: 1.9, y: ay + 0.16, w: 10.7, h: 0.45, fontSize: 17, bold: true, color: NAVY, fontFace: HF, margin: 0 });
  s.addText(d, { x: 1.9, y: ay + 0.6, w: 10.7, h: 0.5, fontSize: 12, color: GREY, fontFace: HF, margin: 0 });
  ay += 1.32;
});
s.addText([{ text: "+ KT add-on: ", options: { bold: true, color: AMBER } }, { text: "Certification & Data Sovereignty (MIC ICT \u00B7 Google \u00B7 Decree 13/2023) \u2014 gates the implementation timeline.   ", options: { color: GREY } }, { text: "Goal of the session: align and finalize the detailed action items.", options: { bold: true, color: NAVY } }], { x: 0.5, y: 5.42, w: 12.3, h: 0.5, fontSize: 12, fontFace: HF });
footer(s, 2);

// ---------- 3. BM OPTIONS ----------
s = p.addSlide(); s.background = { color: WHITE };
header(s, "01", "STB Business Model \u2014 options");
const bmHdr = ["Model", "Initial CAPEX", "KT revenue", "VNPT risk", "Fit"].map(h => ({ text: h, options: { fill: { color: NAVY }, color: WHITE, bold: true, fontSize: 12, align: "center", valign: "middle" } }));
const bmRows = [
  ["OEM Purchase", "High", "Device margin", "Inventory / CAPEX", "Fast start; CAPEX burden"],
  ["License", "Medium", "License fee", "Medium", "Higher autonomy"],
  ["Revenue Share", "Low", "Revenue-linked", "Low (shared)", "Minimal CAPEX"],
  ["Hybrid  (recommended)", "Phased", "OEM \u2192 License / RS", "Phased down", "Fits CAPEX & risk minimization"],
];
const bmBody = bmRows.map((r, i) => r.map((c, j) => ({
  text: c,
  options: { fontSize: 11.5, color: i === 3 ? NAVY : TXT, bold: i === 3, align: j === 0 ? "left" : "center", valign: "middle", fill: { color: i === 3 ? LT : (i % 2 ? LT2 : WHITE) } }
})));
s.addTable([bmHdr, ...bmBody], { x: 0.5, y: 1.45, w: 12.3, colW: [3.0, 2.0, 2.6, 2.5, 2.2], rowH: [0.5, 0.62, 0.62, 0.62, 0.62], border: { pt: 0.5, color: "C9D3E5" }, fontFace: HF, valign: "middle" });
s.addText([{ text: "Recommended direction:  ", options: { bold: true, color: NAVY } }, { text: "Hybrid Sequencing \u2014 begin with OEM purchase, transition to License / Revenue Share. This meets VNPT\u2019s CAPEX- and risk-minimization priorities while securing a long-term commercial path.", options: { color: TXT } }], { x: 0.5, y: 5.55, w: 12.3, h: 0.7, fontSize: 12.5, fontFace: HF });
footer(s, 3);

// ---------- 4. PRICING / MG / TERMS ----------
s = p.addSlide(); s.background = { color: WHITE };
header(s, "01", "Device pricing, MG & commercial terms");
card(s, 0.5, 1.4, 4.0, 4.9, WHITE);
s.addText("Device pricing", { x: 0.7, y: 1.55, w: 3.6, h: 0.4, fontSize: 15, bold: true, color: BLUE, fontFace: HF });
s.addText([
  { text: "ASP per model (Genie TV STB 4, All-in-one Soundbar / 8K)", options: { bullet: true, breakLine: true } },
  { text: "Tiered by volume & configuration", options: { bullet: true, breakLine: true } },
  { text: "Aligned to the selected BM (OEM ASP vs license-bundled)", options: { bullet: true } },
], { x: 0.75, y: 2.0, w: 3.55, h: 1.7, fontSize: 11.5, color: TXT, fontFace: HF, paraSpaceAfter: 6 });
chip(s, 0.75, 3.75, 3.5, "[ KT to insert: ASP by model ]");
s.addText("Planning estimates; final pricing via separate quotation.", { x: 0.75, y: 4.2, w: 3.6, h: 0.8, fontSize: 10, italic: true, color: GREY, fontFace: HF });

card(s, 4.65, 1.4, 4.0, 4.9, WHITE);
s.addText("MG (Minimum Guarantee)", { x: 4.85, y: 1.55, w: 3.6, h: 0.4, fontSize: 15, bold: true, color: BLUE, fontFace: HF });
s.addText([
  { text: "Minimum committed volume / value over the term", options: { bullet: true, breakLine: true } },
  { text: "Protects investment \u2192 enables better unit pricing", options: { bullet: true, breakLine: true } },
  { text: "Linked to MOQ and the mandatory cooperation period", options: { bullet: true } },
], { x: 4.9, y: 2.0, w: 3.55, h: 1.7, fontSize: 11.5, color: TXT, fontFace: HF, paraSpaceAfter: 6 });
chip(s, 4.9, 3.75, 3.5, "[ KT to insert: MG volume / value ]");
s.addText("MG level to be aligned with VNPT\u2019s target volumes.", { x: 4.9, y: 4.2, w: 3.6, h: 0.8, fontSize: 10, italic: true, color: GREY, fontFace: HF });

card(s, 8.8, 1.4, 4.0, 4.9, WHITE);
s.addText("Commercial terms", { x: 9.0, y: 1.55, w: 3.6, h: 0.4, fontSize: 15, bold: true, color: BLUE, fontFace: HF });
s.addText([
  { text: "MOQ (minimum order quantity)", options: { bullet: true, breakLine: true } },
  { text: "Mandatory cooperation period", options: { bullet: true, breakLine: true } },
  { text: "Revenue / cost-share mechanism (split %, scope)", options: { bullet: true, breakLine: true } },
  { text: "SI & localization cost; payback path", options: { bullet: true } },
], { x: 9.05, y: 2.0, w: 3.55, h: 2.0, fontSize: 11.5, color: TXT, fontFace: HF, paraSpaceAfter: 6 });
chip(s, 9.05, 4.1, 3.5, "[ KT to insert: MOQ / period / split ]");
footer(s, 4);

// ---------- 5. STB LINEUP & SCOPE ----------
s = p.addSlide(); s.background = { color: WHITE };
header(s, "02", "STB lineup & technical scope");
card(s, 0.5, 1.4, 3.95, 3.0, WHITE);
s.addText("Genie TV STB 4", { x: 0.7, y: 1.5, w: 3.6, h: 0.4, fontSize: 15, bold: true, color: BLUE, fontFace: HF });
s.addText([
  { text: "Android TV-based AI STB", options: { bullet: true, breakLine: true } },
  { text: "Chipset / RAM / Storage / OS version", options: { bullet: true, breakLine: true } },
  { text: "AI-ready; Media AI Agent host", options: { bullet: true } },
], { x: 0.75, y: 1.95, w: 3.5, h: 1.5, fontSize: 11.5, color: TXT, fontFace: HF, paraSpaceAfter: 5 });
chip(s, 0.75, 3.5, 3.4, "[ KT to insert: HW specs ]");

card(s, 4.6, 1.4, 3.95, 3.0, WHITE);
s.addText("All-in-one Soundbar (8K)", { x: 4.8, y: 1.5, w: 3.6, h: 0.4, fontSize: 15, bold: true, color: BLUE, fontFace: HF });
s.addText([
  { text: "Premium 8K STB + soundbar", options: { bullet: true, breakLine: true } },
  { text: "Higher-tier segment positioning", options: { bullet: true, breakLine: true } },
  { text: "Subject to AFR / SLA targets (RFI #6)", options: { bullet: true } },
], { x: 4.85, y: 1.95, w: 3.5, h: 1.5, fontSize: 11.5, color: TXT, fontFace: HF, paraSpaceAfter: 5 });
chip(s, 4.85, 3.5, 3.4, "[ KT to insert: HW specs ]");

card(s, 8.7, 1.4, 4.1, 3.0, LT2);
s.addText("OS / Launcher strategy", { x: 8.9, y: 1.5, w: 3.7, h: 0.4, fontSize: 15, bold: true, color: BLUE, fontFace: HF });
s.addText([
  { text: "GTV4O (Google TV for Operators) \u2014 prioritized", options: { bullet: true, breakLine: true } },
  { text: "Custom Launcher \u2014 deeper UX control, more effort", options: { bullet: true, breakLine: true } },
  { text: "Standard Launcher discontinued by Google", options: { bullet: true, breakLine: true } },
  { text: "Dev R&R to confirm (VNPT-led vs KT framework + support)", options: { bullet: true } },
], { x: 8.95, y: 1.95, w: 3.6, h: 2.3, fontSize: 11, color: TXT, fontFace: HF, paraSpaceAfter: 5 });

s.addText([{ text: "Integration touchpoints (legacy):  ", options: { bold: true, color: NAVY } }, { text: "BSS/OSS/CRM \u00B7 MBS \u00B7 Verimatrix (DRM) \u00B7 OTT backends (Netflix/Disney+/iQIYI) \u00B7 payment \u00B7 TMS (TR-069/369). Detailed in the Interface Definition Document (IDD) at system-design stage.", options: { color: TXT } }], { x: 0.5, y: 4.65, w: 12.3, h: 0.9, fontSize: 12, fontFace: HF });
footer(s, 5);

// ---------- 6. STB DEPLOYMENT PLAN ----------
s = p.addSlide(); s.background = { color: WHITE };
header(s, "02", "STB deployment \u2014 implementation plan");
const ph = [
  ["P1", "Initiation & Design", "Requirements, IDD, architecture, WBS, OS/launcher decision"],
  ["P2", "Localization & Cert.", "Localization build, MIC ICT + Google cert, data-sovereignty"],
  ["P3", "Pilot", "Integration test, UAT, SLA verification, limited fleet"],
  ["P4", "Commercial & Scale", "Mass rollout, OTA at scale, operations handover"],
];
let px = 0.5;
ph.forEach(([n, t, d], i) => {
  card(s, px, 1.55, 2.95, 2.5, i === 1 ? LT : WHITE);
  s.addShape(p.shapes.OVAL, { x: px + 1.2, y: 1.75, w: 0.55, h: 0.55, fill: { color: NAVY } });
  s.addText(n, { x: px + 1.2, y: 1.75, w: 0.55, h: 0.55, fontSize: 14, bold: true, color: WHITE, align: "center", valign: "middle", fontFace: HF, margin: 0 });
  s.addText(t, { x: px + 0.1, y: 2.45, w: 2.75, h: 0.5, fontSize: 13, bold: true, color: NAVY, align: "center", fontFace: HF, margin: 0 });
  s.addText(d, { x: px + 0.15, y: 2.95, w: 2.65, h: 1.0, fontSize: 10.5, color: GREY, align: "center", fontFace: HF, margin: 0 });
  px += 3.07;
});
s.addText([
  { text: "Fleet: ", options: { bold: true, color: NAVY } }, { text: "legacy STBs (with HW constraints) + new premium lineup.   ", options: { color: TXT } },
  { text: "OTA: ", options: { bold: true, color: NAVY } }, { text: "phased firmware/APK rollout, targetable by customer segment and by province/region (via TMS).   ", options: { color: TXT } },
  { text: "Provisioning: ", options: { bold: true, color: NAVY } }, { text: "MBS \u2194 BSS/OSS, standard RESTful APIs (no I/F change on operator side for OTT).", options: { color: TXT } },
], { x: 0.5, y: 4.4, w: 12.3, h: 1.6, fontSize: 12, fontFace: HF, paraSpaceAfter: 8 });
chip(s, 0.5, 6.25, 4.6, "[ KT to insert: target rollout volumes & schedule ]");
footer(s, 6);

// ---------- 7. MEDIA AI AGENT ----------
s = p.addSlide(); s.background = { color: WHITE };
header(s, "03", "Media AI Agent \u2014 scope & feasibility");
s.addChart(p.charts.DOUGHNUT, [{ name: "Features", labels: ["Deployable (cloud APK)", "Conditional", "Blocked (legacy NPU)"], values: [8, 3, 4] }],
  { x: 0.5, y: 1.5, w: 4.7, h: 4.2, chartColors: [GREEN, "E8A33D", RED], showLegend: true, legendPos: "b", legendFontSize: 10, showValue: true, dataLabelColor: WHITE, dataLabelFontSize: 12, holeSize: 55, title: "15 AI Agent features", showTitle: true, titleFontSize: 13, titleColor: NAVY });
card(s, 5.5, 1.5, 7.3, 4.2, WHITE);
s.addText("Scope & integration approach", { x: 5.7, y: 1.62, w: 6.9, h: 0.4, fontSize: 15, bold: true, color: BLUE, fontFace: HF });
s.addText([
  { text: "8 of 15 features deployable now via cloud APK on existing fleet", options: { bullet: true, breakLine: true } },
  { text: "4 features blocked on legacy HW (NPU absent) \u2014 scope to be agreed", options: { bullet: true, breakLine: true } },
  { text: "Integration model: Cloud-based primary; Edge/Hybrid for on-device needs", options: { bullet: true, breakLine: true } },
  { text: "Interfaces: API / SDK; updates & rollout via OTA (TR-369)", options: { bullet: true, breakLine: true } },
  { text: "Data on VNPT Cloud (Vietnam) per Decree 13/2023", options: { bullet: true } },
], { x: 5.75, y: 2.1, w: 6.9, h: 3.4, fontSize: 12.5, color: TXT, fontFace: HF, paraSpaceAfter: 8 });
footer(s, 7);

// ---------- 8. TMS ----------
s = p.addSlide(); s.background = { color: WHITE };
header(s, "03", "TMS \u2014 scope & deployment");
const tms = [
  ["Functions", "Admin Console / Collector / Controller; firmware & APK mgmt; QoS & device-error; bulk control (TR-069 / TR-369 / MQTT)"],
  ["Deployment", "On-premise within VNPT infrastructure, or On-Cloud \u2014 flexible per VNPT preference"],
  ["OTA targeting", "Firmware/app updates by specific customer segment, and by administrative region (province / city)"],
  ["Data & compliance", "TMS-collected data on VNPT Cloud (Vietnam) \u2014 supports Decree 13/2023 data residency"],
];
let ty = 1.5;
tms.forEach(([t, d]) => {
  card(s, 0.5, ty, 12.3, 1.18, WHITE);
  s.addShape(p.shapes.RECTANGLE, { x: 0.5, y: ty, w: 0.12, h: 1.18, fill: { color: MID } });
  s.addText(t, { x: 0.8, y: ty, w: 2.6, h: 1.18, fontSize: 14, bold: true, color: NAVY, valign: "middle", fontFace: HF, margin: 0 });
  s.addText(d, { x: 3.5, y: ty, w: 9.1, h: 1.18, fontSize: 12.5, color: TXT, valign: "middle", fontFace: HF, margin: 0 });
  ty += 1.28;
});
footer(s, 8);

// ---------- 9. CERT & DATA ----------
s = p.addSlide(); s.background = { color: WHITE };
header(s, "+", "Certification & data sovereignty \u2014 gates the timeline");
const cd = [
  ["MIC ICT certification", "Vietnam MIC regulatory testing & permit \u2014 prerequisite for device import & distribution (RFI #6)", GREEN],
  ["Google Certification", "Official Google certification for proposed devices (GTV4O / launcher) (RFI #3)", BLUE],
  ["Decree 13/2023 \u2014 VNPT Cloud", "User/behavioral & TMS data stored and processed on VNPT Cloud in Vietnam \u2014 mandatory (RFI #7)", AMBER],
];
let cx = 0.5;
cd.forEach(([t, d, col]) => {
  card(s, cx, 1.55, 4.0, 3.0, WHITE);
  s.addShape(p.shapes.RECTANGLE, { x: cx, y: 1.55, w: 4.0, h: 0.12, fill: { color: col } });
  s.addText(t, { x: cx + 0.2, y: 1.85, w: 3.6, h: 0.7, fontSize: 14.5, bold: true, color: NAVY, fontFace: HF, margin: 0 });
  s.addText(d, { x: cx + 0.2, y: 2.6, w: 3.6, h: 1.8, fontSize: 12, color: TXT, fontFace: HF, margin: 0 });
  cx += 4.15;
});
s.addText([{ text: "Roadmap:  ", options: { bold: true, color: NAVY } }, { text: "MIC ICT and Google certification run as parallel tracks in P2 (target 2026.8\u201312); data-sovereignty design verified in the same window. These milestones gate Pilot (P3) and Commercial (P4) \u2014 detailed durations to be confirmed (with sources).", options: { color: TXT } }], { x: 0.5, y: 4.8, w: 12.3, h: 1.0, fontSize: 12.5, fontFace: HF });
footer(s, 9);

// ---------- 10. ACTIONS & ROADMAP ----------
s = p.addSlide(); s.background = { color: WHITE };
header(s, "Next", "What we aim to conclude \u2014 actions & roadmap");
card(s, 0.5, 1.45, 6.1, 4.6, WHITE);
s.addText("Decisions to reach", { x: 0.7, y: 1.55, w: 5.7, h: 0.4, fontSize: 15, bold: true, color: BLUE, fontFace: HF });
s.addText([
  { text: "STB business-model direction \u2014 pricing, MG, commercial terms", options: { bullet: true, breakLine: true } },
  { text: "STB deployment plan \u2014 technical scope & phasing", options: { bullet: true, breakLine: true } },
  { text: "Media AI Agent & TMS scope \u2014 features, integration, deployment", options: { bullet: true, breakLine: true } },
  { text: "Certification & data-sovereignty approach", options: { bullet: true, breakLine: true } },
  { text: "Next-stage plan \u2014 Requirements Workshop \u2192 MOU (target Q3 2026)", options: { bullet: true, breakLine: true } },
  { text: "Mutual NDA \u2014 signed or signing timeline", options: { bullet: true } },
], { x: 0.75, y: 2.05, w: 5.7, h: 3.8, fontSize: 12.5, color: TXT, fontFace: HF, paraSpaceAfter: 9 });

card(s, 6.8, 1.45, 6.0, 4.6, LT2);
s.addText("Key action items (draft)", { x: 7.0, y: 1.55, w: 5.6, h: 0.4, fontSize: 15, bold: true, color: BLUE, fontFace: HF });
s.addText([
  { text: "KT: STB pricing + MG proposal; AI Agent feature scope (legacy-HW)", options: { bullet: true, breakLine: true } },
  { text: "VNPT: target volumes & MG appetite; legacy-system docs; Cloud capability", options: { bullet: true, breakLine: true } },
  { text: "Joint: OS/launcher & dev R&R; TMS deployment & OTA targeting", options: { bullet: true, breakLine: true } },
  { text: "Joint: certification & data-sovereignty ownership", options: { bullet: true, breakLine: true } },
  { text: "Both: execute mutual NDA; schedule Requirements Workshop", options: { bullet: true } },
], { x: 7.05, y: 2.05, w: 5.6, h: 3.2, fontSize: 12, color: TXT, fontFace: HF, paraSpaceAfter: 9 });
s.addText("Tracked in the PMO Decision Log & Action Tracker \u2014 carried through to the contract.", { x: 7.05, y: 5.5, w: 5.6, h: 0.4, fontSize: 10.5, italic: true, color: GREY, fontFace: HF, margin: 0 });
footer(s, 10);

// ---------- 11. CLOSING ----------
s = p.addSlide(); s.background = { color: NAVY };
s.addShape(p.shapes.RECTANGLE, { x: 0, y: 5.7, w: W, h: 0.06, fill: { color: MID } });
s.addText("Next steps", { x: 0.7, y: 2.1, w: 12, h: 0.5, fontSize: 16, color: "9DB4D8", bold: true, charSpacing: 2, fontFace: HF });
s.addText("Finalize action items  \u2192  Requirements Workshop  \u2192  MOU (Q3 2026)", { x: 0.7, y: 2.7, w: 12, h: 0.9, fontSize: 30, bold: true, color: WHITE, fontFace: HF });
s.addText("Building a sustainable KT \u00D7 VNPT partnership \u2014 from WS1 Quick Win to platform scale.", { x: 0.7, y: 3.75, w: 12, h: 0.5, fontSize: 14, italic: true, color: "CADCFC", fontFace: HF });
s.addText("KT Global Business Division  |  CONFIDENTIAL", { x: 0.7, y: 6.4, w: 12, h: 0.4, fontSize: 11, color: "9DB4D8", fontFace: HF });

p.writeFile({ fileName: "/home/claude/pack/KT_VNPT_WS1_KT_Briefing_Deck.pptx" }).then(() => console.log("PPTX BUILT"));
