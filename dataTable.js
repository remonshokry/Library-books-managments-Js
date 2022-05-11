const addButton = document.querySelector('thead input[type = "button"]');
let table = document.querySelector('table');

const drawTable = function(){
    document.querySelector('.books-table').style.display = 'flex';    
    for (let i = 0 ; i < booksArr.length ; i++)
    {
        drawTableRow(booksArr[i]);
    }
}


const drawTableRow = function(_book) {
    let row = document.createElement('tr');


    //name
    let nameCell = document.createElement('td');
    let nameField = document.createElement('input');
    nameField.setAttribute('type' , 'text');
    nameField.classList.add('name-field');
    nameField.setAttribute('disabled' , true);
    nameField.setAttribute('value' , _book.name);
    let nameValidation = document.createElement('div');
    nameValidation.classList.add('validation');
    

    //date
    let dateCell = document.createElement('td');
    let dateField= document.createElement('input');
    dateField.setAttribute('type' , 'text');
    dateField.classList.add('date-field');
    dateField.setAttribute('disabled' , true);
    dateField.setAttribute('value' , _book.date) ;
    
    //price
    let priceCell = document.createElement('td');
    let priceField = document.createElement('input');
    priceField.setAttribute('type' , 'text');
    priceField.classList.add('price-field');
    priceField.setAttribute('disabled' , true);
    priceField.setAttribute('value' , _book.price) ;
    let priceValidation = document.createElement('div');
    priceValidation.classList.add('validation');
    

    //authoe name
    let authorNameCell = document.createElement('td');
    let authorNameField = document.createElement('input');
    authorNameField.setAttribute('type' , 'text');
    authorNameField.classList.add('author-name-field');
    authorNameField.setAttribute('disabled' , true);
    authorNameField.setAttribute('value' , _book.author.name) ;
    let authorNameValidation = document.createElement('div');
    authorNameValidation.classList.add('validation');
    
    //authoe email
    let authorEmailCell = document.createElement('td');
    let authorEmailField = document.createElement('input');
    authorEmailField.setAttribute('type' , 'text');
    authorEmailField.classList.add('author-email-field');
    authorEmailField.setAttribute('disabled' , true);
    authorEmailField.setAttribute('value' , _book.author.email) ;
    let authorEmailValidation = document.createElement('div');
    authorEmailValidation.classList.add('validation');
    
    let editButtonCell = document.createElement('td');
    let editButton = document.createElement('input');
    editButton.setAttribute('type'  ,'button');
    editButton.setAttribute('value'  ,'Edit');
    editButton.classList.add('edit-button');

    editButton.addEventListener('click' , function(){
        editBook(this.parentNode.parentNode);
    });
    

    let deleteButtonCell = document.createElement('td');
    let deleteButton = document.createElement('input');
    deleteButton.setAttribute('type' , 'button');
    deleteButton.setAttribute('value' , 'Delete');
    deleteButton.classList.add('delete-button');

    deleteButton.addEventListener('click' , function(){
        deleteBook(this.parentNode.parentNode);
    });
    
    nameCell.appendChild(nameField);
    nameCell.appendChild(nameValidation);
    dateCell.appendChild(dateField);
    priceCell.appendChild(priceField);
    priceCell.appendChild(priceValidation);
    authorNameCell.appendChild(authorNameField);
    authorNameCell.appendChild(authorNameValidation);
    authorEmailCell.appendChild(authorEmailField);
    authorEmailCell.appendChild(authorEmailValidation);
    deleteButtonCell.appendChild(deleteButton);
    editButtonCell.appendChild(editButton);
    
    row.appendChild(nameCell);
    row.appendChild(dateCell);
    row.appendChild(priceCell);
    row.appendChild(authorNameCell);
    row.appendChild(authorEmailCell);
    row.appendChild(editButtonCell);
    row.appendChild(deleteButtonCell);

    table.appendChild(row);
    
}


addButton.addEventListener('click' , ()=>{
    booksArr.push(new Book('book name' , "price" , new author('author name' , "author email") ));
    drawTableRow(booksArr.at(-1));
});


const deleteBook = function(row){
    let bookIndex = getBookIndexByRow(row);
    console.log(bookIndex);
    booksArr.splice(bookIndex , 1);
    table.removeChild(row);
    
};


const editBook = (row)=>{
    const bookIndex = getBookIndexByRow(row);
    let saveButton = document.createElement('input');
    let cancelButton = document.createElement('input');

    saveButton.setAttribute('type' , 'button');
    cancelButton.setAttribute('type' , 'button');
    
    saveButton.setAttribute('value' , 'Save');
    cancelButton.setAttribute('value' , 'Cancel');

    [].at.call(row.children , -2).children[0].style.display = 'none';
    [].at.call(row.children , -1).children[0].style.display ='none';

    [].at.call(row.children , -2).appendChild(saveButton);
    [].at.call(row.children , -1).appendChild(cancelButton);


    
    [].forEach.call(row.children ,(element , index)=>{
        if (index < 5)
        {
            element.children[0].removeAttribute('disabled');
            element.children[0].style.border = '2px solid black';

        }
    });
    
    
    saveButton.setAttribute('value' , 'Save');
    cancelButton.setAttribute('value' , 'Cancel');
    
    
    let nameField = row.querySelector('.name-field');
    let dateField = row.querySelector('.date-field');
    let priceField = row.querySelector('.price-field');
    let authorNameField = row.querySelector('.author-name-field');
    let authorEmailField = row.querySelector('.author-email-field');
    
    saveButton.addEventListener('click' , ()=>{
        
        if(validateName(nameField.value , nameField)&&
        validateNumberOnly(priceField.value , priceField)&&
        validateName(authorNameField.value , authorNameField)&&
        validateEmail(authorEmailField.value , authorEmailField))
        {
            booksArr[bookIndex].name = nameField.value;
            booksArr[bookIndex].date = dateField.value;
            booksArr[bookIndex].price = priceField.value;
            booksArr[bookIndex].author.name = authorNameField.value;
            booksArr[bookIndex].author.email = authorEmailField.value;
            
            
        [].forEach.call(row.children ,(element , index)=>{
            if (index < 5)
            {
                element.children[0].setAttribute('disabled', 'true');
                element.children[0].style.border = 'none';

            }
        });
        
        cancelButton.style.display = 'none';
        saveButton.style.display = 'none';

        [].at.call(row.children , -2).children[0].style.display = 'inline';
        
        [].at.call(row.children , -1).children[0].style.display = 'inline';

        [].forEach.call(document.querySelectorAll('.validation') , (element)=>{
            element.textContent = '';
        });


        }
        
        
    });
    
    cancelButton.addEventListener('click' , ()=>{        
        nameField.value = booksArr[bookIndex].name ;
        priceField.value = booksArr[bookIndex].price ;
        authorNameField.value = booksArr[bookIndex].author.name;
        authorEmailField.value = booksArr[bookIndex].author.email;
        
        [].forEach.call(row.children ,(element , index)=>{
            if (index < 5)
            {
                element.children[0].setAttribute('disabled', 'true');
                element.children[0].style.border = 'none';

            }
        });
        
        cancelButton.style.display = 'none';
        saveButton.style.display = 'none';

        [].at.call(row.children , -2).children[0].style.display = 'inline';
        
        [].at.call(row.children , -1).children[0].style.display = 'inline';

        [].forEach.call(document.querySelectorAll('.validation') , (element)=>{
            element.textContent = '';
        });
        
    });
        
};




const getBookIndexByRow = (row)=>{
    for (let i = 0 ; i<booksArr.length ; i++)
    {
        if (row.children[0].children[0].value === booksArr[i].name)
        {
            return i;
        }
    }

}
