Webcam.set({
    height: 300,
    width: 350,
    img_format: 'png',
    png_quality: 90,

    constraints: {
        facingMode: "environment"
    }

});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function takesnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("results").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('MobileNet', modelloaded);

function modelloaded() {
    console.log('modelloaded');
}

function identify_object() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotresults);
}

function gotresults(error, results) {
    if (error) {
        console.error(error);
    } else {

        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}