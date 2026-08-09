import Navbar from "@/components/Navbar";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-white">

      <Navbar />

      <div className="pt-32">
        <Waitlist />
      </div>

      <Footer />

    </main>
  );
}