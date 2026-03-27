const kpssData = {

    matematik: [
        {
            baslik: "Temel İşlemler",
            aciklama: "Toplama, çıkarma ve çarpma işlemleri",
            zorluk: "kolay-orta",
            sorular: [
                {
                    soru: "5 + 3 kaçtır?",
                    siklar: ["6", "7", "8", "9"],
                    dogru: 2
                },
                {
                    soru: "10 - 4 kaçtır?",
                    siklar: ["5", "6", "7", "8"],
                    dogru: 1
                },
                {
                    soru: "3 x 4 kaçtır?",
                    siklar: ["7", "12", "9", "10"],
                    dogru: 1
                }
            ]
        }
    ],

    turkce: [
        {
            baslik: "Paragraf ve Anlam",
            aciklama: "Paragraf, cümlede anlam, sözcükte anlam",
            zorluk: "orta-zor",
            sorular: [
                {
                    soru: "Günümüzde bilgiye ulaşmak hiç olmadığı kadar kolaylaşmıştır. Ancak bu kolaylık, bilgiyi doğru değerlendirme becerisini de zorunlu hâle getirmiştir. Çünkü her erişilen bilginin doğru olduğu varsayımı, bireyi yanlış yönlendirebilir. Bu nedenle bilgi çağında asıl önemli olan, bilgiye ulaşmak değil, ulaşılan bilgiyi sorgulayabilmektir.\n\nBu parçanın ana düşüncesi aşağıdakilerden hangisidir?",
                    siklar: [
                        "Bilgiye ulaşmanın kolaylaşması beraberinde sorumluluk da getirir",
                        "Günümüzde doğru bilgiye ulaşmak neredeyse imkânsızdır",
                        "Bilgi çağında teknoloji en önemli unsurdur",
                        "İnsanlar artık bilgiye ihtiyaç duymamaktadır",
                        "Bilginin doğruluğu her zaman tartışmalıdır"
                    ],
                    dogru: 0
                },
                {
                    soru: "Sanat, yalnızca estetik bir uğraş değildir; aynı zamanda bir toplumun düşünce yapısını, değerlerini ve değişimlerini yansıtan önemli bir araçtır.\n\nBu parçadan aşağıdakilerden hangisi çıkarılabilir?",
                    siklar: [
                        "Sanat yalnızca bireysel bir ifade biçimidir",
                        "Edebiyat toplumdan bağımsız gelişir",
                        "Sanat eserleri toplumsal yapıyı yansıtır",
                        "Sanatın amacı yalnızca estetik haz vermektir",
                        "Toplum sanatı etkilemez"
                    ],
                    dogru: 2
                }
            ]
        }
    ],

    tarih: [
        {
            baslik: "Temel Tarih",
            aciklama: "Osmanlı ve Cumhuriyet tarihi",
            zorluk: "kolay",
            sorular: [
                {
                    soru: "İstanbul ne zaman fethedildi?",
                    siklar: ["1453", "1923", "1071", "1517"],
                    dogru: 0
                },
                {
                    soru: "Türkiye Cumhuriyeti ne zaman kuruldu?",
                    siklar: ["1920", "1921", "1923", "1925"],
                    dogru: 2
                },
                {
                    soru: "Malazgirt Savaşı hangi yılda oldu?",
                    siklar: ["1071", "1453", "1517", "1923"],
                    dogru: 0
                }
            ]
        }
    ],

    cografya: [
        {
            baslik: "Genel Coğrafya",
            aciklama: "Türkiye ve dünya coğrafyası",
            zorluk: "kolay",
            sorular: [
                {
                    soru: "Türkiye’nin başkenti neresidir?",
                    siklar: ["İstanbul", "Ankara", "İzmir", "Bursa"],
                    dogru: 1
                },
                {
                    soru: "Dünyanın en büyük okyanusu hangisidir?",
                    siklar: ["Atlas", "Hint", "Pasifik", "Arktik"],
                    dogru: 2
                },
                {
                    soru: "Türkiye hangi kıtadadır?",
                    siklar: ["Avrupa", "Asya", "Afrika", "Asya ve Avrupa"],
                    dogru: 3
                }
            ]
        }
    ],

    vatandaslik: [
        {
            baslik: "Temel Vatandaşlık",
            aciklama: "Anayasa ve devlet yapısı",
            zorluk: "kolay",
            sorular: [
                {
                    soru: "Türkiye bir hukuk devleti midir?",
                    siklar: ["Evet", "Hayır"],
                    dogru: 0
                },
                {
                    soru: "Yasama yetkisi kime aittir?",
                    siklar: ["Cumhurbaşkanı", "TBMM", "Bakanlar Kurulu", "Yargı"],
                    dogru: 1
                },
                {
                    soru: "Anayasa nedir?",
                    siklar: [
                        "En üst hukuk kuralları",
                        "Kanun kitabı",
                        "Mahkeme kararı",
                        "Yönetmelik"
                    ],
                    dogru: 0
                }
            ]
        }
    ],

    guncel: [
        {
            baslik: "Güncel Bilgiler",
            aciklama: "Genel kültür ve güncel olaylar",
            zorluk: "kolay",
            sorular: [
                {
                    soru: "Türkiye’nin para birimi nedir?",
                    siklar: ["Euro", "Dolar", "Türk Lirası", "Sterlin"],
                    dogru: 2
                },
                {
                    soru: "2023 yılında Türkiye kaç yaşına girdi?",
                    siklar: ["90", "95", "100", "105"],
                    dogru: 2
                },
                {
                    soru: "Türkiye’nin resmi dili nedir?",
                    siklar: ["İngilizce", "Türkçe", "Arapça", "Fransızca"],
                    dogru: 1
                }
            ]
        }
    ],

    geometri: [
        {
            baslik: "Temel Geometri",
            aciklama: "Üçgen ve çokgen bilgisi",
            zorluk: "kolay",
            sorular: [
                {
                    soru: "Üçgenin iç açıları toplamı kaçtır?",
                    siklar: ["90", "180", "270", "360"],
                    dogru: 1
                },
                {
                    soru: "Karenin kaç kenarı vardır?",
                    siklar: ["3", "4", "5", "6"],
                    dogru: 1
                },
                {
                    soru: "Dikdörtgende karşı kenarlar nasıldır?",
                    siklar: [
                        "Eşit",
                        "Farklı",
                        "Paralel değil",
                        "Kısa"
                    ],
                    dogru: 0
                }
            ]
        }
    ]

};
