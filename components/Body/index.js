import style from './style.module.css'

import Nav from './Nav'
import RecommendedShops from './RecommendedShops'
import AllShops from './AllShops'

export default function Body() {
  return (
    <div className={ style.body }>
      <Nav />
      <RecommendedShops />
      <AllShops />
    </div>
  )
}
