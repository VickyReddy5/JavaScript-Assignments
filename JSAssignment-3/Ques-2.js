var age =Number(prompt('Enter your age'))
while(age==Nan){
    age =Number(prompt('Wrong Input! Enter your age correctly'))
}
if (age<18)
        alert('Not legal age to drive')
    else
        alert('Drive Safe')
