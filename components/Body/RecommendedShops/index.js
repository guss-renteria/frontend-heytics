import style from './style.module.css'

// TODO: cambiar para recibir por props
const data = [
  {
    name: 'Guarumo beer pub',
    timetable: 'de 7:00 am a 9:00 pm',
    starts: 4.5,
  },
  {
    name: 'Eolian Roof Top & BBQ',
    timetable: 'de 7:00 am a 9:00 pm',
    starts: 4.5,
  },
  {
    name: 'Papa Jhon\'s, Panamá',
    timetable: 'de 7:00 am a 9:00 pm',
    starts: 4.5,
  },
  {
    name: 'Por tu mala maña, Vía Argentina',
    timetable: 'de 7:00 am a 9:00 pm',
    starts: 4.5,
  },
  {
    name: 'Papa Jhon\'s, Panamá',
    timetable: 'de 7:00 am a 9:00 pm',
    starts: 4.5,
  },
  {
    name: 'Por tu mala maña, Vía Argentina',
    timetable: 'de 7:00 am a 9:00 pm',
    starts: 4.5,
  },
]

export default function RecommendedShops() {
  return (
    <section className={ style.recommended_shops }>
      <h1 className={ style.recommended_shops__h1 }>
        Comercios
        &nbsp;
        <span className={ style.recommended_shops__h1__span }>recomendados</span>
      </h1>
      <p className={ style.recommended_shops__p }>Disfruta de los mejores comercios</p>
      <div className={ style.recommended_shops__container }>
        <div className={ style.slide_img }>
          <img
            src='/images/ICON/desliza.svg'
            alt='slide'
          />
          <p>dezliza</p>
        </div>
        <div className={ style.card_container }>
          { 
            data.map( elem => (
              <div className={ style.card }>
                <div className={ style.card_img__container }>
                  <div className={ style.card_img__starts }>
                    <img
                      src='/images/ICON/Trazado 8512.svg'
                      alt='start'
                    />
                    { elem.starts }
                  </div>
                </div>
                <div className={ style.card_data }>
                  <div className={ style.card_data__logo }></div>
                  <div className={ style.card_data__info }>
                    <p className={ style.info_name }>{elem.name}</p>
                    <p className={ style.info_timetable }>
                      <img 
                        src='/images/ICON/Grupo 2981.svg'
                        alt='timer'
                        className={ style.info_timetable__img }
                      />
                      <b>Abierto:</b>
                      { elem.timetable }
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
