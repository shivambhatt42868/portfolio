import React from 'react';

const TimeLine = () => {
    return (
        <div>
          <section className="colorlib-experience" data-section="timeline">
            <div className="colorlib-narrow-content">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                  <span className="heading-meta">highlights</span>
                  <h2 className="colorlib-heading animate-box">Timeline</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="timeline-centered">
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-1">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>Technical Architect at Intimetec Visionsoft Pvt. Ltd.<span> June 2025 – Present</span></h2>
                          <p>Architecting RackNap — Admin/Marketplace plus Identity, IntegrationHub, Catalog, Order, and Payment Gateway. Dual-deploy common codebase: license-driven on-prem and multi-tenant SaaS. Infra includes MySQL, Azure Service Bus/Queues, Redis, Docker, and AKS. Provide technical direction to 14 developers and 2 QA. IntegrationHub covers Microsoft, Wasabi, Acronis, Akamai, and ClearTax, bringing vendor onboarding from months to about 1–2 weeks via JSON-driven workflows. Named customers include Telecom Malaysia and ZNet.</p>
                        </div>
                      </div>
                    </article>
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-2">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>Tech Lead at NAV Backoffice<span> September 2022 – June 2025</span></h2>
                          <p>Financial processing reduced from 3–5 hours to about 30–45 minutes for around 150 files with 800+ records each, using backpressure to avoid OOM. Redis-backed custom queues for on-prem async batch work. Generic import for Excel, CSV, PDF, and text with full rollback and partial-success. Led about 5 developers and moved source control from TFS to Git.</p>
                        </div>
                      </div>
                    </article>
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-3">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>Module Lead at HARMAN<span> September 2021 – September 2022</span></h2>
                          <p>Internal quote management covering lifecycle, hierarchical reviews, and role-based notifications. Built REST APIs, reusable middleware, and centralized exception handling, with attribute-based validation and decorator-style patterns.</p>
                        </div>
                      </div>
                    </article>
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-4">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>Assistant Manager / Senior Software Developer at JLL<span> November 2019 – September 2021</span></h2>
                          <p>Canopy — a B2B energy and sustainability platform with customers including Facebook and Atlassian. Large-scale metering on SQL/RDBMS and NoSQL with indexing, background processing, and caching. Azure Blob for bill uploads and SignalR for support chat. Lean 3-member team.</p>
                        </div>
                      </div>
                    </article>
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-5">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>Senior Software Developer at Intimetec Visionsoft Pvt. Ltd.<span> August 2015 – November 2019</span></h2>
                          <p>HP Product Configurator and HP Contract Manager. Excel-driven formula engine: 1,000+ step ink-throughput calculations moved to runtime-configurable SQL rules. Applied Adapter, Unit of Work, and Generic Repository patterns.</p>
                        </div>
                      </div>
                    </article>
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-6">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>B.Tech. Electronics &amp; Communication Engineering<span> 2011 – July 2015</span></h2>
                          <p>B.Tech. in Electronics &amp; Communication Engineering from BTKIT Dwarahat, Uttarakhand (Kumaon Engineering College). Graduated July 2015.</p>
                        </div>
                      </div>
                    </article>
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-5">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>Primary and Higher Education <span>1999-2011</span></h2>
                          <p>I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths with 91 merit. During my time at school, I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p>
                        </div>
                      </div>
                    </article>
                    <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-none">
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
}

export default TimeLine;
