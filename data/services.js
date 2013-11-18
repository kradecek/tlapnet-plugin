globalServices = [
  {
    "Id" : "internet",
    "Name": "Internet",
    "Css": "s1",    
    "Description": "popis internetu",
    "Tariffs": [
      {
        "Id" : "internett1",
        "Name": "Bezdrátové připojení",
        "Description": "Cenově dostupné připojení pro každého",
        "Notice": "Ceny jsou uvedeny s DPH.",
        "Packages": [
         {
            "Id" : "1a",
            "Name" : "Nespěchám",
            "Description" : "Ekonomické připojení pro nenáročné uživatele",
            "Speed": "rychlost stahování až",
            "Download" : "8 MB/s",
            "Prices" : [
              {
                "Type" : "BEZNA_CENA",
                "Description" : "běžná cena",
                "MonthlyPayment" : "299"
              },
              {
                "Type" : "PREDPLATNE",
                "Description" : "předplatné",
                "MonthlyPayment" : "217"
              },
              {
                "Type" : "BEZNA_CENA_V_BALICKU",
                "Description" : "běžná cena balíčku",
                "MonthlyPayment" : "269"
              },
              {
                "Type" : "PREDPLATNE_V_BALICKU",
                "Description" : "předplatné v balíčku",
                "MonthlyPayment" : "242"
              }
            ]
          },
          {
            "Id" : "1b",
            "Name" : "Nečekám",
            "Description" : "Vhodné pro kohokoliv, na cokoliv",
            "Speed": "rychlost stahování až",
            "Download" : "12 MB/s",
            "Prices" : [
              {
                "Type" : "BEZNA_CENA",
                "Description" : "běžná cena",
                "MonthlyPayment" : "385"
              },
              {
                "Type" : "PREDPLATNE",
                "Description" : "předplatné",
                "MonthlyPayment" : "300"
              },
              {
                "Type" : "BEZNA_CENA_V_BALICKU",
                "Description" : "běžná cena balíčku",
                "MonthlyPayment" : "338"
              },
              {
                "Type" : "PREDPLATNE_V_BALICKU",
                "Description" : "předplatné v balíčku",
                "MonthlyPayment" : "304"
              }
            ]
          },
          {
            "Id" : "1c",
            "Name" : "Nestíhám",
            "Description" : "Pro náročné uživatele, pro náročné datové přenosy",
            "Speed": "rychlost stahování až",
            "Download" : "20 MB/s",
            "Prices" : [
              {
                "Type" : "BEZNA_CENA",
                "Description" : "běžná cena",
                "MonthlyPayment" : "585"
              },
              {
                "Type" : "PREDPLATNE",
                "Description" : "předplatné",
                "MonthlyPayment" : "500"
              },
              {
                "Type" : "BEZNA_CENA_V_BALICKU",
                "Description" : "běžná cena balíčku",
                "MonthlyPayment" : "498"
              },
              {
                "Type" : "PREDPLATNE_V_BALICKU",
                "Description" : "předplatné v balíčku",
                "MonthlyPayment" : "448"
              }
            ]
          }
        ]
      },
      {
        "Id" : "internett2",
        "Name" : "Optické připojení",
        "Description": "Světelně rychlý internet",
        "Notice" : "Ceny jsou uvedeny s DPH.",
        "Packages": [
         {
            "Id" : "2a",
            "Name" : "Blikám",
            "Description" : "Vhodné pro méně náročné klienty",
            "Speed": "rychlost stahování a odesílání",
            "Download" : "35 MB/s",
            "Prices" : [
              {
                "Type" : "BEZNA_CENA",
                "Description" : "běžná cena",
                "MonthlyPayment" : "350"
              },
              {
                "Type" : "PREDPLATNE",
                "Description" : "předplatné",
                "MonthlyPayment" : "299"
              },
              {
                "Type" : "BEZNA_CENA_V_BALICKU",
                "Description" : "běžná cena balíčku",
                "MonthlyPayment" : "310"
              },
              {
                "Type" : "PREDPLATNE_V_BALICKU",
                "Description" : "předplatné v balíčku",
                "MonthlyPayment" : "279"
              }
            ]
          },
          {
            "Id" : "2b",
            "Name" : "Svítím",
            "Description" : "Rychlostní varianta, která stačí všem",
            "Speed": "rychlost stahování a odesílání",
            "Download" : "75 MB/s",
            "Prices" : [
              {
                "Type" : "BEZNA_CENA",
                "Description" : "běžná cena",
                "MonthlyPayment" : "550"
              },
              {
                "Type" : "PREDPLATNE",
                "Description" : "předplatné",
                "MonthlyPayment" : "500"
              },
              {
                "Type" : "BEZNA_CENA_V_BALICKU",
                "Description" : "běžná cena balíčku",
                "MonthlyPayment" : "470"
              },
              {
                "Type" : "PREDPLATNE_V_BALICKU",
                "Description" : "předplatné v balíčku",
                "MonthlyPayment" : "423"
              }
            ]
          },
          {
            "Id" : "2c",
            "Name" : "Zářím",
            "Description" : "Pro extrémně náročné datové přenosy",
            "Speed": "rychlost stahování a odesílání",
            "Download" : "250 MB/s",
            "Prices" : [
              {
                "Type" : "BEZNA_CENA",
                "Description" : "běžná cena",
                "MonthlyPayment" : "850"
              },
              {
                "Type" : "PREDPLATNE",
                "Description" : "předplatné",
                "MonthlyPayment" : "800"
              },
              {
                "Type" : "BEZNA_CENA_V_BALICKU",
                "Description" : "běžná cena balíčku",
                "MonthlyPayment" : "710"
              },
              {
                "Type" : "PREDPLATNE_V_BALICKU",
                "Description" : "předplatné v balíčku",
                "MonthlyPayment" : "639"
              }
            ]
          }
        ]
      },
      {
        "Id" : "internett3",
        "Name" : "Profi připojení",
        "Description": "Internet do firem, škol a obcí",
        "Notice" : "Ceny jsou uvedeny s DPH.",
        "Packages": [
         {
            "Id" : "3a",
            "Name" : "Profi Standard",
            "Description" : "Profesionální garantované připojení bez kontraktu",
            "Speed": "kontaktujte nás na",
            "Download" : "+ 420 606 606 035",
            "Prices" : [
              {
                "Type" : "BEZNA_CENA",
                "Description" : "běžná cena",
                "MonthlyPayment" : "1"
              },
              {
                "Type" : "PREDPLATNE",
                "Description" : "předplatné",
                "MonthlyPayment" : "1"
              },
              {
                "Type" : "BEZNA_CENA_V_BALICKU",
                "Description" : "běžná cena balíčku",
                "MonthlyPayment" : "1"
              },
              {
                "Type" : "PREDPLATNE_V_BALICKU",
                "Description" : "předplatné v balíčku",
                "MonthlyPayment" : "1"
              }
            ]
          },
           {
            "Id" : "3b",
            "Name" : "Profi 12",
            "Description" : "Profesionální garantované připojení na 12 měsíců",
            "Speed": "kontaktujte nás na",
            "Download" : "+ 420 606 606 035",
            "Prices" : [
              {
                "Type" : "BEZNA_CENA",
                "Description" : "běžná cena",
                "MonthlyPayment" : "1"
              },
              {
                "Type" : "PREDPLATNE",
                "Description" : "předplatné",
                "MonthlyPayment" : "1"
              },
              {
                "Type" : "BEZNA_CENA_V_BALICKU",
                "Description" : "běžná cena balíčku",
                "MonthlyPayment" : "1"
              },
              {
                "Type" : "PREDPLATNE_V_BALICKU",
                "Description" : "předplatné v balíčku",
                "MonthlyPayment" : "1"
              }
            ]
          },
          {
            "Id" : "3c",
            "Name" : "Profi 24",
            "Description" : "Profesionální garantované připojení na 24 měsíců",
            "Speed": "kontaktujte nás na",
            "Download" : "+ 420 606 606 035",
            "Prices" : [
              {
                "Type" : "BEZNA_CENA",
                "Description" : "běžná cena",
                "MonthlyPayment" : "1"
              },
              {
                "Type" : "PREDPLATNE",
                "Description" : "předplatné",
                "MonthlyPayment" : "1"
              },
              {
                "Type" : "BEZNA_CENA_V_BALICKU",
                "Description" : "běžná cena balíčku",
                "MonthlyPayment" : "1"
              },
              {
                "Type" : "PREDPLATNE_V_BALICKU",
                "Description" : "předplatné v balíčku",
                "MonthlyPayment" : "1"
              }
            ]
          }
        ]
      },
      {
        "Id" : "internett4",
        "Name" : "Mobilní připojení",
        "Description": "Pohodlné surfování kdykoliv a kdekoliv",
        "Notice" : "Ceny jsou uvedeny s DPH.",
        "Packages": [
         {
            "Id" : "4a",
            "Name" : "Mobilní připojení",
            "Description" : "Vhodné na emaily a prohlížení webu",
            "Speed": "FUP",
            "Speedup": "",
            "Download" : "1 GB/měsíc",
            "Prices" : [
              {
                "Type" : "BEZNA_CENA",
                "MonthlyPayment" : "299"
              },
              {
                "Type" : "ROK",
                "MonthlyPayment" : "217"
              },
              {
                "Type" : "DVA_ROKY",
                "Description" : "Předplatné 24 měsíců", "MonthlyPayment" : "200"
              }
            ]
          },
          {
            "Id" : "4b",
            "Name" : "Mobilní připojení Plus",
            "Description" : "Vhodné i pro náročnější klienty a jejich potřeby",
            "Speed": "FUP",
            "Speedup": "",
            "Download" : "5 GB/měsíc",
            "Prices" : [
              {
                "Type" : "BEZNA_CENA",
                "Description" : "běžná cena",
                "MonthlyPayment" : "385"
              },
              {
                "Type" : "PREDPLATNE",
                "Description" : "předplatné",
                "MonthlyPayment" : "300"
              },
              {
                "Type" : "BEZNA_CENA_V_BALICKU",
                "Description" : "běžná cena balíčku",
                "MonthlyPayment" : "346"
              },
              {
                "Type" : "PREDPLATNE_V_BALICKU",
                "Description" : "předplatné v balíčku",
                "MonthlyPayment" : "311"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "Id" : "tv",
    "Name": "Televize",
    "Css": "s2",
    "Description": "popis televize",
    "Tariffs": [
      {
        "Id" : "tvt1",
        "Name" : "TV SAT",
        "Description": "Satelitní příjem televizního signálu",
        "Notice" : "Ceny jsou uvedeny s DPH.",
        "Packages": [
          {
            "Id" : "tv1a",
            "Name" : "Koukám",
            "Description" : "Základní nabídka programů",
            "Speed": "25 programů",
            "Download" : "+ 3 HD programy",
            "Prices" : [
              {
                "Type" : "BEZNA_CENA",
                "Description" : "běžná cena",
                "MonthlyPayment" : "149"
              },
              {
                "Type" : "PREDPLATNE",
                "Description" : "předplatné",
                "MonthlyPayment" : "149"
              },
              {
                "Type" : "BEZNA_CENA_V_BALICKU",
                "Description" : "běžná cena balíčku",
                "MonthlyPayment" : "125"
              },
              {
                "Type" : "PREDPLATNE_V_BALICKU",
                "Description" : "předplatné v balíčku",
                "MonthlyPayment" : "113"
              }
            ]
          },
          {
            "Id" : "tv1b",
            "Name" : "Zírám",
            "Description" : "Nabídka vhodná pro každého",
            "Speed": "67 programů",
            "Download" : "+ 11 HD programy",
            "Prices" : [
              {
                "Type" : "BEZNA_CENA",
                "Description" : "běžná cena",
                "MonthlyPayment" : "399"
              },
              {
                "Type" : "PREDPLATNE",
                "Description" : "předplatné",
                "MonthlyPayment" : "399"
              },
              {
                "Type" : "BEZNA_CENA_V_BALICKU",
                "Description" : "běžná cena balíčku",
                "MonthlyPayment" : "377"
              },
              {
                "Type" : "PREDPLATNE_V_BALICKU",
                "Description" : "předplatné v balíčku",
                "MonthlyPayment" : "339"
              }
            ]
          },
          {
            "Id" : "tv1c",
            "Name" : "Žasnu",
            "Description" : "Nabídka pro filmofily",
            "Speed": "95 programů",
            "Download" : "+ 18 HD programy",
            "Prices" : [
              {
                "Type" : "BEZNA_CENA",
                "Description" : "běžná cena",
                "MonthlyPayment" : "1099"
              },
              {
                "Type" : "PREDPLATNE",
                "Description" : "předplatné",
                "MonthlyPayment" : "1099"
              },
              {
                "Type" : "BEZNA_CENA_V_BALICKU",
                "Description" : "běžná cena balíčku",
                "MonthlyPayment" : "1057"
              },
              {
                "Type" : "PREDPLATNE_V_BALICKU",
                "Description" : "předplatné v balíčku",
                "MonthlyPayment" : "951"
              }
            ]
          }
        ]
      },     
      {
        "Id" : "tvt2",
        "Name" : "TV IPTV",
        "Description": "Příjem televizního signálu po síti",
        "Notice" : "Ceny jsou uvedeny s DPH.",
        "Packages": [
          {
            "Id" : "tv2a",
            "Name" : "Koukám",
            "Description" : "Základní nabídka programů",
            "Speed": "29 programů",
            "Download" : "+ 3 HD programy",
            "Prices" : [
              {
                "Type" : "BEZNA_CENA",
                "Description" : "běžná cena",
                "MonthlyPayment" : "149"
              },
              {
                "Type" : "PREDPLATNE",
                "Description" : "předplatné",
                "MonthlyPayment" : "149"
              },
              {
                "Type" : "BEZNA_CENA_V_BALICKU",
                "Description" : "běžná cena balíčku",
                "MonthlyPayment" : "127"
              },
              {
                "Type" : "PREDPLATNE_V_BALICKU",
                "Description" : "předplatné v balíčku",
                "MonthlyPayment" : "114"
              }
            ]
          },
          {
            "Id" : "tv2b",
            "Name" : "Zírám",
            "Description" : "Nabídka vhodná pro každého",
            "Speed": "63 programů",
            "Download" : "+ 4 HD programy",
            "Prices" : [
              {
                "Type" : "BEZNA_CENA",
                "Description" : "běžná cena",
                "MonthlyPayment" : "399"
              },
              {
                "Type" : "PREDPLATNE",
                "Description" : "předplatné",
                "MonthlyPayment" : "399"
              },
              {
                "Type" : "BEZNA_CENA_V_BALICKU",
                "Description" : "běžná cena balíčku",
                "MonthlyPayment" : "355"
              },
              {
                "Type" : "PREDPLATNE_V_BALICKU",
                "Description" : "předplatné v balíčku",
                "MonthlyPayment" : "320"
              }
            ]
          },
          {
            "Id" : "tv2c",
            "Name" : "Žasnu",
            "Description" : "Nabídka pro filmofily",
            "Speed": "105 programů",
            "Download" : "+ 19 HD programy",
            "Prices" : [
              {
                "Type" : "BEZNA_CENA",
                "Description" : "běžná cena",
                "MonthlyPayment" : "999"
              },
              {
                "Type" : "PREDPLATNE",
                "Description" : "předplatné",
                "MonthlyPayment" : "999"
              },
              {
                "Type" : "BEZNA_CENA_V_BALICKU",
                "Description" : "běžná cena balíčku",
                "MonthlyPayment" : "868"
              },
              {
                "Type" : "PREDPLATNE_V_BALICKU",
                "Description" : "předplatné v balíčku",
                "MonthlyPayment" : "781"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "Id" : "phone",
    "Name": "Telefon",
    "Css": "s3",
    "Description": "popis",
    "Tariffs": [
      {
        "Id" : "phonet1",
        "Name" : "Tlapnet GSM",
        "Description": "telefonování v síti GSM",
        "Notice" : "Ceny jsou uvedeny s DPH.",
        "Packages": [
          {
            "Id" : "phone1a",
            "Name" : "Tlapnet Volám",
            "Description" : "telefonování v síti GSM",
            "Speed": "volné minuty v rámci sítě",
            "Speedup": "SMS do všech sítí za 1,50 Kč",
            "Download" : "50 min",
            "Prices" : [
              {
                "Type" : "BEZNA_CENA",
                "Description" : "běžná cena",
                "MonthlyPayment" : "50"
              },
              {
                "Type" : "PREDPLATNE",
                "Description" : "předplatné",
                "MonthlyPayment" : "50"
              },
              {
                "Type" : "BEZNA_CENA_V_BALICKU",
                "Description" : "běžná cena balíčku",
                "MonthlyPayment" : "50"
              },
              {
                "Type" : "PREDPLATNE_V_BALICKU",
                "Description" : "předplatné v balíčku",
                "MonthlyPayment" : "50"
              }
            ]
          }
        ]
      },              
      {
        "Id" : "phonet2",
        "Name" : "Tlapnet VoIP",
        "Description": "telefonování po síti",
        "Notice" : "Ceny jsou uvedeny s DPH.",
        "Packages": [
          {
            "Id" : "phone2a",
            "Name" : "Tlapnet VoIP",
            "Description" : "telefonování po sítí",
            "Speed": "volání v rámci sítě",
            "Speedup": "telefonování do mobilních sítí za 2 Kč/min",
            "Download" : "ZDARMA",
            "Prices" : [
              {
                "Type" : "BEZNA_CENA",
                "Description" : "běžná cena",
                "MonthlyPayment" : "1"
              },
              {
                "Type" : "PREDPLATNE",
                "Description" : "předplatné",
                "MonthlyPayment" : "1"
              },
              {
                "Type" : "BEZNA_CENA_V_BALICKU",
                "Description" : "běžná cena balíčku",
                "MonthlyPayment" : "1"
              },
              {
                "Type" : "PREDPLATNE_V_BALICKU",
                "Description" : "předplatné v balíčku",
                "MonthlyPayment" : "1"
              }
            ]
          }                  
        ]
      }
    ]
  }
];
