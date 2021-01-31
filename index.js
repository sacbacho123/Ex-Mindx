let a = [5, 4, 3, 2, 1]
let m = 10;
let temp = 0;

for(let i =0; i<a.length;i++){
    for(let j = 1; j < a.length;j++){
        if( i<j && a[i] + a[j] == m){
            console.log(a[i] , a[j]);
            temp++
        }
    }
}
if(temp == 0){
    console.log('khong tim thay');
}