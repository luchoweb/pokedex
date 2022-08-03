export const fetchData = async (url) => {
  const data = await fetch(url);
  const json = await data.json();
  return json;
}
