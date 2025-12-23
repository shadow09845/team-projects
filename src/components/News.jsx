import './News.css'
import cofe from '../assets/cofe.png'
import cofe2 from '../assets/cofeik.png'
import cofe3 from '../assets/cofk.png'
function News() {
    return(
        <>
        <div className="orab">
            <h1>Update News</h1>
            <p>A cup of brewed coffee represents a contribution of up to 1.8 grams of fiber of the recommended.</p>
        </div> <br /> <br /> <br />
        <div className='otasi'>
        <div className='cardlar'>
            <div className='ff'>
                <img src={cofe} alt="" /> <br />
                <a href="">Coffe beans</a>
                <p>These advertising mottos are targeted to the 56% of coffee drinking consumers.</p>
                <a id='q'>Learn More</a>
            </div>
        </div>
        <div className='cardlar'>
            <div className='ff'>
                <img src={cofe2} alt="" /> <br />
                <a href="">Coffe beans</a>
                <p>These advertising mottos are targeted to the 56% of coffee drinking consumers.</p>
                <a id='q'>Learn More</a>
            </div>
        </div>
        <div className='cardlar'>
            <div className='ff'>
                <img src={cofe3} alt="" /> <br />
                <a href="">Coffe beans</a>
                <p>These advertising mottos are targeted to the 56% of coffee drinking consumers.</p>
                <a id='q'>Learn More</a>
            </div>
        </div>
        </div>
        </>
    )
}
export default News