import { PostsType } from "types/types"

export type MessagesType = {
    id: string
    photos: string
    message: string
    im: boolean
}
export type CompanionsType = {
    id: string
    name: string
    photos: string
}
const pandoraApi = {
    // profile: {
    //         "id": "1",
    //         "avatar": "https://aif-s3.aif.ru/images/018/332/9e27cf5647971c8736731decb0167653.jpg",
    //         "name": "Vasya",
    //         "surname": "Vasichkin",
    //         "age": "37",
    //         "country": "Germany",
    //         "sity": "Hamburg",
    //         "familyStatus": "married",
    //         "friendsId": []
    //     },
    //     users: [
    //         {
    //             "id": "1",
    //             "avatar": "https://yt3.googleusercontent.com/rOrOE32fDkAhBDDQZeTpxn1JHbLW_MJ9vMnep_KTxUf1ybljMS-y9HcF9Q4GwbOCkInnmVB3KQ=s900-c-k-c0x00ffffff-no-rj",
    //             "name": "Юлия",
    //             "surname": "Тимошенко",
    //             "age": "67",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },
    //         {
    //             "id": "2",
    //             "avatar": "https://www.film.ru/sites/default/files/people/1456556-2241434.jpg",
    //             "name": "Вин",
    //             "surname": "Дизель",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },
    //         {
    //             "id": "3",
    //             "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ma3rxMqJlwCoY_MAeyc09JGUmaADoxjLlHbJ2tkAkK7L3z9tTctEqipizOAB8ObqiUQ&usqp=CAU",
    //             "name": "Женя",
    //             "surname": "Тимошенко",
    //             "age": "42",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
                
    //         },
    //         {
    //             "id": "4",
    //             "avatar": "https://static.mk.ru/upload/entities/2022/09/23/13/photoreportsImages/detailPicture/c6/6f/9f/5d/993e150fccdcd0e2b439b6efc873c4bf.jpg",
    //             "name": "Сергей",
    //             "surname": "Безруков",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         }, 
    //         {
    //             "id": "5",
    //             "avatar": "https://st2.depositphotos.com/1000861/7741/i/450/depositphotos_77412900-stock-photo-happy-woman.jpg",
    //             "name": "Люся",
    //             "surname": "Васильева", 
    //             "age": "67",
    //             "status": "I am a boss",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },    
    //         {
    //             "id": "6",
    //             "avatar": "https://yatsenyuk.org.ua/mediafiles/images/gallery/portraits/M5D_6224.JPG",
    //             "name": "Арсений",
    //             "surname": "Яценюк",
    //             "age": "67",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },
    //         {
    //             "id": "7",
    //             "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/PaulWalkerEdit-1.jpg/274px-PaulWalkerEdit-1.jpg",
    //             "name": "Браин",
    //             "surname": "Оконар",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         }, 
    //         {
    //             "id": "8",
    //             "avatar": "https://opis-cdn.tinkoffjournal.ru/ip/ev-4FX50gblmzS8srdxTxMitJUY-AhKIprg1-qNSEMo/w:1200/aHR0cHM6Ly9pbWct/Y2RuLnRpbmtvZmZq/b3VybmFsLnJ1Ly0v/bmV1cmFsLXBob3Rv/LTEuaWVobXU0Li5q/cGVn",
    //             "name": "Алёна",
    //             "surname": "Цветкова",
    //             "age": "27",
    //             "status": "Hello",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },
    //         {
    //             "id": "9",
    //             "avatar": "https://images11.graziamagazine.ru/upload/img_cache/010/010308de1dddfecd8a2e8acb4b97f4c9_cropped_666x833.jpeg",
    //             "name": "Сергей",
    //             "surname": "Бадров",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },   
    //         {
    //             "id": "10",
    //             "avatar": "https://phototass1.cdnvideo.ru/width/1020_b9261fa1/tass/m2/uploads/i/20141014/3868695.jpg",
    //             "name": "Петя",
    //             "surname": "Педручо",
    //             "age": "67",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },
    //         {
    //             "id": "11",
    //             "avatar": "https://thumbs.dfs.ivi.ru/storage3/contents/9/6/b5ff8cc671a45bd003de9e888f9a25.jpg",
    //             "name": "Стас",
    //             "surname": "Карпов",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         }, 
    //         {
    //             "id": "12",
    //             "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlOlTIYn9_KG1VIRI65UD8Es5VtYDzmQc989OzmDm-Xtd_A7OjBnjjzFEV5tnYjuPMNrs&usqp=CAU",
    //             "name": "Дунька",
    //             "surname": "Бурлакова",
    //             "age": "37",
    //             "status": "I love you",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },    
    //         {
    //             "id": "13",
    //             "avatar": "https://upload.wikimedia.org/wikipedia/commons/d/d6/%D0%9B%D1%8F%D1%88%D0%BA%D0%BE%2C_%D0%9E%D0%BB%D0%B5%D0%B3_%D0%92%D0%B0%D0%BB%D0%B5%D1%80%D1%8C%D0%B5%D0%B2%D0%B8%D1%87_0076_%D0%A7%D1%83%D0%BF%D1%80%D0%B8%D0%BD%D0%B0_%D0%92%D0%B0%D0%B4%D0%B8%D0%BC_%D0%90.jpg",
    //             "name": "Олег",
    //             "surname": "Ляшко",
    //             "age": "67",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },
    //         {
    //             "id": "14",
    //             "avatar": "https://s9.travelask.ru/system/images/files/001/283/550/wysiwyg_jpg/6587.jpg?1551816385",
    //             "name": "Васька",
    //             "surname": "Уматовый",
    //             "age": "80",
    //             "status": "Fuk you",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },
    //         {
    //             "id": "15",
    //             "avatar": "https://actorlist.ru/uploads/posts/2018-10/1539490761_671011.jpg",
    //             "name": "Максим",
    //             "surname": "Калинин",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },     
    //         {
    //             "id": "16",
    //             "avatar": "https://phototass4.cdnvideo.ru/width/1020_b9261fa1/tass/m2/uploads/i/20160222/4191784.jpg",
    //             "name": "Леонид",
    //             "surname": "Кучма",
    //             "age": "67",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },
    //         {
    //             "id": "17",
    //             "avatar": "https://s9.travelask.ru/system/images/files/001/283/545/wysiwyg_jpg/GI_Steve_McCurry_021.jpg?1551816175",
    //             "name": "Маринка",
    //             "surname": "Есенина",
    //             "age": "30",
    //             "status": "Krezi ledi",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },
    //         {
    //             "id": "18",
    //             "avatar": "https://www.kino-teatr.ru/acter/photo/7/3/49837/pv_844961.jpg",
    //             "name": "Даниель",
    //             "surname": "Такси",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },   
    //         {
    //             "id": "19",
    //             "avatar": "https://i.lb.ua/116/46/610aefdb10c8d.jpeg",
    //             "name": "Леонид",
    //             "surname": "Кравчук",
    //             "age": "67",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },
    //         {
    //             "id": "20",
    //             "avatar": "https://img.freepik.com/free-photo/portrait-of-young-blonde-woman_273609-11526.jpg",
    //             "name": "Светлана",
    //             "surname": "Мякина",
    //             "age": "28",
    //             "status": "Buoytifull girl",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },
    //         {
    //             "id": "21",
    //             "avatar": "https://news.store.rambler.ru/img/b928d4b8148229ff2734558fddc9b332?img-format=auto&img-1-resize=height:355,fit:max&img-2-filter=sharpen",
    //             "name": "Воланд",
    //             "surname": "Чернокнижный",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },
    //         {
    //             "id": "22",
    //             "avatar": "https://g.delfi.lt/images/pix/file14775813_K_C_9851.jpg",
    //             "name": "Виктор",
    //             "surname": "Ющенко",
    //             "age": "67",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },
    //         {
    //             "id": "23",
    //             "avatar": "https://cs12.pikabu.ru/post_img/2020/12/29/9/1609256569125799848.jpg",
    //             "name": "Катя",
    //             "surname": "Брошкина",
    //             "age": "29",
    //             "status": "Russish Swaine",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },
    //         {
    //             "id": "24",
    //             "avatar": "https://aif-s3.aif.ru/images/018/332/9e27cf5647971c8736731decb0167653.jpg",
    //             "name": "Термик",
    //             "surname": "Железный",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },    
    //         {
    //             "id": "25",
    //             "avatar": "https://img.pravda.com/images/doc/e/9/e980095-gettyimages-99638813.jpg",
    //             "name": "Виктор",
    //             "surname": "Янукович",
    //             "age": "67",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },
    //         {
    //             "id": "26",
    //             "avatar": "https://media.istockphoto.com/id/1427471475/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D1%8C%D1%8E%D1%82%D0%B8-%D0%BC%D0%BE%D0%B4%D0%B5%D0%BB%D1%8C-%D0%BF%D0%BE%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B0%D1%8F-%D1%81%D0%BA%D1%83%D0%BB%D1%8B-%D0%B8-%D0%BF%D0%BE%D0%BB%D0%BD%D1%8B%D0%B5-%D0%B3%D1%83%D0%B1%D1%8B-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B9-%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D1%83%D1%85%D0%BE%D0%B4-%D0%B7%D0%B0-%D0%BA%D0%BE%D0%B6%D0%B5%D0%B9-%D0%BB%D0%B8%D1%86%D0%B0-%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9.jpg?s=612x612&w=0&k=20&c=jbMU4Y99KiE4Aj-GtOfz2_gCxw8X2qaZV-KomdaAtUU=",
    //             "name": "Sveta",
    //             "surname": "Sokolova",
    //             "age": "37",
    //             "status": "Dura iz Moskow",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },
    //         {
    //             "id": "27",
    //             "avatar": "https://sun9-34.userapi.com/c4741/u104327876/122547760/x_252e0a4c.jpg",
    //             "name": "Костя",
    //             "surname": "Орлов",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },   
    //         {
    //             "id": "28",
    //             "avatar": "https://s0.rbk.ru/v6_top_pics/media/img/9/30/754598868876309.jpeg",
    //             "name": "Александр",
    //             "surname": "Турчинов",
    //             "age": "67",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },
    //         {
    //             "id": "29",
    //             "avatar": "https://bipbap.ru/wp-content/uploads/2017/07/57bfa1a3fd9ebf5ae128edb3bb32267d.jpg",
    //             "name": "Елена",
    //             "surname": "Юдина",
    //             "age": "37",
    //             "status": "Free",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },
    //         {
    //             "id": "30",
    //             "avatar": "https://s4.afisha.ru/mediastorage/da/5e/da5e0a2482cb4ac5a86fa939b22a.jpg",
    //             "name": "Гиря",
    //             "surname": "Отбитый",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         }, 
    //         {
    //             "id": "31",
    //             "avatar": "https://file.liga.net/images/general/2018/02/13/201802131806414532.JPG?v=1522436189",
    //             "name": "Александра",
    //             "surname": "Кужиль",
    //             "age": "67",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },
    //         {
    //             "id": "32",
    //             "avatar": "https://img.freepik.com/free-photo/woman-with-curly-hair-looks-away-being-deep-in-thoughts-wears-casual-pink-t-shirt-isolated-on-beige-recalls-nice-memory-people-and-thoughts-concept_273609-56493.jpg",
    //             "name": "Rita",
    //             "surname": "Lili",
    //             "age": "37",
    //             "status": "Shluha Piterskaya",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },
    //         {
    //             "id": "33",
    //             "avatar": "https://www.vokrug.tv/pic/product/c/6/4/a/c64ab5d0ab122edb38d00a4f4640e3f1.jpeg",
    //             "name": "Шустрый",
    //             "surname": "Морозов",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },
    //         {
    //             "id": "34",
    //             "avatar": "https://cdnuploads.aa.com.tr/uploads/Contents/2022/10/20/thumbs_b_c_7bcb84a37c34d0be0bc9b48df169e7c9.jpg?v=150936",
    //             "name": "Владимир",
    //             "surname": "Зеленский",
    //             "age": 67,
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },
    //         {
    //             "id": "35",
    //             "avatar": "https://kinoturkey.ru/uploads/posts/2019-03/1551815017_sevdaerginci2.jpg",
    //             "name": "Люся",
    //             "surname": "Кацапкина",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },
    //         {
    //             "id": "36",
    //             "avatar": "https://avatars.mds.yandex.net/i?id=d4c91f733853174ff9f73d7ac99a3b54-5257701-images-thumbs&n=13",
    //             "name": "Глухарь",
    //             "surname": "Слепой",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },    
    //         {
    //             "id": "37",
    //             "avatar": "https://thumbs.dfs.ivi.ru/storage9/contents/9/e/bc3060cfae1b20656511aac136b8d0.jpg",
    //             "name": "Женя",
    //             "surname": "Кошевой",
    //             "age": "67",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
                
    //         },
    //         {
    //             "id": "38",
    //             "avatar": "https://www.vokrug.tv/pic/person/3/9/b/7/39b733bfe6ef063d09b9214fff4c5d82.jpeg",
    //             "name": "Денис",
    //             "surname": "Антошин",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },    
    //         {
    //             "id": "39",
    //             "avatar": "https://latifundist.com/media/dossier/original/00/01/1851/groysman12-66322.jpg",
    //             "name": "Владимир",
    //             "surname": "Гройсман",
    //             "age": "67",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },
    //         {
    //             "id": "40",
    //             "avatar": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/86b19343-6589-48a2-97d2-b2cd279fbfb9/280x420",
    //             "name": "Юрий",
    //             "surname": "Клинских",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },    
    //         {
    //             "id": "41",
    //             "avatar": "https://ubr.ua/wp-content/uploads/2012/10/252793.jpg",
    //             "name": "Владимир",
    //             "surname": "Литвин",
    //             "age": "67",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },
    //         {
    //             "id": "42",
    //             "avatar": "https://globalmsk.ru/usr/person/2-big-15405498430.jpg",
    //             "name": "Сергей",
    //             "surname": "Шнуров",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },      
    //         {
    //             "id": "43",
    //             "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Oleksandr_Yefremov.jpg/250px-Oleksandr_Yefremov.jpg",
    //             "name": "Гандон",
    //             "surname": "Ефремов",
    //             "age": "67",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },
    //         {
    //             "id": "44",
    //             "avatar": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/68690827-4589-4e3e-b66d-362051753883/300x",
    //             "name": "Виктор",
    //             "surname": "Цой",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },   
    //         {
    //             "id": "45",
    //             "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Ihor_Kolomoyskyi2.jpg/250px-Ihor_Kolomoyskyi2.jpg",
    //             "name": "Игорь",
    //             "surname": "Коломойский",
    //             "age": "67",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },
    //         {
    //             "id": "46",
    //             "avatar": "https://avatars.yandex.net/get-music-content/176019/978a6665.p.42607/m1000x1000",
    //             "name": "Михаил",
    //             "surname": "Круг",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },      
    //         {
    //             "id": "47",
    //             "avatar": "https://s0.rbk.ru/v6_top_pics/media/img/3/37/756379429582373.jpg",
    //             "name": "Ринат",
    //             "surname": "Ахметов",
    //             "age": "67",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },
    //         {
    //             "id": "48",
    //             "avatar": "https://www.russhanson.org/ispolnit/dumin.jpg",
    //             "name": "Александр",
    //             "surname": "Дюмин",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed":  true
    //         },  
    //         {
    //             "id": "49",
    //             "avatar": "https://i.lb.ua/120/15/5fd755eb72e98.jpeg",
    //             "name": "Виктор",
    //             "surname": "Пинчук",
    //             "age": "67",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": false
    //         },
    //         {
    //             "id": "50",
    //             "avatar": "https://www.peoples.ru/art/music/bard/nagovicin/YkVQtkxXiQOcq.jpeg",
    //             "name": "Сергей",
    //             "surname": "Наговицин",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },   
    //         {
    //             "id": "51",
    //             "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/274px-Joe_Biden_presidential_portrait.jpg",
    //             "name": "Джо",
    //             "surname": "Байден",
    //             "age": "67",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },
    //         {
    //             "id": "52",
    //             "avatar": "https://cdnlv.redkassa.ru/live/sitenew/picture/60ff51d3-301e-4774-8ef3-3716ea961bfb",
    //             "name": "Евгений",
    //             "surname": "Григорьев",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         }, 
    //         {
    //             "id": "53",
    //             "avatar": "https://phototass3.cdnvideo.ru/width/1020_b9261fa1/tass/m2/uploads/i/20180714/4746780.jpg",
    //             "name": "Олаф",
    //             "surname": "Шольц",
    //             "age": "67",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },    
    //         {
    //             "id": "54",
    //             "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Emmanuel_Macron_June_2022_%28cropped%29.jpg/200px-Emmanuel_Macron_June_2022_%28cropped%29.jpg",
    //             "name": "Емануэль",
    //             "surname": "Макрон",
    //             "age": "67",
    //             "status": "we will defeat everyone",
    //             "familyStatus": "married",
    //             "location": {"country": "Germany",
    //             "city": "Gamburg"},
    //             "followed": true
    //         },
    //     ],

    companions: [
        {
            id: "1",
            name: "Maksym",
            photos: "data:image/jpeg;base64,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",
        },
        {
            id: "2",
            name: "Viktor",
            photos: "https://aif-s3.aif.ru/images/018/332/9e27cf5647971c8736731decb0167653.jpg",
        }
    ] as Array<CompanionsType>,
    messages: [
        {
            id: "1",
            photos: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQ4CcxFbbX-LR32Iz4MwIpvkuEGcEDh-u5RRq7fpPqG2p4Ri-7",
            message: "Почитать подробнее об этом атрибуте можно здесь. Сегодня хочу поделиться техникой, как вы можете менять цвет текста, который создается с помощью этого атрибута.",
            im: true
        },
        {   
            id: "2",   
            photos: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQ4CcxFbbX-LR32Iz4MwIpvkuEGcEDh-u5RRq7fpPqG2p4Ri-7",
            message: "2Lorem Ipt to make a onronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            im: false
        },    
        {
            id: "3",
            photos: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQ4CcxFbbX-LR32Iz4MwIpvkuEGcEDh-u5RRq7fpPqG2p4Ri-7",
            message: "Lorem Ipsnceake a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            im: true
        },
        {
            id: "4",
            photos: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQ4CcxFbbX-LR32Iz4MwIpvkuEGcEDh-u5RRq7fpPqG2p4Ri-7",
            message: "Lorem Ipsum is simply dummy text of the prinlectronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            im: true
        },
        {   
            id: "5",   
            photos: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQ4CcxFbbX-LR32Iz4MwIpvkuEGcEDh-u5RRq7fpPqG2p4Ri-7",
            message: "Lorem Ipt to make a onronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            im: false
        },    
        {
            id: "6",
            photos: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQ4CcxFbbX-LR32Iz4MwIpvkuEGcEDh-u5RRq7fpPqG2p4Ri-7",
            message: "Lorem Ipsnceake a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            im: true
        },
        {
            id: "7",
            photos: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQ4CcxFbbX-LR32Iz4MwIpvkuEGcEDh-u5RRq7fpPqG2p4Ri-7",
            message: "Почитать подробнее об этом атрибуте можно здесь. Сегодня хочу поделиться техникой, как вы можете менять цвет текста, который создается с помощью этого атрибута.",
            im: true
        },
        {   
            id: "8",   
            photos: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQ4CcxFbbX-LR32Iz4MwIpvkuEGcEDh-u5RRq7fpPqG2p4Ri-7",
            message: "Lorem Ipt to make a onronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            im: false
        },    
        {
            id: "9",
            photos: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQ4CcxFbbX-LR32Iz4MwIpvkuEGcEDh-u5RRq7fpPqG2p4Ri-7",
            message: "Lorem Ipsnceake a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            im: true
        },
        {
            id: "10",
            photos: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQ4CcxFbbX-LR32Iz4MwIpvkuEGcEDh-u5RRq7fpPqG2p4Ri-7",
            message: "Lorem Ipsum is simply dummy text of the prinlectronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            im: true
        },
        {   
            id: "11",   
            photos: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQ4CcxFbbX-LR32Iz4MwIpvkuEGcEDh-u5RRq7fpPqG2p4Ri-7",
            message: "Lorem Ipt to make a onronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            im: false
        },    
        {
            id: "12",
            photos: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQ4CcxFbbX-LR32Iz4MwIpvkuEGcEDh-u5RRq7fpPqG2p4Ri-7",
            message: "Lorem Ipsnceake a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            im: true
        }
    ] as Array<MessagesType>,
    posts: [
        {
            id: 1,
            post: "Почитать подробнее об этом атрибуте можно здесь. Сегодня хочу поделиться техникой, как вы можете менять цвет текста, который создается с помощью этого атрибута.",
            like: 5,
            dislike: 4,
        },
        {   
            id: 2,   
            post: "How is your HiMars ? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            like: 2,
            dislike: 1,
        },    
        {
            id: 3,
            post: "It's my first post Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            like: 10,
            dislike: 30,
        },
        {
            id: 4,
            post: "Hi, how are you? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            like: 5,
            dislike: 4,
        },
        {   
            id: 5,   
            post: "How is your HiMars ? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            like: 2,
            dislike: 1,
        },    
        {
            id: 6,
            post: "It's my first post Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            like: 10,
            dislike: 30,
        }
    ] as Array<PostsType>,
    totalCount: 54
}
export default pandoraApi;