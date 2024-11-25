import PropTypes from 'prop-types'

import '../style/HomeCard.css'

function HomeCard(props){
    let imgUrl = props.imgUrl;

    if(imgUrl !== "#"){
        imgUrl = `/NCA/${props.imgUrl}`;
    }

    return(
        <>
            <a href={props.clickUrl} className="homeCard-card-container">
                <div className="homeCard-left">
                    <p>{props.text1}</p>
                    <h2>{props.text2}</h2>
                    <p>{props.text3}</p>
                </div>

                <div className="homeCard-right">
                    <img src={imgUrl} alt="Card Image" />
                </div>
            </a>
        </>
    );
}

HomeCard.propTypes = {
    text1: PropTypes.string,
    text2: PropTypes.string,
    text3: PropTypes.string,
    clickUrl: PropTypes.string,
    imgUrl: PropTypes.string
}

export default HomeCard;