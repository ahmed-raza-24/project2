import {useNavigate} from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

  return (
    <div className='Home'>
        <h2>This is Home Page</h2>
        <button className='cta'
        onClick={()=>{
            navigate
        }}
    </div>
  )
}

export default Home