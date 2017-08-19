

export function headers() {
  return {
    'Content-Type': 'application/json'
  };
}

/**
*  Returns an object containing the headers needed to make an authorized network
*  call.
*/
export async function authorizedHeaders() {
  const token = await getAuthToken();

  return Object.assign({}, headers(), {
    Authorization: 'apikey c6c9a7104d04511437a1eb4ea656983a-us16'
  });
}
