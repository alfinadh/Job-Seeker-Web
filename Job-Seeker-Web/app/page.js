import Dashboard from './components/dashboard/dashboard'
import FooterComponent from './components/footer'
import NavbarComponent from './components/navbar'

export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <Dashboard />
      <FooterComponent />
    </div>
  )
}
