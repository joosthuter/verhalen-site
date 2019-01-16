# verhalen-site
Project WEB, Joost Huter

Joost Huter / klas: 207 / CMD / Project WEB / Januari 2019

#PROJECT WEB 
Voor project WEB was de opdracht een website te ontwikkelen in de huisstijl van de opdrachtgever (in mijn geval Eurostar) waar reizigers onderweg verhalen moeten kunnen vinden en lezen. In de website moeten twee microinteracties zitten en de website moet responsive zijn. 

Voor de website heb ik gebruikt: 

HTML
CSS
JavaScript

De bestanden van de website:

index.html (overzichtspagina)
index-filter.html (om filters toe te passen)
Index-gelezen.html (de tweede microinteractie start op deze pagina)
Login.html (om in te loggen)
Account.html (registreren)
Mijn-verhalen.html (blank state voor verhalen worden opgeslagen)
Mijn-full.html (Als er verhalen op de “mijn verhalen” pagina staan)

Styleyeet.css 
Script.css 

Daarnaast moest ook een verhaal interactief vormgegeven worden, daarvoor de volgende bestanden:

Haiku.html
Styleyote.css
Comments.html

##— INDEX. HTML —


###HEADER

De header van een pagina bevat een nav met daarin 3 a en 1 input
In de a staat een span en een img. Als de pagina kleiner wordt dan 51 em verdwijnt de span en blijft alleen de img over.

###UITGELICHT

De rest van de pagina bestaat uit sections. De eerste section zijn uitgelichte article’s. De eerste van de twee heeft de class “voor-jou” omdat op een andere pagina de background-image verander.

###FILTERS

De filters is een form met 3 fieldset’s. De form is in de eerste instantie hidden, en kan met de filterknop aangeroepen worden om uit te klappen. Dit gebeurt met de functie: showFilter( ). In showFilter( ) wordt er gekeken of de filters al zichtbaar zijn, en zo niet dan wordt de form op display “flex” gezet.

De filters staan in een section die op flex: flex-wrap staat, dus de filters hebben een breedte van 100% zodat er geen article naast komt.

###ARTICLES

Articles bevatten een <img> en een link naar het verhaal. Ook zit daar een knopje op om het verhaal toe te voegen aan “mijn verhalen”. Als daarop geklikt wordt gaat de functie rollGif( ) af.
rolGif( ) is een functie die ervoor zorgt dat de eerste microinteractie gaat afspelen. De .src van de <img> wordt aangepast en er wordt een gif in geplaatst. Dit gebeurt ook bij het icoon van “mijn verhalen”. Daarnaast wordt ook een melding in de footer op display “block” gezet.

##LOGIN.HTML

###VERIFICATIE 

Om te checken of de velden goed worden ingevuld door de gebruiker, maak ik in de <input> “required” en voeg ik een “pattern” toe. Het pattern voor “email” is  “[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.][a-zA-Z0-9]+" dit betekent dat de gebruiker eerst alle cijfers en letters mag invoeren, daarna een “@“ vervolgens nogmaals alle cijfers en letters, daarna een punt en ten slotte weer alle cijfers en letters: joosthuter1@gmail.com.

##AUTEUR

Joost Huter
