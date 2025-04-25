
import { useSelector } from 'react-redux'
import './AboutPage.css'

function AboutPage () {
const {theme} = useSelector((store) => store.global)
    return (
        <div className="about">
        <div className="container">
            <div className={`aboutInfo ${theme}`}>
<h2>about us:</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate quia corrupti adipisci autem soluta eveniet assumenda, eligendi nostrum dolorum sed error ex harum culpa veniam aliquid recusandae, nesciunt magnam.
Fugit pariatur repellendus ipsam quae provident expedita veniam porro reprehenderit optio a animi, minus voluptas aliquid molestiae laboriosam, sunt distinctio aperiam placeat maiores quam cum excepturi deserunt eius. Laborum, nesciunt?
Beatae nemo vero voluptatum eaque quis, id veniam? Excepturi, quibusdam? Debitis saepe repellendus adipisci aut sed, similique blanditiis doloribus provident fugiat, sequi modi vitae dolore dolorum odit ab laborum optio.
Voluptate harum accusantium nihil, sit ipsum ea in error ratione ullam, quo minus alias non ex similique neque consequatur animi atque? Nemo dolorem tempora ad ut at, nesciunt voluptatem voluptatum!
</p>
            </div>
        </div>
       </div>
    )
}

export default AboutPage