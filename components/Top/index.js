import style from './style.module.css'

import SearchBar from './SearchBar'
import Greeting from './Greeting'
import Categories from './Categories'

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

      <SearchBar />
      <Greeting />
      <Categories />
    </div>
  )
}
