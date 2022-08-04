export const fetchData = async (url) => {
  const data = await fetch(url);
  let json;

  if ( data?.status === 200 )
    json = await data.json();
  
  return json;
}
