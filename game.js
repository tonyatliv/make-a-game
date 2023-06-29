var ball1
var bat1
var score = 0
  
 //This is run once when the program starts, before the files have loaded

function load_game_files() {
//These are the image files that are loaded at the start - if you want to use a new image 
//then you also have to add it to this list
    load_image_files(["bat.png", "ball.png", "night.png", "goal.png" ])
}   



//This is run once at the start of the game, after the files have loaded
function start_game() {
    add_background("night.png")
 
    ball1 = new Ball()
    bat1 = new Bat()

}

//This is run about 60 times a second, whenever the screen updates
function update_game() {
    ball1.move()

// maybe you could use this line of code for some reason?
//    var ball_position = ball1.get_position()

    if (ball1.check_bounce()) {
        score = score + 1
        write_score("Score: " + score)
    }
    ball1.draw()
 
}


//call this to see what the user is doing with the mouse and keyboard
function read_input() {
    var mouse_position = get_mouse_position()
 
    var keypresses = get_keypresses()
    for (key of keypresses) {
        if (key == "ArrowLeft")
            print("left")
    }

}