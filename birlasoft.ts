class Person
{
   Age:number;
   Name:string;

constructor(a:number,n:string)
{
    this.Age=a;
    this.Name=n;
}
display(): void
{
    console.log(this.Age,this.Name);

}
}
let objperson= new Person(21,"HIMANSHU");
objperson.display();
