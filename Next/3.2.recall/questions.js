let selectElementsStartingWithA = (array) => {
    return array.filter(word => word[0] == 'a');
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(word => word[0] == 'a' || word[0] == 'o' || word[0] == 'i' || word[0] == 'e' || word[0] == 'u' || word[0] == 'y');

}

let removeNullElements = (array) => {
    return array.filter(word => word != null);
}

let removeNullAndFalseElements = (array) => {
    let arr = array.filter(word => word != null);
    return arr.filter(word => word !== false);
}

let reverseWordsInArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].split('').reverse().join('');
    }
    return array;
}

let everyPossiblePair = (array) => {
    let arr = [];
    arr.push([array[2], array[0]]);
    arr.push([array[2], array[1]]);
    arr.push([array[0], array[1]]);
    return arr;
}

let allElementsExceptFirstThree = (array) => {
    return array.splice(3, array.length - 3);
}

let addElementToBeginning = (array, element) => {
    array.unshift(element)
    return array;
}

let sortByLastLetter = (array) => {
    return array.sort(function(a, b) {
        if (a[a.length - 1] > b[b.length - 1])
            return 1;
        else if (a[a.length - 1] < b[b.length - 1])
            return -1;
        return 0;
    });
}

let getFirstHalf = (string) => {
    return string.split('').splice(0, Math.ceil(string.length / 2)).join('');
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    return array.filter(word => word == word.split('').reverse().join('')).length;
}

let shortestWord = (array) => {
    return array.sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        }
    })[0];
}

let longestWord = (array) => {
    return array.sort((a, b) => {
        if (a.length < b.length) {
            return 1;
        } else if (a.length > b.length) {
            return -1;
        }
    })[0];
}

let sumNumbers = (array) => {
    return array.reduce((a, b) => a + b, 0);
}

let repeatElements = (array) => {
    return array.concat(array);
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    return array.reduce((a, b) => a + b, 0) / array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    return array.filter(number => number <= 5).splice(0, 6);
}

let convertArrayToObject = (array) => {
    return Object.fromEntries(array.map((el, i, arr) => (i % 2 == 1) ? [arr[i - 1], arr[i]] : null).filter(el => el !== null));
}

let getAllLetters = (array) => {
    return [...new Set(array.join().split("").filter(val => val != ",").sort())];
}

let swapKeysAndValues = (object) => {
    return Object.fromEntries(Object.entries(object).map(([key, value]) => [value, key]));
}

let sumKeysAndValues = (object) => {
    return Object.entries(object).join(',').split(',').reduce((a, b) => Number(a) + Number(b));
}

let removeCapitals = (string) => {
    return string.replace(/([A-Z])/g, '');
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    return date.toLocaleDateString();
}

let getDomainName = (string) => {
    return string.substring(0, string.length - 4).split("@")[1];
}

let titleize = (string) => {
    return string.replace(/(^[^ ])|(?<= )([^ at])|(?<=\. )([^ ])/g, (elm) => elm.toUpperCase());
}

let checkForSpecialCharacters = (string) => {
    return /\W/g.test(string);
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    return number <= 1 ? 1 : (number * factorial(number - 1));

}

let allAnagram = function(string) {
    if (string.length === 0) {
        return [''];
    }
    let result = {};
    string.split('').forEach(function(letter, i) {
        let remainingletters = string.slice(0, i) + string.slice(i + 1);
        allAnagram(remainingletters).forEach(function(anagram) {
            result[letter + anagram] = true;
        });
    });
    return Object.keys(result);
};

let findAnagrams = (string) => {
    return allAnagram(string);
}

let convertToCelsius = (number) => {
    return Math.round((number - 32) * (5 / 9));
}

let letterPosition = (array) => {
    return array.map(elm => elm.toLowerCase().charCodeAt(0) - 96);
}