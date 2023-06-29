function Bat() {
 
    var size = 64
   
    var sprite = add_sprite("bat.png", size, size, do_click)
    //this makes the sprite invisible - alpha is the transparency (between 0 and 1)
    sprite.alpha = 0
    var xpos = 0
    var ypos = 0
    
    function do_click() {
        print("clicked on bat")
      }
    
    function set_position (x, y) {
        xpos = x;
        ypos = y;
     }

     function get_position () {
        return {xpos, ypos}
     }

    
    function draw () {

        sprite.alpha = 1
        sprite.x = xpos
        sprite.y = ypos
    }

    // These are the functions that are exposed to the outside files 
    // You can see them being used in game.js
    // You should update the list when you add new functions that are called from game.js

    return {draw, set_position, sprite, get_position}

}