import './App.css'
import AppRouter from './routes/AppRouter'
import Header from './components/Header'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast';



function App() {

  return (
    <>
      <Header />
      <AppRouter/>
      <Footer />
      <Toaster />
    </>
  )
}

export default App
