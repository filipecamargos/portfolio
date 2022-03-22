import cssClasses from "./Mobilebar.module.css"

const Mobilebar = (props) => {
    return (
        <div className={cssClasses.navbar}>
            <a href="#home" className={cssClasses.active}>Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
        </div>
    )
}

export default Mobilebar