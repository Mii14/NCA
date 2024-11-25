import '../style/Footer.css'
import linkedinImg from '../assets/footer/linkedin.png'
import githubImg from '../assets/footer/github.png'

function Footer(){
    return(
        <>
            <div className="footer-container">
                <div className="footer-upper">
                    <p>Created for</p>
                    <h3>Codefest Hackathon 8.0 2024</h3>
                </div>

                <div className="footer-lower">
                    <p>Developed by Sigma:</p>
                    <div className="footer-sigma">
                        <div className="sigma-container">
                            <h3>Kevin Fujianto</h3>
                            <div className="sigma-info">
                                <a href="https://github.com/KevinFu12" target='_blank'>
                                    <img src={githubImg} alt="Github Img"/>
                                    <p>KevinFu12</p>
                                </a>
                            </div>
                            <div className="sigma-info">
                                <a href="https://www.linkedin.com/in/kevin-fujianto-6244a1292/" target='_blank'>
                                    <img src={linkedinImg} alt="Linkedin Img"/>
                                    <p>Kevin Fujianto</p>
                                </a>
                            </div>
                        </div>


                        <div className="sigma-container">
                            <h3>Fahimsyach Lokanta</h3>
                            <div className="sigma-info">
                                <a href="https://github.com/VytoraSNMz" target='_blank'>
                                    <img src={githubImg} alt="Github Img"/>
                                    <p>VytoraSNMz</p>
                                </a>
                            </div>
                            <div className="sigma-info">
                                <a href="https://www.linkedin.com/in/fahimsyach-lokanta/" target='_blank'>
                                    <img src={linkedinImg} alt="Linkedin Img"/>
                                    <p>Faimsyach Lokanta</p>
                                </a>
                            </div>
                        </div>


                        <div className="sigma-container">
                            <h3>Niko Sutiono</h3>
                            <div className="sigma-info">
                                <a href="https://github.com/NS2006" target='_blank'>
                                    <img src={githubImg} alt="Github Img"/>
                                    <p>NS2006</p>
                                </a>
                            </div>
                            <div className="sigma-info">
                                <a href="https://www.linkedin.com/in/niko-sutiono-2965a12a2/" target='_blank'>
                                    <img src={linkedinImg} alt="Linkedin Img"/>
                                    <p>Niko Sutiono</p>
                                </a>
                            </div>
                        </div>


                        <div className="sigma-container">
                            <h3>Wiratama Jesaya S.</h3>
                            <div className="sigma-info">
                                <a href="https://github.com/Mii14" target='_blank'>
                                    <img src={githubImg} alt="Github Img"/>
                                    <p>Mii14</p>
                                </a>
                            </div>
                            <div className="sigma-info">
                                <a href="https://www.linkedin.com/in/wiratama-suwandi-a865b8187/" target='_blank'>
                                    <img src={linkedinImg} alt="Linkedin Img"/>
                                    <p>Wiratama Suwandi</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;