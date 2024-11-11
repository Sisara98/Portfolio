import './scrolldown.css'

const ScrollDown = () => {
  return (
    <div className="scroll__down">
        <a href="/Skill" className="mouse__wrapper"> {/* Link to the skills section */}
            <span className="home__scroll-name">Scroll Down</span>
            <span className="mouse">
                <span className="wheel"></span>
            </span>
        </a>
    </div>
  )
}

export default ScrollDown;
