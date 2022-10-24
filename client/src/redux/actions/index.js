
export function getDogs() {
  return async function (dispatch) {
    await fetch("http://localhost:3001/dogs")
      .then((data) => data.json())
      .then((data) => dispatch({ type: "GET_DOGS", payload: data }));
  };
}
export function GetDogsName(name) {
  return {
    type: "GET_DOGS_NAME",
    payload:name,
  };
  
}
export function getTemperament() {
  return async function (dispatch) {
    await fetch("http://localhost:3001/temperament")
      .then((data) => data.json())
      .then((data) => dispatch({ type: "GET_TEMPERAMENTS", payload: data }));
  };
}
export function FilterByTemperament(payload) {
  return {
    type: "FILTER_BY_TEMPERAMENT",
    payload,
  };
  
}
export function FilterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}

export function postDog(payload) {
  return async function () {
    fetch("http://localhost:3001/dog", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json());
  };
}

export function Order(payload) {
  return {
    type: "ORDER",
    payload,
  };
}
