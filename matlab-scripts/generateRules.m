function [ruleString] = generateRules(prName, indStart, let1, let2, numRows...
    ,startStr)
    ruleString = startStr;
    for (i = 1: numRows)
        cellA = strcat(let1, num2str(indStart + i - 1));
        cellB = strcat(let2, num2str(indStart + i - 1));
        strBeg = "AND(";
        cellAStr = strcat(cellA, "=", '"', prName, '"', ",");
        cellBStr = strcat(cellB, "=", '"', "Queued", '"', ")");
        ruleAdd = strcat(strBeg, cellAStr, cellBStr);
        if (i ~= numRows)
            ruleAdd = strcat(ruleAdd, ",");
        else
            ruleAdd = strcat(ruleAdd, ")");
        end
        ruleString = strcat(ruleString, ruleAdd);
    end
end