export const touchableButtonHandler = (onPressFunction) => {

    setTimeout(() => { onPressFunction(); }, 400, this);
};