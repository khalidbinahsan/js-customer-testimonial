(function() {
    const customer_img = document.querySelector('#customer-img')
    const customer_name = document.querySelector('#customer-name')
    const discription = document.querySelector('#cus-text')
    const btn = document.querySelectorAll('.btn')
    const txt_box = document.querySelector('.test-box');
    // Some css control

    let index = 0
    const customers = []
        // customer construction
    function Customer(img, name, dis) {
        this.img = img
        this.name = name
        this.dis = dis
    }
    // add customer to array Customers
    function addCustomer(img, name, dis) {
        let fullImg = `./img/client${img}.jpg`
        let customer = new Customer(fullImg, name, dis)
        customers.push(customer)
    }
    addCustomer(0, "Omor Faruk", "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.")
    addCustomer(1, "Jasim Udddin", "While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful. A few examples of how some people use this generator are listed in the following paragraphs.")
    addCustomer(2, "Zakir Hossain", "Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build")
    addCustomer(3, "Fahim Rahman", "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.")
    btn.forEach(function(button) {
        button.addEventListener('click', function() {
            if (button.classList.contains('btn-prev')) {
                index--;
                if (index < 0) {
                    index = customers.length - 1;
                }
                customer_img.src = customers[index].img
                customer_name.textContent = customers[index].name
                discription.textContent = customers[index].dis
            }
            if (button.classList.contains('btn-next')) {
                index++
                if (index > customers.length - 1) {
                    index = 0
                }
                customer_img.src = customers[index].img
                customer_name.textContent = customers[index].name
                discription.textContent = customers[index].dis
            }
        })
    })
})()