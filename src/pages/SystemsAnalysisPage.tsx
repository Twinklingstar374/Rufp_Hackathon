import React from 'react';
import { HelpCircle, GitBranch, RefreshCw, Zap, TrendingUp, BarChart, Eye, Shield } from 'lucide-react';

const SystemsAnalysisPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Systems Analysis: Women's Safety in Public Transport
          </h1>

          {/* Introduction section remains unchanged */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              A Systems Approach to Understanding the Problem
            </h2>
            <p className="text-gray-700 mb-6">
              The challenge of women's safety in public transportation is a complex systemic issue that requires 
              understanding multiple interconnected factors and feedback loops. Our analysis uses systems thinking 
              to map these relationships and identify effective intervention points.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
                <h3 className="font-medium mb-2 text-purple-900 flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-purple-700" />
                  Events (Symptoms)
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Reported harassment incidents</li>
                  <li>• Women feeling unsafe</li>
                  <li>• Declining female ridership</li>
                </ul>
              </div>
              
              <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                <h3 className="font-medium mb-2 text-teal-900 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-teal-700" />
                  Patterns
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Lower transit use at night</li>
                  <li>• Chronic underreporting</li>
                  <li>• Similar issues across cities</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-5 rounded-lg border border-orange-100">
                <h3 className="font-medium mb-2 text-orange-900 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-orange-700" />
                  Structures
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Weak reporting mechanisms</li>
                  <li>• Gender-blind infrastructure</li>
                  <li>• Permissive social norms</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Updated Causal Loop Diagram section */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
              <RefreshCw className="h-5 w-5 mr-2 text-purple-600" />
              Causal Loop Diagram (CLD)
            </h2>
            <p className="text-gray-700 mb-6">
              Our CLD identifies key variables and their relationships in the system of women's safety in public transport.
            </p>

            <div className="space-y-8">
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-xl font-medium mb-3 text-gray-900">Key Variables</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-gray-700">• Reports Filed</p>
                    <p className="text-gray-700">• Trust in System</p>
                    <p className="text-gray-700">• Public Awareness</p>
                    <p className="text-gray-700">• User Feedback</p>
                    <p className="text-gray-700">• Transport Quality</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-700">• Overcrowding</p>
                    <p className="text-gray-700">• Harassment Cases</p>
                    <p className="text-gray-700">• Women Traveling</p>
                    <p className="text-gray-700">• Confidence to Travel</p>
                    <p className="text-gray-700">• Police Response Time</p>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-xl font-medium mb-3 text-gray-900">Major Feedback Loops</h3>
                
                <div className="space-y-6">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-900 mb-2">R1: Trust and Reporting Loop (Reinforcing)</h4>
                    <p className="text-gray-700">
                      Reports Filed ↑ → Police Response Time ↓ → Trust in System ↑ → 
                      Confidence to Travel ↑ → Women Traveling ↑
                    </p>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-medium text-teal-900 mb-2">R2: Quality and Usage Loop (Reinforcing)</h4>
                    <p className="text-gray-700">
                      Transport Quality ↑ → User Feedback ↑ → Public Awareness ↑ → 
                      Women Traveling ↑ → Transport Quality ↑
                    </p>
                  </div>
                  
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-medium text-pink-900 mb-2">B1: Crowding Control Loop (Balancing)</h4>
                    <p className="text-gray-700">
                      Overcrowding ↑ → Harassment Cases ↑ → Confidence to Travel ↓ → 
                      Women Traveling ↓ → Overcrowding ↓
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* System Archetypes */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">System Archetypes Present</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-4 py-3">
                <h3 className="text-lg font-medium mb-2 text-gray-900">Shifting the Burden</h3>
                <p className="text-gray-700">
                  Quick-fix solutions like women-only carriages address symptoms without tackling underlying 
                  causes of harassment and gender-based violence.
                </p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-4 py-3">
                <h3 className="text-lg font-medium mb-2 text-gray-900">Fixes that Fail</h3>
                <p className="text-gray-700">
                  Solutions like panic buttons or CCTV without proper response systems may initially seem 
                  effective but fail to create lasting safety improvements.
                </p>
              </div>
              
              <div className="border-l-4 border-pink-500 pl-4 py-3">
                <h3 className="text-lg font-medium mb-2 text-gray-900">Success to the Successful</h3>
                <p className="text-gray-700">
                  Transport planning prioritizes existing user patterns (predominantly male), creating systems 
                  that better serve these users while further marginalizing women's needs.
                </p>
              </div>
            </div>
          </section>

          {/* Leverage Points */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
              <Zap className="h-5 w-5 mr-2 text-yellow-600" />
              High-Impact Intervention Points
            </h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3 text-yellow-900">Structural Redesign</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Redesign feedback systems with public visibility and policy dashboard integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Mandatory safety infrastructure policy linking CCTV and staff presence to licensing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>KPI-driven governance using safety perception metrics</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3 text-purple-900">Community Engagement</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Partner with NGOs for real-time monitoring and feedback</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Establish community-based patrolling systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Create public awareness campaigns targeting bystander intervention</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3 text-teal-900">Policy Integration</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Integrate gender-responsive budgeting in transport planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Mandate gender impact assessments for infrastructure projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Create cross-departmental coordination mechanisms</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SystemsAnalysisPage;