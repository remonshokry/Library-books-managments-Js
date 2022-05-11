let booksArr = [];
let numberOfBooks = 0;

window.addEventListener('load' , ()=>
{
    getNumberOfBooks();
});



//classes 

function Book(_name , _price , _author)
{
    this.name = _name;
    this.date = "00-00-0000";
    this.price = _price;
    this.author = Object.assign(_author);
}

function author(_name , _email)
{
    this.name = _name;
    this.email = _email;
}



///VALIDATIONS

const validateName = function(_name , _inputElement)
{
    if (_name == '')
    {
        _inputElement.style.border = '2px solid red';
        _inputElement.parentElement.getElementsByClassName('validation')[0].textContent = '*Required';
    }
    else if((!/^[a-zA-Z ][a-zA-Z ]{3,10}$/.test(_name)))
    {
        _inputElement.style.border = '2px solid red';
        _inputElement.parentElement.getElementsByClassName('validation')[0].textContent = '*Enter a Valid Name';
    }
    else 
    {
        _inputElement.style.border = '2px solid black';
        _inputElement.parentElement.getElementsByClassName('validation')[0].textContent = '';
        return _name;
    }
    
}

const validateNumberOnly = function(_number , _inputElement)
{
    if (_number == '')
    {
        _inputElement.style.border = '2px solid red';
        _inputElement.parentElement.getElementsByClassName('validation')[0].textContent = '*Required';
        //required
    }
    else if (!(/^[0-9]+$/.test(_number)))
    {
        _inputElement.style.border = '2px solid red';
        _inputElement.parentElement.getElementsByClassName('validation')[0].textContent = '*Enter a Valid Number';
        //Password must be at least 8 characters long
    }
    else 
    {
        _inputElement.style.border = '2px solid black';
        _inputElement.parentElement.getElementsByClassName('validation')[0].textContent = '';
        return _number;
    }
    
}


const validateEmail = function(_email , _inputElement)
{
    if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(_email))
    {
        _inputElement.style.border = '2px solid black';
        _inputElement.parentElement.getElementsByClassName('validation')[0].textContent = '';
        return _email;
    }
    else if (_email === '')
    {
        _inputElement.style.border = '2px solid red';
        _inputElement.parentElement.getElementsByClassName('validation')[0].textContent = '*Required';
        //Required";
    }
    else 
    {
        _inputElement.style.border = '2px solid red';
        _inputElement.parentElement.getElementsByClassName('validation')[0].textContent = '*Enter a Valid Email';
        //Enter a valid email";
    }
    
}

const genericValidation = function(_input , _inputElement)
{
    if (_input == '')
    {
        _inputElement.style.border = '2px solid red';
        _inputElement.parentElement.getElementsByClassName('validation')[0].textContent = '*Required';
        //required
    }
    else 
    {
        _inputElement.style.border = '2px solid black';
        _inputElement.parentElement.getElementsByClassName('validation')[0].textContent = '';
        return _input;
    }
}


