import React, { useState , useEffect } from "react";
import Label from "./component/parts/Label";
import StateTable from "./component/StateTable";
import Test from "./component/Test";
import StateData from "./component/StateData";
const axios = require("axios").default;

export default function Home(props) {
  const [data, setData] = useState({
    deltaconfirmed : "0",
    deltadeaths: "0",
    deltarecovered: "0"
  });
  useEffect(()=>{
   axios.get("https://api.covid19india.org/data.json").then(function(response) {
    setData(response.data.statewise[0]);
    return;
  });
} , []);

  return (
    <div>
      <div className="left">
        <div>
          <h1 className="header">COVID-19 TRACKER</h1>
          <h1 className="india"><span style={{color:'orange'}}>IN</span><span style={{color:"#fff" , WebkitTextStrokeColor:"blue"  , WebkitTextStrokeWidth:"0.75px"}}>D</span><span style={{color:"green"}}>IA</span></h1>
        </div>
      <div className="Label-main ">
      <Label
        name="CONFIRMED"
        className="red"
        total={data.confirmed}
        delta={
        data.deltaconfirmed.slice(0,1) === '-' ? (data.deltaconfirmed) : "+"+(data.deltaconfirmed)
      }
      />
      <Label name="ACTIVE" className="blue" total={data.active} delta="" />
      <Label
        name="RECOVERED"
        className="green"
        total={data.recovered}
        delta={
          data.deltarecovered.slice(0,1) === '-' ? (data.deltarecovered) : "+"+(data.deltarecovered)
        }
      />
      <Label
        name="DECEASED"
        className="grey"
        total={data.deaths}
        delta={
          data.deltadeaths.slice(0,1) === '-' ? (data.deltadeaths) : "+"+(data.deltadeaths)
        }
      />
      </div>
      <div >
        <Test />
      </div>
      <div >
        <StateData />
      </div>
      
      </div>
      <div className="right">
        <StateTable />
      </div>
    </div>
  );
}
