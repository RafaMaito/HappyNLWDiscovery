const Database = require("./db.js");

function saveOrphanage(db, orphanage) {
  return db.run(`
  INSERT INTO orphanages (
      name,
      lat,
      lng,
      description,
      whatsapp,
      images,
      instructions,
      opening_hours,
      open_on_weekends
  ) VALUES (
     "${orphanage.name}",
     "${orphanage.lat}",
     "${orphanage.lng}",
     "${orphanage.description}",
     "${orphanage.whatsapp}",
     "${orphanage.images}",
     "${orphanage.instructions}",
     "${orphanage.opening_hours}",
     "${orphanage.open_on_weekends}"
  )
  `);
}

module.exports = saveOrphanage;
