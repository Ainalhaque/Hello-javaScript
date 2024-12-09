/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let myScore = 79;
let friendsScore = 89;


if (myScore > 80) {
    if (friendsScore > 80) {
        console.log("Hey! Let's go for a lunch");
    }
    else if (friendsScore >= 60 && friendsScore < 80) {
        console.log("Hey! Good luck see you next time!")
    }
    else if (friendsScore >= 40 && friendsScore < 60) {
        console.log("Message unseen")
    }
    else if (friendsScore < 40)
        console.log("Friend block")

} else if (myScore < 80) {
    console.log("TaTa Bye Bye")
}