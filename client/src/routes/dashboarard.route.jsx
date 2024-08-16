import Balence from "../components/balence.component";
import History from "../components/history.component";
import Navigation from "../components/navigation.component";

const DashboardRoute = () => {
  return (
    <div className="flex  justify-between">
      <Navigation/>
        <Balence/>
        <History/>
    </div>
  );
}   

export default DashboardRoute;