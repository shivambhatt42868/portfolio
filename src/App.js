import React from 'react';
import './App.css';
import About from './Component/About'
import Introduction from './Component/Introduction'
import Project from './Component/Project';
import TimeLine from './Component/TimeLine';
import SideBar from './Component/SideBar';

function App() {
  return (
    <div id="colorlib-page">
        <div id="container-wrap">
         	<SideBar></SideBar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Project></Project>
					<TimeLine></TimeLine>
          	</div>
      	</div>
      </div>
  );
}

export default App;
