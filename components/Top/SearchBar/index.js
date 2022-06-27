/* eslint-disable @next/next/no-img-element */
import style from './style.module.css'

export default function SearchBar() {
  return (
    <form className={ style.form_container } action='' onSubmit={ e => e.preventDefault() }>
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
  )
}
