import React from 'react';

const SideBar = () => {
        return (
          <div>
            <div>
              <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
              <aside id="colorlib-aside" className="border js-fullheight">
                <div className="text-center">
                  <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
                  <h1 id="colorlib-logo"><a href="index.html">Shivam Bhatt</a></h1>
                  <span className="email"><i className="icon-mail"></i> shivambhatt42868@gmail.com</span>
                </div>
                <nav id="colorlib-main-menu" role="navigation" className="navbar">
                  <div id="navbar" className="collapse">
                    <ul>
                      <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                      <li><a href="#about" data-nav-section="about">About</a></li>
                      {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                      <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                      <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                    </ul>
                  </div>
                </nav>
                <nav id="">
                  <ul>
                    <li><a href="https://www.facebook.com/shivam.bhatt.378/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                    {/* <li><a href="https://twitter.com/ddbarochiya" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li> */}
                    <li><a href="https://www.instagram.com/5hivam_bhatt/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                    <li><a href="https://www.linkedin.com/in/shivam-bhatt-041b45107/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                    <li><a href="https://github.com/shivambhatt42868" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                    {/* <li><a href="https://medium.com/@dhruv.barochia34788" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li> */}
                  </ul>
                </nav>
                <div className="colorlib-footer">
                  <p><small>
                      Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
                      Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
                  </small></p>
                  <p><small>
                    Something coming soon !!
                  </small></p>
                </div>
              </aside>
            </div>
          </div>
        );
}

export default SideBar;