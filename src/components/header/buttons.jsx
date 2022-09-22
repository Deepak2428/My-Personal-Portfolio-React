import React from "react";
import CV from "../../assests/Resume.pdf";
function Buttons()
{
    return (<div className="button">
        <a className="btn" href={CV}>Download Cv</a>
        <a className="btn primary" href="#">Let's talk</a>
       
    </div>
    )
}
export default Buttons