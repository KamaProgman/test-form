import useHttp from './http.hook';

const useService = () => {
   const { loading, error, request } = useHttp();
   const _apiBase = 'https://jsonplaceholder.typicode.com'

   const getPosts = async () => {
      const res = await request(`${_apiBase}/posts`)
      return res.data
   }

   const postPayment = async (data) => {
      const res = await request('https://jsonplaceholder.typicode.com/posts', null, 'POST', data)
      return res
   }

   return { loading, error, getPosts, postPayment }
}

export default useService;