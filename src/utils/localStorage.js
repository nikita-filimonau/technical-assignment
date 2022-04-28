export function setItem(key, value) {
  try {
    return localStorage.setItem(key, value);
  } catch (e) {
    return null;
  }
}

export async function getItem(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return null;
  }
}

export async function removeItem(key) {
  try {
    return localStorage.removeItem(key);
  } catch (e) {
    return null;
  }
}

export async function clearStorage() {
  try {
    return localStorage.clear();
  } catch (e) {
    return null;
  }
}
