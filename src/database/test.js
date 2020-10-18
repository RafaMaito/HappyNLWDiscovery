const Database = require("./db.js");
const saveOrphanage = require("./saveOrphanage.js");
Database.then(async (db) => {
  // await saveOrphanage(db, {
  //   name: "Lar dos meninos",
  //   lat: "-31.7592286",
  //   lng: "-52.357197",
  //   description:
  //     "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
  //   whatsapp: "999999889",
  //   images: [
  //     "https://images.unsplash.com/photo-1595967783875-c371f35d8049?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

  //     "https://images.unsplash.com/photo-1576043005963-f4b2a8d1195d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
  //   ],
  //   instructions:
  //     "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
  //   opening_hours: "Horário de visitas Das 8h até 18h",
  //   open_on_weekends: "0",
  // });
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);
  // const orphanage = await db.all("SELECT * FROM orphanages WHERE id = 2");
  // console.log(orphanage);
  // await db.run("DELETE FROM orphanages WHERE id = 4");
  // console.log(selectedOrphanages);
});
