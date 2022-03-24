import cssClasses from "./Mobilebar.module.css"

const Mobilebar = (props) => {
    return (
        <div className={cssClasses.navbar}>
            <a href="/"><i class="fa fa-home" aria-hidden="true"></i></a>
            <a href="#about" className={props.contentDisplay === 'About' ? cssClasses.active : ''} onClick={props.onAboutClick}>
                About
            </a>
            <a href="#projects" className={props.contentDisplay === 'Projects' ? cssClasses.active : ''} onClick={props.onProjectClick}>
                Projects
            </a>
            <a href="#experience" className={props.contentDisplay === 'Experience' ? cssClasses.active : ''} onClick={props.onExperienceClick}>
                Experience
            </a>
        </div>
    )
}

export default Mobilebar