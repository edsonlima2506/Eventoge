const pratosInfos = [
    {
        imagem: 'https://media.gazetadopovo.com.br/bomgourmet/2019/06/bigstock-white-rice-in-bowl-rice-on-wo-250272076-63fc3350.jpg',
        nome: 'Arroz branco cozido - 25g',
        calorias: 41,
    },
    {
        imagem: 'https://static.vecteezy.com/ti/fotos-gratis/p1/2437235-arroz-integral-e-arroz-cozido-no-vapor-em-um-prato-gr%C3%A1tis-foto.jpg',
        nome: 'Arroz integral cozido - 20g',
        calorias: 22,
    },
    {
        imagem: 'https://gomesdacosta.com.br/app/uploads/2020/11/03-Feijao.png',
        nome: 'Feijão branco cozido - 20g',
        calorias: 24,
    },
    {
        imagem: 'https://images.aws.nestle.recipes/resized/a50c044300b75df1169dd0f8e885bad4_feijao-preto-bem-temperado-receitas-nestle_1200_600.jpg',
        nome: 'Feijão preto cozido - 20g',
        calorias: 14,
    },
    {
        imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/dee4183b3eece6f1f1fda5b7115d2824_XL.jpg',
        nome: 'Peito de frango s/pele - 100g',
        calorias: 100,
    },
    {
        imagem: 'https://lh3.googleusercontent.com/proxy/lTl-yc8htbAKXN1v7ZYedeAP8er3-_Z4bFwrgzTcPNo5cX6LDANAUYwhO9PZ7NvPScnmdoHGLQZlpX7WJvT5tdP_sY6Fk-oZOsxvK8tgpY_ZHk0wR1mEQ7MIiw',
        nome: 'Pernil de porco assado - 100g',
        calorias:  196,
    },
    {
        imagem: 'https://t2.rg.ltmcdn.com/pt/images/3/9/4/img_coxa_de_frango_assada_no_forno_com_batata_5493_orig.jpg',
        nome: 'Coxa de frango frita - 100g',
        calorias: 144,
    },
    {
        imagem: 'https://img.itdg.com.br/tdg/images/recipes/000/046/175/279620/279620_original.jpg?mode=crop&width=710&height=400',
        nome: 'Coxa de frango assada - 100g',
        calorias: 110,
    },
    {
        imagem: 'https://www.marolacomcarambola.com.br/wp-content/uploads/2020/03/receita-de-coxa-de-frango-assada-com-paprica-17.jpg',
        nome: 'Coxa de frango cozida - 100g',
        calorias: 120,
    },
    {
        imagem: 'https://www.kitano.com.br/wp-content/uploads/2019/07/SSP_2405-File%E2%95%A0%C3%BC-de-frango-grelhado-com-pa%E2%95%A0%C3%BCprica-e-manjerica%E2%95%A0%C3%A2o.jpg',
        nome: 'Filé de frango - 100g',
        calorias: 101,
    },
    {
        imagem: 'https://www.sociedadedacarne.com.br/blog/wp-content/uploads/2018/03/Dicas-essenciais-para-aproveitar-ao-m%C3%A1ximo-seus-cortes-de-picanha.jpg',
        nome: 'Picanha - 100g',
        calorias: 278,
    },
    {
        imagem: 'https://culinaria.culturamix.com/blog/wp-content/gallery/rosbife-ao-forno-com-batatas2/rosbife-ao-forno-com-batatas-5.jpg',
        nome: 'Rosbife - 50g',
        calorias: 83,
    },
    {
        imagem: 'https://www.petz.com.br/blog/wp-content/uploads/2021/04/gato-pode-comer-salsicha-1280x720.jpg',
        nome: 'Salsicha - 50g',
        calorias: 115,
    },
    {
        imagem: 'https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        nome: 'Carnes'
    },
    {
        imagem: 'https://images.pexels.com/photos/722223/pexels-photo-722223.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        nome: 'Ovo frito - 1Un',
        calorias: 108
    },
    {
        imagem: 'https://o.imgac.net/receita/ovo-de-codorna-temperado-27997.jpg',
        nome: 'Ovo de codorna - 1Un',
        calorias: 33,
    },
    {
        imagem: 'https://www.significadodossonhos.inf.br/wp-content/uploads/2019/09/Sonhar-ovo-cozido.jpg',
        nome: 'Ovo cozido - 1Un',
        calorias: 78,
    },
    {
        imagem: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        nome: 'Macarronada - 100g',
        calorias: 289,
    },
    {
        imagem: 'https://images.pexels.com/photos/4079520/pexels-photo-4079520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        nome: 'Lasanha - 100g',
        calorias: 139,
    },
    {
        imagem: 'https://st2.depositphotos.com/4687049/8398/i/600/depositphotos_83989334-stock-photo-deep-fried-cassava-root.jpg',
        nome: 'Aipim Frito - 100g',
        calorias: 353,
    },
    {
        imagem: 'https://melepimenta.com/wp-content/uploads/2020/06/Batata-doce-Canela-gengibre-Baixa-1.jpg',
        nome: 'Batata doce assada - 100g',
        calorias: 143,
    },
    {
        imagem: 'https://www.receitasdemae.com.br/wp-content/uploads/2015/06/Batata-doce-frita-380x254.jpg',
        nome: 'Batata doce frita - 100g',
        calorias: 383,
    },
    {
        imagem: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        nome: 'Batata frita - 100g',
        calorias: 280,
    },
    {
        imagem: 'https://www.kitano.com.br/wp-content/uploads/2019/08/SSP_2160-Legumes-batata-cozida-tomilho-e-cebola-1.jpg',
        nome:  'Batata assada - 55g',
        calorias: 47
    },
    {
        imagem: 'https://images.pexels.com/photos/5750392/pexels-photo-5750392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        nome: 'Beringela - 250g',
        calorias: 50,
    },
    {
        imagem: 'https://boaforma.abril.com.br/wp-content/uploads/sites/2/2018/05/beterraba-com-folhas.jpg?quality=90&strip=info&w=1024',
        nome: 'Beterraba - 125g',
        calorias: 55,
    },
    {
        imagem: 'https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        nome: 'Brócolis - 80g',
        calorias: 23,
    },
    {
        imagem: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        nome: 'Cenoura - 100g',
        calorias: 45,
    },
    {
        imagem: 'https://www.infoescola.com/wp-content/uploads/2010/08/couve-flor_227987356.jpg',
        nome: 'Couve flor - 100g',
        calorias: 41,
    },
    {
        imagem: 'https://organicosinbox.com.br/wp-content/uploads/2020/11/alface-crespa-organica.jpg',
        nome: 'Alface - 20g',
        calorias: 4,
    },
    {
        imagem: 'https://www.infoescola.com/wp-content/uploads/2010/02/espinafre_224442694.jpg',
        nome: 'Espinafre - 100g',
        calorias: 38,
    },
    {
        imagem: 'https://images.pexels.com/photos/4022093/pexels-photo-4022093.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        nome: 'Tomate - 100g',
        calorias: 20,
    }
];

export default pratosInfos;