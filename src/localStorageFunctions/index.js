export const loadState = () => {
  try {
    const stateFromLocalStore = localStorage.getItem('state');
    if(stateFromLocalStore === null || stateFromLocalStore.length === 0) {
      return undefined;
    }
    return JSON.parse(stateFromLocalStore);
  } catch(err) {
    return undefined;
  }
};


export const saveState = (state) => {
  try {
    const statateSerialized = JSON.stringify(state);
    localStorage.setItem('state', statateSerialized);
  } catch(err) {
    console.log(err, 'error@@@');
  }
};