var textStyle = function (value) {
    if (value) {
        return {
            "color": "blue"
        }
    }
};

var getDestRunes = function (array, value) {
    var fLen, i, res;
    fLen = array.length;
    res = "";
    for (i = 0; i < fLen; i++) {
        if (array[i].name == value) {
            res = array[i].res;
        } else if (array[i].name0 == value) {
            res = array[i].res0;
        }
    }
    return res;
};

var getRune = function (value) {
    var res;
    res = getDestRunes(runemap1, value);
    if (!res.length) {
        res = getDestRunes(runemap2, value);
        if (!res.length) {
            res = getDestRunes(runemap3, value);
        }
    }
    return res;
};


