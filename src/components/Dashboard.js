import Mainboard from "./Mainboard";
import Prompt from "./Prompt";
import Topnav from "./Topnav";

const dashboard = () => {
  return (
    <div className="dashboard">
      <Topnav />
      <Mainboard />
  
    </div>
  );
};
export default dashboard;
