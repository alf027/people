module.exports = {
    fibonacci:function(input) {
        var fib = [1,1];
        var nextNum = 0;

        while (nextNum < input) {
            var indexOne = fib.length - 2;
            var indexTwo = fib.length - 1;

            nextNum = fib[indexOne] + fib[indexTwo];

            if (nextNum < input) {
                fib[fib.length] = nextNum;
            }
        }
        return fib;
    },
    calculate: {

    sum: function(arr) {
        var result = 0;
        var length = arr.length;

        for (var i = 0; i < length; i++) {
            result += arr[i];
        }
        return result;
    },

    median: function(arr) {
        var result = 0;
        var average = 0;
        var index = 0;
        var firstMedian = 0;
        var secondMedian = 0;
        var reverse = [];
        length = arr.length;


        if (length % 2 == 0) {
            index = (length / 2) - 1
            firstMedian = arr[index];
            reverse = arr.reverse();
            secondMedian = reverse[index];

            result = (firstMedian + secondMedian) / 2;
            return result;
        } else {
            index = ((length / 2) + .5) -1 ;
            result = arr[index];
            return result;
        }

    },

    average: function(arr) {
        var result = 0;
        var length = arr.length;
        for (var i = 0; i < length; i++) {
            result += arr[i];
        }
        result = result / length;
        return result;
    },

    logAll: function(arr) {
        var result = "";
        for (var i = 0; i < arr.length; i++) {
            result = result +  arr[i] + ' ';

        }
        return result;
    },

    subtract: function(arr) {
        var result = 0;
        var length = arr.length;

        for (var i = 0; i < length; i++) {
            result -= arr[i];
        }
        return result;
    },

    largest: function(arr) {
        var largest = 0
        var length = arr.length;
        for (var i = 0; i < length; i++) {
            if (arr[i] > largest) {
                largest = arr[i];
            }
        }
        return largest;

    },

    smallest: function(arr) {
        var smallest = arr[0]
        var length = arr.length;
        for (var i = 0; i < length; i++) {
            if (arr[i] < smallest) {
                smallest = arr[i];
            }
        }
        return smallest;

    }

}
};
