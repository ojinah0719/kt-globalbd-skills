const fs=require('fs');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat, HeadingLevel, BorderStyle,
  WidthType, ShadingType, PageNumber } = require('docx');

const NAVY="1F4E79", LT="DDEBF7", AMB="FCE4D6", GREY="666666";
const CW=9360;
const bd={style:BorderStyle.SINGLE,size:1,color:"CCCCCC"};
const borders={top:bd,bottom:bd,left:bd,right:bd};
const M={top:60,bottom:60,left:120,right:120};

function H1(t){return new Paragraph({heading:HeadingLevel.HEADING_1,children:[new TextRun(t)]});}
function H2(t){return new Paragraph({heading:HeadingLevel.HEADING_2,children:[new TextRun(t)]});}
function P(t,opts={}){return new Paragraph({spacing:{after:120},children:[new TextRun({text:t,...opts})]});}
function B(t){return new Paragraph({numbering:{reference:"b",level:0},spacing:{after:60},children:run(t)});}
// run() supports **bold** segments
function run(t){const parts=t.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map(s=>s.startsWith('**')?new TextRun({text:s.slice(2,-2),bold:true}):new TextRun(s));}
function cell(t,{w,fill,bold,head}={}){return new TableCell({borders,width:{size:w,type:WidthType.DXA},margins:M,
  shading:fill?{fill,type:ShadingType.CLEAR}:undefined,
  children:[new Paragraph({children:[new TextRun({text:t,bold:bold||head,color:head?"FFFFFF":undefined})]})]});}
function table(widths,rows){return new Table({width:{size:CW,type:WidthType.DXA},columnWidths:widths,
  rows:rows.map((r,i)=>new TableRow({children:r.map(c=>cell(c.t,{w:c.w,fill:i===0?NAVY:c.fill,head:i===0,bold:c.bold}))}))});}

const children=[];
// Title block
children.push(new Paragraph({spacing:{after:40},children:[new TextRun({text:"KT — Response to VNPT RFI #6",bold:true,size:34,color:NAVY})]}));
children.push(new Paragraph({spacing:{after:40},children:[new TextRun({text:"Logistics, Supply Chain & Quality Assurance (SLA)",bold:true,size:26,color:NAVY})]}));
children.push(new Paragraph({spacing:{after:200},children:[new TextRun({text:"WS1 · Annex C · CONFIDENTIAL — Draft for joint review",italics:true,size:18,color:GREY})]}));
children.push(P("KT confirms readiness to support end-to-end device supply, importation, certification, and after-sales for the premium lineup (8K STB, Soundbar), under a back-to-back model with our OEM partners and in full compliance with Vietnamese regulations. The framework below defines the process. Quantitative SLA targets and commercial terms marked [ ] are finalized jointly and fixed in the SLA/contract, backed by OEM data and legal review."));

// 1
children.push(H1("1. Supply Chain & Regulatory Compliance"));
children.push(H2("1.1 Customs Clearance & Importation"));
children.push(P("KT proposes VNPT (or a VNPT-designated local distributor) as Importer of Record (IOR), leveraging the local entity, import license, and input-VAT recovery; KT delivers under agreed Incoterms. Key parameters to confirm pre-shipment with a joint customs broker:"));
children.push(B("**Incoterms:** [CIF / DAP] Hai Phong or Hanoi — defining freight, insurance, and risk-transfer point."));
children.push(B("**Classification & duties:** HS code [8528 STB / 8518 Soundbar]; applicable import duty + 10% import VAT. The Korea–Vietnam FTA may reduce duty via Certificate of Origin (CO Form VK/AK)."));
children.push(B("**Document set:** commercial invoice, packing list, CO, bill of lading, and all conformity certificates."));
children.push(H2("1.2 Warehousing & Storage"));
children.push(P("Local warehousing by VNPT/distributor near deployment regions. KT provides the storage specification (temperature/humidity limits, ESD/anti-static handling), FIFO rotation, and per-unit serial tracking. Safety stock = [ ] weeks of demand plus an AFR-based spare allowance; holding cost and insurance per Incoterms and the storage agreement."));
children.push(H2("1.3 Regulatory Testing & MIC Certification"));
children.push(P("MIC type-approval (ICT/RF) is a mandatory gate before commercial deployment. KT supplies device technical files and existing international test reports (CE/FCC, etc.) as the basis, provides test samples, and supports local testing. Where a local applicant/holder is required, VNPT/local partner acts as certificate holder with KT as technical sponsor. Certification runs as a parallel track (MIC ICT + Google); sample needs and timeline are locked early as they gate the pilot (Jan–Mar 2027)."));

// 2
children.push(H1("2. After-Sales Services"));
children.push(P("KT proposes a tiered after-sales model:"));
children.push(table([1500,2400,5460],[
  [{t:"Tier",w:1500},{t:"Owner",w:2400},{t:"Scope",w:5460}],
  [{t:"L1",w:1500,bold:true},{t:"VNPT call center / field",w:2400},{t:"Triage, DOA swap, customer handling",w:5460}],
  [{t:"L2",w:1500,bold:true},{t:"Local authorized service center",w:2400},{t:"Board-level repair, component replacement, refurbishment — KT provides training, repair manuals, diagnostic tools, spare-parts list",w:5460}],
  [{t:"L3",w:1500,bold:true},{t:"KT / OEM depot & engineering",w:2400},{t:"Complex / escalated failures and root-cause analysis",w:5460}],
]));
children.push(new Paragraph({spacing:{before:120,after:120},children:run("**Workflow:** Fault report → RMA issuance → L1 triage (DOA → advance replacement within [ ] days) → L2 repair/replace → reverse logistics for faulty units → spare-parts replenishment.")}));
children.push(P("Warranty: proposed [12–24] months from activation (coverage/exclusions per warranty terms); spare parts supplied as an initial kit plus AFR-driven replenishment. KT's warranty/AS commitments to VNPT mirror the OEM warranty to KT (back-to-back)."));

// 3
children.push(H1("3. Quality Commitments (SLA)"));
children.push(H2("3.1 Annual Failure Rate (AFR)"));
children.push(P("AFR is a contractual target per premium SKU, measured as (field returns ÷ active installed base), annualized over a defined window, with monthly reporting and a joint quality review. Industry reference for premium STBs is in the low single digits; soundbars are typically lower. Targets are finalized against OEM qualification and field-reliability data."));
children.push(table([2800,2000,2860,1700],[
  [{t:"SKU",w:2800},{t:"AFR target",w:2000},{t:"Measurement",w:2860},{t:"Reporting",w:1700}],
  [{t:"8K STB",w:2800},{t:"[≤ X%]",w:2000,fill:AMB},{t:"field returns ÷ active base, annualized",w:2860},{t:"Monthly",w:1700}],
  [{t:"Soundbar",w:2800},{t:"[≤ Y%]",w:2000,fill:AMB},{t:"field returns ÷ active base, annualized",w:2860},{t:"Monthly",w:1700}],
]));
children.push(H2("3.2 Epidemic (Mass) Failure Policy"));
children.push(P("An Epidemic Failure is field failure from a single common root cause exceeding the agreed threshold."));
children.push(table([2400,6960],[
  [{t:"Element",w:2400},{t:"Definition (proposed)",w:6960}],
  [{t:"Threshold",w:2400,bold:true},{t:"Cumulative failure rate within a rolling [ ]-month window for a given model/batch exceeding the greater of (a) [N]% of deployed units, or (b) [k]× the agreed AFR.",w:6960,fill:AMB}],
  [{t:"Mechanism",w:2400,bold:true},{t:"Trigger → joint root-cause analysis (8D) within [ ] days → remedy by cause: software/firmware → OTA fix; localized component defect → targeted batch replacement; systemic/safety hardware defect → recall.",w:6960}],
  [{t:"Cost allocation",w:2400,bold:true},{t:"Replacement / compensation / recall follows back-to-back OEM liability; remedies, caps, and timelines defined in the SLA/contract.",w:6960,fill:AMB}],
]));

// Closing
children.push(H1("Next Steps"));
children.push(P("KT proposes a joint working session to fix the [ ] items — Incoterms/IOR, certification timeline, warranty terms, AFR targets, Epidemic thresholds and cost allocation — for formalization in the SLA and supply/warranty agreement. All quantitative targets are subject to OEM confirmation and legal review.",{}));
children.push(new Paragraph({spacing:{before:160},border:{top:{style:BorderStyle.SINGLE,size:6,color:NAVY,space:6}},children:[new TextRun({text:"Disclaimer: All figures and rates herein are illustrative placeholders. Final values are subject to OEM reliability data; customs treatment to a licensed broker; SLA/warranty and liability clauses to legal counsel.",italics:true,size:16,color:GREY})]}));

const doc=new Document({
  styles:{default:{document:{run:{font:"Arial",size:22}}},
    paragraphStyles:[
      {id:"Heading1",name:"Heading 1",basedOn:"Normal",next:"Normal",quickFormat:true,
        run:{size:26,bold:true,color:NAVY,font:"Arial"},paragraph:{spacing:{before:240,after:120},outlineLevel:0}},
      {id:"Heading2",name:"Heading 2",basedOn:"Normal",next:"Normal",quickFormat:true,
        run:{size:23,bold:true,color:NAVY,font:"Arial"},paragraph:{spacing:{before:160,after:80},outlineLevel:1}},
    ]},
  numbering:{config:[{reference:"b",levels:[{level:0,format:LevelFormat.BULLET,text:"•",alignment:AlignmentType.LEFT,
    style:{paragraph:{indent:{left:540,hanging:260}}}}]}]},
  sections:[{
    properties:{page:{size:{width:12240,height:15840},margin:{top:1440,right:1440,bottom:1440,left:1440}}},
    headers:{default:new Header({children:[new Paragraph({alignment:AlignmentType.RIGHT,
      children:[new TextRun({text:"KT × VNPT/MyTV — WS1",size:16,color:GREY})]})]})},
    footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,
      children:[new TextRun({text:"RFI #6 Response · Annex C · CONFIDENTIAL · Figures illustrative — subject to OEM confirmation & legal review   |   ",size:14,color:GREY}),
        new TextRun({children:["Page ",PageNumber.CURRENT],size:14,color:GREY})]})]})},
    children
  }]
});
Packer.toBuffer(doc).then(b=>{fs.writeFileSync("/home/claude/pack/KT_VNPT_RFI6_Logistics_AS_SLA_AnnexC.docx",b);console.log("BUILT");});
