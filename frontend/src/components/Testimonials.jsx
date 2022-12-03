import { Fragment } from "react"
import './Testimonials.css'

const Testimonials = () => {
    return(
        <Fragment>
            <div className="container-fluid">
            <h1 className="testheader">Lo que dicen nuestros pacientes</h1>
                <div className="row justify-content-center testrow">
                    <div className="col-lg-3">
                        <div className="testdiv">
                            <div className="avatardiv">
                            </div>
                            <p className="testp">La atención fue muy dedicada desde un principio. 
                                Siempre se tomaron el tiempo en las sesiones, que no eran las típicas de una hora de duración. 
                                Mi proceso de alta fue rápido y me sentí acompañado.
                             <h6 className="testname">Tania Rojas</h6> 
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="testdiv">
                            <div className="avatardiv2">
                            </div>
                            <p className="testp">La atención fue muy dedicada desde un principio. 
                                Siempre se tomaron el tiempo en las sesiones, que no eran las típicas de una hora de duración. 
                                Mi proceso de alta fue rápido y me sentí acompañado.
                             <h6 className="testname">Carlos Cáceres </h6> 
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="testdiv">
                            <div className="avatardiv3">
                            </div>
                            <p className="testp">La atención fue muy dedicada desde un principio. 
                                Siempre se tomaron el tiempo en las sesiones, que no eran las típicas de una hora de duración. 
                                Mi proceso de alta fue rápido y me sentí acompañado.
                             <h6 className="testname">Isabel Moya</h6> 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Testimonials