import * as dao from "./dao.js";
function ProgramRoutes(app) {
  const createProgram = async (req, res) => {
    const program = await dao.createProgram(req.body);
    res.json(program);
  };

  const findProgramByUser = async (req, res) => {
    const program = await dao.findProgramByUser(req.params.user);

    res.json(program);
  };

  

  const updateProgram = async (req, res) => {
    const { programName } = req.params;

    const status = await dao.updateProgram(programName, req.body);
    //req.session['currentUser'] = currentUser;
    res.json(status);
  };


  app.post("/api/programs", createProgram);

  app.get("/api/programs/:user",  findProgramByUser);
  app.put("/api/programs/:program", updateProgram);

   
}
export default ProgramRoutes;