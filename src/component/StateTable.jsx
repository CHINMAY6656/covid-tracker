import React , { useState } from "react";
import {useEffectOnce} from "react-use";
const axios = require("axios").default;


export default function StateTable() {

    const [data  , setData] = useState([]);

    const th = [];

    useEffectOnce ( () => {
        axios.get('https://api.covid19india.org/data.json')
        .then(function (response) {
            setData(response.data.statewise);
        })

        
    });
    
    for (let i = 1; i < data.length; i++) {

        let dataToShow = {
            deltaconfirmed : (data[i].deltaconfirmed === '0') ? "": (data[i].deltaconfirmed.slice(0,1) === "-" ? data[i].deltaconfirmed : ("+" + data[i].deltaconfirmed)),
             deltarecovered: (data[i].deltarecovered === '0') ? "": ("+" + data[i].deltarecovered),
             deltadeaths : (data[i].deltadeaths === '0') ? "" : ("+" + data[i].deltadeaths)
         }
        
        let element = (
            <tr key={i}>
                <td className="table-data state-name"><span>{data[i].state}</span></td>
                <td className="table-data">
                    <span className="red sub-text">{dataToShow.deltaconfirmed}</span>
                    <span className="main-text">{"   "+data[i].confirmed}</span>
                </td>
                <td className="table-data main-text">{data[i].active}</td>
                <td className="table-data">   
                    <span className="green sub-text">{dataToShow.deltarecovered}</span>
                    <span className="main-text">{"   "+data[i].recovered}</span>
                </td>
                <td className="table-data">
                    <span className="grey sub-text">{dataToShow.deltadeaths}</span>
                    <span className="main-text">{"   "+data[i].deaths}</span>
                </td>
            </tr>
        )
        th.push(element);
        
    }
    return(
        <div className="main-table">
            <table className="state-table">
                <thead>
                    <tr>
                    <th className="table-head">State</th>
                    <th className="table-head">Confirmed</th>
                    <th className="table-head">Active</th>
                    <th className="table-head">Recovered</th>
                    <th className="table-head">Deceased</th>
                    </tr>
                </thead>
                <tbody>
                    {th}
                </tbody>
            </table>
        </div>
    )
}