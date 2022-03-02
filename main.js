function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lce4nBux7/model.json',modelready)
}

function modelready(){
    classifier.classify(gotresults)
}
function gotresults(error, results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        r=Math.floor(Math.random() * 255) + 1;
        g=Math.floor(Math.random() * 255) + 1;
        b=Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +r+","+g+","+b+")";

        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');

        if (results[0].label =="Barking") {
            img.src = 'aliens-01.gif';
            img1.src = 'aliens-02.png';
        } else{
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.gif';
        }

    }
}