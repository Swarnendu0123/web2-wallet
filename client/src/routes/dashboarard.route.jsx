import Balence from "../components/balence.component";
import History from "../components/history.component";

const DashboardRoute = () => {
  return (
    <div className="flex  justify-between">
        <Balence/>
        <History/>
    </div>
  );
}   

export default DashboardRoute;