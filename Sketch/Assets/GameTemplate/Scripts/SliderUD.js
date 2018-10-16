var startScreen : Animation;

function OnMouseDown () {
//if the object name SliderUp
if(gameObject.name == "SliderUp"){
if(PlayerPrefs.GetInt("SoundBoolean") == 0){
//play sounds when it is switched on.
gameObject.GetComponent(AudioSource).Play();
}
//turn animation
startScreen.Play("StartScreenOpen");
}
//if the object name SliderDown
if(gameObject.name == "SliderDown"){
if(PlayerPrefs.GetInt("SoundBoolean") == 0){
//play sounds when it is switched on.
gameObject.GetComponent(AudioSource).Play();
}
//turn animation
startScreen.Play("StartScreenClosure");
}
}