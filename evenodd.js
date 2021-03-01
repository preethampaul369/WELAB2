function ask()
{
    var s=prompt("Enter nos");
    var ar=s.split(",");
    for(var i=0;i<ar.length;i++)
    {
        if(ar[i]%2==0)
            console.log(ar[i]+" is even");
        else
            console.log(ar[i]+" is odd");
    }

}