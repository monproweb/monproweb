/* eslint-disable import/no-anonymous-default-export */
export default {
 onUpdate: (registration: { unregister: () => Promise<any> }) => {
   registration.unregister().then(() => {
   window.location.reload()
 })
},
onSuccess: (registration: any) => {
  console.info('service worker on success state')
  console.log(registration)
 },
}
