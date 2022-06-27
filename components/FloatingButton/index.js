import Image from 'next/image'

import style from './style.module.css'

export default function FloatingButton() {
  return (
    <a href='#' className={ style.floating_button }>
      <Image
        width={20}
        height={20}
        src='/images/ICON/chevron-circle-down-solid.svg'
        alt='arrow-up'
      />
    </a>
  )
}
