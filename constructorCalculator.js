<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function Calculator(){

    this.read=function(){
    this.a=+(prompt("enter the first value",));
    this.b=+(prompt("enter the second value",));
    }
    this.sum=function(){
        return this.a+this.b;
    }
this.mul=function(){
    return this.a*this.b;
}
}
let calculator=new Calculator();
calculator.read();
alert("sum="+calculator.sum());
alert("mul="+calculator.mul());

    </script>
</body>
</html>
