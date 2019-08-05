const arrays = () => {
    const _objectToArray = (objeto) => {
        var array = [];
        for (const key in objeto) {
            if (objeto.hasOwnProperty(key)) {
                array.push(objeto[key]);
            }
        }
        return array;
    };

    return {
        objectToArray:_objectToArray
    }
};

module.exports = arrays();