var cel=document.getElementById('celsius');
        var fah=document.getElementById('fahrenheit');
        var kel=document.getElementById('kelvin');
        cel.addEventListener('input',function(){
            let celsius=this.value;
            let f=(parseFloat(celsius*9/5)+32);
            fahrenheit.value=f;
            let k=(parseFloat(celsius)+273.15);
            kelvin.value=k;
        });
       fah.addEventListener('input',function(){
        let fahrenheit=this.value;
        let c=(parseFloat(fahrenheit-32)*5/9);
        celsius.value=c;
        let k=(parseFloat((fahrenheit-32)*5/9)+273.15);
        kelvin.value=k;
       });
       kel.addEventListener('input',function(){
        let kelvin=this.value;
        let c=(parseFloat(kelvin-273.15));
        celsius.value=c;
        let f=(parseFloat((kelvin-273.15)*9/5)+32);
        fahrenheit.value=f
       })