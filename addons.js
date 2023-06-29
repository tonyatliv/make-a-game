 
//Anything in here is something you can use, but don't need to

function random(max) {
    if (max)
        return Math.floor(Math.random() * max)
    else
        return Math.random()
}

//returns true if the sprites for both objects are in the same place
//this can be used to check for collisions

function check_overlap(object1, object2) {
    var r1 = object1.sprite
    var r2 = object2.sprite

    return !(r2.x-r2.width/2 > (r1.x + r1.width/2) ||
        (r2.x + r2.width/2) < r1.x-r1.width/2 ||
        r2.y-r2.height/2 > (r1.y + r1.height/2) ||
        (r2.y + r2.height/2) < r1.y-r1.height/2)
}

//this can be used to check for collisions

function get_distance(object1, object2) {
    var r1 = object1.sprite
    var r2 = object2.sprite

    var dx = r1.x - r2.x
    var dy = r1.y - r2.y
    return Math.sqrt(dx * dx + dy * dy)
}

function get_angle(object1, object2) {
    var r1 = object1.sprite
    var r2 = object2.sprite

    var dx = r1.x - r2.x
    var dy = r1.y - r2.y
    return Math.atan2(dy, dx)
    
}



const fetchOptions = {
    method: "POST",
    credentials: "include",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    } 
};

async function send_message(message,channel)
{
    request = {request:"send_message",channel:channel,message:message}
    
    var options = fetchOptions
    options.body = JSON.stringify(request)
    fetch('../message.php', options)
 
}
  
 

async function get_message(channel)
{
   
    request = {request:"get_message",channel:channel}
    
    var options = fetchOptions
    options.body = JSON.stringify(request)
    var response = await fetch('../message.php', options)
 
    var data = await response.json()
    console.log(data.message)

    setTimeout(get_message,3000,channel)
    return data.value

}
    
 