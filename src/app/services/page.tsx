import PageHeader from "@/components/pages/PageHeader";
import Services from "@/components/home/Services";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services · 2104events"
        title={"What we do,\nin six rooms."}
        lede="Each service below is a separate practice — staffed by the same team, run with the same care, sized to your day."
      />
      <Services />
    </>
  );
}
