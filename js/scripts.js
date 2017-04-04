//business

function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}


function totalCost(movie, time, age) {

    var cost = 6;

    if (time >= 5){
      cost += 2
    }
    if (age === 20){
      cost += 2
    }
    console.log(age);
    return cost;
};

//user-interface

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var movie = $("#movie").val();
    var time = parseInt($("#time").val());
    var age = parseInt($("#age").val());

    var newTicket = new Ticket(movie, time, age);
    cost = totalCost(newTicket.movie,newTicket.time,newTicket.age);

    $("#totalCost").text(cost);
    $("#output").show();


  });
});
