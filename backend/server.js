const {app} = require("./app");

// const app = require("./app");

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log('server is listening to the PORT => '+ PORT)
})