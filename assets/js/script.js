const images = document.querySelectorAll(".image-container img");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const image = entry.target;
        
        const highResImage = new Image();
        highResImage.src = image.src.replace("&w=10&", "&w=1000&")

            highResImage.onload = () => {
                image.src = highResImage.src;
                image.classList.add("loaded");
            }
            
        observer.unobserve(image);
    });
}, {});

images.forEach((image, index) => {
    if (index === 0) {
        const highResImage = new Image();
        highResImage.src = image.src.replace("&w=10", "&w=1000");
        highResImage.onload = () => {
            image.src = highResImage.src;
            image.classList.add("loaded");
        };
        return;
    }
    observer.observe(image);
});