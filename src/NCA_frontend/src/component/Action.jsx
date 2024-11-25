import PropTypes from "prop-types"
import { useState, useEffect } from "react";

import '../style/Action.css'

function Action(props){
    const [active, setActive] = useState(0);
    const imgColorUrl = `/NCA/${props.imgColorUrl}`;
    const imgProgressUrl = `/NCA/${props.imgProgressUrl}`;

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(() => Math.floor(Math.random() * props.actionTarget) + 1)
    }, [active]);

    function actionActiveHandling(){
        setActive(a => (1 - a));
    }

    return(
        <>
            {
                active === 0 ? 
                <div className="card-container card-non-active" onClick={actionActiveHandling} style={{backgroundImage: props.actionGradient}}>
                    <div className="card-left">
                        <h1>{props.actionName}</h1>
                    </div>
                    <div className="card-right">
                        <img src={imgColorUrl} alt="Action Img" />
                    </div>
                </div>
                :
                <div className="card-container card-active" style={{backgroundImage: props.actionGradient}}>
                    <div className="card-progress">
                        <h1>Progress</h1>
                    </div>
                    <div className="card-progress-bottom">
                        <div className="card-progress-img">
                            <div className="card-img-blank" style={{width:`${(progress * 100) / props.actionTarget}%`}}></div>
                            <div className="card-img-wrapper">
                                <img src={imgProgressUrl} alt="Img Progress"/>
                            </div>
                        </div>
                        <div className="card-progress-bar-outside">
                            <div className="card-progress-bar" style={{width:`${(progress * 100) / props.actionTarget}%`}}></div>
                        </div>
                    </div>
                    <div className="card-progress-information">
                        <div className="card-progress-desc">
                            <h1>{progress}km / {props.actionTarget}km</h1>
                        </div>
                        <div className="card-button">
                            <button onClick={actionActiveHandling}>0.1 Green Coin</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

Action.propTypes = {
    actionName: PropTypes.string,
    imgColorUrl: PropTypes.string,
    imgProgressUrl: PropTypes.string,
    actionTarget: PropTypes.number,
    actionGradient: PropTypes.string
}

export default Action;