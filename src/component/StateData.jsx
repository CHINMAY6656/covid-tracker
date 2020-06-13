import React , { useState } from "react";
import { useEffectOnce } from "react-use";
import Table from "./parts/Table";
const axios = require("axios").default;

export default function StateData() {

    const [options , setOptions] = useState([]);

    const [search  , setsearch] = useState("");

    const [distData , setDistData] = useState([]);

    let optionList = []
    const [distInfo , setDistInfo] = useState([]);

    function setMe(event) {
        setsearch(event.target.value);
    }

    function searchDist() {
        for (let i = 0; i < distData.length; i++) {
            if (distData[i].statecode === search) {
                let distTemp = (
                    <Table dataToShow={distData[i].districtData} />
                )
                setDistInfo(distTemp);
            }
        }

    }

    useEffectOnce(
        () =>{
        axios.get('https://api.covid19india.org/data.json')
        .then(function (response) {
            for (let i = 0; i < response.data.statewise.length; i++) {
                let element = (<option key={i} value={response.data.statewise[i].statecode}>{response.data.statewise[i].state}</option>)
                optionList.push(element);
            }
            setOptions(optionList)
        })
         
        axios.get('https://api.covid19india.org/v2/state_district_wise.json')
        .then(function (response) {
            setDistData(response.data);
        })

        }
        
     , [])

    return(
        <div className="search">
            <select value={search} className="form-control select" onChange={setMe} name="state"id="state">
                {options}
            </select>
            <button type="submit" className="btn btn-primary" onClick={searchDist}>search</button>
            {distInfo}
        </div>
    )
}