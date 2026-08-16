import React from 'react';

function About(){
    return(
<div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p style={{fontSize:"15px"}}>I'm Shivam Bhatt, a Technical Architect in Bengaluru with 11+ years designing enterprise web apps, multi-tenant SaaS, and service-based systems. Hands-on across C#, ASP.NET Core, EF Core, SQL Server, React, and Angular, with a focus on solution architecture, HLD/LLD, microservices, caching, and Azure.</p>
                    <p style={{fontSize:"15px"}}>Currently architecting RackNap at Intimetec Visionsoft — a common-codebase product that ships as both license-driven on-prem and multi-tenant SaaS, covering CSP licensing, subscriptions, and automated provisioning for customers including Telecom Malaysia and ZNet. Earlier work includes financial batch processing at NAV Backoffice, backend on JLL Canopy, HARMAN quote systems, and HP printing/configuration products.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Solution Architecture</h3>
                    <p>HLD/LLD, microservices, and plug-and-play extraction from a primary Web API. Dual-deploy common codebase: license-driven on-prem and multi-tenant SaaS.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Full-Stack .NET &amp; Web</h3>
                    <p>Hands-on across C#, ASP.NET Core, EF Core, SQL Server, React, and Angular for enterprise web products.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Cloud &amp; Distributed Systems</h3>
                    <p>Azure (Functions, App Services, Service Bus, Blob, Key Vault), Redis, Docker, AKS, background services, and SignalR.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    );
}

export default About
