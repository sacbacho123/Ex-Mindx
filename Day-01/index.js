const ex1 = document.querySelector('#ex1');
const isPrime = (val) => {
    if (val < 2) return false;
    if (val==2 || val==3) return true;
    for (var i = 2; i < Math.sqrt(val)+1; i++) {
        if (val % i === 0) {
            return false;
        }
    }
    return true;
}
ex1.addEventListener('click', findPrimenumber = ()=>{
    let result=[];
    let inputNum = prompt('nhap mot day so');
    let arr = inputNum.split(',')
    for(let i=0;i<arr.length;i++){
        if(isPrime(arr[i])){
            result.push(arr[i])
        }
    }
    return alert('nhung so nguyen to la la: ' + result);
})

