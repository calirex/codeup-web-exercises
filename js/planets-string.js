(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    // var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    let planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let planetsArrayBr = planetsArray.join("<br>");
    console.log(planetsArrayBr);
    document.write(planetsArrayBr);



//    BONUS

    let planetList = planetsArray.map(item => {
        return '<li>' + item + '</li>';
    })
    let wrapDisplay = '<ul>' + planetList.join('') + '</ul>';

    console.log(wrapDisplay);
    document.write(wrapDisplay);

    console.log(`<ul><li>${planetsArray.join('</li><li>')}</li></ul>`);

})();












