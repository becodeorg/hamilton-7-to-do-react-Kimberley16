import React, { useState } from "react";
export default function Checkbox(){
    const InitialChecks = ["Learn React", "Be awesome"];
    const [checks, setChecks] = useState(InitialChecks);
    return (
        <ul>
            {checks.map((check) => (
                <li>
                    <input type="checkbox"/> {check}
                </li> 
            ))
            }       
            </ul>
)}       
            