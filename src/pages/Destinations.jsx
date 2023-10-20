import { useRouteLoaderData } from "react-router-dom";
import DestinationItem from "../components/DestinationItem";

function DestinationPage() {
  const data = useRouteLoaderData("root");
  const destinations = data.destinations;

  return <DestinationItem destinations={destinations} />;
}

export default DestinationPage;
