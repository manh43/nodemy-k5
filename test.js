// function kiemTraSNT(soCanKiemTra){
// //so cankiemtra chia het cho tung gia tri i 
// //neu xuat hien chia het=>false
// //neu tat ca khong chia het =>true
// // if(soCanKiemTra<=1){
// //     return false;
// // }
// // for(var i=2;i<soCanKiemTra;i++){
// //     if(soCanKiemTra %i==0){
// //         return false;
// //     }
// // }
// // return true;
// if(soCanKiemTra <=1){
//     return false;
// }
// for(var i=2;i<soCanKiemTra;i++){
//     if(soCanKiemTra%i==0){
//         return false;
//     }
// }
// return true;
// }

// function tinhtongSNT(nguong){
//     var sum=0;
//     for (let i=0;i<=nguong;i++){
//         var kiemtra=kiemTraSNT(i)
// if(kiemtra){
//     sum+=i;
// }

// }
// if(sum==0){
//     return false;
// }
// else{return sum;}
//     }
   
// var x=tinhtongSNT(-1);
// // var a=kiemTraSNT(11);
// console.log(x);
var data = [{
    name: 'Hoang',
    tien: 3500
},{
    name: 'Thuan',
    tien: 4000
},{
    name: 'Phong',
    tien: 1300
},{
    name: 'Vu',
    tien: 10600
}, {
    name: 'Tuan',
    tien: 9000
}, {
    name: 'Quan',
    tien: 12150
}, {
    name: 'Khai',
    tien: 6100
}] 
// Tinh tong tien cua cac ban nay
// Tinh tong tien cua cac ban , co so tien lon hon 5000 va nho hon 10000 
// Hay in ra cac ban co so tien chan~ nghin

function tinhTongTien(danhsach){
    var sum = 0
    for (let i = 0; i < danhsach.length; i++) {
        let soTien  = danhsach[i].tien
        sum += soTien
    }
    return sum
}

function tinhTongTien5000To10000(danhsach){
    var sum = 0
    for (let i = 0; i < danhsach.length; i++) {
        let soTien  = danhsach[i].tien
        if(soTien > 5000 && soTien < 10000){
            sum += soTien
        }
    }
    return sum
}

function inRaTienTronNghin(danhsach){
    for (let i = 0; i < danhsach.length; i++) {
        var soTien = danhsach[i].tien
        if(soTien%1000 == 0){
            console.log(danhsach[i]);
        }
    }
}

var tongTien = tinhTongTien(data)
console.log(tongTien);

var tongTien5Den10 = tinhTongTien5000To10000(data)
console.log(tongTien5Den10);

inRaTienTronNghin(data)