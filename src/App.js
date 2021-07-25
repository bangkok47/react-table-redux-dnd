import React from 'react';

import Table from './components/Table/Table';
import Header from './components/Header/Header';

function App() {
  const [modalActive, setModalActive] = React.useState(false);

  const modalHandler = () => {
    setModalActive(!modalActive);
  };

  return (
    <div className="wrapper">
      <Header modalHandler={modalHandler} />
      <Table modalActive={modalActive} setModalActive={setModalActive} />
    </div>
  );
}

export default App;
