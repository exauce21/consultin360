# Consult’in360 — site vitrine

Site statique construit à partir de la maquette PDF fournie.

## Structure

- `index.html` : contenu de la page
- `css/style.css` : mise en page, responsive et animations
- `js/main.js` : menu mobile, révélations au défilement et formulaire mailto
- `assets/` : logos, marque et photo fournis

## Prévisualiser

Ouvrez `index.html` dans un navigateur. Pour lancer un serveur local depuis ce dossier :

```bash
python3 -m http.server 8000
```

Puis ouvrez `http://localhost:8000`.

Le formulaire prépare un e-mail dans l’application de messagerie du visiteur. Il n’enregistre pas les demandes sur un serveur.
