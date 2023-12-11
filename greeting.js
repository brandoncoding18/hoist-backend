function Greeting(app) {
    
  const greeting = async (req, res) => {
    res.json("Hello");
};


  app.get("/", greeting);
}
export default Greeting;