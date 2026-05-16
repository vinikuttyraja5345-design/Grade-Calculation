

function total()
{
    let t1=Number(document.getElementById('t1').value)
    let t2=Number(document.getElementById('t1').value)
    let t3=Number(document.getElementById('t1').value)
    let t4=Number(document.getElementById('t1').value)
    let t5=Number(document.getElementById('t1').value)

    let total=t1+t2+t3+t4+t5
    document.getElementById('tot').innerHTML=total;

}

function average()
{
 let t1=Number(document.getElementById('t1').value)
    let t2=Number(document.getElementById('t1').value)
    let t3=Number(document.getElementById('t1').value)
    let t4=Number(document.getElementById('t1').value)
    let t5=Number(document.getElementById('t1').value)

    let total=Number(t1+t2+t3+t4+t5)

    let average=(total/5)
    document.getElementById('avg').innerHTML=average;
}

function grade(){
     let t1=Number(document.getElementById('t1').value)
    let t2=Number(document.getElementById('t1').value)
    let t3=Number(document.getElementById('t1').value)
    let t4=Number(document.getElementById('t1').value)
    let t5=Number(document.getElementById('t1').value)

    let total=Number(t1+t2+t3+t4+t5)

    let average=(total/5)
   
    
if(average >=90)
{
    document.getElementById('grade').innerHTML="A"
}
else if(average >=80)
{
    document.getElementById('grade').innerHTML="B"
}
else{
    document.getElementById('grade').innerHTML="C"
}
}