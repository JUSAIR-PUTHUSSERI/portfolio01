import myimg from '../../assets/img/myimg.jpg'
import './profile.css'
const Profile = () => {
  return (
    <div id='Profile' className='profile'>
        <div className="left">
             <div className="para">
                  <h2>Hai,&#x1F60A;</h2>
                <div className="flex gap-x-2">
                    <h2>I&apos;m</h2>
                    <h2 className='nameh2'>Jusair,</h2>
                </div>
                <p> a dedicated and passionate 
                    Full-Stack developer on a
                     perpetual journey of learning and
                      growth in the ever-evolving world
                      of web development. </p>
             </div>
        </div>
        <div className="image">
            <img src={myimg} alt="" className='myimg' />
        </div>
    </div>
  )
}

export default Profile
