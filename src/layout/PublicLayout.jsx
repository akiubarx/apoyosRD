import { Outlet, Link } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <>
      <div className='md:min-h-screen'>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* <!-- Mobile menu button--> */}
                <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span className="sr-only">Abrir Menu Principal</span>
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-white px-3 py-2 rounded-md text-sm font-medium"><Link to="/admin">Sistema de Apoyos</Link></span>
                  {/* <img className="block lg:hidden h-8 w-auto" src="" alt="Workflow"/>
                <img className="hidden lg:block h-8 w-auto" src="" alt="Workflow"/> */}
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {/* <a href="/carpetas" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Carpertas</a> */}
                    <Link to="/carpetas" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Carpertas</Link>

                    <Link to="/archivos" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Archivos</Link>

                    <Link to="/apoyos" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Apoyos</Link>

                    <Link to="/login/acceso" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Acceder</Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="ml-3 relative">
                  <div>
                    <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <span className="sr-only">Menu de Usuario</span>
                      <img className="h-8 w-8 rounded-full" src="" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <Link to="/carpetas" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Carpertas</Link>

              <Link to="/archivos" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Archivos</Link>

              <Link to="/apoyos" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Apoyos</Link>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  )
}

export default PublicLayout;