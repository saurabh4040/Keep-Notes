function addTask(){
    const m=document.getElementById('task').value;
    if(m){
        const k=document.createElement('li');
        k.textContent=m;
        document.getElementById('taskList').appendChild(k);
        document.getElementById('task').value='';
    }
}