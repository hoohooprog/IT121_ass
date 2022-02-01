/* 
    either a Book object or comment object, can be expanded to include Author object
    that has a collection of books as array or JSON in  a Author object
*/
function Book(title, author, genre, summary){

    this.title = title;
    this.author = author;
    this.genre = genre;
    this.summary = summary;

    this.retTitle = function(){
        return this.title;
    };

    this.retAuthor = function(){
        return this.author;
    };

    this.retGenre = function(){
        return this.genre;
    };

    this.retSummary = function(){
        return this.summary;
    };

}

let book1 = new Book("Constantine", "frusciante", "funk horror", "ABC,123 etc");
let book2 = new Book("Liposuction: The definitive guide","Guru K", "medical","XYZ,123 etc");

let el_bookTitle = document.getElementById('titles_available');
let el_bookGenre = document.getElementById('genres_available');

/* display current collection of Titles and Genre, next iteration to write in by array */

el_bookTitle.innerHTML = book1.retTitle() + "</br>" + book2.retTitle();

el_bookGenre.innerHTML = book1.retGenre() + "</br>" + book2.retGenre();

