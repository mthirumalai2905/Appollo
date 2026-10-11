import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import CustomerPage from './pages/CustomerPage'
import Customers from './pages/Customers'
import Home from './pages/Home'
import ModulePage from './pages/ModulePage'
import Platform from './pages/Platform'
import Privacy from './pages/Privacy'
import ArrowLink from './components/ArrowLink'
import usePageTitle from './usePageTitle'

function NotFound() {
  usePageTitle('Page not found')
  return (
    <section className="section missing" data-theme="light">
      <div className="container">
        <h1>This page is not part of the site.</h1>
        <ArrowLink to="/">Back home</ArrowLink>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="platform" element={<Platform />} />
        <Route path="platform/:slug" element={<ModulePage />} />
        <Route path="customers" element={<Customers />} />
        <Route path="customers/:slug" element={<CustomerPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
