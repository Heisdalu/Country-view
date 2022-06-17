
export const FormatNumber = (val ='') => {
    return new Intl.NumberFormat().format(val);
}