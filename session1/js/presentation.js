var i = parseInt($(this).find('#count').text(), 10) || 0;
var tim;

function runCounter(){
    tim = setInterval(function(){
      if(i === 2) {
        $('#count').addClass('medium');
      }
        if(i>=3){
          $('#count').addClass('danger');
          clearInterval(tim); return;
        }
        $('#count').text(++i);
    },1000);
}

function resetCounter() {
  $('#count').text(0);
  $('#count').removeClass('danger').removeClass('medium');
  i = 0;
}
