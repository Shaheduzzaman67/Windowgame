var restartButton : GameObject;
var smallPlayButton : GameObject;
var menuButton : GameObject;
var blackLine : GameObject;
function OnMouseUp () {
if(PlayerPrefs.GetInt("SoundBoolean") == 0){
//play sounds when it is switched on
gameObject.GetComponent(AudioSource).Play();
}
//turn off SpriteRenderer
gameObject.GetComponent(SpriteRenderer).enabled = false;
//turn off CircleCollider2D
gameObject.GetComponent(CircleCollider2D).enabled = false;
//includes restartButton
restartButton.SetActive(true);
//includes smallPlayButton
smallPlayButton.SetActive(true);
//includes menuButton
menuButton.SetActive(true);
//includes blackLine
blackLine.SetActive(true);
//stop time
Time.timeScale = 0;
}