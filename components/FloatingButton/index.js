import style from './style.module.css'

export default function FloatingButton() {
  return (
    <a href='#' className={ style.floating_button }>
      <img
        src='/images/ICON/chevron-circle-down-solid.svg'
        alt='arrow-up'
      />
    </a>
  )
}
