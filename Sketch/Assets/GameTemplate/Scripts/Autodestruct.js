private var time : float = 1;
function Update () {
time -= 0.05;
if(time <= 0){
//by the time the expiration remove the object to which the script is attached.
Destroy(gameObject);
}
}