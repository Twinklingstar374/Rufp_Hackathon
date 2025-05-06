import React from 'react';
import { BookOpen, MapPin, Users, TrendingUp, BarChart } from 'lucide-react';

const ResearchPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Research: Women's Safety in Public Transport
          </h1>

          {/* Introduction */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">The Challenge</h2>
            <p className="text-gray-700 mb-4">
              Despite the expansion of public transportation networks in Indian metro cities, women continue to 
              avoid using these services, particularly during certain hours or on specific routes. This research 
              explores the underlying factors contributing to this phenomenon.
            </p>
            <p className="text-gray-700 mb-6">
              Our investigations reveal that women's decisions to avoid public transportation stem from a 
              complex interplay of safety concerns, infrastructure inadequacies, social norms, and ineffective 
              policy implementation.
            </p>

            <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50 mb-6">
              <p className="text-gray-700 italic">
                "Safety is not just the absence of physical harm, but the presence of conditions that allow 
                women to move freely without fear or restriction."
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 bg-slate-50 p-4 rounded-md border border-slate-100">
                <h3 className="font-semibold mb-2 text-gray-900 flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                  Research Scope
                </h3>
                <p className="text-sm text-gray-700">
                  This study focuses on six major metropolitan cities in India: Delhi, Mumbai, Kolkata, 
                  Chennai, Bangalore, and Hyderabad.
                </p>
              </div>
              <div className="flex-1 bg-slate-50 p-4 rounded-md border border-slate-100">
                <h3 className="font-semibold mb-2 text-gray-900 flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 text-purple-600" />
                  Methodology
                </h3>
                <p className="text-sm text-gray-700">
                  Mixed-methods approach including surveys, interviews, focus groups, and analysis of 
                  transit data from 2020-2023.
                </p>
              </div>
            </div>
          </section>

          {/* Key Findings */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Key Findings</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-xl font-medium mb-3 text-gray-900 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-purple-600" />
                  Pervasive Harassment
                </h3>
                <p className="text-gray-700 mb-4">
                  76% of women surveyed reported experiencing some form of harassment while using public 
                  transportation, ranging from verbal harassment to physical assault.
                </p>
                <div className="bg-purple-50 p-4 rounded-md">
                  <p className="text-sm text-purple-900">
                    <span className="font-semibold">Notable insight:</span> The reporting rate for these incidents 
                    was only 8%, indicating significant barriers to seeking help or justice.
                  </p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-xl font-medium mb-3 text-gray-900 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-teal-600" />
                  Infrastructure Gaps
                </h3>
                <p className="text-gray-700 mb-4">
                  Poor lighting at bus stops and stations (identified in 82% of surveyed locations), inadequate 
                  surveillance (67%), and unsafe pathways to and from transit points (71%) were key physical 
                  factors contributing to insecurity.
                </p>
                <div className="bg-teal-50 p-4 rounded-md">
                  <p className="text-sm text-teal-900">
                    <span className="font-semibold">Notable insight:</span> Women reported "last mile" connectivity 
                    as the most dangerous segment of their journey, with 63% taking longer alternative routes to 
                    avoid unsafe areas.
                  </p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-xl font-medium mb-3 text-gray-900 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-pink-600" />
                  Economic Impact
                </h3>
                <p className="text-gray-700 mb-4">
                  Safety concerns directly impact women's economic participation, with 47% of respondents reporting 
                  they had declined job opportunities due to unsafe transportation options.
                </p>
                <div className="bg-pink-50 p-4 rounded-md">
                  <p className="text-sm text-pink-900">
                    <span className="font-semibold">Notable insight:</span> Women spend an estimated 30-40% more 
                    on transportation than men for equivalent distances, opting for "safer" but more expensive 
                    options like private taxis.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 text-gray-900 flex items-center">
                  <BarChart className="h-5 w-5 mr-2 text-orange-600" />
                  Temporal Patterns
                </h3>
                <p className="text-gray-700 mb-4">
                  Women's use of public transport decreases by up to 68% after 8 PM compared to daytime hours, 
                  with early morning (before 7 AM) showing similar patterns.
                </p>
                <div className="bg-orange-50 p-4 rounded-md">
                  <p className="text-sm text-orange-900">
                    <span className="font-semibold">Notable insight:</span> This "time tax" results in women 
                    adjusting their schedules, often at significant personal and professional cost, to avoid 
                    traveling during perceived unsafe hours.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* City-specific Data */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">City-Specific Analysis</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-purple-100">
                    <th className="py-3 px-4 text-left text-gray-900 border-b border-purple-200">City</th>
                    <th className="py-3 px-4 text-left text-gray-900 border-b border-purple-200">Primary Transport</th>
                    <th className="py-3 px-4 text-left text-gray-900 border-b border-purple-200">Safety Rating (1-10)</th>
                    <th className="py-3 px-4 text-left text-gray-900 border-b border-purple-200">Key Issue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3 px-4 border-b border-gray-100 font-medium">Delhi</td>
                    <td className="py-3 px-4 border-b border-gray-100">Metro, Buses</td>
                    <td className="py-3 px-4 border-b border-gray-100">6.2</td>
                    <td className="py-3 px-4 border-b border-gray-100">Last-mile connectivity</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3 px-4 border-b border-gray-100 font-medium">Mumbai</td>
                    <td className="py-3 px-4 border-b border-gray-100">Local Trains, Buses</td>
                    <td className="py-3 px-4 border-b border-gray-100">7.1</td>
                    <td className="py-3 px-4 border-b border-gray-100">Overcrowding</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3 px-4 border-b border-gray-100 font-medium">Bangalore</td>
                    <td className="py-3 px-4 border-b border-gray-100">Buses, Metro</td>
                    <td className="py-3 px-4 border-b border-gray-100">5.8</td>
                    <td className="py-3 px-4 border-b border-gray-100">Poor street lighting</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3 px-4 border-b border-gray-100 font-medium">Chennai</td>
                    <td className="py-3 px-4 border-b border-gray-100">Buses, Suburban Trains</td>
                    <td className="py-3 px-4 border-b border-gray-100">6.4</td>
                    <td className="py-3 px-4 border-b border-gray-100">Inadequate surveillance</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3 px-4 border-b border-gray-100 font-medium">Hyderabad</td>
                    <td className="py-3 px-4 border-b border-gray-100">Buses, Metro</td>
                    <td className="py-3 px-4 border-b border-gray-100">5.9</td>
                    <td className="py-3 px-4 border-b border-gray-100">Unsafe bus stops</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3 px-4 border-b border-gray-100 font-medium">Kolkata</td>
                    <td className="py-3 px-4 border-b border-gray-100">Metro, Trams, Buses</td>
                    <td className="py-3 px-4 border-b border-gray-100">6.7</td>
                    <td className="py-3 px-4 border-b border-gray-100">Verbal harassment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Conclusions */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Research Conclusions</h2>
            <p className="text-gray-700 mb-6">
              Our research demonstrates that women's avoidance of public transportation in Indian cities is 
              a rational response to genuine safety concerns rather than an irrational fear or preference. 
              This avoidance has far-reaching consequences for women's economic participation, education, 
              and social integration.
            </p>
            
            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-medium mb-3 text-purple-900">Key Takeaways:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Safety concerns in public transport create a "mobility tax" on women, limiting their access to opportunities.
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Infrastructure improvements must be coupled with social interventions addressing harassment and gender bias.
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  The problem requires a systems thinking approach as it involves multiple interconnected factors.
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Technology-based solutions hold promise but must be designed for accessibility and local context.
                </li>
              </ul>
            </div>
            
            <p className="text-gray-700">
              These findings provide the foundation for our systems analysis, which maps the causal relationships 
              between these factors and identifies potential intervention points in this complex problem.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;