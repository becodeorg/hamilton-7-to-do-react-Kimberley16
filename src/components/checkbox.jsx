import React, { useState } from "react";
export default function Checkbox(){
    const initialChecks = [{
      content: "Learn React",
      checked: false,
    },
    {
      content: "Be Awesome",
      checked: false,
    },
  ];
    const [checks, setChecks] = useState (initialChecks);
    const [checked, setChecked] = useState(false)
    // function checkModify(event, check) {
     
    //   console.log (checked)
    // }
    return (
        <ul>
            {checks.map((check) => (
                <li>
                   <input   type="checkbox"
                    checked={check.checked}
                    onChange={(check)}
                />
            <p> {check.content}</p>

                </li> 
            ))
            }       
            </ul>
)
          }



      
            