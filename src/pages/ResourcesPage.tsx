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
                <p className="text-gray-600 mb-3 text-sm">by A Singh · 2025</p>
                <p className="text-gray-700 mb-3">
                  Fighting gender inequality through mobility: Assessing Delhi’s ‘Pink Ticket’ scheme
                </p>
                <a
                  href="https://www.ideasforindia.in/topics/social-identity/fighting-gender-inequality-through-mobility-assessing-delhi-s-pink-ticket-scheme.html"
                    download
                    className="flex items-center text-purple-600 hover:text-purple-700 transition-colors text-sm font-medium"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download PDF
                  </a>
              </div>
              
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-medium mb-2 text-gray-900">
                  "The Economic Cost of Restricted Mobility: Quantifying Women's Transport Poverty in Metro Cities"
                </h3>
                <p className="text-gray-600 mb-3 text-sm">Ankita Kapoor</p>
                <p className="text-gray-700 mb-3">
                 This report focuses on highlighting the gaps in the current public transport scenario in these cities and suggesting recommendations to mitigate the issue .
                </p>
                <a
                  href="https://asiafoundation.org/wp-content/uploads/2024/08/Women-and-Mobility_India.pdf"
                    download
                    className="flex items-center text-purple-600 hover:text-purple-700 transition-colors text-sm font-medium"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download PDF
                  </a>
              </div>
              
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-medium mb-2 text-gray-900">
                  "Beyond Women's Carriages: Designing Inclusive Public Transport Systems"
                </h3>
                <p className="text-gray-600 mb-3 text-sm">By Ka Ying Wong and KE Seetha Ram. Posted January 17, 2025</p>
                <p className="text-gray-700 mb-3">
                Silent Struggles: Advancing Women’s Mobility with Public Transportation in Asia
                </p>
                <a
                  href="https://www.asiapathways-adbi.org/2025/01/silent-struggles-advancing-womens-mobility-with-public-transportation-in-asia/"
                    download
                    className="flex items-center text-purple-600 hover:text-purple-700 transition-colors text-sm font-medium"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download PDF
                  </a>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2 text-gray-900">
                  "Digital Solutions for Women's Safety in Transit: Effectiveness and Limitations"
                </h3>
                <p className="text-gray-600 mb-3 text-sm">A. Shaji George
                </p>
                <p className="text-gray-700 mb-3">
                Exploring the Limitations of Technology in Ensuring Women's Safety: A Gender-Inclusive Design Perspective
                </p>
                <a
                  href="https://www.researchgate.net/publication/383568183_Exploring_the_Limitations_of_Technology_in_Ensuring_Women's_Safety_A_Gender-Inclusive_Design_Perspective"
                    download
                    className="flex items-center text-purple-600 hover:text-purple-700 transition-colors text-sm font-medium"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download PDF
                  </a>
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
                  <a
                    href="https://questionofcities.org/the-delhi-metro-is-inclusive-but-also-not-equitable/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-600 hover:text-teal-700 transition-colors text-sm font-medium"
                  >
                    <LinkIcon className="h-4 w-4 mr-1" />
                    Read Case Study
                  </a>
              </div>
              
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-medium mb-2 text-gray-900">
                Engendering Mumbai’s
                Suburban Railway System 
                </h3>
                <p className="text-gray-700 mb-3">
                  An innovative approach addressing last-mile connectivity through coordinated safe transit 
                  corridors linking stations to major residential and commercial areas.
                </p>
                <a
                    href="https://mrvc.indianrailways.gov.in/works/uploads/File/Gender%20Study%20Report%20by%20TISS%281%29.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-600 hover:text-teal-700 transition-colors text-sm font-medium"
                  >
                    <LinkIcon className="h-4 w-4 mr-1" />
                    Read Case Study
                  </a>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2 text-gray-900">
                  Bangalore's Gender-Responsive Budgeting for Transport
                </h3>
                <p className="text-gray-700 mb-3">
                  How Bangalore implemented gender-responsive budgeting in transportation planning, allocating 
                  resources specifically for safety-enhancing infrastructure improvements.
                </p>
                <a
                    href="https://www.feministpolicyindia.org/documents/resources/grb_papers_india_updf_final.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-600 hover:text-teal-700 transition-colors text-sm font-medium"
                  >
                    <LinkIcon className="h-4 w-4 mr-1" />
                    Read Case Study
                  </a>
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
                A guidance brief based on the ‘Toolkit for
                  Enabling Gender Responsive Urban Mobility
                  and Public Spaces’
                </p>
                <a
                href="https://documents1.worldbank.org/curated/en/099659110202251900/pdf/IDU05dc37f9b08dc9042840bb5d08b6c41f62a47.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-pink-600 hover:text-pink-700 transition-colors text-sm font-medium"
              >
                <Download className="h-4 w-4 mr-1" />
                Download Toolkit
              </a>

              </div>
              
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-medium mb-2 text-gray-900">
                  Bystander Intervention Training Materials
                </h3>
                <p className="text-gray-700 mb-3">
                  Resources for training transport staff and the public on effective, safe intervention strategies 
                  when witnessing harassment or unsafe situations in transit settings.
                </p>
                <a
                href="https://www.health.ny.gov/publications/2040.pdf?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-pink-600 hover:text-pink-700 transition-colors text-sm font-medium"
              >
                <Download className="h-4 w-4 mr-1" />
                Download Toolkit
              </a>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2 text-gray-900">
                  Gender-Responsive Transport Policy Framework
                </h3>
                <p className="text-gray-700 mb-3">
                  A comprehensive guide for policymakers to develop and implement transportation policies that 
                  effectively address gender-specific needs and safety concerns.
                </p>
                <a
                href="https://cms.uitp.org/wp/wp-content/uploads/2022/08/P1737610d0f8070d00931b093ae318c2914.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-pink-600 hover:text-pink-700 transition-colors text-sm font-medium"
              >
                <Download className="h-4 w-4 mr-1" />
                Download Toolkit
              </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;