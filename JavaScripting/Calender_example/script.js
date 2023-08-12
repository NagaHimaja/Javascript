const countdown = ()=> {
    const countDate = new Date('november 12, 2023, 00:00:00').getTime();
    console.log('november 12:'+ countDate)
    const now = new Date().getTime();
    console.log('now :'+now)
    let diff =countDate-now;
    console.log(diff)
// time
second = 1000 ;
min = 60*second;
hour = min*60;
day= hour * 24;
console.log('day :'+day)
// calc the day
const t_day = Math.floor(diff/day);
dayleft = document.querySelector('.day')
dayleft.innerHTML =t_day;
console.log("day remaining : "+t_day);


const t_hour=  Math.floor(((diff%day)/hour));
hourleft = document.querySelector('.hour')
hourleft.innerHTML = t_hour
console.log("hrs remaining : "+t_hour);



const t_min=  Math.floor(((diff%hour)/min));
minleft = document.querySelector('.min')
minleft.innerHTML = t_min
console.log("minutes remaining : "+t_min);

const t_sec=  Math.floor(((diff%min)/second));
secleft = document.querySelector('.sec')
secleft.innerHTML = t_sec;
console.log("sec remaining : "+t_sec);

console.log(diff)
};
setInterval(countdown, 1000)

