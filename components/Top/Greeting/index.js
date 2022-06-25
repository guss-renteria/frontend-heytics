import style from './style.module.css'

export default function Greeting() {
  return (
    <section className={ style.greeting }>
      <h1 className={ style.greeting__h1 }>¡Hola! Mac</h1>
      <p className={ style.greeting__p }>¿Qué vas a pedir hoy?</p>
    </section>
  )
}
