import style from './style.module.css'

import Nav from './Nav'
import RecommendedShops from './RecommendedShops'

export default function Body() {
  return (
    <div className={ style.body }>
      <Nav />
      <RecommendedShops />
    </div>
  )
}
