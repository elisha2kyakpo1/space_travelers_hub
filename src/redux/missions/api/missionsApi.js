export const getMissions = async () => {
  const response = await fetch('', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
    mode: 'cors',
  }).then((res) => res.json());

  return response;
};
