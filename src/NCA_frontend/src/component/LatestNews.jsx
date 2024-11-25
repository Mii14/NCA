import '../style/LatestNews.css'

function LatestNews(){

    return(
        <>
            <div className="latestNews-container">
                <h1>Latest News</h1>
                <div className="news-container">
                    <div className="news-info">
                        <div className="news-text">
                            <p>NCA Launches Innovative Program: Transform Your Eco Actions into Carbon Credits!</p>
                        </div>
                        <div className="news-date">
                            <p>15 Nov 2024</p>
                        </div>
                    </div>


                    <div className="news-info news-border">
                        <div className="news-text">
                            <p>Join the Green Revolution: NCA Empowers Individuals to Earn Rewards for Sustainable Living</p>
                        </div>
                        <div className="news-date">
                            <p>21 Nov 2024</p>
                        </div>
                    </div>


                    <div className="news-info">
                        <div className="news-text">
                            <p>Take Action for the Planet: NCA Introduces a New Way to Track and Reward Eco-Friendly Efforts!</p>
                        </div>
                        <div className="news-date">
                            <p>25 Nov 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LatestNews;