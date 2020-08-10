# Buscador de pesonajes de Rick and Morty

Se trata del ejercicio de la evaluación final del módulo 3 de Adalab correspondiente a React.

## Descripción

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

## El reto

Este ejercicio está elaborado en 12 horas y tenía como objetivo:

- Crear componentes con sintaxis correcta
- Crear una estructura adecuada de componentes
- Usar las props para pasar datos a componentes hijos
- Saber pintar listados
- Saber usar métodos funcionales de array (map, filter, etc.)
- Usar el estado para gestionar información de la interfaz
- Que el componente principal App.js manejara el estado de la aplicación
- Usar eventos en React para atender a interacciones del usuario
- Usar métodos del ciclo de vida para las peticiones al servidor
- Escribir un código sólido, sin errores en la consola
- React router
- Crea rutas navegables dentro de una aplicación
- Usar inglés para nombres de variables, funciones, clases, mensajes de commit, nombres de ficheros.
