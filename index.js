const express=require('express');
const app=express();
const path=require('path');

app.use((req,res,next)=>{
    const now=new Date();
    const jour=now.getDay();
    const heure=now.getHours();
    const jourOuverte=jour>=1 && jour<=5;
    const heureOuverte=heure>=9 && heure<17;
    if(jourOuverte && heureOuverte)
    {
        next();
    }
    else{
        res.status(403).send("<h1 style=color:red>Accès interdit en dehors des heures ouvrables!!!!</h1>");

    }

});
app.use(express.static(path.join(__dirname,"public")));


const PORT=process.env.PORT||3000;

app.listen(PORT,console.log(`server is runnig au port ${PORT}`));