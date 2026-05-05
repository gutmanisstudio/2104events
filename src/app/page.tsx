import AboutBlock from "@/components/home/AboutBlock";
import DetailStrip from "@/components/home/DetailStrip";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import Quote from "@/components/home/Quote";
import Services from "@/components/home/Services";
import WorkScrub from "@/components/home/WorkScrub";
import BookingSection from "@/components/booking/BookingSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WorkScrub />
      <Process />
      <DetailStrip />
      <Quote />
      <AboutBlock />
      <BookingSection />
    </>
  );
}
