import '../style/LogRegInput.css'

import { Link } from "react-router-dom";

function LogRegInput({
    value,
    setValue,
    inputType,
    title,
    description,
    imgName,
    placeholder
}){
    const imgUrl = `/NCA/${imgName}`

    const inputHandling = (e) => {
        setValue(e.target.value);
    }

    const buttonHandling = () => {
        setValue(1);
    }
    
    if(inputType === "title"){
        return(
            <>
                <h1 className='form-h1'>{title}</h1>
                <hr />
            </>
        );
    }

    if(inputType == "link"){
        return(
            <>
                <div className="form-container">
                    <Link to={title} className='input-link'><p>{description}</p></Link>
                </div>
            </>
        );
    }

    if(inputType == "checkbox"){
        return(
            <>
                <div className="form-container input-checkbox">
                    <input type="checkbox" id='inputCheckbox'/>
                    <label htmlFor="inputCheckbox">{description}</label>
                </div>
            </>
        );
    }

    if(inputType != "button"){
        return(
            <>
                <div className="input-container">
                    <div className="input-left">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <div className="input-right">
                        <div className="input-wrap">
                            <img src={imgUrl} alt="Image" />
                            <input type={inputType} placeholder={placeholder} onChange={(e) => inputHandling(e)}/>
                        </div>
                    </div>
                </div>
                <hr />
            </>
        );
    }

    return (
        <>
            <div className="form-container">
                <button className='input-button' onClick={() => buttonHandling}>{title}</button>
            </div>
        </>
    );
}

export default LogRegInput;