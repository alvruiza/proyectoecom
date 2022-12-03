import { Fragment } from "react"
import './Story.css'

const Story = () => {
    return(
        <Fragment>
            <div className="container-fluid storycontainer">
                <div className="row justify-content-center storyrow">
                    <div className="col-lg-5 storycol">
                        <h2 className="storyh4">Te ayudamos a cuidar de los tuyos.</h2>
                        <p className="storyp">Cuado cuidas tu salud mental también cuidas de tu familia, tu entorno y a quienes más quieres.
                        En NB Salud mental tenemos una metodología propia ampliamente probada con cientos de pacientes. Nuestros resultados hablan por sí solos.
                        </p>
                    </div>
                    <div className="col-lg-5 storycol">  
                    </div>
                </div>
            </div>
        </Fragment>
        )
}

export default Story