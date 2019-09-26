/**************Order Form *****************/
var jobArr = ["Basic", "Advanced","Special"];
var jobPriceArr = [200,400,0]
jobFill();

function jobFill(){
    var job = document.getElementById("installType");

    for (i=0;i<jobArr.length;i++){
        var opt = document.createElement("option");
        opt.innerHTML = jobArr[i];
        opt.value = jobArr[i];
        job.appendChild(opt);
    }
}

function describeJobType(){
    var jobType =document.getElementById("installType").value;
    
}
