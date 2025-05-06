import React from 'react';
import { FileText, BookOpen, Link as LinkIcon, Download } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Resources & Publications
          </h1>

          {/* Introduction */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Research & Educational Materials
            </h2>
            <p className="text-gray-700 mb-6">
              This page compiles key resources for understanding and addressing women's safety in public 
              transportation. These materials are valuable for researchers, policymakers, activists, and anyone 
              interested in creating safer public spaces.
            </p>
          </section>

          {/* Research Papers */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Research Papers</h2>
            </div>
            
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-medium mb-2 text-gray-900">
                  "Gender and Urban Mobility: Addressing Unequal Access to Transportation in Indian Cities"
                </h3>
                <p className="text-gray-600 mb-3 text-sm">Sharma, A. & Patel, R. (2023). Journal of Urban Planning, 45(3), 218-236.</p>
                <p className="text-gray-700 mb-3">
                  This comprehensive study examines how gender affects transportation patterns and access in six 
                  major Indian cities, with specific focus on safety concerns and their impact on mobility decisions.
                </p>
                <button className="flex items-center text-purple-600 hover:text-purple-700 transition-colors text-sm font-medium">
                  <Download className="h-4 w-4 mr-1" />
                  Download PDF
                </button>
              </div>
              
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-medium mb-2 text-gray-900">
                  "The Economic Cost of Restricted Mobility: Quantifying Women's Transport Poverty in Metro Cities"
                </h3>
                <p className="text-gray-600 mb-3 text-sm">Kumar, S., Mehta, V., & Singh, J. (2022). Economic & Political Weekly, 57(12), 45-53.</p>
                <p className="text-gray-700 mb-3">
                  This paper presents a novel methodology for measuring the economic impact of safety-related mobility 
                  restrictions on women's labor market participation and earnings potential.
                </p>
                <button className="flex items-center text-purple-600 hover:text-purple-700 transition-colors text-sm font-medium">
                  <Download className="h-4 w-4 mr-1" />
                  Download PDF
                </button>
              </div>
              
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-medium mb-2 text-gray-900">
                  "Beyond Women's Carriages: Designing Inclusive Public Transport Systems"
                </h3>
                <p className="text-gray-600 mb-3 text-sm">Desai, M. & Joshi, P. (2022). Transportation Research Part F: Psychology and Behaviour, 84, 123-141.</p>
                <p className="text-gray-700 mb-3">
                  A critical analysis of gender-segregated transit solutions and their long-term effectiveness, 
                  with case studies of alternative approaches from global cities.
                </p>
                <button className="flex items-center text-purple-600 hover:text-purple-700 transition-colors text-sm font-medium">
                  <Download className="h-4 w-4 mr-1" />
                  Download PDF
                </button>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2 text-gray-900">
                  "Digital Solutions for Women's Safety in Transit: Effectiveness and Limitations"
                </h3>
                <p className="text-gray-600 mb-3 text-sm">Gupta, N., Verma, K., & Thomas, E. (2023). Information Technology & People, 36(2), 567-589.</p>
                <p className="text-gray-700 mb-3">
                  This paper evaluates the impact of safety apps, tracking systems, and digital reporting mechanisms 
                  on women's perceptions of safety and actual usage patterns of public transportation.
                </p>
                <button className="flex items-center text-purple-600 hover:text-purple-700 transition-colors text-sm font-medium">
                  <Download className="h-4 w-4 mr-1" />
                  Download PDF
                </button>
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center mb-6">
              <BookOpen className="h-6 w-6 text-teal-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Case Studies & Success Stories</h2>
            </div>
            
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-medium mb-2 text-gray-900">
                  Delhi Metro's Comprehensive Safety Strategy
                </h3>
                <p className="text-gray-700 mb-3">
                  How Delhi Metro implemented a multi-faceted approach combining infrastructure, technology, 
                  staff training, and community engagement to improve women's safety.
                </p>
                <button className="flex items-center text-teal-600 hover:text-teal-700 transition-colors text-sm font-medium">
                  <LinkIcon className="h-4 w-4 mr-1" />
                  Read Case Study
                </button>
              </div>
              
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-medium mb-2 text-gray-900">
                  Mumbai's "Between Stations" Program
                </h3>
                <p className="text-gray-700 mb-3">
                  An innovative approach addressing last-mile connectivity through coordinated safe transit 
                  corridors linking stations to major residential and commercial areas.
                </p>
                <button className="flex items-center text-teal-600 hover:text-teal-700 transition-colors text-sm font-medium">
                  <LinkIcon className="h-4 w-4 mr-1" />
                  Read Case Study
                </button>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2 text-gray-900">
                  Bangalore's Gender-Responsive Budgeting for Transport
                </h3>
                <p className="text-gray-700 mb-3">
                  How Bangalore implemented gender-responsive budgeting in transportation planning, allocating 
                  resources specifically for safety-enhancing infrastructure improvements.
                </p>
                <button className="flex items-center text-teal-600 hover:text-teal-700 transition-colors text-sm font-medium">
                  <LinkIcon className="h-4 w-4 mr-1" />
                  Read Case Study
                </button>
              </div>
            </div>
          </section>

          {/* Toolkits */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-pink-600 mr-3">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
              <h2 className="text-2xl font-semibold text-gray-900">Practical Toolkits & Guidelines</h2>
            </div>
            
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-medium mb-2 text-gray-900">
                  Safety Audit Toolkit for Transport Planners
                </h3>
                <p className="text-gray-700 mb-3">
                  A step-by-step guide for conducting gender-sensitive safety audits of transportation infrastructure, 
                  including ready-to-use assessment templates and scoring mechanisms.
                </p>
                <button className="flex items-center text-pink-600 hover:text-pink-700 transition-colors text-sm font-medium">
                  <Download className="h-4 w-4 mr-1" />
                  Download Toolkit
                </button>
              </div>
              
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-medium mb-2 text-gray-900">
                  Bystander Intervention Training Materials
                </h3>
                <p className="text-gray-700 mb-3">
                  Resources for training transport staff and the public on effective, safe intervention strategies 
                  when witnessing harassment or unsafe situations in transit settings.
                </p>
                <button className="flex items-center text-pink-600 hover:text-pink-700 transition-colors text-sm font-medium">
                  <Download className="h-4 w-4 mr-1" />
                  Download Materials
                </button>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2 text-gray-900">
                  Gender-Responsive Transport Policy Framework
                </h3>
                <p className="text-gray-700 mb-3">
                  A comprehensive guide for policymakers to develop and implement transportation policies that 
                  effectively address gender-specific needs and safety concerns.
                </p>
                <button className="flex items-center text-pink-600 hover:text-pink-700 transition-colors text-sm font-medium">
                  <Download className="h-4 w-4 mr-1" />
                  Download Framework
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;