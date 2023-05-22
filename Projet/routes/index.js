import express from 'express';
import { Router } from 'express';
import Movie from "../models/Movies.js";

const router = Router();

router.use(express.urlencoded({ extended: true })); // Utilisez express.urlencoded pour l'analyse du corps de la requête

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

router.get("/film/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).send("Film non trouvé");
    }
    
    const templateData = {
      title: "Détails du film",
      styles: ["detail-film.css"],
      movie: movie,
    };

    res.status(200).render("detail-film", templateData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Une erreur est survenue");
  }
});

router.delete('/films/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndRemove(req.params.id);
    if (!movie) {
      // return res.status(404).send('Film non trouvé');
      return res.redirect('/');
    }
    // res.redirect('/'); je sais pas pq cette ligne de code fonctionne pas, genre si le film existe il va juste le supprimé sans faire la redirection...
  } catch (error) {
    console.error(error);
    res.status(500).send('Une erreur est survenue lors de la suppression du film');
  }
});

router.get('/films/:id/modifier', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).send('Film non trouvé');
    }

    const templateData = {
      title: 'Modifier le film',
      styles: ['modifier-film.css'],
      movie: movie,
    };

    res.status(200).render('modifier-film', templateData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Une erreur est survenue');
  }
});

router.post('/films/:id/modifier', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!movie) {
      return res.status(404).send('Film non trouvé');
    }
    res.redirect(`/film/${movie._id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Une erreur est survenue lors de la modification du film');
  }
});






router.get("/ajouter", (req,res) => {
    res.status(200).render("ajouter-film", {title : "Ajouter un film"})
})

export default router