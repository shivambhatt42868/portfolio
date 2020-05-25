import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './Component/About'
import Introduction from './Component/Introduction'
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
					<TimeLine></TimeLine>
          	</div>
      	</div>
      </div>
  );
}

export default App;
