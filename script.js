$(document).ready(function(){
    console.log("game ready")
    // game init
    var questions = ["Jquery is a javascript library that prides itself on doing less with more","Javascript was created in 10 days in 1995","The vanilla JS selector to reference all p tags on a page is getElementsbyTagName('p')"]
    var answers = ['false', 'true', 'true'];
    $(".playerField").hide()
    var score = parseInt($(".score").text());
    console.log(score);
    // event listeners
    $("#c1").on("click", function(){
        $("#gameBoard").hide();
        $(".score").hide();
        var points = parseInt($("#c1").text());
        // console.log(points);
        $(".question").append(questions[0])
        $(".playerField").show()

        $(".response").children().on("click", function(){
          var result = $(this).html();
          console.log(result);
          if ( result == answers[0] ){
            alert("correct!")
          }


        })

    }); // end cell click event
})
