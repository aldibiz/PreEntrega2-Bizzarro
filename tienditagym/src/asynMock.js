const products = [
    {
        id: "1",
        name: "Mancuernas",
        price: "7000",
        category: "elementos",
        img: "https://army.com.ar/images/thumbs/0004139_set-mancuernas-hexagonales-25-a-125kg_510.jpeg",
        stock: 15,
        description:"Mancuernas",
    },
    {
        id: "2",
        name: "Disco",
        price: "6000",
        category: "elementos",
        img: "https://s.alicdn.com/@sc04/kf/H24b84fe4fb6441edae29490c30eb373b1.jpg_300x300.jpg",
        stock: 20,
        description:"Disco",
    },
    {
        id: "3",
        name: "Tobilleras",
        price: "4000",
        category: "elementos",
        img: "https://http2.mlstatic.com/D_NQ_NP_610610-MLA71760324919_092023-O.webp",
        stock: 18,
        description:"Tobilleras",
    },
    {
        id: "4",
        name: "Bandas Elasticas",
        price: "5000",
        category: "elementos",
        img: "https://sportfitness.co/cdn/shop/collections/set-de-bandas-elasticas-x5-sportfitness.jpg?v=1670008040",
        stock: 12,
        description:"Bandas Elasticas",
        },
    {
        id: "5",
        name: "Pelotas",
        price: "3000",
        category: "elementos",
        img: "https://http2.mlstatic.com/D_NQ_NP_734840-MLA49512924049_032022-O.webp",
        stock: 8,
        description:"Pelotas",
    },
    {
        id: "6",
        name: "Rueda Abdominal",
        price: "3000",
        category: "elementos",
        img: "https://i0.wp.com/www.bloomtiendanatural.com/wp-content/uploads/2021/01/Ab-Roller-Rueda-Abdominal-Bloom-Tienda-Natural.png?fit=600%2C600&ssl=1",
        stock: 14,
        description:"Rueda Abdominal",
    },
    {
        id: "7",
        name: "Step",
        price: "9000",
        category: "elementos",
        img: "https://acdn.mitiendanube.com/stores/841/794/products/step11-b984dc0f60d07e93b815606083569290-1024-1024.jpg",
        stock: 12,
        description:"Step",
    },
    {
        id: "8",
        name: "Colchoneta",
        price: "9000",
        category: "elementos",
        img: "https://http2.mlstatic.com/D_NQ_NP_713771-MLA49024686943_022022-O.webp",
        stock: 20,
        description:"Colchoneta",
    },
    {
        id: "9",
        name: "Guantes",
        price: "12.000",
        category: "Accesorio",
        img: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw30692432/products/NI_AC4239-010/NI_AC4239-010-1.JPG",
        stock: 11,
        description:"Guantes",
    },
    {
        id: "10",
        name: "Calleras",
        price: "5000",
        category: "Accesorio",
        img: "https://acdn.mitiendanube.com/stores/001/235/348/products/comic-meli-portada-4-modelos-8264c988f634384e5317102669170849-1024-1024.jpg",
        stock: 3,
        description:"Calleras",
    },
    {
        id: "11",
        name: "Brazalete Portacelular",
        price: "6000",
        category: "Accesorio",
        img: "https://http2.mlstatic.com/D_NQ_NP_967549-MLA53661169510_022023-O.webp",
        stock: 4,
        description:"Brazalete Portacelular",
    },
    {
        id: "12",
        name: "Botella",
        price: "8000",
        category: "Accesorio",
        img: "https://d22fxaf9t8d39k.cloudfront.net/307875bff64c41d91be69f6cbf1f95c92dbcef4d5cc1235f42ccc6df57c3b07f211179.jpg",
        stock: 21,
        description:"Botella",
    },
    {
        id: "13",
        name: "Asiento Gel Spinning",
        price: "7500",
        category: "Accesorio",
        img: "https://http2.mlstatic.com/D_NQ_NP_911711-MLA70175536267_062023-O.webp",
        stock: 8,
        description:"Asiento Gel Spinning",
    },
    { 
        id: "14",
        name: "Mochila power",
        price: "40.000",
        category: "bolsos",
        img: "https://i.ebayimg.com/thumbs/images/g/6CUAAOSwwcZmGM7M/s-l1200.jpg",
        stock: 7,
        description:"Mochila Power",
    },
    { 
        id: "15",
        name: "Bolso deportivo",
        price: "50.000",
        category: "bolsos",
        img: "https://www.underarmour.com.ar/on/demandware.static/-/Sites-underarmour_staging/default/dwd8830790/new_images/1354946/193445321998/193445321998-1.jpeg",
        stock: 4,
        description:"Bolso deportivo",
    },
    { 
        id: "16",
        name: "Riñonera deportiva",
        price: "50.000",
        category: "bolsos",
        img: "https://acdn.mitiendanube.com/stores/001/211/567/products/48-cm-x-36-cm-x-12-cm-211-c7d6522326c38d0a1c16911029739236-1024-1024.png",
        stock: 3,
        description:"Riñonera deportiva",
        },
];


export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeOut(()=> {
            resolve(products);
        }, 1000);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeOut(()=> {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 1000);
    });
};

export const getProductById = (productoId) => {
    return new Promise ((resolve) => {
        setTimeOut(()=> {
            resolve(products.find((prod) => prod.id === productoId));
        }, 1000);
    });
};

