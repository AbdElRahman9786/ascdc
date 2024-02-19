import Build from "@/components/Build";
import Clinets from "@/components/Clinets";
import Experince from "@/components/Experince";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import LastWork from "@/components/LastWork";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";


export default function Home() {
  return (
    <main className="overflow-hidden">
     <Hero/>
     <WhyUs/>
     <Build/>
     <Services/>
     <Experince/>
     <LastWork/>
     <Clinets/>
     <Form/>
    </main>
  );
}
