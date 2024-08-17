import Balence from "../components/balence.component";
import History from "../components/history.component";
import Navigation from "../components/navigation.component";

const DashboardRoute = () => {
  return (
    <div className="flex  justify-between bg-black text-[#F8F8F2] min-h-screen p-4">
      <Navigation/>
        <Balence/>
        <History/>
    </div>
  );
}   

export default DashboardRoute;