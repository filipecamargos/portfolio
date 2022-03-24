import cssClasses from "./Mobilebar.module.css"

const Mobilebar = (props) => {
    return (
        <div className={cssClasses.navbar}>
            <a href="#home" onClick={props.onHomeClick}><i class="fa fa-home" aria-hidden="true"></i></a>
            <a href="#about" className={props.contentDisplay === 'About' ? cssClasses.active : ''} onClick={props.onAboutClick}>
            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
            </a>
            <a href="#projects" className={props.contentDisplay === 'Projects' ? cssClasses.active : ''} onClick={props.onProjectClick}>
            <i class="fa fa-code" aria-hidden="true"></i>
            </a>
            <a href="#experience" className={props.contentDisplay === 'Experience' ? cssClasses.active : ''} onClick={props.onExperienceClick}>
            <i class="fa fa-briefcase" aria-hidden="true"></i>
            </a>

        </div>
    )
}

export default Mobilebar