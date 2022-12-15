function affichagetab()
{
    document.write('<table border=2px width=30%');
    for(let i = 0 ; i <= 5; i++){
        document.write('<tr><td><center>*</center></td><td><center>*</center></td><td><center>*</center></td></tr>');
    }
    document.write('</table>');
}

function affichagetab2()
{
    document.write('<table align=center margin-top=15px border=2px width=30% ');
    var ligne = prompt('Donnez Ligne');
    for(let i = 1 ; i <= ligne; i++){
        document.write("<tr><td><center>"+i+"</center></td><td><center>*</center></td><td><center>*</center></td></tr>");
    } 
    document.write('</table>');
}

function seconnecter()
{
    var log= prompt('Votre Nom dutilisateur')
    var mdp= prompt('Votre MDP')

    if (log =='admin' & mdp =='admin')
    document.write("Bienvenue"+login)
    else
    alert('Mauvais log')
    
}

function seconnecter2()
{
    var i = 0;
    do{
        var id = prompt('User');
        var mdp = prompt('MDP');
        if (id == 'admin' && mdp=='admin')
        {
            document.write('Bienvenue'+id)
            break;
        }
        else
        alert("Mauvais log");
        i+=1;

    }while (i<3);
    if(i==3)
    alert('Acces refuse')
}

function cdc()
{
    var chaine = prompt('Donnez un mot')
    document.write(chaine.toUpperCase()+"<br>")
    document.write(chaine.toLowerCase()+"<br>")
    document.write('La chaine contient ' +chaine.length+ ' caractères'+'<br>')
    document.write('La première lettre est  '+ chaine.substr(0,1)+'<br>')
}

function swich()
{
    var color = prompt('Entrez une couleur');
    switch(color)
    {
        case "rouge" : document.body.style.background = 'red';
        break;
        case "ROUGE" : document.body.style.background = 'red';
        break;
        case "bleu" : document.body.style.background = 'blue';
        break;
        case "BLEU" : document.body.style.background = 'blue';
        break;
        case "jaune" : document.body.style.background = 'yellow';
        break;
        case "JAUNE" : document.body.style.background = 'yellow';
        break;
    }

}

function bonus()
{


    var art = prompt('Votre Article')
    var prix = prompt('Le Prix de votre atricle')
    var qte = prompt('La quantite darticle')

    tot1 = prix + qte

    document.write('Le prix total de '+art+ 'est de  '+tot1)
    
}