function validateEmail(str) {
    if (str.indexOf('@') < 1
        || str.indexOf('.') < 0
        || str.indexOf('@') > str.lastIndexOf('.')
    ) return false;
    return true;
}