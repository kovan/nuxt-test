import { registerInterceptor } from 'axios-cached-dns-resolve'



export default async function ({ $axios }) {
  
  $axios.onRequest(config  => {
    registerInterceptor($axios)
  })
}

