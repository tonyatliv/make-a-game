 
//some variables that are used by the game
const game_width = 1000
const game_height = 580
var app
var sprite_container
var mouse_position = { x: 0, y: 0 }
var use_image_files
var textures = {}

//the rest are functions that are used by the game

function load_image_files(files) {
    use_image_files = files
}

async function setup_window() {

    load_game_files()

    // This creates the game window (using the Pixi library)
    app = new PIXI.Application({
        width: game_width,
        height: game_height,

    })

 
    await load_textures(use_image_files)

    // This starts the game
    start_game()
    

    // This updates the game (60 times a second)
    const ticker = PIXI.Ticker.shared
    ticker.autoStart = true

    ticker.add(update_game)
    
    // This adds the game window to the html file so that it appears
    const main = document.getElementById('main_section')
    main.appendChild(app.view)

    //This is for the mouse input
    app.view.addEventListener('pointermove', (event) => {
        mouse_position.x = event.offsetX
        mouse_position.y = event.offsetY
    })

    //This is for the keyboard input
    document.addEventListener('keydown', (event) => {
        keys_pressed.push(event.code)
        
    })
    
 

}
var keys_pressed = []
function get_keypresses() {
    var key_list = keys_pressed
    keys_pressed = []
    return key_list
}

function add_sprite(texture, w, h, do_click) {

    if (textures[texture] == undefined)
        throw "Error: " + texture + " not loaded"

    const sprite = new PIXI.Sprite(textures[texture])
    if (w)
        sprite.width = w
    if (h)
        sprite.height = h;
    
 
    if (do_click)
    {
        sprite.eventMode = "static"

        sprite.buttonMode = true;
        sprite.on('pointerdown', do_click)
    }

    sprite.anchor.set(0.5)

    app.stage.addChild(sprite)
    return sprite

}

function add_background(texture) {

    const background = new PIXI.Sprite(textures[texture]);

    background.width = game_width;
    background.height = game_height;
    background.x = 0;
    background.y = 0;
    app.stage.addChild(background);

}



async function load_textures(image_files) {

    for (var image of image_files) {
        textures[image] = await PIXI.Assets.load('files/' + image)
    }

}

function write_score(score) {
    const score_section = document.getElementById('score_section')
    score_section.innerText = score
}



function get_mouse_position() {

    return mouse_position

}

function print(...text) {
    console.log(...text)
}



//This function is called automatically when the page opens
//It sets up the game window and then calls the setup_game function

setup_window()


