var ballParticles : GameObject;
var time : float = 1;
function OnCollisionEnter2D(collider : Collision2D) {
if(collider.gameObject.name == "TriggerFallBall"){
//destroy the object if it hit the object named TriggerFallBall
Destroy(gameObject);
}
if(collider.gameObject.name == "Target"){
//destroy the object if it hit the object named Target
Destroy(gameObject);
}
if(collider.gameObject.tag == "BlackZone"){
//if the object hit the object with the tag BlackZone
if(PlayerPrefs.GetInt("SoundBoolean") == 0){
//play sounds when it is switched on.
collider.gameObject.GetComponent(AudioSource).Play();
}
//create ballParticles
Instantiate(ballParticles, gameObject.transform.position, Quaternion.identity);
//destroy the object to which the script is attached
Destroy(gameObject);
}
}




function OnTriggerStay2D(collider : Collider2D) {
if(collider.gameObject.tag == "Arrows"){
//if the object hit the trigger with the tag Arrows
//the object is rotated in the direction of the arrows
gameObject.transform.rotation = collider.transform.rotation;
//add power to local coordinates
gameObject.GetComponent.<Rigidbody2D>(). AddRelativeForce(Vector2(0,25));
}
}


function Update(){
//if the object has no tag
if(gameObject.tag == "Untagged"){
//reduce the time
time -= 0.1;
}
//if the time is less than 0
if(time <= 0){
//assign an object tag Ball
gameObject.tag = "Ball";
//time is 1
time = 1;
}
}