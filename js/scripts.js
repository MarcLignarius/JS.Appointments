$(document).ready(function() {
	$("form#appointment").submit(function(event){
		var name = $("input#name").val();
		var email= $("input#email").val();
    var date = $("input#date").val();
		var time= $("input#time").val();
    $("#output").text("Thank you " + name + ". " + "Your appointment is confirmed for " + date + " at " + time + ". An email will be sent to " + email + ".")
    event.preventDefault();
  });
});
