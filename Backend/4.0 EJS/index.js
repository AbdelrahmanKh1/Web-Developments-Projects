import express from "express";

const app = express();
const port =3000;

app.get("/", (req,res) => {
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let adv = "it's time to works hard";
    if(day === 0 || day ===6){
        type = "the weekend";
        adv = " it is tie to have fun";
    }
    res.render("/views/index.ejs", {
        dayType : type,
        advice : adv,
    });
});
app.listen(port, () => {
    console.log(`dasdad + ${port}`);
})