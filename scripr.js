let a= +(prompt('a?'))
let b=+(prompt('b?'))
let x= +(prompt('x?'))
console.log('n-4')
if(a>0 && b>0 && c>0){
    console.log('3')
}
else if((a>0 && b>0)||(a>0 && c>0)||(b>0 && c>0)){
    console.log('2')
}
else if((a>0)||(b>0)||(c>0)){
    console.log('1')
}
else{
    console.log('0')
}

console.log('n5')
if(a>0 && b>0 && c>0){
    console.log('3+, 0-')
}
else if((a>0 && b>0)||(a>0 && c>0)||(b>0 && c>0)){
    console.log('2+, 1-')
}
else if((a>0)||(b>0)||(c>0)){
    console.log('1+, 2-')
}
else{
    console.log('0+, 3-')
}

console.log('n8')
let x= +(prompt('a for n8'))
let y= +(prompt('b for n8'))
let max= Math.max(x, y)
let min= Math.min(x,y)
console.log('Max= '+max)
console.log('min= '+min)

console.log('n10')
let q=+(prompt('a for 10'))
let w=+(prompt('b for 10'))
if(q==b){
    let e=q+w
    q=e
    w=e
}
else{
    q=0
    w=0
    
}
console.log('a= '+q)
console.log('b= '+w)

console.log('n14')
let max= Math.max(a,b,c)
let min= Math.min(a,b,c)

console.log('n16')
if(a<b && b<c){
    let a1=a*2
    let b1=b*2
    let c1=c*2
    console.log('a,b,c n16='+a1+b1+c1)
}
else{console.log('A= '+ -a)
    console.log('B='+ -b)
    console.log('C= '+ -c)
}

console.log('n25')
let n=+(pronpt('x for n25'))
let m=+(prompt('y for n25'))
if((x<-2)||(x>2)){
    console.log('X= '+ x*2)
}
else{
    console.log('X= '+ -3*x)
}