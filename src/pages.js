const Database = require("./database/db.js");
const saveOrphanage = require("./database/saveOrphanage.js");

module.exports = {
  index(req, res) {
    return res.render("index");
  },

  async orphanage(req, res) {
    const id = req.query.id;

    try {
      const db = await Database;
      const results = await db.all(`SELECT * FROM orphanages WHERE id=${id}`);
      const orphanage = results[0];

      orphanage.images = orphanage.images.split(",");
      orphanage.firstImage = orphanage.images[0];

      orphanage.open_on_weekends =
        orphanage.open_on_weekends == "0" ? false : true;
      console.log(orphanage.whatsapp);
      return res.render("orphanage", { orphanage: orphanage });
    } catch (error) {
      return res.send("Erro no Banco de Dados: " + error);
    }
  },

  async orphanages(req, res) {
    try {
      const db = await Database;
      const orphanages = await db.all("SELECT * FROM orphanages");
      return res.render("orphanages", { orphanages });
    } catch (error) {
      return res.send("Erro no Banco de Dados: " + error);
    }
  },

  createOrphanage(req, res) {
    return res.render("create-orphanage");
  },

  async saveOrphanage(req, res) {
    const fields = req.body;
    try {
      const db = await Database;
      await saveOrphanage(db, {
        name: fields.name,
        lat: fields.lat,
        lng: fields.lng,
        description: fields.description,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends,
      });

      return res.redirect("/orphanages");
    } catch (error) {
      console.log(error);
      res.send("Erro no banco de dados! " + error);
    }
  },
};
