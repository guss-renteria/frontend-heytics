import style from './style.module.css'

export default function Nav() {
  return (
      <>
      <nav className={ style.nav }>
        <div className={ style.nav__item }>Restaurantes</div>
        <div className={ style.nav__item }>Cafeterías</div>
        <div className={ style.nav__item }>Hoteles</div>
        <div className={ style.nav__item }>Salud</div>
        <div className={ style.nav__item }>Bares</div>
        <div className={ style.nav__item }>Markets</div>
      </nav>
      <div className={ style.nav__front }></div>
      </>
  )
}
