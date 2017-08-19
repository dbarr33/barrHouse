
export function request(promise) {
  return promise
    .then((response) => {
      console.log(response);
      return checkStatus(response);
    })
    .then(response => (response.json()))
    .then((json) => {
      console.log(json);
      return Promise.resolve(json);
    })
    .catch((error) => {
      throw error;
    });
}

export function checkStatus(response) {
  // Check if the user needs to reauthenticated
  if (response.status >= 400) {
    return response.json()
        .then((json) => {
          console.log(json);
          const keys = Object.keys(json);
          if (json.error_description) {
            throw new Error(json.error_description);
          } else if (keys.length > 0 && json[keys[0]].length > 0) {
            throw new Error(json[keys[0]][0]);
          } else if (keys.length > 0) {
            throw new Error(json[keys[0]]);
          } else {
            throw new Error('error');
          }
        });
  }
  return response;
}
