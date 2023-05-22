import {Router} from 'express'
import Movie from "../models/Movies.js";

const router = Router()


router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find(); // Récupère tous les films depuis la base de données

    const templateData = {
      title: "Page d'accueil",
      styles: ["acceuil.css"],
      movies: movies, // Passe les films à la vue
    };

    res.status(200).render("acceuil", templateData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur serveur");
  }
});


router.get("/ajouter", (req,res) => {
    res.status(200).render("ajouter-film", {title : "Ajouter un film"})
})

export default router