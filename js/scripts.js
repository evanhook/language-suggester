$(document).ready(function(){
  $("form#languageQuiz").submit(function(event){
    const excitement = parseInt($("input:radio[name=excitement]:checked").val());
    const workLocation = parseInt($("input:radio[name=workLocation]:checked").val());
    const companyWork = parseInt($("input:radio[name=companyWork]:checked").val());
    const laptop = parseInt($("input:radio[name=laptop]:checked").val());
    const beverage = parseInt($("input:radio[name=beverage]:checked").val());
    const job = parseInt($("input:radio[name=job]:checked").val());
    const motivation = parseInt($("input:radio[name=motivation]:checked").val());

    const totalValue = excitement + workLocation + companyWork + laptop + beverage + job + motivation

    if (totalValue >= 18) {
      $("#resultC").removeClass("hidden");
      $("#resultRuby, #resultSwift").addClass("hidden");
    } else if (totalValue < 18 && totalValue > 12) {
      $("#resultRuby").removeClass("hidden");
      $("#resultC, #resultSwift").addClass("hidden");
    } else {
      $("#resultSwift").removeClass("hidden");
      $("#resultC, #resultRuby").addClass("hidden");
    }
    event.preventDefault();
  });
});