const HANDLE_STATUSES = [401, 403, 404, 502, 504];

const errorChecker = resp => {
  if (!resp.ok) {
    if (HANDLE_STATUSES.includes(resp.status)) {
      if ([401, 403].includes(resp.status)) {
        // Add rerequest
        // TODO Navigate to login screen
      }
      throw { errorMessage: 'Authentification error' };
    }
    if (resp.status > 400 && resp.status < 500) {
      return resp.json().then(data => {
        console.warn(data);
        const err = {
          errorMessage: data.message || data.detail,
        };
        throw err;
      });
    }
    return resp.json().then(data => {
      console.warn(data);
      if (data) {
        const err = {
          errorMessage: data,
        };
        throw err;
      } else {
        const err = {
          errorMessage: `Bad Request - ${resp.status}`,
        };
        throw err;
      }
    });
  }

  if (resp.status === 204) {
    return resp;
  }

  return resp.json();
};

export default errorChecker;
