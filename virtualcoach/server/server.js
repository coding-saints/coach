Meteor.startup(function () {
  if (Books.find().count() === 0) {
    var books = [
      {title: "Coach 1", author: "Vince Lombardi", url: "alvin@email.com/"},
      {title: "Coach 2", author: "John Wooden", url: "alvin@email.com/"},
      {title: "Coach 3", author: "Bob Knight", url: "alvin@email.com/"},
      {title: "Coach 4", author: "Pat Riley", url: "alvin@email.com/"},
      {title: "Coach 5", author: "Tom Landry", url: "alvin@email.com"}
      ];
    _.each(books, function (book) {
      Books.insert(book);
    });
  }
});
