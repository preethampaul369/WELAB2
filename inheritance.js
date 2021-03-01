class A
{
    constructor(p1,p2)
    {
        this.p1=p1;
        this.p2=p2;
    }
    f1()
    {
        console.log("DataAttributes of class A(Parent Class): ",p1," ",p2);
    }
}
class B extends A
{
    constructor(p1,p2,p3)
    {
        super(p1,p2);
        this.p3=p3;
    }
    f2()
    {
        console.log("DataAttributes of class B(Child Class): ",this.p1," ",this.p2," ",this.p3);
    }
}

var Bobj=new B("one","two","three");
Bobj.f2();