import express from "express";
const app = express();
const port =3000;

app.get("/" , (req,res)=> {
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact" , (req,res)=> {
    res.send("<h1>Contact me</h1><p>My name is abdelrahman</p>");
});
app.get("/about" , (req,res)=> {
    res.send("<h1>About me</h1><p>Phone :01231231231</p>");
});
app.listen(port , () =>{
    console.log(`Server started on port ${port}`);
});