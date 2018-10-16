var score : int = 0;
var rhombus : GameObject;
var curtain : Animation;
var nameNextLevel : String;
private var time : float = 0;
function OnCollisionEnter2D(collider : Collision2D) {
if(collider.gameObject.tag == "Ball"){
//if the trigger was tagged object Ball
if(PlayerPrefs.GetInt("SoundBoolean") == 0){
//play sounds when it is switched on.
gameObject.GetComponent(AudioSource).Play();
}
//add the points
score += 1;
//turn animation
rhombus.GetComponent(Animation).Play();
}
}
function Update(){
//if points are equal to 10
if(score == 10){
//save achievement
PlayerPrefs.SetInt(nameNextLevel, 1);
if(PlayerPrefs.GetInt("SoundBoolean") == 0){
//play sounds when it is switched on.
rhombus.GetComponent(AudioSource).Play();
}
//assigns the dark green color
rhombus.GetComponent(SpriteRenderer).color = Color(0.44, 0.69, 0.11, 1);
//turn animation
curtain.Play("CurtainClosure");
// time is 1
time = 1;
// score is 20
score = 20;
}
//if the time is greater than 0
if(time > 0){
//reduce the time
time -= 0.02;
}
//if the variable is less than 0
if(time < 0){
//load the next level
Application.LoadLevel(nameNextLevel);
}
}