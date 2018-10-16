var restartButton : GameObject;
var pauseButton : GameObject;
var menuButton : GameObject;
var blackLine : GameObject;
function OnMouseUp () {
if(PlayerPrefs.GetInt("SoundBoolean") == 0){
//play sounds when it is switched on.
gameObject.GetComponent(AudioSource).Play();
}
//turn on SpriteRenderer
pauseButton.GetComponent(SpriteRenderer).enabled = true;
//turn on CircleCollider2D
pauseButton.GetComponent(CircleCollider2D).enabled = true;
//turn off restartButton
restartButton.SetActive(false);
//turn off gameObject
gameObject.SetActive(false);
//turn off menuButton
menuButton.SetActive(false);
//turn off blackLine
blackLine.SetActive(false);
//time runs
Time.timeScale = 1;
}