$(".question").click(function (e) {
    $question = $(this);
    $answer = $question.next();
    $(".answer").slideUp();
    $answer.stop().slideToggle(500);
});