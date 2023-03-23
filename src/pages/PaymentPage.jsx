import { useForm } from "react-hook-form";
import useService from "../hooks/service.hook";
import { useLocation, useNavigate } from "react-router";
import { BsArrowLeft } from "react-icons/bs"

const PaymentPage = () => {
   const { postPayment, loading, error } = useService()
   const { register, handleSubmit, formState: { errors }, reset } = useForm()
   const { state } = useLocation()
   const navigate = useNavigate()

   const onSubmit = (data) => {
      postPayment(data).then(res => {
         console.log(res);
         res.status === 200 || res.status === 201 ? reset() : console.log();
      })
   }

   if (loading) {
      return <div className="loader">Загрузка...</div>
   }
   if (error) {
      return <div className="error">Ошибка <br /> (Попытайтесь позже.)</div>
   }
   return (
      <section className="payment-container">
         <div className="payment-header">
            <button onClick={() => navigate(-1)}>
               <BsArrowLeft size={24} color='#777777' />
            </button>
            <h2>{state.title}</h2>
         </div>

         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="payment-content">
               <div className="payment-box">
                  <div className="overview-block">
                     <img src="https://freepngimg.com/thumb/energy/141790-energy-symbol-free-transparent-image-hq.png" alt="icon" />
                     <div>
                        <p className="title">{state.title.slice(0, 15)}</p>
                        <p className="body">{state.body.slice(0, 20)}</p>
                     </div>
                  </div>

                  <div className="form-block">
                     <div>
                        <select {...register('region', { required: 'Необходимо выбрать!' })}>
                           <option value="">Регион</option>
                           <option value="US">Ташкент</option>
                           <option value="CA">Самарканд</option>
                           <option value="FR">Бухара</option>
                        </select>
                        <p>{errors.region?.message}</p>
                     </div>
                     <div>
                        <select {...register('destrict', { required: 'Необходимо выбрать!' })}>
                           <option value="">РЭС</option>
                           <option value="26280">26280</option>
                           <option value="36380">36380</option>
                           <option value="46480">46480</option>
                        </select>
                        <p>{errors.destrict?.message}</p>
                     </div>
                     <div>
                        <select {...register('service', { required: 'Необходимо выбрать!' })}>
                           <option value="electricity">За электроэнергию</option>
                        </select>
                        <p>{errors.service?.message}</p>
                     </div>
                     <div>
                        <input
                           type='number'
                           {...register('personalNumber', {
                              required: 'Необходимо заполнить!',
                           })}
                           placeholder="Лицевой N" />
                        <p>{errors.personalNumber?.message}</p>
                     </div>
                  </div>
               </div>
               <button className="btn-send">Продолжить</button>
            </div>
         </form>
      </section >
   );
}

export default PaymentPage;