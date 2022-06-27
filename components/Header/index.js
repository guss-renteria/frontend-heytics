import { useEffect, useRef } from 'react';
import Image from 'next/image';

import style from './style.module.css'

export default function Header() {
  const header_ref = useRef(null)
  const header_back_ref = useRef(null)

  function handleScroll() {
    if(scrollY > 0 && scrollY < header_ref.current.clientHeight) {
      header_ref.current.style['box-shadow'] = '0 .2rem 1rem #00000060'
      header_back_ref.current.style.height = `${ scrollY }px`
    }
    else if(scrollY > 0)
      header_back_ref.current.style.height = `100%`
    else {
      header_back_ref.current.style.height = `0`
      header_ref.current.style['box-shadow'] = '0 1rem 1rem transparent'
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={ style.header } ref={ header_ref }>
      <Image
        width={20}
        height={20}
        src='/images/ICON/Icon awesome-arrow-left.svg'
        alt='button back'
        className={ style.img_button_back }
      />

      <Image
        width={100}
        height={36}
        layout='fixed'
        alt='logo'
        src='/images/LOGO GODELIVER.svg'
        className={ style.img_logo }
      />

      <div className={ style.header_back } ref={ header_back_ref }>
        <button className={ style.button_send_to }>
          <Image
            width={14}
            height={14}
            src='/images/ICON/Enviar a.svg'
            alt='enviar a'
            className={ style.img_send_to }
          />
          <span>Enviar a</span>
        </button>
      </div>
    </header>
  )
}
