function matrix(x, y, z) {
    var insideArr = [];
    var resultArr = [];

    for (i = 0; i < y; i++) {
        insideArr.push(z);      //wrzucamy z do do pierwszego (najbardziej wewnętrznego arraya)
    }

    for (i = 0; i < x; i++) {
        resultArr.push(insideArr);  // wrzucamy najbardziej wewnętrznego arraya do zewnętrznego arraya
    }

    return resultArr;
}