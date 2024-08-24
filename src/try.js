

let gname='Nitin';
gname=gname.toLowerCase();
const GuestList=['nitin', 'pawan','ritu','aman'];
let flag=false;

    for(let i=0;i<4;i++){
    if (GuestList[i]==gname){
        console.log('welcome to the party' ,gname);
        flag=true;
        
    }
}
    if(flag==false){
        console.log(`sorry you may leave ${gname}`);
    }



    

