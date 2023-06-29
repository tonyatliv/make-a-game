function Ball() {
 
    // this is the code that gets run when you create a new Ball
    // it sets up the variables that are used by the Ball
    // into their initial state

    var size = 32
    var sprite = add_sprite("ball.png", size, size, do_click)
    sprite.angle = 0
    
    var xpos = 100
    var ypos = 100
    var xspeed = 3
    var yspeed = 1

// this gets called when someone clicks on the sprite. see add_sprite above...
    function do_click() {

        xspeed = -xspeed
        yspeed = -yspeed

    }
    
     function move() {
 
        xpos = xpos + xspeed
        ypos = ypos + yspeed

    }

    function set_position (x, y) {
        xpos = x
        ypos = y
    }

    function rebound() {
        xspeed = -xspeed
        yspeed = -yspeed
    }

    function check_bounce() {
        var bounce = false

        if (xpos > game_width - size/2) {
            bounce = true
            xspeed = -xspeed
        }
        if (xpos < size/2) {
            bounce = true
            xspeed = -xspeed
        }
        if (ypos > game_height - size/2) {
            bounce = true
            yspeed = -yspeed
        }
        if (ypos < size/2) {
            bounce = true
            yspeed = -yspeed
        }
        // just tells the caller if we bounced or not
        // the caller can then do something about it
        // like increase the score and play a sound
        return bounce
    }

    function draw () {

        //we only need to tell the drawing where to draw the sprite
        sprite.x = xpos
        sprite.y = ypos
    }

    // these are the things that can be used from game.js (and anything outside this file)
    // if you add a new function, put it in this list if you want game.js to be able to use it

    function get_position () {
        return {xpos, ypos}
     }

    return {draw, move, check_bounce, set_position,get_position, sprite, rebound}

}