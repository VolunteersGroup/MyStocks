StartUp();
//Script functions
function StartUp() {
    //Public declarations
    var notescount;
    var noteCollection;
    const date = new Date();
    var myTime=document.getElementById('my-date');
    var notesCount=document.getElementById('notes-count');
    const myDratfsArea = document.querySelector('#drafts'); 
    const SummaryArea = document.querySelector('#conclusion');
    console.clear;  console.log(myDratfsArea.value+": Session Started");  
    notescount=0;
    noteCollection ="Notes Summary:\r\n";
    myTime.innerText=date.toLocaleString();
    notesCount.innerHTML="<b>Notes:</b>" +"\xa0"+notescount;   
    SummaryArea.innerHTML =noteCollection;
    myDratfsArea.value="Hello Moulay Beilkhayr\r\n";
    showDraftArea() ;
    }

function saveText() {
    console.clear;console.log("=========Saving=============");
    notescount++; 
    noteCollection+="Note "+notescount+": "+myDratfsArea.value+"\r\n"; //notesArray[notescount];    
    notesCount.innerHTML="<b>Notes:</b>" +"\xa0"+notescount;
    }
function showDraftArea() {
    myDratfsArea.style.display="block";
    SummaryArea.style.display="none";    
}

function clearText() {
    console.clear;;console.log("=========Cleared=============");
    if (myDratfsArea.style.display=="block") {
        myDratfsArea.value="";
    }
    }

function summary() {
        console.clear;console.log("===========Summary===========");
        myDratfsArea.style.display="none";
        SummaryArea.style.display="block";
        SummaryArea.style.width="100%";
        SummaryArea.innerHTML =noteCollection;
    }

const CreateTextFile = () => {
    const link = document.createElement("a");
    const content =document.querySelector('#drafts').value;
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = "sample.txt";
    link.click();
    URL.revokeObjectURL(link.href);
};
