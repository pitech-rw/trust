import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./ui/top navbar/nav";
import HeroSection from "./ui/hero/hero";
import ServicesOverview from "./ui/servicesOverview/servicesOverview";
import HowItWorks from "./ui/How it works/howitworks";
import CallToAction from "./ui/cta/cta";
import Footer from "./ui/footer/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <HeroSection />
      <ServicesOverview />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </main>
  );
}
