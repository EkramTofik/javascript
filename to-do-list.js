  let task=[];
  let value;
  let list;
do{           
      value=prompt(`1,- Add a task
                  2,- View all tasks
                  3, -Remove a task
                  4,- Exit`);

                           if(  value===null ||  value.trim()==="" ){
                            alert('please choose from the list ');
                           continue;
                           }
                          else if(+value===1){
                            let taskAdded=prompt('add the task you want');
                            task.push(taskAdded);
                          }
                          else if(+value===2){
                          list = "The list of tasks:\n";
                          for(let x=0; x<task.length; x++){
                              list += `${x + 1}. ${task[x]}\n`;
                          }
                          alert(list);

                          }
                          else if(+value===3){
                            let taskNumber=prompt(`which task number you want to delete from` );
                            task.splice(taskNumber-1,1);
                            alert('you have successfully removed the task');
                          }
         } while(+value!==4);
