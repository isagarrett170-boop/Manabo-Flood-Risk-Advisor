
import type { MapSectionData, TableRow } from './types';

// --- Table Data Helper ---
// Colors based on the screenshots

// FRI: Yellow -> Orange -> Red
const CLS_VERY_LOW = "bg-yellow-100";
const CLS_LOW = "bg-yellow-200";
const CLS_MODERATE = "bg-orange-300";
const CLS_HIGH = "bg-orange-500 text-white";
const CLS_VERY_HIGH = "bg-red-700 text-white";

// HCI: Blue Scale
const CLS_HCI_VERY_LOW = "bg-blue-100";
const CLS_HCI_LOW = "bg-blue-300";
const CLS_HCI_MODERATE = "bg-blue-500 text-white";

// Exposure: Gray/Silver Scale
const CLS_EXP_VERY_LOW = "bg-gray-200";
const CLS_EXP_LOW = "bg-gray-300";
const CLS_EXP_MODERATE = "bg-gray-400";
const CLS_EXP_HIGH = "bg-gray-600 text-white";

// Vulnerability: Green Scale (Updated to match Screenshot 5)
const CLS_VULN_VERY_LOW = "bg-green-100";
const CLS_VULN_LOW = "bg-green-200";
const CLS_VULN_MODERATE = "bg-green-500 text-white";
const CLS_VULN_HIGH = "bg-green-700 text-white";

// Hazard: Red Scale
const CLS_HAZ_VERY_LOW = "bg-red-100";
const CLS_HAZ_LOW = "bg-red-300";
const CLS_HAZ_MODERATE = "bg-red-500 text-white";
const CLS_HAZ_HIGH = "bg-red-600 text-white";
const CLS_HAZ_VERY_HIGH = "bg-red-800 text-white";

// Survey Awareness: Blue/Orange Scale for Awareness
const CLS_AW_HIGH = "bg-blue-600 text-white";
const CLS_AW_MODERATE = "bg-orange-300 text-gray-900";

// Validation: Teal Scale
const CLS_VAL_HIGH = "bg-teal-600 text-white";


// --- DATA SETS ---

export const FLOOD_RISK_DATA: MapSectionData = {
  title: "Flood Risk Index (FRI)",
  description: "The composite FRI combines all five indices to provide the final risk classification. Luzong is identified as the highest risk area (0.766).",
  imageUrl: "https://image2url.com/images/1763628894033-8ef85576-a3c4-4127-b4dd-f5688fb08b8c.png", 
  tableHeaders: ["Barangay", "FRI", "Rating"],
  tableData: [
    { label: "San Ramon East", value: 0.146, rating: "Very Low", colorClass: CLS_VERY_LOW },
    { label: "Catacdegan Viejo", value: 0.215, rating: "Low", colorClass: CLS_LOW },
    { label: "San Jose Norte", value: 0.216, rating: "Low", colorClass: CLS_LOW },
    { label: "Ayyeng", value: 0.236, rating: "Low", colorClass: CLS_LOW },
    { label: "San Jose Sur", value: 0.297, rating: "Low", colorClass: CLS_LOW },
    { label: "San Juan Sur", value: 0.346, rating: "Low", colorClass: CLS_LOW },
    { label: "San Juan Norte", value: 0.346, rating: "Low", colorClass: CLS_LOW },
    { label: "Catacdegan Nuevo", value: 0.496, rating: "Moderate", colorClass: CLS_MODERATE },
    { label: "San Ramon West", value: 0.540, rating: "Moderate", colorClass: CLS_MODERATE },
    { label: "Sto. Tomas", value: 0.561, rating: "Moderate", colorClass: CLS_MODERATE },
    { label: "Luzong", value: 0.766, rating: "High", colorClass: CLS_HIGH },
  ],
  riskIndexTable: [
    { rating: "Very Low", range: "<0.200", colorClass: CLS_VERY_LOW },
    { rating: "Low", range: "0.201-0.400", colorClass: CLS_LOW },
    { rating: "Moderate", range: "0.401-0.600", colorClass: CLS_MODERATE },
    { rating: "High", range: "0.601-0.800", colorClass: CLS_HIGH },
    { rating: "Very High", range: ">0.800", colorClass: CLS_VERY_HIGH },
  ]
};

export const HARD_COUNTERMEASURES_DATA: MapSectionData = {
  title: "Hard Countermeasures Index (HCI)",
  description: "Measures structural defenses like drainage and floodwalls. A value of 0.000 indicates a total lack of infrastructure in that area.",
  imageUrl: "https://image2url.com/images/1763629223582-b36c6069-1dc1-4820-8828-3778d84befde.png", 
  tableHeaders: ["Barangay", "HCI", "Rating"],
  tableData: [
    { label: "Catacdegan Nuevo", value: "0.000", rating: "Very Low", colorClass: CLS_HCI_VERY_LOW },
    { label: "Catacdegan Viejo", value: "0.000", rating: "Very Low", colorClass: CLS_HCI_VERY_LOW },
    { label: "San Jose Norte", value: "0.000", rating: "Very Low", colorClass: CLS_HCI_VERY_LOW },
    { label: "Sto. Tomas", value: "0.000", rating: "Very Low", colorClass: CLS_HCI_VERY_LOW },
    { label: "San Juan Norte", value: "0.000", rating: "Very Low", colorClass: CLS_HCI_VERY_LOW },
    { label: "San Juan Sur", value: "0.000", rating: "Very Low", colorClass: CLS_HCI_VERY_LOW },
    { label: "San Ramon West", value: "0.000", rating: "Very Low", colorClass: CLS_HCI_VERY_LOW },
    { label: "San Jose Sur", value: 0.167, rating: "Very Low", colorClass: CLS_HCI_VERY_LOW },
    { label: "San Ramon East", value: 0.167, rating: "Very Low", colorClass: CLS_HCI_VERY_LOW },
    { label: "Ayyeng", value: 0.333, rating: "Low", colorClass: CLS_HCI_LOW },
    { label: "Luzong", value: 0.500, rating: "Moderate", colorClass: CLS_HCI_MODERATE },
  ]
};

export const SOFT_COUNTERMEASURES_DATA: MapSectionData = {
  title: "Soft Countermeasures Index (SCI)",
  description: "Non-structural measures like early warning systems and drills. All barangays scored uniformly low (0.333), indicating a systemic gap.",
  imageUrl: "https://image2url.com/images/1763629212419-b0df2825-90d3-4551-9b02-60d6f9b43e15.png", 
  tableHeaders: ["Barangay", "SCI", "Rating"],
  tableData: [
    { label: "Catacdegan Nuevo", value: 0.333, rating: "Low", colorClass: CLS_LOW },
    { label: "Catacdegan Viejo", value: 0.333, rating: "Low", colorClass: CLS_LOW },
    { label: "San Jose Norte", value: 0.333, rating: "Low", colorClass: CLS_LOW },
    { label: "San Jose Sur", value: 0.333, rating: "Low", colorClass: CLS_LOW },
    { label: "Luzong", value: 0.333, rating: "Low", colorClass: CLS_LOW },
    { label: "Ayyeng", value: 0.333, rating: "Low", colorClass: CLS_LOW },
    { label: "Sto. Tomas", value: 0.333, rating: "Low", colorClass: CLS_LOW },
    { label: "San Juan Norte", value: 0.333, rating: "Low", colorClass: CLS_LOW },
    { label: "San Juan Sur", value: 0.333, rating: "Low", colorClass: CLS_LOW },
    { label: "San Ramon West", value: 0.333, rating: "Low", colorClass: CLS_LOW },
    { label: "San Ramon East", value: 0.333, rating: "Low", colorClass: CLS_LOW },
  ]
};

export const EXPOSURE_DATA: MapSectionData = {
  title: "Exposure Index",
  description: "Measures people, property, and infrastructure located in flood-prone areas. Luzong (0.795) and Catacdegan Nuevo (0.667) are High.",
  imageUrl: "https://image2url.com/images/1763629194368-3b783e25-be20-48b8-b342-8845d10da521.png", 
  tableHeaders: ["Barangay", "Exposure Index", "Rating"],
  tableData: [
    { label: "Ayyeng", value: "0.000", rating: "Very Low", colorClass: CLS_EXP_VERY_LOW },
    { label: "San Jose Norte", value: 0.077, rating: "Very Low", colorClass: CLS_EXP_VERY_LOW },
    { label: "San Ramon East", value: 0.110, rating: "Very Low", colorClass: CLS_EXP_VERY_LOW },
    { label: "San Jose Sur", value: 0.116, rating: "Very Low", colorClass: CLS_EXP_VERY_LOW },
    { label: "San Juan Norte", value: 0.155, rating: "Very Low", colorClass: CLS_EXP_VERY_LOW },
    { label: "Catacdegan Viejo", value: 0.178, rating: "Very Low", colorClass: CLS_EXP_VERY_LOW },
    { label: "San Juan Sur", value: 0.232, rating: "Low", colorClass: CLS_EXP_LOW },
    { label: "Sto. Tomas", value: 0.425, rating: "Moderate", colorClass: CLS_EXP_MODERATE },
    { label: "San Ramon West", value: 0.503, rating: "Moderate", colorClass: CLS_EXP_MODERATE },
    { label: "Catacdegan Nuevo", value: 0.667, rating: "High", colorClass: CLS_EXP_HIGH },
    { label: "Luzong", value: 0.795, rating: "High", colorClass: CLS_EXP_HIGH },
  ]
};

export const VULNERABILITY_DATA: MapSectionData = {
  title: "Vulnerability Index",
  description: "Based on population density, poverty incidence, and age distribution. Sto. Tomas (0.548) is the most vulnerable.",
  imageUrl: "https://image2url.com/images/1763629150989-9d83c47d-88d5-4b62-98e9-abae81611ea2.png", 
  tableHeaders: ["Barangay", "Vulnerability Index", "Rating"],
  tableData: [
    { label: "San Jose Sur", value: 0.139, rating: "Very Low", colorClass: CLS_VULN_VERY_LOW },
    { label: "Ayyeng", value: 0.262, rating: "Low", colorClass: CLS_VULN_LOW },
    { label: "San Ramon East", value: 0.282, rating: "Low", colorClass: CLS_VULN_LOW },
    { label: "San Juan Sur", value: 0.373, rating: "Low", colorClass: CLS_VULN_LOW },
    { label: "Catacdegan Nuevo", value: 0.393, rating: "Low", colorClass: CLS_VULN_LOW },
    { label: "Luzong", value: 0.456, rating: "Moderate", colorClass: CLS_VULN_MODERATE },
    { label: "San Jose Norte", value: 0.459, rating: "Moderate", colorClass: CLS_VULN_MODERATE },
    { label: "San Juan Norte", value: 0.500, rating: "Moderate", colorClass: CLS_VULN_MODERATE },
    { label: "San Ramon West", value: 0.502, rating: "Moderate", colorClass: CLS_VULN_MODERATE },
    { label: "Catacdegan Viejo", value: 0.505, rating: "Moderate", colorClass: CLS_VULN_MODERATE },
    { label: "Sto. Tomas", value: 0.548, rating: "Moderate", colorClass: CLS_VULN_MODERATE },
  ]
};

export const HAZARD_DATA: MapSectionData = {
  title: "Hazard Index",
  description: "Calculated from flood frequency, depth, and duration. Directly correlated with proximity to Abra River.",
  imageUrl: "https://image2url.com/images/1763629175093-08787299-02dd-404d-9b29-a58fbe1bc9a1.png", 
  tableHeaders: ["Barangay", "Hazard Index", "Rating"],
  tableData: [
    { label: "San Ramon East", value: 0.083, rating: "Very Low", colorClass: CLS_HAZ_VERY_LOW },
    { label: "Catacdegan Viejo", value: 0.167, rating: "Very Low", colorClass: CLS_HAZ_VERY_LOW },
    { label: "San Jose Norte", value: 0.250, rating: "Low", colorClass: CLS_HAZ_LOW },
    { label: "Ayyeng", value: 0.333, rating: "Low", colorClass: CLS_HAZ_LOW },
    { label: "San Jose Sur", value: 0.500, rating: "Moderate", colorClass: CLS_HAZ_MODERATE },
    { label: "San Juan Norte", value: 0.500, rating: "Moderate", colorClass: CLS_HAZ_MODERATE },
    { label: "San Juan Sur", value: 0.500, rating: "Moderate", colorClass: CLS_HAZ_MODERATE },
    { label: "Catacdegan Nuevo", value: 0.583, rating: "Moderate", colorClass: CLS_HAZ_MODERATE },
    { label: "San Ramon West", value: 0.750, rating: "High", colorClass: CLS_HAZ_HIGH },
    { label: "Sto. Tomas", value: 0.833, rating: "Very High", colorClass: CLS_HAZ_VERY_HIGH },
    { label: "Luzong", value: "1.000", rating: "Very High", colorClass: CLS_HAZ_VERY_HIGH },
  ]
};

export const COMMUNITY_AWARENESS_DATA: MapSectionData = {
  title: "Community Awareness & Preparedness",
  description: "Survey results (n=110) regarding the community's perception of risk. Findings reveal residents are highly aware of general hazards but lack understanding of personal vulnerability.",
  tableHeaders: ["Category", "Overall Mean", "Descriptive Level"],
  tableData: [
    { label: "Hazard", value: "3.73", rating: "Highly Aware/Prepared", colorClass: CLS_AW_HIGH },
    { label: "Vulnerability", value: "3.17", rating: "Moderately Aware/Prepared", colorClass: CLS_AW_MODERATE },
    { label: "Exposure", value: "2.67", rating: "Moderately Aware/Prepared", colorClass: CLS_AW_MODERATE },
    { label: "Soft Countermeasures", value: "4.15", rating: "Highly Aware/Prepared", colorClass: CLS_AW_HIGH },
    { label: "Hard Countermeasures", value: "3.78", rating: "Highly Aware/Prepared", colorClass: CLS_AW_HIGH },
  ]
};

export const MAP_ACCEPTABILITY_DATA: MapSectionData = {
  title: "Project Validation & Acceptability",
  description: "Evaluation by DRRM experts regarding the accuracy, content, and usefulness of the developed flood risk maps. The maps were rated 'Highly Acceptable'.",
  tableHeaders: ["Criteria", "Overall Mean", "Descriptive Level"],
  tableData: [
    { label: "Accuracy", value: "4.04", rating: "Highly Acceptable", colorClass: CLS_VAL_HIGH },
    { label: "Content", value: "4.08", rating: "Highly Acceptable", colorClass: CLS_VAL_HIGH },
    { label: "Usefulness", value: "3.96", rating: "Highly Acceptable", colorClass: CLS_VAL_HIGH },
  ]
};

// --- Thesis Context for AI ---
const generateDataSummary = () => {
  const summarize = (data: MapSectionData) => {
    return `${data.title}: ` + data.tableData.map(r => `${r.label} (${r.value} - ${r.rating})`).join(", ");
  };
  return [
    summarize(FLOOD_RISK_DATA),
    summarize(HAZARD_DATA),
    summarize(VULNERABILITY_DATA),
    summarize(EXPOSURE_DATA),
    summarize(HARD_COUNTERMEASURES_DATA),
    summarize(SOFT_COUNTERMEASURES_DATA),
    summarize(COMMUNITY_AWARENESS_DATA),
    summarize(MAP_ACCEPTABILITY_DATA)
  ].join("\n");
}

export const THESIS_CONTEXT = `
You are an academic reseacher for a Civil Engineering thesis titled "Mapping and Indexing Flood Risk in Manabo, Abra".
The researchers are Angelzen A. Benedito, Rolly A. Duran, Dominique B. Pasal, Jeffershane Mae R. Tadeo, and Whitney B. Tulan.
The study aims to map and index flood risk using a quantitative-developmental design integrating GIS and Analytic Hierarchy Process (AHP).

--- INTRODUCTION ---
Manabo, Abra is increasingly vulnerable to flooding due to its proximity to the Abra River. Floods occur frequently during typhoons and heavy rainfall (habagat).
Problem: Despite persistent dangers, no comprehensive, community-based flood risk index map existed for Manabo at the barangay level.
Framework: Risk = Hazard × Exposure × Vulnerability. This study also integrates Soft (non-structural) and Hard (structural) Countermeasures into the FRI.

--- METHODOLOGY ---
Design: Quantitative-developmental.
Data Sources: Secondary data (MDRRMO, PSA, DSWD) for index calculation. Primary data (surveys) for community awareness (n=110 residents) and map acceptability (n=5 DRRM experts).
Indices:
- Hazard: Flood Frequency, Depth, Duration.
- Vulnerability: Population Density, Poverty Incidence, Age Distribution.
- Exposure: Area, Population, and Infrastructure in Risk Zones.
- Soft CM: Early Warning, Evacuation Plans, Flood Education.
- Hard CM: Drainage, Flood Control Structures, Infrastructure Elevation.

--- RESULTS: RISK INDICES ---
1. Flood Risk Index (FRI):
   - Luzong (0.766): HIGH RISK.
   - Sto. Tomas (0.561), San Ramon West (0.540), Catacdegan Nuevo (0.496): MODERATE RISK.
   - San Ramon East (0.146): VERY LOW RISK.
   
2. Hazard Index:
   - Luzong (1.000) and Sto. Tomas (0.833) are Very High. Driven by proximity to Abra River.
   
3. Vulnerability Index:
   - Sto. Tomas (0.548) is highest due to poverty, age, and density.
   - San Jose Sur (0.139) is Very Low (resilient).
   
4. Exposure Index:
   - Luzong (0.795) and Catacdegan Nuevo (0.667) are High.
   
5. Soft Countermeasures:
   - Uniformly Low (0.333) across all barangays. This indicates a systemic gap in flood education programs, though early warning systems exist.
   
6. Hard Countermeasures:
   - Critical gap. High risk areas (Sto. Tomas, San Ramon West) have 0.000 HCI (no major structural defenses).
   - Luzong has Moderate (0.500).

--- RESULTS: COMMUNITY AWARENESS (Survey n=110) ---
Scale: 1 (Not Aware) to 5 (Very Highly Aware).
1. Hazard (Mean 3.73 - Highly Aware): Residents know floods are a serious threat (increasing frequency). Lowest score in technical knowledge of flood zones.
2. Vulnerability (Mean 3.17 - Moderately Aware): High optimism bias. Residents know health impacts (4.14) but do not believe *their* household is vulnerable (2.08).
3. Exposure (Mean 2.67 - Moderately Aware): High cognitive knowledge of climate change (4.22) but very low action to assess personal exposure (1.55).
4. Soft CM (Mean 4.15 - Highly Aware): Residents value formal education (4.35) but community ties are weaker (3.38).
5. Hard CM (Mean 3.78 - Highly Aware): High trust in building codes (4.05) but see less need for large infrastructure (3.47).

--- RESULTS: MAP ACCEPTABILITY (Evaluators n=5) ---
1. Accuracy (4.04 - Highly Acceptable): "The flood risk index values assigned to barangays are correct and realistic." (4.2).
2. Content (4.08 - Highly Acceptable): "All barangays in Manabo, Abra are included" (4.4).
3. Usefulness (3.96 - Highly Acceptable): Stakeholders see it as a valuable tool for emergency preparedness and planning.

--- CONCLUSIONS ---
1. People in Manabo are conscious of flood risks but lack personal preparedness and technical knowledge of their specific vulnerabilities.
2. Risk is geographically concentrated near the Abra River (Luzong, Sto. Tomas).
3. High-risk barangays suffer a "double burden" of high exposure and low defenses (Hard CM gap).
4. The map is a valid, accurate, and practical tool for LGU planning.

--- RECOMMENDATIONS ---
1. Enhance Awareness: Shift from general awareness to specific, household-level vulnerability education.
2. Prioritize High-Risk Barangays: Focus resources on Luzong, Sto. Tomas, San Ramon West, and Catacdegan Nuevo.
3. Improve Countermeasures: Address the systemic gap in "soft" measures (drills, education) and invest in "hard" measures (drainage, floodwalls) in high-risk zones.
4. Institutionalize the Map: LGU should adopt this FRI map for CLUP and DRRM plans.
5. Promote Public Accessibility: Display maps in community halls.

--- DATASET ---
${generateDataSummary()}

Use this detailed context to answer user questions. If asked about the researchers, list their names. If asked about specific survey scores, cite the exact numbers from the findings.
`;
