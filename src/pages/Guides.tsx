
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Guides = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy/5 via-white to-coral/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-navy mb-6">
              Essential Construction <span className="text-coral">Guides</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert insights to help you navigate your construction project with confidence. 
              From ADU requirements to pre-construction planning, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('adu-guide')}
                className="bg-coral hover:bg-coral-600 text-white px-8 py-3 rounded-full shadow-lg"
              >
                ADU Guide <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                onClick={() => scrollToSection('preconstruction-guide')}
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-3 rounded-full"
              >
                Pre-Construction Guide <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ADU Guide */}
      <section id="adu-guide" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold text-navy mb-8 text-center">
              What You Must Know Before Starting an ADU or Addition in Massachusetts
            </h2>
            
            <div className="space-y-12">
              {/* Section 1 */}
              <div className="bg-gradient-to-r from-coral/5 to-navy/5 p-8 rounded-xl">
                <h3 className="font-playfair text-2xl font-bold text-navy mb-4">
                  1. What is an ADU & Why Does It Matter?
                </h3>
                <p className="text-gray-700 mb-4">
                  An ADU (Accessory Dwelling Unit) is a secondary housing unit on a single-family residential lot. 
                  These can be interior conversions (basements), attached additions, or detached structures like cottages or garage conversions.
                </p>
                <p className="text-gray-700">
                  Massachusetts has recently passed legislation allowing ADUs by-right in many municipalities starting February 2, 2025, 
                  making it easier for homeowners to add value and flexibility to their property.
                </p>
              </div>

              {/* Section 2 */}
              <div className="bg-white border border-coral/20 p-8 rounded-xl shadow-lg">
                <h3 className="font-playfair text-2xl font-bold text-navy mb-4">
                  2. Is an ADU or Addition Right for You?
                </h3>
                <p className="text-gray-700 mb-4">Ask yourself:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral mt-0.5 mr-3 flex-shrink-0" />
                    Is your lot zoned single-family?
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral mt-0.5 mr-3 flex-shrink-0" />
                    Do you need space for family or rental income?
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral mt-0.5 mr-3 flex-shrink-0" />
                    Are your utilities and septic system capable of handling an additional unit?
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral mt-0.5 mr-3 flex-shrink-0" />
                    Will your town allow a detached or attached unit?
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-coral mt-0.5 mr-3 flex-shrink-0" />
                    Can you finance a $200k+ project?
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="bg-gradient-to-r from-navy/5 to-coral/5 p-8 rounded-xl">
                <h3 className="font-playfair text-2xl font-bold text-navy mb-4">
                  3. Your Step-by-Step Building Roadmap
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="bg-coral text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                      <span className="text-gray-700">Research zoning and verify local ADU regulations</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-coral text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                      <span className="text-gray-700">Get a site evaluation and feasibility review</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-coral text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                      <span className="text-gray-700">Work with a design/build team for plans and estimates</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="bg-coral text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                      <span className="text-gray-700">Submit permits to your local building department</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-coral text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">5</span>
                      <span className="text-gray-700">Build the unit and pass inspections</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-coral text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">6</span>
                      <span className="text-gray-700">Occupy or rent the space as allowed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="bg-white border border-navy/20 p-8 rounded-xl shadow-lg">
                <h3 className="font-playfair text-2xl font-bold text-navy mb-4">
                  4. Know Your Town's Rules
                </h3>
                <p className="text-gray-700">
                  While state law supports ADUs by-right, towns can still regulate design, size (max 900 sq ft or 50% of main home), 
                  parking, and septic requirements. Always confirm local conditions with your building department.
                </p>
              </div>

              {/* Section 5 */}
              <div className="bg-gradient-to-r from-coral/5 to-navy/5 p-8 rounded-xl">
                <h3 className="font-playfair text-2xl font-bold text-navy mb-4">
                  5. Common Pitfalls & Expert Tips
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-coral mr-3 mt-1">•</span>
                    Don't assume short-term rentals are allowed
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral mr-3 mt-1">•</span>
                    Check septic capacity early
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral mr-3 mt-1">•</span>
                    Get permits for all scope of work
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral mr-3 mt-1">•</span>
                    Use an experienced contractor
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral mr-3 mt-1">•</span>
                    Plan for utility coordination
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral mr-3 mt-1">•</span>
                    Expect higher taxes after project completion
                  </li>
                </ul>
              </div>

              {/* Sections 6 & 7 */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border border-coral/20 p-6 rounded-xl shadow-lg">
                  <h3 className="font-playfair text-xl font-bold text-navy mb-4">
                    6. Additional Resources
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-coral mr-3 mt-1">•</span>
                      Mass.gov ADU Guidance
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-3 mt-1">•</span>
                      Local zoning departments
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-3 mt-1">•</span>
                      Energy Code compliance (Stretch Code)
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-3 mt-1">•</span>
                      Financing options (HELOC, renovation loans)
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-navy/20 p-6 rounded-xl shadow-lg">
                  <h3 className="font-playfair text-xl font-bold text-navy mb-4">
                    7. Before You Build Checklist
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-coral mt-0.5 mr-2 flex-shrink-0" />
                      Zoning and by-right status confirmed
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-coral mt-0.5 mr-2 flex-shrink-0" />
                      Septic/utility analysis complete
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-coral mt-0.5 mr-2 flex-shrink-0" />
                      Budget and financing secured
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-coral mt-0.5 mr-2 flex-shrink-0" />
                      Preliminary plans reviewed
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-coral mt-0.5 mr-2 flex-shrink-0" />
                      Permit application submitted
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-coral mt-0.5 mr-2 flex-shrink-0" />
                      Construction timeline in place
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-coral mt-0.5 mr-2 flex-shrink-0" />
                      Inspections scheduled
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-coral mt-0.5 mr-2 flex-shrink-0" />
                      Compliance with rental rules verified
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-coral to-coral-600 text-white p-8 rounded-xl text-center">
                <h3 className="font-playfair text-2xl font-bold mb-4">
                  Next Step: Schedule a Feasibility Call
                </h3>
                <p className="mb-6">
                  Visit hjzmgmt.com or call us at 617-680-6716 to schedule your ADU or addition feasibility assessment. 
                  We'll explain our process and get you moving towards maximizing your investment.
                </p>
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-coral hover:bg-gray-100 px-8 py-3 rounded-full shadow-lg"
                >
                  Schedule Your Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Construction Guide */}
      <section id="preconstruction-guide" className="py-20 bg-gradient-to-br from-navy/5 via-white to-coral/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold text-navy mb-8 text-center">
              5 Reasons a Project Goes South Without a Pre-Construction Agreement
            </h2>
            
            <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
              <h3 className="font-playfair text-2xl font-bold text-navy mb-4">Introduction</h3>
              <p className="text-gray-700 leading-relaxed">
                When it comes to residential construction and renovation, one of the biggest mistakes homeowners and even some contractors make 
                is skipping the pre-construction agreement. A clear, documented pre-construction phase not only sets expectations but also 
                lays the groundwork for a smooth, cost-effective, and timely project. Without it, even the best intentions can quickly unravel. 
                In this guide, we'll explore five critical reasons projects often go south when there's no pre-construction agreement in place—and 
                how you can avoid these costly pitfalls.
              </p>
            </div>

            <div className="space-y-12">
              {/* Reason 1 */}
              <div className="bg-white border-l-4 border-coral p-8 rounded-r-xl shadow-lg">
                <h3 className="font-playfair text-2xl font-bold text-navy mb-4">
                  1. Misaligned Expectations Between Homeowner and Contractor
                </h3>
                <p className="text-gray-700 mb-4">
                  Without a pre-construction agreement, many clients assume the contractor fully understands their vision, timeline, 
                  and budget from the start. In reality, assumptions breed confusion.
                </p>
                <p className="text-gray-700 mb-6">
                  A solid pre-construction agreement outlines scope, phases, deliverables, and communication expectations. 
                  Without this clarity, clients may feel blindsided when the project evolves differently than they imagined.
                </p>
                <div className="bg-coral/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy mb-2">Benefits:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-coral mr-3 mt-1">•</span>
                      Clearly define project goals
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-3 mt-1">•</span>
                      Align homeowner vision with contractor execution
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-3 mt-1">•</span>
                      Reduce miscommunication before the build starts
                    </li>
                  </ul>
                </div>
              </div>

              {/* Reason 2 */}
              <div className="bg-white border-l-4 border-navy p-8 rounded-r-xl shadow-lg">
                <h3 className="font-playfair text-2xl font-bold text-navy mb-4">
                  2. Poor Cost Visibility and Budget Creep
                </h3>
                <p className="text-gray-700 mb-4">
                  Clients often have a general idea of what they want to spend—but without early-phase planning and cost analysis, 
                  real costs can exceed those expectations fast.
                </p>
                <p className="text-gray-700 mb-4">
                  A pre-construction agreement includes time to prepare accurate cost estimates, value engineering options, 
                  and identify any high-cost variables. Without this step, project budgets tend to inflate mid-way, leading to stress and delays.
                </p>
                <p className="text-gray-700 mb-6">
                  Importantly, the pre-construction process provides a graphical representation of what's in your head—through drawings, 
                  sketches, or conceptual layouts. Nobody can accurately price something that doesn't yet exist. Estimating without 
                  defined plans is like bidding on a moving target.
                </p>
                <div className="bg-navy/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy mb-2">Benefits:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-navy mr-3 mt-1">•</span>
                      Build a detailed budget early
                    </li>
                    <li className="flex items-start">
                      <span className="text-navy mr-3 mt-1">•</span>
                      Translate vision into tangible drawings
                    </li>
                    <li className="flex items-start">
                      <span className="text-navy mr-3 mt-1">•</span>
                      Avoid surprises from undefined scopes
                    </li>
                  </ul>
                </div>
              </div>

              {/* Reason 3 */}
              <div className="bg-white border-l-4 border-coral p-8 rounded-r-xl shadow-lg">
                <h3 className="font-playfair text-2xl font-bold text-navy mb-4">
                  3. Design Revisions and Permit Delays
                </h3>
                <p className="text-gray-700 mb-4">
                  Skipping the pre-construction phase means jumping into design and permitting without coordination. 
                  When architectural plans or engineering needs shift mid-process, the project stalls.
                </p>
                <p className="text-gray-700 mb-4">
                  With a pre-construction agreement, the team has time to align designs with zoning requirements, 
                  structural feasibility, and homeowner goals. It creates a smoother path to permit approvals.
                </p>
                <p className="text-gray-700 mb-6">
                  Involving the contractor and design team from the get-go saves valuable time and money by allowing 
                  real-time feedback on drawings. This collaboration minimizes the number of drawing iterations and 
                  helps streamline decision-making.
                </p>
                <div className="bg-coral/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy mb-2">Benefits:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-coral mr-3 mt-1">•</span>
                      Coordinate with designers early
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-3 mt-1">•</span>
                      Identify zoning or structural red flags
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-3 mt-1">•</span>
                      Speed up the permitting process
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-3 mt-1">•</span>
                      Minimize drawing revisions with real-time feedback
                    </li>
                  </ul>
                </div>
              </div>

              {/* Reason 4 */}
              <div className="bg-white border-l-4 border-navy p-8 rounded-r-xl shadow-lg">
                <h3 className="font-playfair text-2xl font-bold text-navy mb-4">
                  4. Scheduling Setbacks and Subcontractor Conflicts
                </h3>
                <p className="text-gray-700 mb-4">
                  Construction timelines rely on precision. If the planning phase is rushed or skipped, you may run into 
                  availability issues with subcontractors, material delays, or last-minute schedule changes.
                </p>
                <p className="text-gray-700 mb-6">
                  Pre-construction agreements allow the contractor to reserve labor, schedule trades, and sequence the build properly. 
                  Without this planning, chaos often ensues on site.
                </p>
                <div className="bg-navy/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy mb-2">Benefits:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-navy mr-3 mt-1">•</span>
                      Secure the schedule before you start
                    </li>
                    <li className="flex items-start">
                      <span className="text-navy mr-3 mt-1">•</span>
                      Book reliable trades in advance
                    </li>
                    <li className="flex items-start">
                      <span className="text-navy mr-3 mt-1">•</span>
                      Sequence tasks to avoid delays
                    </li>
                  </ul>
                </div>
              </div>

              {/* Reason 5 */}
              <div className="bg-white border-l-4 border-coral p-8 rounded-r-xl shadow-lg">
                <h3 className="font-playfair text-2xl font-bold text-navy mb-4">
                  5. Legal and Liability Risks
                </h3>
                <p className="text-gray-700 mb-4">
                  In the absence of a pre-construction agreement, roles, responsibilities, and legal protections are unclear. 
                  If something goes wrong, both parties may end up in a dispute over what was originally promised.
                </p>
                <p className="text-gray-700 mb-6">
                  A well-drafted pre-construction agreement protects both sides by clearly stating deliverables, payment structure, 
                  intellectual property rights (like drawings), and exit options.
                </p>
                <div className="bg-coral/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy mb-2">Benefits:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-coral mr-3 mt-1">•</span>
                      Outline responsibilities in writing
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-3 mt-1">•</span>
                      Define ownership of designs and documents
                    </li>
                    <li className="flex items-start">
                      <span className="text-coral mr-3 mt-1">•</span>
                      Protect both client and contractor legally
                    </li>
                  </ul>
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-gradient-to-r from-navy to-navy-600 text-white p-8 rounded-xl">
                <h3 className="font-playfair text-2xl font-bold mb-4">Conclusion</h3>
                <p className="mb-4">
                  A pre-construction agreement isn't just red tape—it's your first layer of protection and organization. 
                  Whether you're a homeowner or a contractor, investing in this planning phase helps ensure your project 
                  stays on time, on budget, and on track.
                </p>
                <p className="mb-6">
                  At HJZ Construction, we believe the pre-construction process is where great projects are born. 
                  If you're planning a renovation, addition, or ADU, we'd love to guide you through this essential first step.
                </p>
                <div className="text-center">
                  <h4 className="font-semibold text-xl mb-4">Need Help Getting Started?</h4>
                  <p className="mb-6">
                    Contact us for a complimentary consultation and learn how our pre-construction services can save you time, money, and stress.
                  </p>
                  <Button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-coral hover:bg-coral-600 text-white px-8 py-3 rounded-full shadow-lg"
                  >
                    Schedule Your Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Guides;
