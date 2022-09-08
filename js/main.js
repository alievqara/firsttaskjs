

function mode() {
    if( document.body.style.backgroundColor === 'white') {
        document.body.style.backgroundColor = 'yellow'
        document.getElementById('text').style.color = 'white'
        document.getElementById('text').style.backgroundColor = 'yellow'
        document.getElementById('text').style.border = ' 3px solid white'
        document.getElementById('btn').style.color = 'white'
        document.getElementById('btn').style.backgroundColor = 'yellow'
        document.getElementById('btn').style.border = '3px solid white'
        document.getElementById('brdr').style.border = '10px solid white'



    }
    else if(document.body.style.backgroundColor === 'yellow') {
         document.body.style.backgroundColor = "white"
         document.getElementById('text').style.color = 'black'
         document.getElementById('text').style.border = ' 3px solid black'
         document.getElementById('text').style.backgroundColor = 'white'
         document.getElementById('btn').style.color = 'black'
         document.getElementById('btn').style.backgroundColor = 'white'
         document.getElementById('btn').style.border = ' 3px solid black'
         document.getElementById('brdr').style.border = '10px solid black'
    

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

if(date >= 6 && date <= 11){
    document.getElementById('text').innerHTML = "Good Morning World";
    document.body.style.backgroundColor = "white"


}
else if(date > 11 && 20 >= date){
    document.getElementById('text').innerHTML = "Good Afternoon World";
    document.body.style.backgroundColor = "yellow"


}
else{
    document.getElementById('text').innerHTML = "Good Night World";
    document.body.style.backgroundColor = "white"


}

