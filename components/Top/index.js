import style from './style.module.css'

export default function Top() {
  return (
    <div className={ style.top } >
      <button className={ style.button_send_to }>
        <img
          src='/images/ICON/Enviar a.svg'
          alt='enviar a'
          className={ style.img_send_to }
        />
        <span className={ style.button_span }><b>Enviar a: </b> Trabajo, Plaza Brazil aqui va mas pero lo escondo</span>
        <img
          src='/images/ICON/Icon ionic-ios-arrow-forward.svg'
          alt='enviar a'
          className={ style.img_send_to_arrow }
        />
      </button>

      <form className={ style.form_container } action='' onSubmit={ () => e.preventDefault() }>
        <input type='text' className={ style.input } placeholder='Buscar comercios'/>

        <img
          src='/images/ICON/ICON-busc.svg'
          alt='search'
          className={ style.img_search_placeholder }
        />

        <button className={ style.button_search }>
          <img
            src='/images/ICON/ICON-busc.svg'
            alt='search'
            className={ style.img_search }
          />
        </button>
      </form>

      <section className={ style.greeting }>
        <h1 className={ style.greeting__h1 }>¡Hola! Mac</h1>
        <p className={ style.greeting__p }>¿Qué vas a pedir hoy?</p>
      </section>

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
    </div>
  )
}
