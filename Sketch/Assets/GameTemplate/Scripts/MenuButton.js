var curtain : Animation;
private var time : float = 1;
function OnMouseUp () {
if(PlayerPrefs.GetInt("SoundBoolean") == 0){
//play sounds when it is switched on
gameObject.GetComponent(AudioSource).Play();
}
//time runs
Time.timeScale = 1;
//turn animation
curtain.Play("CurtainClosure");
//time is 0.1
time = 0.1;
}
function Update(){
//if the time is less than or equal to 0.1
if(time <= 0.1){
//reduce the time
time -= 0.1 * Time.deltaTime;
}
//if the time is less than or equal to 0
if(time <= 0){
//load menu
Application.LoadLevel("Menu");
}
}