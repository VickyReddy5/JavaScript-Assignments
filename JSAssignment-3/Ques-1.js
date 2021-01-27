var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }
];
for (let index = 0; index < library.length; index++) {
    msg=''
    if(library[index].readingStatus){
        msg+='Already read'
    }else{
        msg+='You still need to read'
    }
    msg = `${msg} '${library[index].title}' by ${library[index].author}.`
    console.log(msg)
    
}
