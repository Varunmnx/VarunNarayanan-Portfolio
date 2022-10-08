import style from "./footer.module.scss"
import Contactme from './contactme'
import Support from "./support"

export default function  Footer() {
  return (
    <div>
    <div className={style.footer_container}>
      <Contactme />
    </div>
    <Support/>
    </div>
  )
}
