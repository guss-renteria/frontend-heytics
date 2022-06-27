/* eslint-disable @next/next/no-img-element */
import style from './style.module.css'

export default function Top() {
  return (
    <section className={ style.categories }>
      <div>
        <div className={ style.category__img_container }>
          <img
            src='/images/CATEGORIAS/resta.png'
            alt='restaurante'
            className={ style.category__img }
          />
        </div>
        <h2 className={ style.category__h2 }>Restaurantes</h2>
      </div>
      <div>
        <div className={ style.category__img_container }>
          <img
            src='/images/CATEGORIAS/cafeteria.png'
            alt='cafeteria'
            className={ style.category__img }
          />
        </div>
        <h2 className={ style.category__h2 }>Cafeterías</h2>
      </div>
      <div>
        <div className={ style.category__img_container }>
          <img
            src='/images/CATEGORIAS/hotel.png'
            alt='hotel'
            className={ style.category__img }
          />
        </div>
        <h2 className={ style.category__h2 }>Hoteles</h2>
      </div>
      <div>
        <div className={ style.category__img_container }>
          <img
            src='/images/CATEGORIAS/salud.png'
            alt='salud'
            className={ style.category__img_hearth }
          />
        </div>
        <h2 className={ style.category__h2 }>Salud</h2>
      </div>
      <div>
        <div className={ style.category__img_container }>
          <img
            src='/images/CATEGORIAS/bares.png'
            alt='bares'
            className={ style.category__img }
          />
        </div>
        <h2 className={ style.category__h2 }>Bares</h2>
      </div>
      <div>
        <div className={ style.category__img_container }>
          <img
            src='/images/CATEGORIAS/Grupo 6093.png'
            alt='markets'
            className={ style.category__img }
          />
        </div>
        <h2 className={ style.category__h2 }>Markets</h2>
      </div>
    </section>
  )
}
