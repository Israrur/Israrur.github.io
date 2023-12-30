var names = new Array();
names[0]="Israr";
names[1]="ali";
names[2]="jibran";
names[3]="kahir";
names[4]="sham";
names[5]="junaid";
names[6]="hani";
names[7]="Iqrar";
names[8]="aman";
names[9]="jangir";
names[10]="jawad";

for ( var i=0; i<names.length; i++)
{
    if (names[i].charAt(0) ==='j' || names[i].charAt(0)==='J')
    {
        console.log("Goodbye " + names[i])
    }
    else
    {
        console.log("Hello " + names[i])
    }
}