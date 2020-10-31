# Buscador de pesonajes de Rick and Morty

Crear una página web responsive con HTML, SASS y React haciendo uso de los datos de una api, pintar los primeros 20 personajes de la serie y filtrarlos por nombre a través de un input de texto.

## El listado de personajes

Utilizamos los datos de https://rickandmortyapi.com/documentation/#get-all-characters o https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json y pintamos la foto, nombre y especie del personaje.

## El filtrado de personajes

Para poder cribar la información, añadimos la funcionalidad de filtrar por nombre mediante un input de texto que deje en la pantalla solo aquellos personajes cuyo nombre se contiene las letras escritas.

## Los componentes de React

Se requerían al menos 3 componentes como mínimo:

- Componente para los filtros
- Componente para el listado
- Componente para la tarjeta de cada personaje del listado Componente para el detalle de cada personaje

## Detalle de personajes

Al hacer clic sobre la tarjeta de un personaje, su información aparece a pantalla completa. Para hacer esto utilizamos rutas y React router. En la pantalla de detalle aparece, además de la foto, nombre y especie; el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.
