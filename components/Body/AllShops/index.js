import style from './style.module.css'

// TODO: cambiar para recibir por props
const data = [
  {
    status: true,
    name: 'Guarumo beer pub, Albrook Panamá con un nombre',
    timetable: 'de 7:00 am a 9:00 pm',
    starts: 4.5,
    shipping_price: 0,
    arrival_time: '30-40 min'
  },
  {
    status: true,
    name: 'Papa Jhon\'s, Panamá',
    timetable: 'de 7:00 am a 9:00 pm',
    starts: 4.5,
    shipping_price: 0.99,
    arrival_time: '30-40 min'
  },
  {
    status: true,
    name: 'Eolian Roof Top & BBQ, Bulebart Balboa',
    timetable: 'de 7:00 am a 9:00 pm',
    starts: 4.5,
    shipping_price: 0.99,
    arrival_time: '30-40 min'
  },
  {
    status: false,
    name: 'Guarumo beer pub, Albrook Panamá con un nombre',
    timetable: 'de 7:00 am a 9:00 pm',
    starts: 4.5,
    shipping_price: 1.99,
    arrival_time: '30-40 min'
  },
]

export default function AllShops() {
  return (
    <section className={ style.all_shops }>
      <h2>Todos los comercios</h2>
      <p>Pide tus productos favoritos, te lo llevamos hasta tu puerta</p>

      <div className={ style.card_container }>
        {
          data.map( elem => (
            <div className={ style.card }>
              <div className={ style.card_img }></div>
              <div className={ style.card_info }>
                <div className={ style.card_timetable }>
                  {
                    elem.status
                      ? <p><b>Abierto:</b></p>
                      : <p className={ style.card_timetable__close }><b>Cerrado por ahora</b></p>
                  }
                  
                  <p className={ style.card_timetable__res }>{ elem.timetable }</p>
                </div>
                <p className={ style.card_name }>{ elem.name }</p>
                <div className={ style.sales_models }>
                  <div className={ style.shipping_price }>
                    <img
                      src='/images/ICON/deliver.svg'
                      alt='shipping_price'
                    />
                    {
                      elem.shipping_price
                        ? `$${ elem.shipping_price }`
                        : 'Gratis'
                    }
                  </div>
                  <div className={ style.arrival_time }>
                    <img
                      src='/images/ICON/tiempo.svg'
                      alt='arrival_time'
                    />
                    { elem.arrival_time }
                  </div>
                </div>
              </div>
              <div className={ style.starts }>
                <img
                  src='/images/ICON/Trazado 8512.svg'
                  alt='start'
                />
                { elem.starts }
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
