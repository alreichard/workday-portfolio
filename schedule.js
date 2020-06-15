// connect buttons
var nine = $('#nine');
var ten = $('#ten');
var eleven = $('#eleven');
var twelve = $('#twelve');
var one = $('#one');
var two = $('#two');
var three = $('#three');
var four = $('#four');
var five = $('#five');
// connect text input
var placeholder9 = $('#placeholder9');
var placeholder10 = $('#placeholder10');
var placeholder11 = $('#placeholder11');
var placeholder12 = $('#placeholder12');
var placeholder1 = $('#placeholder1');
var placeholder2 = $('#placeholder2');
var placeholder3 = $('#placeholder3');
var placeholder4 = $('#placeholder4');
var placeholder5 = $('#placeholder5');

var add;


var planner = '';

var thatHour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var eachInput = [placeholder9, placeholder10, placeholder11, placeholder12, placeholder1, placeholder2, placeholder3, placeholder4, placeholder5];

var keyMaker = ['plan1', 'plan2', 'plan3', 'plan4', 'plan5', 'plan6', 'plan7', 'plan8', 'plan9']

var moments = 0

// constantly updating loop
function update() {
    $(currentDay).html(moment().format('MMMM Do YYYY, h:mm:ss a'));
    moments = parseInt(moment(new Date()).format('HH'));
    console.log(eachInput[1])


    for (var i = 0; i < 9; i++) {


        if (thatHour[i] == moments) {
            $(eachInput[i]).attr("class", "present");
        }
        else if (thatHour[i] > moments) {
            $(eachInput[i]).attr("class", "future");
        }
        else if (thatHour[i] < moments) {
            $(eachInput[i]).attr("class", "past");
        };
        if (moments == 0) {
            localStorage.clear();
        }


    }


}
setInterval(update, 1000);
update();
// re-updates text from local storage upon refresh
for (var i = 0; i < 9; i++) {
    if (localStorage.getItem(keyMaker[i]) !== null) {
        planner = JSON.parse(localStorage.getItem(keyMaker[i]));
        eachInput[i].attr("placeholder", planner)
    }
}




// upon button click, adds text to local storage and populates the box with saved text
nine.on('click', function () {

    add = placeholder9.val();




    localStorage.setItem("plan1", JSON.stringify(add));
    planner = JSON.parse(localStorage.getItem("plan1"));

    placeholder9.val("")
    placeholder9.attr("placeholder", planner)

});
ten.on('click', function () {

    add = placeholder10.val();




    localStorage.setItem("plan2", JSON.stringify(add));
    planner = JSON.parse(localStorage.getItem("plan2"));

    placeholder10.val("")
    placeholder10.attr("placeholder", planner)

});
eleven.on('click', function () {

    add = placeholder11.val();




    localStorage.setItem("plan3", JSON.stringify(add));
    planner = JSON.parse(localStorage.getItem("plan3"));

    placeholder11.val("")
    placeholder11.attr("placeholder", planner)

});
twelve.on('click', function () {

    add = placeholder12.val();




    localStorage.setItem("plan4", JSON.stringify(add));
    planner = JSON.parse(localStorage.getItem("plan4"));

    placeholder12.val("")
    placeholder12.attr("placeholder", planner)

});
one.on('click', function () {

    add = placeholder1.val();




    localStorage.setItem("plan5", JSON.stringify(add));
    planner = JSON.parse(localStorage.getItem("plan5"));

    placeholder1.val("")
    placeholder1.attr("placeholder", planner)

});
two.on('click', function () {

    add = placeholder2.val();




    localStorage.setItem("plan6", JSON.stringify(add));
    planner = JSON.parse(localStorage.getItem("plan6"));

    placeholder2.val("")
    placeholder2.attr("placeholder", planner)

});
three.on('click', function () {

    add = placeholder3.val();




    localStorage.setItem("plan7", JSON.stringify(add));
    planner = JSON.parse(localStorage.getItem("plan7"));

    placeholder3.val("")
    placeholder3.attr("placeholder", planner)

});
four.on('click', function () {

    add = placeholder4.val();




    localStorage.setItem("plan8", JSON.stringify(add));
    planner = JSON.parse(localStorage.getItem("plan8"));

    placeholder4.val("")
    placeholder4.attr("placeholder", planner)

});
five.on('click', function () {

    add = placeholder5.val();




    localStorage.setItem("plan9", JSON.stringify(add));
    planner = JSON.parse(localStorage.getItem("plan9"));

    placeholder5.val("")
    placeholder5.attr("placeholder", planner)

});


