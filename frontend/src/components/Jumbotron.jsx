import { Fragment } from "react"
import './Jumbotron.css'
import ActionButton from "./ActionButton"

const Jumbotron = () => {
    return(
        <Fragment> 
            <div className="imgcontainer">
                <div className="container-fluid">
                    <div className="row imgrow">
                        <h1 className="jumboh1">Estamos para cuidar de ti</h1>
                        <h6 className="jumboh6">tenemos planes a tu medida</h6>
                        <div className="buttondiv">
                            <ActionButton className='jumbobutton'/>
                        </div>
                    </div>
                </div>
            </div>  
        </Fragment>
    )
}

export default Jumbotron