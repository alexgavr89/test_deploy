const printResult = (result) => {
    if(typeof result !== 'undefined' && result === true) {
        return 'GOOD';
    }
    
    return 'BAd';
}

export default printResult;
