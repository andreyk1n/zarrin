const header = () => {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const body = document.body;

    if (!burger || !nav) return; 

    const toggleMenu = () => {
        const isActive = burger.classList.toggle('active');
        nav.classList.toggle('active', isActive);
        body.classList.toggle('no-scroll', isActive);
    };

    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !burger.contains(e.target)) {
            burger.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });
};

export default header;
