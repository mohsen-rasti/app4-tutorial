import React from 'react';
import Header from './Component/Header';

function App(props) {
  return (
<>
<Header author="Ali Rahmanoof" Time="yesterday at 4:45"/>
<Header author="mohammad saaid azad" Time="today at 1:66"/>
<Header />
<button className="ui primary button ">send message</button>
</>
  );
}

export default App;
