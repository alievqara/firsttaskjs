

function mode() {
    if( document.body.style.backgroundColor === 'white') {
        document.body.style.backgroundColor = 'black'
        document.getElementById('text').style.color = 'white'
        document.getElementById('text').style.backgroundColor = 'black'
        document.getElementById('text').style.border = ' 3px solid white'
        document.getElementById('btn').style.color = 'white'
        document.getElementById('btn').style.backgroundColor = 'black'
        document.getElementById('btn').style.border = '3px solid white'
        document.getElementById('brdr').style.border = '10px solid white'



    }
    else{
        document.body.style.backgroundColor = "white"
        document.getElementById('text').style.color = 'black'
        document.getElementById('text').style.border = ' 3px solid black'
        document.getElementById('text').style.backgroundColor = 'white'
        document.getElementById('btn').style.color = 'black'
        document.getElementById('btn').style.backgroundColor = 'white'
        document.getElementById('btn').style.border = ' 3px solid black'
        document.getElementById('brdr').style.border = '10px solid black'


    }
}


var date = new Date().getHours()

if(date >= 6 && 11 >= date){
    document.getElementById('text').innerHTML = "Good Morning World";
}
else if(date > 11 && 8 >= date){
    document.getElementById('text').innerHTML = "Good Afternon World";
}
else{
    document.getElementById('text').innerHTML = "Good Night World";
}
