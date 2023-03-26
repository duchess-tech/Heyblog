import { useState } from "react"
import { useParams } from "react-router-dom"

function Viewmore() {
const more=localStorage.getItem('news')
const [selectednews,setselectednews]=useState(more)




    return (
       <div className="vm1">

         
<div className="row case1 ">
            {/* <h1>jkhgf</h1> */}
            <div className="col-1"></div>
            <div className="col-6  d1">

                <div>

                </div>
            </div>
            <div className="col-4  d2"></div>
            <div className="col-1"></div>
            
         </div>
       </div>
    

    )
}
export default Viewmore