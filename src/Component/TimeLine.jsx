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
                        <div className="timeline-icon color-3">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>Senior-Software Developer at Intimetec(ITT) Visionsoft Pt ltd.<span> 2015-2019(November)</span></h2>
                          <p>I joined ITT as a Junior-Software Developer initially in Automation Testing team. My major part of the work in ITT has been into the field of Web Application Development, mostly backend side. I have been a part of team responsible for setting up architecture, database design and implementing business-oriented functionalities in back-end and front-end.</p>
                        </div>
                        <div className="timeline-label">
                          <h2>Assistant Manager at JLL.<span> 2019(November)-Till Date</span></h2>
                          <p>I joined JLL where my major part of the work has been into the field of Web Application Development, mostly backend side. My Current projects is based on Environmental Energy Sustainability practices, on a Real-Estate domain.</p>
                        </div>
                      </div>
                    </article>
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-4">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h2>Graduate from Kumaon Engineering college<span>2011-2015</span></h2>
                          <p>I pursued my graduation studies with major in E.C.E.(Electronics & Communication Engineering).</p>
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