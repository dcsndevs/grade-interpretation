
document.getElementById("table").style.display="none";
function subject(){
    event.preventDefault();

    const noSubjects = parseInt(document.getElementById("input-value").value);
    const table = document.getElementById("table");
    const grades = document.getElementById("grades");

    let subjectArray = [];



    for(i=0; i<noSubjects; i++){
        
        score = parseInt(prompt("Enter Score for Subject "+ (i+1)));
        
        if (score > 100 || score < 0){
            subjectArray[i] = "Subject "+(i+1)+ " : Undefined "+"("+score+")";            
        }
        else if (score > 89 && score <= 100) {
            subjectArray[i] = "Subject "+(i+1)+ " : A+ "+"("+score+")";
        } 
        else if (score > 79) {
            subjectArray[i] = "Subject "+(i+1)+ " : A "+"("+score+")";
        } 
        else if (score > 69) {
            subjectArray[i] = "Subject "+(i+1)+ " : A- "+"("+score+")";
        } 
        else if (score > 59) {
            subjectArray[i] =  "Subject "+(i+1)+ " : B "+"("+score+")";
        } 
        else if (score > 49) {
            subjectArray[i] =  "Subject "+(i+1)+ " : C "+"("+score+")";
        } 
        else if (score > 45) {
            subjectArray[i] =  "Subject "+(i+1)+ " : D "+"("+score+")";
        } 
        else if (score > 39) {
            subjectArray[i] =  "Subject "+(i+1)+ " : E "+"("+score+")";
        } 
        else {
            subjectArray[i] =  "Subject "+(i+1)+ " : F "+"("+score+")";
        }


    }

    for(i=0; i<subjectArray.length; i++){
        grades.innerHTML += "<tr><td>"+subjectArray[i]+"</td></tr>";
    }
    table.style.display = "block";

}