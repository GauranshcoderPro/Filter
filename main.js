lipX = 0;
lipY = 0;

function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/qRyZN9Gt/Lipstick-filter.png')
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0,0,300,300);
    image(lipstick, lipX, lipY, 30, 30);
}



function take_snapshot()
{
    save('filter_picture.png');
}
function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function gotPoses(results)
{
if (results.length > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x - 10;
    noseY = results[0].pose.nose.y - 10;
    console.log("lip X = " + lipX);
    console.log("lip Y = " + lipY);
}
}