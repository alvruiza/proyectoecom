import { Fragment } from "react"
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import './FeaturesBox.css'

const FeaturesBox = () => {
    return(
        <Fragment>
            <div className="container-fluid iconcontainer">
                <div className="row justify-content-center iconsrow">
                    <div className="col-lg-4 iconscol">
                        <div className="icondiv">
                            <AddToQueueIcon className="pcicon" sx={{ fontSize: 60 }}/>
                            <div className="h6div">
                                <h6 className="iconh6">Pioneros en Telemedicina</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 iconscol">
                        <div className="icondiv">
                            <SupervisorAccountOutlinedIcon className="pcicon" sx={{ fontSize: 60 }}/>
                            <div className="h6div">
                                <h6 className="iconh6">Planes Personalizados</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 iconscol">
                        <div className="icondiv">
                            <SchoolOutlinedIcon className="pcicon" sx={{ fontSize: 60 }}/>
                            <div className="h6div">
                                <h6 className="iconh6">10+ Cursos online</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default FeaturesBox