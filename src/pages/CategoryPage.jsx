import { useEffect, useState } from 'react';
import useService from '../hooks/service.hook';

import CategoryItem from '../components/CategotyItem';

const CategoryPage = () => {
   const [data, setData] = useState([]);
   const { getPosts, loading, error } = useService()

   useEffect(() => {
      getPosts().then(res => setData(res.slice(0, 10)))
   }, []);


   if (loading) {
      return <div className="loader">Загрузка...</div>
   }
   if (error) {
      return <div className="error">Ошибка <br /> (Попытайтесь позже.)</div>
   }
   return (
      <section className="category-container">
         <h2 className='title'>Оплата услуг</h2>

         <div className="category-box">
            {
               data?.map((item) => <CategoryItem key={item.id} item={item} />)
            }
         </div>

      </section>
   );
}

export default CategoryPage;
