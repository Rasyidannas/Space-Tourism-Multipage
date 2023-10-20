import { useRouteLoaderData } from "react-router-dom";
import TechnologyItem from "../components/TechnologyItem";

function TechnologyPage() {
  const data = useRouteLoaderData("root");
  const technology = data.technology;

  return <TechnologyItem technology={technology} />;
}

export default TechnologyPage;
