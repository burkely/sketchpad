$(document).ready(function(){
	var gridSize = 100;
	var divSize = (100/gridSize);
	var isDown = false;   // Tracks status of mouse button

	for(var i=0; i<(gridSize*gridSize); i++){
		$('#sketchpad').append('<div class=\'gridOn\' style=\'width:'+divSize+'%;height:'+divSize+'%;\'></div>');
	}
	
	$(document).mousedown(function(event) {
		
		isDown = true;      // When mouse goes down, set isDown to true
		return false;
	});

	$(document).mouseup(function() {
		isDown = false;    // When mouse goes up, set isDown to false
	});
	
	$('.gridOn').hover(function(){
		if(isDown){
			$(this).css('background-color', '#0055FF')
		}
	});
	
});