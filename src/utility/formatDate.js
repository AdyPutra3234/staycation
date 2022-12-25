export default date => {
    const newDate = new Date(date);
    const formatDate = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    });

    const [{value: mo},  , {value: da}] = formatDate.formatToParts(newDate);
    return `${da} ${mo}`;
};
