const screen=document.getElementById("screen");


function continuous_screen(value)
{
    screen.value+=value;
}

function clear_display()
{
    screen.value="";
}
function calculate_screen()
{
    let string=screen.value;
    let result,i,j;
    let str1='',str2='';
    for(i=0;i<string.length;i++)
    {
        if(string[i]==='+'||string[i]==='/'||string[i]==='*'||string[i]==='-')
        {
            for(j=0;j<i;j++)
            {
                str1+=string[j];
            }
            for(j=i+1;j<string.length;j++)
            {
                str2+=string[j];
            }
            break;
        }
    }
    let a=parseFloat(str1),b=parseFloat(str2);
    if(string[i]==='+')
    {
        result=a+b;
    }else if(string[i]==='-')
    {
        result=a-b;
    }else if(string[i]==='*')
    {
        result=a*b;
    }else if(string[i]==='/'){
        result=a/b;
    }
    screen.value=result;
}