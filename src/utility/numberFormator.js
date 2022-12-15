const numberFormator = number => {
    if (typeof number === "number") {
        const formatNumber = new Intl.NumberFormat("id-ID");
        return formatNumber.format(number);
    }
};

export default numberFormator;