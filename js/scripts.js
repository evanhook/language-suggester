$(document).ready(function(){
  $("form#languageQuiz").submit(function(event){
    const excitement = parseInt($("input:radio[name=excitement]:checked").val());
    const workLocation = parseInt($("input:radio[name=workLocation]:checked").val());
    const companyWork = parseInt($("input:radio[name=companyWork]:checked").val());
    const laptop = parseInt($("input:radio[name=laptop]:checked").val());
    const beverage = parseInt($("input:radio[name=beverage]:checked").val());
    const totalValue = excitement + workLocation + companyWork + laptop + beverage

    if (totalValue >=13) {
      $("#resultC").removeClass("hidden");
      $("resultRuby, #resultSwift").addClass("hidden");
      console.log(showresult);
    } else if (totalValue < 13, totalValue >= 8) {
      $("#resultRuby").removeClass("hidden");
      $("resultC, #resultSwift").addClass("hidden");
    } else {
      $("#resultSwift").removeClass("hidden");
      $("resultRuby, #resultC").addClass("hidden");
    }
    event.preventDefault();
  });
});