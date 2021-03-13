module.exports = function check(str, bracketsConfig) {
    let bracket = [];
    for (i = 0; i < bracketsConfig.length; i++)
        bracket.push(0);
    for (i = 0; i < str.length; i++) {
        for (j = 0; j < bracketsConfig.length; j++) {
            if (str[i] == bracketsConfig[j][0]) {
                if (bracketsConfig[j][0] != bracketsConfig[j][1])
                    bracket[j]++;
            }
            if (str[i] == bracketsConfig[j][1]) {
                if ((bracketsConfig[j][0] == bracketsConfig[j][1]) && bracket[j] == 0) {
                    bracket[j]++;
                }
                else if ((bracketsConfig[j][0] == bracketsConfig[j][1]) && bracket[j] != 0) {
                    if (bracket[j] < 0)
                        return false;
                    for (k = 0; k < bracketsConfig.length; k++)
                        if (bracketsConfig[k][0] == str[i - 1] && k != j) {
                            if (bracketsConfig[k][0] != bracketsConfig[k][1])
                                return false;
                            else if (bracketsConfig[k][0] == bracketsConfig[k][1] && bracket[k] != 0)
                                return false;
                        }
                    bracket[j]--;
                }
                else {
                    if (bracket[j] == 0)
                        return false;
                    else {
                        for (k = 0; k < bracketsConfig.length; k++)
                            if (bracketsConfig[k][0] == str[i - 1] && k != j && bracketsConfig[k][0] != bracketsConfig[k][1])
                                return false;
                        bracket[j]--;
                    }
                }
            }
        }
    }
    for (i = 0; i < bracket.length; i++) {
        if (bracket[i] != 0)
            return false;
    }
    return true;
}