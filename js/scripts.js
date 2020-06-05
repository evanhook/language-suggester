$(document).ready(function(){
  $("form#languageQuiz").submit(function(event){
    console.log(nameInput);
    const excitement = parseInt($("input:radio[name=excitement]:checked").val());
    const workLocation = parseInt($("input:radio[name=workLocation]:checked").val());
    const companyWork = parseInt($("input:radio[name=companyWork]:checked").val());
    const laptop = parseInt($("input:radio[name=laptop]:checked").val());
    const beverage = parseInt($("input:radio[name=beverage]:checked").val());
    const totalValue = excitement + workLocation + companyWork + laptop + beverage

    if (totalValue >= 13) {
      $("#resultC").removeClass("hidden");
      $("#resultRuby").addClass("hidden");
    } else if (totalValue < 13, totalValue >= 8) {
      $("#resultRuby").removeClass("hidden");
      $("#resultC").addClass("hidden");
    } else {
      $("#resultSwift").removeClass("hidden");
      $("#resultC, #resultRuby").addClass("hidden");
    }
    event.preventDefault();
  });
});