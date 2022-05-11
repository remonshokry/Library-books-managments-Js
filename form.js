const scanBookInfo = function(){
    document.querySelector('.form-container').style.display = 'flex';
    const bookNameInput = document.querySelector(".book-name-div input");
    const priceInput = document.querySelector(".price-div input");
    const authorNameInput = document.querySelector(".author-name-div input");
    const authorEmailInput = document.querySelector(".author-email-div input");

    bookNameInput.value = '';
    priceInput.value = '';
    authorNameInput.value = '';
    authorEmailInput.value = '';
    
    let bookName , price , authorName , authorEmail ;
    
    
    document.querySelector('.submit-button').addEventListener('click' , ()=>{
        if(validateName(bookNameInput.value , bookNameInput)&&
        validateNumberOnly(priceInput.value , priceInput)&&
        validateName(authorNameInput.value , authorNameInput)&&
        validateEmail(authorEmailInput.value , authorEmailInput))
        {
            bookName = bookNameInput.value;
            price = priceInput.value;
            authorName = authorNameInput.value;
            authorEmail = authorEmailInput.value;
            
            booksArr.push(new Book(bookName , price , new author(authorName , authorEmail) ));
            bookNameInput.value = '';
            priceInput.value = '';
            authorNameInput.value = '';
            authorEmailInput.value = '';
            document.querySelector('.form-container').style.display = 'none';
            if (booksArr.length !== numberOfBooks)
            {
                scanBookInfo();
                
            }
            else
            {
                drawTable();
            }
        }
    });
    
    
};



