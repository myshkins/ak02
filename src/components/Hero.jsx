import './Hero.css'
import Selfie from '../assets/pixel-selfie.png'
const Hero = (props) => {
    return (
        <div className='hero'>
            <img className='selfie' src={Selfie}/>
            <div className='hero-text'>
                Hey, I'm Alex Krenitsky, a NYC public school teacher turned 
                software developer. As much as I loved teaching, I found that I 
                can have a much greater impact on the world as a software 
                engineer. Here you can find a collection of projects that I've
                created. I get a lot of joy out of making new things and 
                learning new things, and I'm continuously looking to learn more.
                So let me know if you like anything that you see! Click on the 
                links below to see the apps where they are hosted.
            </div>
        {props.children}
        </div>
    )
}

export default Hero