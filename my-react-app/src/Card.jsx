import profilePic from './assets/profilepic.jpg'

function Card() {

    return(

        <div className="card">
            <img className="cardImage" src={profilePic} alt="My github profile" />
            <h2 className='cardTitle'>She</h2>
            <p className='cardText'>local cutie :3</p>
        </div>

    );

}  

export default Card