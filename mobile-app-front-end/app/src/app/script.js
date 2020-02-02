$(function() {
	$('.terminal').on('click', function(){
  	 $('#input').focus();
  });

  $('#input').on('keydown',function search(e) {
		if(e.keyCode == 13) {
    	// append your output to the history,
      // here I just append the input
    	$('#history').append($(this).val()+'<br/>');
      
      // you can change the path if you want
      // crappy implementation here, but you get the idea
      if($(this).val().substring(0, 3) === 'cd '){
  			$('#path').html($(this).val().substring(3)+'&nbsp;>&nbsp;');
      }
      
      // clear the input
      $('#input').val('');
      
    }
  });
});