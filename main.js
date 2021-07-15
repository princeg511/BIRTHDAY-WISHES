var canvas = new fabric.Canvas('mycanvas');
 var x= document.getElementById("myAudio");

function new_image(){
     fabric.Image.fromURL("BirthdayImage.jpg",function(img){
        birthday_object=img
        birthday_object.scaleToWidth(800)
        birthday_object.scaleToHeight(600)
        birthday_object.set({
            top:0,
            left:0
        })
        canvas.add(birthday_object)
    })
}

new_image()
function playSound(){
	 fabric.Image.fromURL("player.png",function(img){
        _object=img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(150)
        player_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(player_object)
    })
}

