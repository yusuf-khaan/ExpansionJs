class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayDetails() {
        return `Name is ${this.name} and Age is ${this.age}`;
    }
}

class Member extends Person {
    constructor(name, age, id, membershipType) {
        super(name, age);
        this.id = id;
        this.membershipType = membershipType;
    }
}

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class Loan {
    constructor(memberId, isbn, dueDate) {
        this.memberId = memberId;
        this.isbn = isbn;
        this.dueDate = dueDate;
    }
}

class Library {
    constructor() {
        this.books = new Map(); 
        this.members = new Map();
        this.loans = []; // Array to track loans
    }

    addBooks(title, author, isbn) {
        if (this.books.has(isbn)) {
            let bookDetails = this.books.get(isbn);
            bookDetails.count += 1; 
        } else {
            this.books.set(isbn, { count: 1, title: title, author: author });
        }

        console.log(this.books.get(isbn));
    }

    registerMembers(name, age, id, membershipType) {
        if (this.members.has(id)) {
            console.log(`Member with ID ${id} already exists.`);
            return;
        }

        this.members.set(
            id,
            new Member(name, age, id, membershipType)
        );

        console.log(this.members.get(id));
    }

    bookIssue(id, isbn, dueDate) {
        if (!this.members.has(id)) {
            console.log(`No member found with ID ${id}`);
            return;
        }

        if (!this.books.has(isbn)) {
            console.log(`No book found with ISBN ${isbn}`);
            return;
        }

        let bookDetails = this.books.get(isbn);
        if (bookDetails.count === 0) {
            console.log(`Book "${bookDetails.title}" is currently unavailable.`);
            return;
        }

        bookDetails.count -= 1; 
        this.books.set(isbn, bookDetails);

        const loan = new Loan(id, isbn, dueDate);
        this.loans.push(loan);

        console.log(
            `Book "${bookDetails.title}" issued to Member ID: ${id} until ${dueDate}`
        );
    }

    listLoans() {
        console.log("Current Loans:");
        for (const loan of this.loans) {
            console.log(
                `Member ID: ${loan.memberId}, ISBN: ${loan.isbn}, Due Date: ${loan.dueDate}`
            );
        }
    }
}

const myLibrary = new Library();

myLibrary.addBooks("JavaScript Basics", "John Doe", "1");

myLibrary.registerMembers("Bob", 30, 2, "Silver");

myLibrary.bookIssue(2, "1", "2024-12-31");
myLibrary.bookIssue(3, "2", "2024-11-30"); // invalid member ID
myLibrary.bookIssue(1, "12", "2024-10-15"); // invalid ISBN
myLibrary.listLoans(); // show all loans
