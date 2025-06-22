import Cards from './Cards';
import Eventos from './Eventos'
import './styles/body.css'

function Body() {
  return (
    <>
    <div className='body-container'>
    <Cards/>
    <Eventos/>
    </div>
    </>
  )
}

export default Body;