import "./App.css";
import ReactWindow from "./app/components/ReactWindow";
import Layout from "./app/components/Layout";
import SideBar from './app/components/SideBar';
import { useState } from 'react';

function App() {
  const [record, setRecord] = useState(1000000);
  const [height, setHeight] = useState(500);

  const handleChange = (record, height) => {
    setRecord(record);
    setHeight(height);
  }

  return (
    <div className="App">
      <Layout sidebar={() => <SideBar record={record} height={height} onChange={handleChange} />} content={() => <ReactWindow record={record} height={height}/>}/>
    </div>
  );
}

export default App;
