$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});

type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "ProfessionalService",
        "name": "Nina Carducci",
        "image": "./assets/images/nina.webp",
        "url": "https://ninacarducci.github.io/",
        "priceRange": "50€ - 400€",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "68 avenue Alsace-Lorraine",
          "addressLocality": "Bordeaux",
          "postalCode": "33200",
          "addressCountry": "FR"
        },
        "telephone": "+33556677889",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "10:00",
            "closes": "19:00"
          }
        ],
        "sameAs": ["https://www.instagram.com/ninacarducci.photo"]
      }
