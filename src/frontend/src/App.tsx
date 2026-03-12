import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { GallerySection } from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { OrderModal } from "./components/OrderModal";
import { ProcessSection } from "./components/ProcessSection";
import { ProductsSection } from "./components/ProductsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { WhyChooseUs } from "./components/WhyChooseUs";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1, staleTime: 30_000 } },
});

function AquaPureApp() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onOrderClick={() => setOrderModalOpen(true)} />

      <main>
        <HeroSection onOrderClick={() => setOrderModalOpen(true)} />
        <AboutSection />
        <ProductsSection onOrderClick={() => setOrderModalOpen(true)} />
        <WhyChooseUs />
        <ProcessSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />

      <OrderModal open={orderModalOpen} onOpenChange={setOrderModalOpen} />

      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AquaPureApp />
    </QueryClientProvider>
  );
}
