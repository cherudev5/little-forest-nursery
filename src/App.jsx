import { Routes, Route } from "react-router-dom"

import { CartProvider } from "@/context/CartContext"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { ScrollToHash } from "@/components/ScrollToHash"
import { ChatWidget } from "@/components/ChatWidget"
import { Home } from "@/pages/Home"
import { Sponsor } from "@/pages/Sponsor"

function App() {
  return (
    <CartProvider>
      <ScrollToHash />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsor" element={<Sponsor />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatWidget />
    </CartProvider>
  )
}

export default App
