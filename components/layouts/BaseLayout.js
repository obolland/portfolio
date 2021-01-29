import Header from '../shared/Header';

const BaseLayout = ({ className, navClass="with-bg", children, user, userLoading }) => {
  return (
    <div className="layout-container">
      <Header className={navClass} user={user} userLoading={userLoading} />
      <main className={`cover ${className}`}>
        <div className="wrapper">
          {children}
        </div>
      </main>
    </div>
  )
}

export default BaseLayout;