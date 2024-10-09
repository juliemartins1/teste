var s1 ='  tads  '
console.log(s1)
var s2 = leftTrim(s1)
console.log(s2)
var s3 = rightTrim(s1)
console.log(s3)
var s4 = allTrim(s1)
console.log(s4)

function leftTrim(str){
    var r = ''
    var copia = false
    for (var i = 0; i<str.length; i++) {

        if (str[i] != ' ') copia = true

        if (copia) r += str[i]

    }
    return r   
}

function rightTrim(str){
    var r = ''
    var copia = false

    for (var i = str.length-1 ; i>=0 ; i--) {
        
        if (str[i] != ' ') copia = true

        if (copia) r = str[i] + r
    }
       return r
}

function allTrim(str){
    return rightTrim(leftTrim (str))
}