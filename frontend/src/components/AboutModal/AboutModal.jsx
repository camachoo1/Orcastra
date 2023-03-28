import { useContext } from "react"
import { ModalContext } from "../Splash/Splash"
import { Modal } from "../../context/modal"
import './AboutModal.css'

import profilepic from "../../assets/edbeanis.jpeg"

import danielHeadshot from "../../assets/daniel-headshot.png"
import linkedin from "../../assets/linkedincrop.png"
import github from "../../assets/github.png"
import portfolio from "../../assets/user-icon.png"
import { padding } from "@mui/system"

export default function AboutModal() {

    const { showAboutModal, setShowAboutModal } = useContext(ModalContext)

    return (
        <>
            {showAboutModal && (
                <Modal onClose={() => setShowAboutModal(false)}>
                    <div className="modal-background" style={{ width: '1300px', height: '900px' }}>
                        <button className="modal-close-button" onClick={() => setShowAboutModal(false)}>&#10005;</button>
                        <div className="about-grid">
                            <div className="about-grid-item">
                                <div className="agi-info">
                                    <img src={danielHeadshot}></img>
                                    <div className="agi-header">
                                        <h1>Daniel Liem</h1>
                                        <h2>Front End Lead</h2>
                                        <div className="agi-contact">
                                            <a href="https://github.com/danielliem49" target="_blank" rel="noopener noreferrer" style={{ filter: 'invert(1)' }}>
                                                <img src={github} alt="Github Link" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/danielliem49/" target="_blank" rel="noopener noreferrer" style={{ filter: 'invert(1)' }} >
                                                <img src={linkedin} alt="LinkedIn Link" />
                                            </a>
                                            <a href="https://danielliem49.github.io/" target="_blank" rel="noopener noreferrer">
                                                <img src={portfolio} alt="Portfolio Link" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="agi-description">About yourself or project duties go here? About yourself or project duties go here? About yourself or project duties go here? About yourself or project duties go here? About yourself or project duties go here? About yourself or project duties go here? About yourself or project duties go here?</div>
                            </div>

                            <div className="about-grid-item">
                                <div className="agi-info">
                                    <img src={profilepic}></img>
                                    <div className="agi-header">
                                        <h1>Edward Ying</h1>
                                        <h2>Front End Lead</h2>
                                        <div className="agi-contact">
                                            <a href="https://github.com/danielliem49" target="_blank" rel="noopener noreferrer" style={{ filter: 'invert(1)' }}>
                                                <img src={github} alt="Github Link" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/danielliem49/" target="_blank" rel="noopener noreferrer" style={{ filter: 'invert(1)' }} >
                                                <img src={linkedin} alt="LinkedIn Link" />
                                            </a>
                                            <a href="https://danielliem49.github.io/" target="_blank" rel="noopener noreferrer">
                                                <img src={portfolio} alt="Portfolio Link" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="agi-description">About yourself or project duties go here? About yourself or project duties go here? About yourself or project duties go here? About yourself or project duties go here? About yourself or project duties go here? About yourself or project duties go here? About yourself or project duties go here?</div>
                            </div>

                            <div className="about-grid-item">
                                <div className="agi-info">
                                    <img src={profilepic}></img>
                                    <div className="agi-header">
                                        <h1>Omar Camacho</h1>
                                        <h2>Front End Lead</h2>
                                        <div className="agi-contact">
                                            <a href="https://github.com/danielliem49" target="_blank" rel="noopener noreferrer" style={{ filter: 'invert(1)' }}>
                                                <img src={github} alt="Github Link" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/danielliem49/" target="_blank" rel="noopener noreferrer" style={{ filter: 'invert(1)' }} >
                                                <img src={linkedin} alt="LinkedIn Link" />
                                            </a>
                                            <a href="https://danielliem49.github.io/" target="_blank" rel="noopener noreferrer">
                                                <img src={portfolio} alt="Portfolio Link" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="agi-description">About yourself or project duties go here? About yourself or project duties go here? About yourself or project duties go here? About yourself or project duties go here? About yourself or project duties go here? About yourself or project duties go here? About yourself or project duties go here?</div>
                            </div>

                            <div className="about-grid-item">
                                <div className="agi-info">
                                    <img src={profilepic}></img>
                                    <div className="agi-header">
                                        <h1>Stephen Wong</h1>
                                        <h2>Front End Lead</h2>
                                        <div className="agi-contact">
                                            <a href="https://github.com/danielliem49" target="_blank" rel="noopener noreferrer" style={{ filter: 'invert(1)' }}>
                                                <img src={github} alt="Github Link" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/danielliem49/" target="_blank" rel="noopener noreferrer" style={{ filter: 'invert(1)' }} >
                                                <img src={linkedin} alt="LinkedIn Link" />
                                            </a>
                                            <a href="https://danielliem49.github.io/" target="_blank" rel="noopener noreferrer">
                                                <img src={portfolio} alt="Portfolio Link" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="agi-description">About yourself or project duties go here? About yourself or project duties go here? About yourself or project duties go here? About yourself or project duties go here? About yourself or project duties go here? About yourself or project duties go here? About yourself or project duties go here?</div>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}