import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Philosophy from "../components/Philosophy";
import Features from "../components/Features";
import Waitlist from "../components/Waitlist";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Philosophy />
      <Features />
      <Waitlist />
    </main>
  );
}