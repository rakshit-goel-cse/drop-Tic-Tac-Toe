
function GameOver(data){
    
    if(null===data || data.length<1){
        return false;
    }
    const len=data.length;
    let temp="*";
    let game=false;
    
    for(let k=0;k<len;k++){
        temp=data[k][0];
        game=true;
        for(let q=1;q<len;q++){
            //console.log("debug check- 1",data[k][q]==='*' , temp!==data[k][q]);
            if(data[k][q]==='*' || temp!==data[k][q]){
                game=false;
                break;
            }
        }
        if(game){
            return true;
        }
    }

    for(let k=0;k<len;k++){
        temp=data[0][k];
        game=true;
        for(let q=1;q<len;q++){
            if(data[q][k]==='*' || temp!==data[q][k]){
                game=false;
                break;
            }
        }
        if(game){
            return true;
        }
    }

    temp=data[0][0];
    game=true;
    for(let k=1;k<len;k++){
        if(data[k][k]==='*' || temp!==data[k][k]){
            game=false;
            break;
        }
    }
    if(game){
        return true;
    }
    game=true;
    temp=data[0][len-1];
    for(let k=1;k<len;k++){
        if(data[k][len-k-1]==='*' ||  temp!==data[k][len-k-1]){
            game=false;
            break;
        }
    }
    return game;
}

export default GameOver;