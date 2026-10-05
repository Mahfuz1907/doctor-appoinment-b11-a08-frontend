import Banner from "@/Components/Banner/Banner";
import Doctors from "@/Components/Doctors/Doctors";
import SuccessSection from "@/Components/SuccessSection/SuccessSection";


export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Banner />
      <Doctors />
      <SuccessSection />
    </div>
  );
}
