import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags d-none d-lg-block">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags d-none d-lg-block">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html d-none d-lg-block">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
