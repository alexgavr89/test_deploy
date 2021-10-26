const printResult = (result) => {
    if(typeof result !== 'undefined' && result === true) {
        return 'GOOD';
    }
    
    return 'BAD';
}

export default printResult;
