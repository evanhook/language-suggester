$(document).ready(function(){
  $("form#languageQuiz").submit(function(event){
    event.preventDefault();
    const excitement = parseInt($("input:radio[name=excitement]:checked").val());
    const workLocation = parseInt($("input:radio[name=workLocation]:checked").val());
    const companyWork = parseInt($("input:radio[name=companyWork]:checked").val());
    const laptop = parseInt($("input:radio[name=laptop]:checked").val());
    const beverage = parseInt($("input:radio[name=beverage]:checked").val());
    const totalValue = excitement + workLocation + companyWork + laptop + beverage

    if (totalValue >=3) {
      $("#langResult").show();
    }
  });

});
