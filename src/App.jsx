import { Routes, Route } from "react-router-dom"

import { CartProvider } from "@/context/CartContext"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { ChatWidget } from "@/components/ChatWidget"
import { ScrollToHash } from "@/components/ScrollToHash"
import { Home } from "@/pages/Home"
import { About } from "@/pages/About"
import { Mission } from "@/pages/Mission"
import { Nursery } from "@/pages/Nursery"
import { Impact } from "@/pages/Impact"
import { Contact } from "@/pages/Contact"
import { Sponsor } from "@/pages/Sponsor"
import { OurWork } from "@/pages/Ourwork"

function App() {
  return (
    <CartProvider>
      <ScrollToHash />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/nursery" element={<Nursery />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/our-work" element={<OurWork />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatWidget />
    </CartProvider>
  )
}

export default App
