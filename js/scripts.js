// JavaScript Document
$(document).ready(function(){
	
	$('#demo-api-group').blind('click', function(event) {
		event.preventDefault();
		Fresco.show({
			url:'http://www.fascinatingpics.com/wp-content/uploads/2013/11/118.jpg',
			caption: 'sample cation'
		});
	
	});
});