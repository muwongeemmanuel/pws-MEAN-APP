/**
 * routes/index.js 
 **/

module.exports = function(app) {
    //testing server
    // app.use("/",(req, res)=>{
    //     res.send({
    //         message: 'Hello from the Express API',
    //     });
    // })
    app.use("/contact", require("./contact"));
}