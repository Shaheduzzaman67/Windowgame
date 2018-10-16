var timeToCreate : float = 0.1;
var ball : GameObject;
function Update () {
//reduce the timeToCreate
timeToCreate -= 0.1 * Time.deltaTime;
//if the time is less than or equal to 0
if(timeToCreate <= 0){
//create ball
Instantiate(ball, gameObject.transform.position, Quaternion.identity);
//time is 0.1
timeToCreate = 0.1;
}
}