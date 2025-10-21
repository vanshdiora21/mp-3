import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Education from './pages/Education';
import Employment from './pages/Employment';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import References from './pages/References';
import Documents from './pages/Documents';
import Credits from './pages/Credits';

// Layout component that wraps all pages with Header, Nav, and Footer
function Layout() {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

// Router configuration using createBrowserRouter (React Router v6.4+)
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { 
        path: '/', 
        element: <Home /> 
      },
      { 
        path: '/education', 
        element: <Education /> 
      },
      { 
        path: '/employment', 
        element: <Employment /> 
      },
      { 
        path: '/projects', 
        element: <Projects /> 
      },
      { 
        path: '/achievements', 
        element: <Achievements /> 
      },
      { 
        path: '/references', 
        element: <References /> 
      },
      { 
        path: '/documents', 
        element: <Documents /> 
      },
      { 
        path: '/credits', 
        element: <Credits /> 
      },
    ],
  },
]);

// Main App component
export default function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}
