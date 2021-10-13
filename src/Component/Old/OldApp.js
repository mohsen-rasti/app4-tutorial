import React from 'react';
import Header from './Component/Header';

import ApprovalCard from './Component/ApprovalCard';
function App(props) {
  return (
    <div className="ui container comments">

      <ApprovalCard>
        <Header author="Ali Rahmanoof" Time="yesterday at 4:45" />
      </ApprovalCard>
      <ApprovalCard>
        <Header author="mohammad saaid azad" Time="today at 1:66" />


      </ApprovalCard>
      <ApprovalCard>

        <Header />

      </ApprovalCard>
    </div>

  );
}

export default App;
