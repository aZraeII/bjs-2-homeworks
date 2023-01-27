class AlarmClock{
    constructor(alarmCollection, id){
        this.alarmCollection = [];
        this.intervalId = id; 
    }
    addClock(time, callback){
        if(time[0] >= 0 && time[0] <= 9 && time[1] >= 0 && time[1] <= 9 && time[2] === ":" && time[3] >= 0 && time[3] <= 9 && time[4] >= 0 && time[4] <= 9 && time.length === 5){
            this.alarmCollection.push(time);
        }
        if(isNaN(time) === true || isNaN(callback) === true){
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if(this.alarmCollection.find(item => item === time)){
            console.warn('Уже присутствует звонок на это же время');
        }

    }
}
