export const getMissions = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
    mode: 'cors',
  }).then((res) => res.json());

  return response;
};

export default getMissions;
