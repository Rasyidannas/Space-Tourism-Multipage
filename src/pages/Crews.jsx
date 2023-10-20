import { useRouteLoaderData } from "react-router-dom";
import CrewItem from "../components/CrewItem";

function CrewsPage() {
  const data = useRouteLoaderData("root");
  const crews = data.crew;

  return <CrewItem crew={crews} />;
}

export default CrewsPage;
