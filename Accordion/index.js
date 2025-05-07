const data = [
    {
        title: "Accordion header 1",
        content: "Accordion body 1"
    },
    {
        title: "Accordion header 2",
        content: "Accordion body 2"
    },
    {
        title: "Accordion header 3",
        content: "Accordion body 3"
    },
    {
        title: "Accordion header 4",
        content: "Accordion body 4"
    },
]

const accordionContainer = document.getElementById('accordion');

data.forEach((item) => {
    const accordionItem = document.createElement('div');
    accordionItem.classList.add('accordion-item');

    const accHeader = document.createElement('div');
    accHeader.classList.add('acc-header');
    accHeader.textContent = item.title;

    accHeader.addEventListener('click', () => {
        let content = accordionItem.querySelector('.acc-body');
        content.classList.toggle('active');
    })

    const accBody = document.createElement('div');
    accBody.classList.add('acc-body');
    accBody.textContent = item.content;

    accordionItem.appendChild(accHeader);
    accordionItem.appendChild(accBody);

    accordionContainer.appendChild(accordionItem);
})

