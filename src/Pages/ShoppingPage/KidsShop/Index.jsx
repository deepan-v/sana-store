

import { useCustom } from '../../../ContextApi/ContextApi'
import KidShop from './KidShop';

const KidsProd = () => {
  
  let{Products} = useCustom()
  let {KidDress} = Products

  return (
    <div >
      <div className='ProductCartContainer'>
         {KidDress.map((states)=>{
       return(
         <div key={states.id}><KidShop {...states}/></div>
       )
      })}
      </div>
    </div>
  )
}

export default KidsProd