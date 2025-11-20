
import React, { useEffect } from 'react';
import { AlertTriangle, Map as MapIcon, BookOpen, Home, Users, CheckCircle } from 'lucide-react';
import Advisor from './components/Advisor';
import RiskTable from './components/RiskTable';
import { 
  FLOOD_RISK_DATA, 
  HAZARD_DATA, 
  VULNERABILITY_DATA, 
  EXPOSURE_DATA, 
  HARD_COUNTERMEASURES_DATA, 
  SOFT_COUNTERMEASURES_DATA,
  COMMUNITY_AWARENESS_DATA,
  MAP_ACCEPTABILITY_DATA
} from './constants';
import { MapSectionData } from './types';

const Section: React.FC<{ data: MapSectionData; id: string }> = ({ data, id }) => (
  <div id={id} className="scroll-mt-24 py-16 border-b border-gray-200 last:border-0">
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
        <span className="w-2 h-8 bg-orange-500 rounded-full block shadow-sm"></span>
        {data.title}
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">{data.description}</p>
    </div>

    <div className={`grid grid-cols-1 ${data.imageUrl ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-10 items-start`}>
      {/* Map Visualization (Only if image URL exists) */}
      {data.imageUrl && (
        <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="relative h-[500px] bg-white rounded-xl overflow-hidden group cursor-zoom-in flex items-center justify-center">
            <img 
              src={data.imageUrl} 
              alt={`${data.title} Map`} 
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="px-4 py-3 bg-gray-50 rounded-b-xl text-xs text-center text-gray-500 font-medium uppercase tracking-wide">
             Map Visualization of {data.title}
          </div>
          
          {data.riskIndexTable && (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs px-2 pb-2">
              {data.riskIndexTable.map((idx, i) => (
                 <div key={i} className={`px-3 py-2 rounded-lg flex flex-col justify-center items-center text-center shadow-sm ${idx.colorClass} bg-opacity-90 backdrop-blur-sm`}>
                   <span className="font-bold text-sm">{idx.rating}</span>
                   <span className="opacity-80 text-[10px]">{idx.range}</span>
                 </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Data Table */}
      <div className={!data.imageUrl ? "max-w-3xl mx-auto w-full" : ""}>
         <RiskTable headers={data.tableHeaders} data={data.tableData} />
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  
  // Hash navigation handler for smooth scrolling
  useEffect(() => {
    const handleHashChange = () => {
        const hash = window.location.hash.slice(1);
        const element = document.getElementById(hash);
        if(element) element.scrollIntoView({ behavior: 'smooth'});
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24">
        
        {/* Hero Section */}
        <section id="home" className="scroll-mt-24 text-center py-20 md:py-32 bg-white rounded-3xl shadow-xl shadow-orange-100/50 border border-gray-100 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-red-500 to-blue-600"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-1000"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-1000"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-orange-50 text-orange-700 text-xs font-bold uppercase tracking-wider mb-6 border border-orange-100">
              <BookOpen className="w-3 h-3" />
              2025 COE THESIS
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">
              Mapping and Indexing <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Flood Risk in Manabo, Abra
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              A comprehensive, quantitative-developmental study integrating GIS and Community-Based data to visualize Hazard, Vulnerability, and Exposure.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 text-sm font-medium text-gray-600 bg-gray-50 inline-flex py-3 px-8 rounded-full border border-gray-200 shadow-sm">
               <span className="whitespace-nowrap">Angelzen A. Benedito</span> &bull; 
               <span className="whitespace-nowrap">Rolly A. Duran</span> &bull; 
               <span className="whitespace-nowrap">Dominique B. Pasal</span> &bull; 
               <span className="whitespace-nowrap">Jeffershane Mae R. Tadeo</span> &bull; 
               <span className="whitespace-nowrap">Whitney B. Tulan</span>
            </div>
          </div>
        </section>

        {/* Flood Risk Index Section */}
        <Section data={FLOOD_RISK_DATA} id="fri" />

        {/* Indices Breakdown */}
        <div id="indices" className="scroll-mt-24 space-y-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-bold text-gray-900">Detailed Risk Indices</h2>
                <p className="text-xl text-gray-500 mt-4">Breaking down the components that contribute to the overall flood risk, from natural hazards to structural defenses.</p>
            </div>
            
            <Section data={HAZARD_DATA} id="hazard" />
            <Section data={VULNERABILITY_DATA} id="vulnerability" />
            <Section data={EXPOSURE_DATA} id="exposure" />
            <Section data={HARD_COUNTERMEASURES_DATA} id="hci" />
            <Section data={SOFT_COUNTERMEASURES_DATA} id="sci" />
        </div>

        {/* Community Awareness Section */}
        <div id="awareness" className="scroll-mt-24">
          <div className="bg-blue-50 rounded-3xl p-8 md:p-16 border border-blue-100 shadow-sm">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4 text-blue-600">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Community Insights</h2>
              <p className="text-lg text-gray-600 mt-4">
                Survey results (n=110) reveal a critical disconnect: Residents are "Highly Aware" of general hazards but only "Moderately Aware" of their personal vulnerability.
              </p>
            </div>
            <Section data={COMMUNITY_AWARENESS_DATA} id="community-data" />
          </div>
        </div>

        {/* Map Acceptability / Validation */}
        <div id="validation" className="scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
               <div className="inline-flex items-center justify-center p-3 bg-teal-100 rounded-full mb-4 text-teal-600">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Project Validation</h2>
              <p className="text-lg text-gray-600 mt-4">
                Evaluated by DRRM experts (n=5), the updated maps were deemed "Highly Acceptable" across all criteria, confirming their validity as a planning tool.
              </p>
            </div>
            <Section data={MAP_ACCEPTABILITY_DATA} id="acceptability-data" />
        </div>

        {/* Recommendations */}
        <section id="recommendations" className="scroll-mt-24 bg-slate-900 text-white rounded-3xl p-8 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-orange-600 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
            
            <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-gray-800 pb-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">Strategic Recommendations</h2>
                        <p className="text-gray-400">Actionable steps for LGU and Community Leaders</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <span className="text-orange-500 font-bold text-lg">High Priority</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        { title: "Enhance Awareness", text: "Shift from general hazard awareness to specific, household-level vulnerability education. Residents need to understand their specific exposure.", icon: BookOpen },
                        { title: "Prioritize High-Risk Zones", text: "Focus immediate resources on Luzong, Sto. Tomas, and San Ramon West. These areas have the highest combined risk scores.", icon: AlertTriangle },
                        { title: "Bridge the Infrastructure Gap", text: "Address the critical mismatch in Hard Countermeasures (HCI 0.000). Invest in drainage and floodwalls where exposure is highest.", icon: Home },
                        { title: "Institutionalize the Map", text: "The LGU should adopt this Flood Risk Index (FRI) map for updating Comprehensive Land Use Plans (CLUP) and DRRM plans.", icon: MapIcon }
                    ].map((rec, idx) => (
                        <div key={idx} className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-orange-500/50 hover:bg-gray-800 transition-all group">
                            <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                                <rec.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">{rec.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{rec.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* AI Advisor Section */}
        <section id="advisor" className="scroll-mt-24 pb-20">
            <div className="text-center mb-12">
                <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Interactive Assistance</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Virtual Thesis Advisor</h2>
                <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Powered by Gemini 2.5 Flash. Ask specific questions about the data, methodology, or findings of the study.</p>
            </div>
            <Advisor />
        </section>

      </main>

      <footer className="bg-white border-t border-gray-200 mt-20 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
                <p className="font-bold text-gray-900 text-lg">Manabo<span className="text-orange-600">Risk</span></p>
                <p className="text-sm text-gray-500 mt-1">Mapping and Indexing Flood Risk in Manabo, Abra</p>
            </div>
            <div className="text-sm text-gray-400">
                &copy; 2025 COE Thesis. All rights reserved.
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
