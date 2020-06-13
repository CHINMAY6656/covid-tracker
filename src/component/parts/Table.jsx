import React, { useState , useEffect } from "react";

export default function Table(props) {
    
    const [content  , setContent] = useState();
    useEffect(() => {
        let temp = []
        for (let i = 0; i < props.dataToShow.length; i++) {

            
            let dataToShow = {
                deltaconfirmed : (props.dataToShow[i].delta.confirmed === 0) ? "": ( props.dataToShow[i].delta.confirmed < 0 ? props.dataToShow[i].delta.confirmed :  "+" + props.dataToShow[i].delta.confirmed),
                deltarecovered: (props.dataToShow[i].delta.recovered === 0) ? "": ( props.dataToShow[i].delta.recovered < 0 ? props.dataToShow[i].delta.recovered : "+" + props.dataToShow[i].delta.recovered),
                deltadeaths : (props.dataToShow[i].delta.deceased === 0) ? "" : ( props.dataToShow[i].delta.deceased < 0 ? props.dataToShow[i].delta.deceased : "+" + props.dataToShow[i].delta.deceased)
            }
            
            let element = (
                <tr key={i}>
                    <td className="table-data state-name"><span>{props.dataToShow[i].district}</span></td>
                    <td className="table-data">
                        <span className="sub-text red">{" " + dataToShow.deltaconfirmed}</span>
                        <span className="main-text">{"   "+props.dataToShow[i].confirmed}</span>
                    </td>
                    <td className="table-data main-text">{props.dataToShow[i].active}</td>
                    <td className="table-data">   
                    <span className="sub-text green">{" " + dataToShow.deltarecovered}</span>
                        <span className="main-text">{"   "+props.dataToShow[i].recovered}</span>
                    </td>
                    <td className="table-data">
                    <span className="sub-text grey">{" " + dataToShow.deltadeaths}</span>

                        <span className="main-text">{"   "+props.dataToShow[i].deceased}</span>
                    </td>
                </tr>)
            temp.push(element)
        }
        setContent(temp)
    } , [props])
            


    return(
        <div>
            
        <div className="main-table">
            <table className="state-table">
                <thead>
                    <tr>
                    <th className="table-head">District</th>
                    <th className="table-head">Confirmed</th>
                    <th className="table-head">Active</th>
                    <th className="table-head">Recovered</th>
                    <th className="table-head">Deceased</th>
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
        </div>
        </div>
    )
}