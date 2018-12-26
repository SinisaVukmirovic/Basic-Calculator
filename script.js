(function() {
    //  selecting all the elements
    const btns = document.querySelectorAll('.btn');
    const display = document.querySelector('.display');
    //  clear and equal btns
    const clear = document.querySelector('.btn-cle');
    const back = document.querySelector('.btn-bac');
    const equal = document.querySelector('.btn-equ');

    //  adding click event on numbers
    btns.forEach(btn => {

        btn.addEventListener('click', function() {

            //getting the number value of a button via data-set 
            let number = btn.getAttribute('data-num');
            //  displaying it on display
            display.value += number;
        });
    });

    //  gettign the equal btn and checking if the display is empty
    equal.addEventListener('click', function() {
        if (display.value === '') {
            display.value = `Please enter some values...`;
        }
        else {
            //  evaluating what is entered on the display
            let value = eval(display.value);
            //  displaying the value on the display
            display.value = value;
        }
    });

    //  Clear btn functionality
    clear.addEventListener('click', function() {
        display.value = '';
    });

    

    //  back btn
    back.addEventListener('click', function() {
        let str = (display.value).substring(0, (display.value).length - 1);
        display.value = str;
    })

})();