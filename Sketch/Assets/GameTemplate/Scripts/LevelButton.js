var curtain : Animation;
private var time : float = 1;
var nameLevel : String;
function Start(){
//keep the level 1 number with a value of 1
PlayerPrefs.SetInt("1", 1);
//if a saved variable contains 1
if(PlayerPrefs.GetInt(nameLevel) == 1){
//assigns the normal color
gameObject.GetComponent(SpriteRenderer).color = Color(1,1,1,1);
}
}
function OnMouseDown () {
//if a saved variable contains 1
if(PlayerPrefs.GetInt(nameLevel) == 1){
//assign object gray
gameObject.GetComponent(SpriteRenderer).color = Color(0.66,0.66,0.66,1);
}
}
function OnMouseUp(){
//if a saved variable contains 1
if(PlayerPrefs.GetInt(nameLevel) == 1){
if(PlayerPrefs.GetInt("SoundBoolean") == 0){
//play sounds when it is switched on.
gameObject.GetComponent(AudioSource).Play();
}
//assigns the normal color 
gameObject.GetComponent(SpriteRenderer).color = Color(1,1,1,1);
//turn animation
curtain.Play("CurtainClosure");
//time is 0.1
time = 0.1;
}
}
function Update(){
//if the time is less than or equal to 0.1
if(time <= 0.1){
//reduce the time
time -= 0.1 * Time.deltaTime;
}
//if the time is less than or equal to 0
if(time <= 0){
//load the desired level
Application.LoadLevel(nameLevel);
}

//reset all points press D on keyboard.
if(Input.GetKeyDown(KeyCode.D)){
PlayerPrefs.DeleteAll();
}

}