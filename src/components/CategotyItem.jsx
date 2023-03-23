import { useNavigate } from 'react-router';

import { FaMobileAlt } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'

const CategoryItem = ({ item }) => {
   const navigate = useNavigate()

   const goToPaymentPage = () => {
      navigate(`/payment/${item.id}`, { state: item })
   }

   return (
      <div
         className="category-item"
         onClick={goToPaymentPage}
      >
         <div className='category-item__left'>
            <div className="category-item__img">
               <FaMobileAlt color='white' size={16} />
            </div>
            <p>{item.title}</p>
         </div>

         <div>
            <MdKeyboardArrowRight color='#333333' size={20} />
         </div>
      </div>
   );
}

export default CategoryItem;