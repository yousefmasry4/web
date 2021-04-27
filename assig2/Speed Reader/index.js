var IntervalCall,dataIn , theSpeed ,lenIn = 0 , index = 0

function onStartClicked(){
    dataIn = document.getElementById("textArea")
    document.getElementById("Start").disabled = true
    document.getElementById("Stop").disabled = false
    document.getElementById("textArea").disabled = true

    var lines = new Array;
    textArray = [];
    lines = dataIn.value.split("\n");
    for (let i = 0; i < lines.length; i++) {

        if (lines[i] != "") {
            for (let index = 0; index < lines[i].split(" ").length; index++) {
                textArray.push(lines[i].split(" ")[index]);

            }

        }
    }

    function displaySlicedWords(){ 
        if(index < textArray.length)
            document.getElementById("Ans").innerHTML = textArray[index++] 
        else
            document.getElementById("Ans").innerHTML = ""
    }
    theSpeed = parseInt(document.getElementById("Speed").value)
    IntervalCall = setInterval(displaySlicedWords ,theSpeed )
}

function Medium(){
    document.getElementById("Ans").style.fontSize ="36pt"
}

function Big(){
    document.getElementById("Ans").style.fontSize ="48pt"
}
function Bigger(){
    document.getElementById("Ans").style.fontSize ="60pt"
}

function onStopClicked(){
    clearInterval(IntervalCall)
    document.getElementById("textArea").disabled = false
    document.getElementById("Stop").disabled = true
    document.getElementById("Start").disabled = false
    document.getElementById("Ans").innerHTML = ""
}



function onSpeedChanged(){
    lenIn++
    clearInterval(IntervalCall)
    onStartClicked()
}