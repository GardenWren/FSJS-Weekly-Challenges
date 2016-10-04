//#Week 6 JQuery Code Challenge

//Objects
var Box ={
	height: 1,
	width: 1,
	volume: 1,
};

$('#HeightDecrease').click(function(){
	Box.height-=1;
});

$('#HeightIncrease').click(function(){
	Box.height+=1;
});


$('#WeightDecrease').click(function(){
	Box.width-=1;
});

$('#WeightIncrease').click(function(){
	Box.width+=1;
});

$('#VolumeDecrease').click(function(){
	Box.volume-=1;
});

$('#VolumeIncrease').click(function(){
	Box.volume-=1;
});


$('#Print').click(function(){
  $("#output").html('object:box ,height:'+Box.height+', width:'+ Box.width+', volume:'+Box.volume);
})


//Code Challenge:
//Create an object named "Box" with 3 properties, height, width, volume.
//Create 2 buttons for Height. The first button decreases the Box Height by 1. The second button increases the Box Height by 1.
//Create a button that prints the object and its attributes to the page (use the span "output".
 
//Extra credit
//Create interactive buttons to decrease or increase the Width and Volume