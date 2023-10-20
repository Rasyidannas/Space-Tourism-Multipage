//load data.json
export async function loader() {
  const response = await fetch("data.json");
  const data = await response.json();

  return data;
}
