import Carrousel from './Carrousel';
import Eventos from './Eventos'
import './styles/body.css'

function Body() {
  return (
    <>
    <div className='body-container'>
    <Carrousel/>
    <Eventos/>
    </div>
    </>
  )
}

export default Body;