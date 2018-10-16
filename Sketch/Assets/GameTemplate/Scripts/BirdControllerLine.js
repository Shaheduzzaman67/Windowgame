var marker1 : GameObject;
var marker2 : GameObject;
var bird : GameObject;
var speed : float = 1;
     var v_diff : Vector3 ;
     var atan2 : float;
    var birdAnimation : GameObject;
    var deadBird : Sprite;
   var curtain : Animation;
   private var time : float = 1;
     private var target : GameObject;
	function Start(){
	//the purpose of the marker1 is
	target = marker1;
	}
	function Update () {
	//if the distance between the object and the purpose of less than 0.5
if(Vector3.Distance(gameObject.transform.position ,target.transform.position) < 0.5 ){
target = marker1;
}
	//if the distance between the object and the purpose of less than 0.5
if(Vector3.Distance(gameObject.transform.position ,target.transform.position) < 0.5 ){
target = marker2;
}
//We produce complex calculations
v_diff = (target.transform.position - bird.transform.position);    
 atan2 = Mathf.Atan2 ( v_diff.y, v_diff.x );
 //if time is not stopped in the game
 if(Time.timeScale > 0){
 //peremyaschem object in the direction of the target
	if(gameObject.transform.position.x < target.transform.position.x){
gameObject.transform.position.x += speed;
gameObject.transform.rotation = Quaternion.Euler(0, 0, atan2 * Mathf.Rad2Deg );
}
if(gameObject.transform.position.x > target.transform.position.x){
gameObject.transform.position.x -= speed;
gameObject.transform.rotation = Quaternion.Euler(180, 0, -atan2 * Mathf.Rad2Deg );
}
if(gameObject.transform.position.y < target.transform.position.y){
gameObject.transform.position.y += speed;
}
if(gameObject.transform.position.y > target.transform.position.y){
gameObject.transform.position.y -= speed;
}
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
function OnTriggerEnter2D(collider : Collider2D) {
if(collider.gameObject.tag == "Ball"){
//if the trigger was tagged object Ball
//the purpose of becoming the object itself
target = gameObject;
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
