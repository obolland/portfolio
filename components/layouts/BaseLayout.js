import dynamic from 'next/dynamic'
// import header from '../shared/Header';
const Header = dynamic(() => import('../shared/header'), {ssr: false});
import { ToastContainer } from 'react-toastify';

const BaseLayout = ({ className, navClass="with-bg", children, user, userLoading }) => {
  return (
    <div className="layout-container">
      {typeof window !== 'undefined' && (
        <Header className={navClass} user={user} userLoading={userLoading} />
      )}
      {/* <Header className={navClass} user={user} userLoading={userLoading} /> */}
      <main className={`cover ${className}`}>
        <div className="wrapper">
          {children}
        </div>
      </main>
      <ToastContainer />
    </div>
  )
}

export default BaseLayout;