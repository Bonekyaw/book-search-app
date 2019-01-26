export const touchableButtonHandler = async (onPressFunction) => {

    setTimeout(() => { onPressFunction(); }, 400, this);
};

export const fetchDataHandler = (url, options={}) => {

    return fetch(url, options).then(response => response.json());
};

export const getUniqueArray = (array, comparisonKey) => {

    const uniqueArray = array
            .map(e => e[comparisonKey])
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter(e => array[e]).map(e => array[e]);

    return uniqueArray;
};