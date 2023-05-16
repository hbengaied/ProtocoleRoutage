import {Router} from 'express'

const router = Router()

router.get("/", (req,res) => {
    res.status(200).render("acceuil", {title : "Page d'acceuil"})
})

router.get("/ajouter", (req,res) => {
    res.status(200).render("ajouter-film", {title : "Ajouter un film"})
})

export default router