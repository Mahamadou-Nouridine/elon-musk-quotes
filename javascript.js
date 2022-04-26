let random;
let proverbe =[
    "“Il est possible que les gens ordinaires choisissent d’être extraordinaires.” <br> <div style='text-align: right;''> -- Elon musk</div>",
    "“La patience est une vertu, mais j’apprends la patience. Et c’est une leçon difficile.” <br> <div style='text-align: right;''> -- Elon musk</div>", 
    "“La première étape consiste à se convaincre que quelque chose est possible, alors il y aura plus de probabilités que cela arrive.” <br> <div style='text-align: right;''> -- Elon musk</div>", 
    "“Je pense que c’est le meilleur conseil : réfléchissez constamment à la façon dont vous pourriez mieux faire les choses, et vous remettre en question.” <br> <div style='text-align: right;''> -- Elon musk</div>", 
    "“Je ne crée pas d’entreprises pour créer des entreprises, mais pour faire avancer les choses.” <br> <div style='text-align: right;''> -- Elon musk</div>", 
    "“La vie est trop courte pour une rancune à long terme.” <br> <div style='text-align: right;''> -- Elon musk</div>", 
    "“Si vous vous levez le matin en pensant que l’avenir sera meilleur, c’est une journée ensoleillée. Sinon, ce n’est pas le cas.” <br> <div style='text-align: right;''> -- Elon musk</div>", 
    "“Les gens devraient poursuivre ce qui les passionne. Cela les rendra plus heureux que n’importe quoi d’autre.” <br> <div style='text-align: right;''> -- Elon musk</div>"];
function generer(){
    
    random = Math.floor(Math.random() * (4 -0+1) +0);
    document.getElementById("proverbe").innerHTML = `${proverbe[random]}`
}

document.getElementById("button").addEventListener("click", () =>generer())