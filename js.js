document.write('<h1>nama-nama tahun kabisat</h1>')
for(let i = 1600;i <= 2024; i++){
    if(i % 4 != 0){
        document.write(i + '<span> bukan tahun kasibat </span><br>')
    }
    else if(i % 100 !=0){
        document.write(i + '<span> merupakan tahun kasibat </span><br>')
    }
    else if(i % 400 !=0){
        document.write(i + '<span> bukan tahun kasibat </span><br>')
    }
    else{
        document.write(i + '<span> bukan tahun kasibat </span><br>')
    }
}