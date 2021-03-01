import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../shared/Header'), {ssr: false});
import { ToastContainer } from 'react-toastify';

const BaseLayout = ({ className, navClass="with-bg", children, user, userLoading }) => {
  return (
    <div className="layout-container">
      {typeof window !== 'undefined' && (
        <Header className={navClass} user={user} userLoading={userLoading} />
      )}
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