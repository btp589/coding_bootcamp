// return true if function result is true for any item in the array ex. [1,2,3], function(x) {return x===2;}
function any(arr, func) {
    var returnValue = false;

    // check each item
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];

        // item found
        if (func(item)) {
            return true;
        }
    }


    // No item evaluated true for func(item)
    return returnValue;
}

any([1,2,3], function (x) {return x==2;})


// Results:
/* any([1,2,3], function (x) {return x==2;})
true
any([1,2,5], function (x) {return x==2;})
true
any([1,5,3], function (x) {return x==2;})
false */