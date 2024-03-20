import spinner from "../../src/assets/svg/spinner.svg"
import "./Spinner.css"

function Spinner(){
return (
    <div className="spinner-wrapper">
        <div>
            <img src={spinner} alt="Loading...." className="spinner"/>
        </div>
    </div>
)
}

export default Spinner;
