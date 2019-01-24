export const touchableButtonHandler = (onPressFunction) => {

    setTimeout(() => { onPressFunction(); }, 400, this);
};

export const fetchDataHandler = (url, options={}) => {

    return fetch(url, options).then(response => response.json());
};