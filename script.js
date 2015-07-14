$(document).ready(function(){
    console.log("game ready")
    // game init
      $(".response").hide();
      var questions = ["The 'Gang' consists of Charlie, Dee, Mac, Dennis, and Frank", "Kitten Mittons", "Charlie's favorite meal is milksteak","last question"]
      var answers = ['true', 'false','true']
      var selections = []
      var index = 0;
   // start game
    $("#clickStart").on("click", function(){
       $(".start").hide();
       $(".questions").append(questions[index])
       $(".response").show()
    }) // end start event
    // click event for true or false
    $(".response").children().on("click", function(){
       var result = $(this).html()
       selections.push(result)
       index ++
       $(".questions").empty();
       $(".questions").append(questions[index])
    })
})
