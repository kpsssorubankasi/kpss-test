const DATA = {
  turkce: [
    {
      testNo: 1,
      baslik: "Test 1",
      kapsam: "Paragraf + Dil bilgisi",
      sorular: [
        {
          soru: "Günümüzde bilgiye ulaşmak hiç olmadığı kadar kolaylaşmıştır. Ancak bu kolaylık, bilgiyi doğru değerlendirme becerisini de zorunlu hâle getirmiştir. Çünkü her erişilen bilginin doğru olduğu varsayımı, bireyi yanlış yönlendirebilir. Bu nedenle bilgi çağında asıl önemli olan, bilgiye ulaşmak değil, ulaşılan bilgiyi sorgulayabilmektir.\n\nBu paragrafta asıl anlatılmak istenen nedir?",
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
          soru: "Sanat, yalnızca estetik bir uğraş değildir; aynı zamanda bir toplumun düşünce yapısını, değerlerini ve değişimlerini yansıtan önemli bir araçtır. Özellikle edebiyat, bireyin iç dünyasını dışa vururken toplumun genel eğilimlerini de gözler önüne serer. Bu nedenle sanat eserleri, yalnızca bireysel değil, toplumsal bir anlam da taşır.\n\nBu parçaya göre aşağıdakilerden hangisi söylenebilir?",
          siklar: [
            "Sanat yalnızca bireysel bir ifade biçimidir",
            "Edebiyat toplumdan bağımsız gelişir",
            "Sanat eserleri toplumsal yapıyı yansıtır",
            "Sanatın amacı yalnızca estetik haz vermektir",
            "Toplum sanatı etkilemez"
          ],
          dogru: 2
        },
        {
          soru: "(I) İnsan, doğası gereği merak eden ve sorgulayan bir varlıktır. (II) Bu özellik, bilimsel gelişmelerin temelini oluşturur. (III) Bilim insanları da merak duygusuyla hareket eder. (IV) Ancak teknolojik gelişmeler her zaman olumlu sonuçlar doğurmaz. (V) Bu nedenle merak, insanlık için vazgeçilmez bir itici güçtür.\n\nBu parçadaki numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?",
          siklar: ["I", "II", "III", "IV", "V"],
          dogru: 3
        },
        {
          soru: "Kitap okumak, bireyin hem dil becerilerini geliştirir hem de düşünce dünyasını zenginleştirir. Okuyan birey, farklı bakış açıları kazanarak olayları daha geniş bir perspektiften değerlendirebilir. ________ Bu nedenle düzenli okuma alışkanlığı, kişisel gelişimin önemli bir parçasıdır.\n\nBu boşluğa aşağıdakilerden hangisi getirilmelidir?",
          siklar: [
            "Okuma yalnızca boş zamanları değerlendirme aracıdır",
            "Kitaplar her zaman eğlenceli değildir",
            "Okuma alışkanlığı küçük yaşlarda kazanılır",
            "Bu durum, bireyin eleştirel düşünme yetisini de güçlendirir",
            "Herkes aynı tür kitapları okumayı tercih eder"
          ],
          dogru: 3
        },
        {
          soru: "Teknolojinin hızla gelişmesi, insanların yaşam tarzlarını da önemli ölçüde değiştirmiştir. Artık birçok iş dijital ortamda yürütülmekte, iletişim ise büyük ölçüde sanal platformlar üzerinden sağlanmaktadır. Ancak bu durum, yüz yüze iletişimin azalmasına ve bireyler arasında duygusal bağların zayıflamasına neden olabilmektedir.\n\nBu parçadan çıkarılabilecek en kapsamlı yargı aşağıdakilerden hangisidir?",
          siklar: [
            "Teknoloji insan ilişkilerini tamamen ortadan kaldırmıştır",
            "Dijitalleşme iletişimi kolaylaştırırken bazı olumsuzluklar da doğurur",
            "İnsanlar artık teknolojiye ihtiyaç duymamaktadır",
            "Yüz yüze iletişim tamamen gereksizdir",
            "Teknoloji yalnızca olumlu etkiler yaratır"
          ],
          dogru: 1
        },
        {
          soru: "“Bu kitabı anlamak için yalnızca okumak yetmez, aynı zamanda düşünmek gerekir.”\n\nBu cümleden aşağıdakilerden hangisi çıkarılabilir?",
          siklar: [
            "Kitap oldukça basit bir içeriğe sahiptir",
            "Okumak, anlamak için tek başına yeterli değildir",
            "Kitap sadece uzmanlar için yazılmıştır",
            "Düşünmek okumaktan daha önemlidir",
            "Kitap anlaşılması zor bir dille yazılmıştır"
          ],
          dogru: 1
        },
        {
          soru: "“O, yalnızca çalışkan değil, aynı zamanda son derece disiplinli bir öğrencidir.”\n\nBu cümle ile aşağıdakilerden hangisi anlamca en yakındır?",
          siklar: [
            "O, çalışkan olduğu kadar disiplinlidir",
            "O, disiplinli olmasına rağmen çalışkan değildir",
            "O, ne çalışkan ne de disiplinlidir",
            "O, sadece disiplinli bir öğrencidir",
            "O, çalışkan değildir ama disiplinlidir"
          ],
          dogru: 0
        },
        {
          soru: "“Onun sözleri oldukça ağırdı.”\n\nBu cümlede “ağır” sözcüğü hangi anlamda kullanılmıştır?",
          siklar: [
            "Fiziksel ağırlık ifade eden",
            "Zor ve anlaşılması güç olan",
            "Kırıcı ve incitici olan",
            "Yavaş hareket eden",
            "Yoğun ve kalın olan"
          ],
          dogru: 2
        },
        {
          soru: "Aşağıdaki cümlelerin hangisinde anlatım bozukluğu vardır?",
          siklar: [
            "Bu konuyu daha önce de tartışmıştık.",
            "Kitabı hem okudum hem de notlar aldım.",
            "Toplantıya katılan herkes görüşlerini belirtti.",
            "Bu sorunu çözmek için elimizden geleni yapacağız.",
            "Onunla ne konuştuğunu bilmiyorum ama anlattıkları beni şaşırttı."
          ],
          dogru: 4
        },
        {
          soru: "Beş kişi (A, B, C, D, E) bir sıraya dizilecektir. A, B’nin hemen önünde; C, D’nin hemen arkasında olacaktır. E ise en başta olmayacaktır.\n\nBuna göre aşağıdakilerden hangisi kesinlikle doğrudur?",
          siklar: [
            "A en baştadır",
            "B en sondadır",
            "C, D’den sonra gelir",
            "E en sondadır",
            "D, C’den sonra gelir"
          ],
          dogru: 2
        }
      ]
    }
  ],

  matematik: [],
  tarih: [],
  cografya: [],
  vatandaslik: [],
  guncel: []
};
