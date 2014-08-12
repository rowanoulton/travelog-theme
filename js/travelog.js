document.addEventListener('DOMContentLoaded', function () {
    var ordinalNodes = document.getElementsByClassName('ordinal'),
        forEach      = Array.prototype.forEach,
        getOrdinalString;

    getOrdinalString = function (number) {
        var s = ['th','st','nd','rd'],
            v = number % 100;

        return (s[(v-20) % 10] || s[v] || s[0]);
    };

    forEach.call(ordinalNodes, function (ordinalNode) {
        var number        = parseInt(ordinalNode.innerHTML),
            ordinalString = getOrdinalString(number);

        ordinalNode.innerHTML += '<sup>' + ordinalString + '</sup>';
    });
});