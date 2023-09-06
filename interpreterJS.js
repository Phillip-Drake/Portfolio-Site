async function executeCode(charFrom){
    //only executes if done
    //resets registry, reads code from textArea
    code = trimCode(document.querySelector(".codeDisplay").value);
    let totalOps = 0;
    for(let i = charFrom; i < code.length; i++)
    {
        //performs necessary operations for each brainf*ck operation
        switch(code[i])
        {
            case '<':
                shiftLeft();
                break;
            case '>':
                shiftRight();
                break;
            case '+':
                increment();
                break;
            case '-':
                decrement();
                break;
            case ',':
                input();
                break;
            case '.':
                output();
                break;
            case '[':
                i = openLoop(i);    
                break;
            case ']':
                i = closeLoop(i);
                break;
            default:
        }
        updateRegistry();
        placePointer();
        totalOps++;
        if(totalOps > 100)
            break;
    }
    if(outputString != "")
    {
        alert(outputString);
    }
}
