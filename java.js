let percentage=prompt("Enter your age");
let Grade;

if(percentage>=90 && percentage<=100)

{
    console.log("Grade A+1")  
    Grade = "A+1"
}
else if(percentage>=80 && percentage<=89)
{
    console.log("Grade A1")
    Grade = "A1"
}
else if(percentage>=70 && percentage<=79)
{
    console.log("Grade A")
    Grade = "A"
}
else if(percentage>=60 && percentage<=69)
{
    console.log("Grade B")
    Grade = "B"
}
else if(percentage>=50 && percentage<=59)
{
    console.log("Grade c")
    Grade = "C"
}
else if(percentage>=40 && percentage<=49)
{
    console.log("Grade F")
    Grade = "F"
}
else if(percentage<34)
{
    console.log("Fail")
    Grade ="Fail"
}
else
{
    console.log("Nonono")
}



switch(Grade)
{
    case"A+1":
    console.log("ya good ha😎");
    break;
    case"A1":
    console.log("isy bhi ham good kh sakty han☺");
    break;
    case "A":
        console.log("ya tary lia acha tha");
break;
case"B":
console.log("thori or mehnat karo shayad A grade aa jay☹");
break;
case "C":
console.log("ya tum na acha nhi kia ghar ka nam badnam kar diya😔");
break;
case"D":
console.log("daffa ho jaou ghar ko or batan dhoo jaa kar 😡");
break;
case"fail":
console.log("ya kia mazzq tha");
break;
}

