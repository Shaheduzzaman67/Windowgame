var rotationalSpeed : float = 1;
var birdAnimation : GameObject;
    var deadBird : Sprite;
   var curtain : Animation;
   private var time : float = 1;
private var p : Transform;
private var empty : boolean = true;
function Update () {
//if time is not stopped in the game
		if(Time.timeScale > 0){
if(empty == true){
//p object is the parent object
p = transform.parent;
//we rotate the object p
p.transform.Rotate(0,0,-rotationalSpeed);
}
//if the time is less than or equal to 0.3
if(time <= 0.3){
//reduce the time
time -= 0.1 * Time.deltaTime;
}
//if the time is less than or equal to 0.2 and time greater than or equal 0.19
if(time <= 0.2 && time >= 0.19){
//turn animation
curtain.Play("CurtainClosure");
}
//if the time is less than or equal to 0.08
if(time <= 0.08){
//restart level
Application.LoadLevel(Application.loadedLevel);
}
}
}

function OnTriggerEnter2D(collider : Collider2D) {
if(collider.gameObject.tag == "Ball"){
//if the trigger was tagged object Ball
empty = false;
//change the sprite
birdAnimation.GetComponent(SpriteRenderer).sprite = deadBird;
//stop animation
birdAnimation.GetComponent(Animator).enabled=false;
if(PlayerPrefs.GetInt("SoundBoolean") == 0){
//play sounds when it is switched on
gameObject.GetComponent(AudioSource).Play();
}
//turn off Collider
gameObject.GetComponent(BoxCollider2D).enabled = false;
//turn off isKinematic
gameObject.GetComponent(Rigidbody2D).isKinematic = false;
//add strength
gameObject.GetComponent(Rigidbody2D).AddForce(Vector2(0, 100));
//time is 0.3
time = 0.3;
}
}