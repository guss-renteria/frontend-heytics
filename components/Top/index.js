import Image from 'next/image'

import style from './style.module.css'

import SearchBar from './SearchBar'
import Greeting from './Greeting'
import Categories from './Categories'

export default function Top() {
  return (
    <div className={ style.top } >
      <button className={ style.button_send_to }>
        <Image
          width={18}
          height={24}
          src='/images/ICON/Enviar a.svg'
          alt='enviar a'
          className={ style.img_send_to }
        />
        <span className={ style.button_span }><b>Enviar a: </b> Trabajo, Plaza Brazil aqui va mas pero lo escondo</span>
        <Image
          width={14}
          height={26}
          layout={'fixed'}
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
