import '../style/Supported.css'
import logoICP from '../assets/supported/logo-ICP.png'


function Supported(){

    return(
        <>
            <div className="supported-container">
                <h2>Supported in Web3 Using</h2>
                <div className="ICP">
                    <img src={logoICP} alt="Logo ICP" />
                    <h1>Internet Computer</h1>
                </div>
            </div>
        </>
    );
}

export default Supported