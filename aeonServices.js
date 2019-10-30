import db from "./database";

const getAeonServices = (server) => {
  
  server.get("/aeon", (req, res) => {
    res.json(db.aeonTimeline.find());
  });
  
  server.get("/aeon/:id", (req, res) => {
    const configId = req.params.id;
    const configs = db.aeonTimeline.find({ id: configId });
    if (configs.length) {
       res.json(configs[0]);
    } else {
       res.json({ message: `config ${configId} doesn't exist` })
    }
  });
  
  server.post("/aeon", (req, res) => {
    const config = req.body;
    console.log('Adding new config: ', config);
    // add new config to db
    db.aeonTimeline.save(config);
    // return updated list
    res.json(db.aeonTimeline.find());
  });
  
  server.put("/aeon/:id", (req, res) => {
    const configId = req.params.id;
    const config = req.body;
    console.log("Editing config: ", configId, " to be ", config);
  
    db.aeonTimeline.update({ id: configId }, config);
  
    res.json(db.aeonTimeline.find());
  });
  
  server.delete("/aeon/:id", (req, res) => {
    const configId = req.params.id;
    console.log("Delete config with id: ", configId);
  
    db.aeonTimeline.remove({ id: configId });
  
    res.json(db.aeonTimeline.find());
  });

  return server;
}

export default getAeonServices;