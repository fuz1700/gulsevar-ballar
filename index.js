let ball = prompt("Balni yoz");

ball = Number(ball);
if (ball <= 70) {
    alert("Kirolmadin☹️");
} else if (ball > 70 && ball <= 80) {
    alert("Supper kontrakt");
} else if (ball > 80 && ball <= 90) {
    alert("Kontrakt!");
} else if (ball > 90) {
    alert("Grant tabriklaymiz");
} else {
    alert("Error");
}
