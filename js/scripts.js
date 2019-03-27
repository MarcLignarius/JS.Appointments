//var name= $("#name").val();
//var date= $("#date").val();
//var time= $("#time").val();

$(document).ready(function() {
	$("form#appointment").submit(function(event){
		var name = $("input#name").val();
    console.log(name);
		var description= $("input#description").val();
    console.log(description);
    var date = $("input#date").val();
    console.log(date);
		var time= $("input#time").val();
    console.log(time);
    $("#output").text("Your booking is confirmed!");
    var message = "Hi " + name + " your appointment is confirmed for " + date;
    $("#output").text(message);
    event.preventDefault();
  });
});
