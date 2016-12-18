(function () {
    'use strict';

    angular.module('app.table')
        .controller('tableCtrl', ['$scope', '$filter', tableCtrl]);

//TODO : Get Dealerships
    function tableCtrl($scope, $filter) {
        var init;

        $scope.stores = [
      {
        "name": "231 Farm Center",
        "number": "108911",
        "address": "171 Skipjack Road",
        "owner": "William M. Fowler",
        "city": "Prince Frederick",
        "state": "MD",
        "zipCode": "20678",
        "phoneNumber": "410-535-7666",
        "email": "laura@231farmcenter.com; 231materials@comcast.net",
        "fax": "443-968-2391",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1302"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1302"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1302/listOfAppUser"
          }
        }
      },
      {
        "name": "Abbey Equipment Inc.",
        "number": "108345",
        "address": "1612 E. Main Street",
        "owner": "David Abbey",
        "city": "Streator",
        "state": "IL",
        "zipCode": "61364",
        "phoneNumber": "815-672-4169",
        "email": "abbequip@frontier.com",
        "fax": "815-672-4169",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1303"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1303"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1303/listOfAppUser"
          }
        }
      },
      {
        "name": "Adams Equipment Company",
        "number": "105195",
        "address": "P.O. Box 1130",
        "owner": "Jeffrey E. Adams",
        "city": "Fort Ashby",
        "state": "WV",
        "zipCode": "26719",
        "phoneNumber": "304-298-3726",
        "email": "tractorguy55@gmail.com",
        "fax": "304-298-4397",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1304"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1304"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1304/listOfAppUser"
          }
        }
      },
      {
        "name": "Advanced Power Distributors, Inc. ",
        "number": "105644",
        "address": "P.O. Box 520",
        "owner": "Kenneth L Munson",
        "city": "Sublette",
        "state": "KS",
        "zipCode": "67877",
        "phoneNumber": "620-675-2224",
        "email": "avpd@pld.com; apdron@pld.com",
        "fax": "620-675-2260",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1305"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1305"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1305/listOfAppUser"
          }
        }
      },
      {
        "name": "Aeschliman Equipment Company",
        "number": "105984",
        "address": "284 E Six Mile Road",
        "owner": "Mark W. Wing; Kathryn Aeschliman; Scott Aeschliman",
        "city": "Whitmore Lake",
        "state": "MI",
        "zipCode": "48189",
        "phoneNumber": "734-994-6000",
        "email": "mark@aeseq.net; julie@aeseq.net",
        "fax": "734-449-4800",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1306"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1306"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1306/listOfAppUser"
          }
        }
      },
      {
        "name": "Affordable Tractors",
        "number": "105216",
        "address": "P.O.Box 1124",
        "owner": "Kellas White Jr.",
        "city": "Dublin",
        "state": "VA",
        "zipCode": "24084",
        "phoneNumber": "540-674-8108",
        "email": "tractorsaffordable@yahoo.com",
        "fax": "540-674-8728",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1307"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1307"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1307/listOfAppUser"
          }
        }
      },
      {
        "name": "Ag Bag Forage Solution",
        "number": "105231",
        "address": "92365 Riekkola Rd Hwy 101 Bus.",
        "owner": "Larry Inman",
        "city": "Astoria",
        "state": "OR",
        "zipCode": "97103",
        "phoneNumber": "503-325-2970",
        "email": "ltucker@ag-bagfs.com",
        "fax": "503-325-2985",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1308"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1308"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1308/listOfAppUser"
          }
        }
      },
      {
        "name": "Al's Implement Co., Inc.",
        "number": "107845",
        "address": "8742 Swan Creek Road",
        "owner": "Alan VanWashenova",
        "city": "Newport",
        "state": "MI",
        "zipCode": "48166",
        "phoneNumber": "734-586-8528",
        "email": "cvanwas@gmail.com; al@alsimplements.com",
        "fax": "734-586-8530",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1309"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1309"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1309/listOfAppUser"
          }
        }
      },
      {
        "name": "Alaska Tractor LLC",
        "number": "105317",
        "address": "P. O. Box 877743",
        "owner": "Randy Nabb/Denise Woodbury",
        "city": "Wasilla",
        "state": "AK",
        "zipCode": "99687",
        "phoneNumber": "907-357-0776",
        "email": "info@alaskatractor.com",
        "fax": "907-357-0773",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1310"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1310"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1310/listOfAppUser"
          }
        }
      },
      {
        "name": "Allen Cubbage Auto & Tractor",
        "number": "105854",
        "address": "1702 Bus RT 340 West",
        "owner": "Allen Cubbage",
        "city": "Stanley",
        "state": "VA",
        "zipCode": "22851",
        "phoneNumber": "540-778-2288",
        "email": "allencubbage2288@embarqmail.com",
        "fax": "540-778-2301",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1311"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1311"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1311/listOfAppUser"
          }
        }
      },
      {
        "name": "Allen Farm & Lawn Equipment",
        "number": "105312",
        "address": "5455 N. US Hwy 441",
        "owner": "Robert C. Allen",
        "city": "Ocala",
        "state": "FL",
        "zipCode": "34475",
        "phoneNumber": "352-840-0200",
        "email": "b.allen@allenfarmandlawn.com",
        "fax": "352-867-1159",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1312"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1312"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1312/listOfAppUser"
          }
        }
      },
      {
        "name": "Alton LeBlanc & Sons LLC",
        "number": "105236",
        "address": "303 Lacassine Rd",
        "owner": "Keith LeBlanc / Karlon LeBlanc",
        "city": "Scott",
        "state": "LA",
        "zipCode": "70583",
        "phoneNumber": "337-873-8474",
        "email": "kmleblanc69@bellsouth.net",
        "fax": "337-873-4201",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1313"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1313"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1313/listOfAppUser"
          }
        }
      },
      {
        "name": "Alvin Equipment Company, LLC",
        "number": "109274/192901",
        "address": "P. O. Box 1907",
        "owner": "Chad Beaver",
        "city": "Alvin",
        "state": "TX",
        "zipCode": "77512",
        "phoneNumber": "281-331-3177",
        "email": "chad@alvinequipment.com",
        "fax": "281-585-4012",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1314"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1314"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1314/listOfAppUser"
          }
        }
      },
      {
        "name": "American Trade & Goods Inc",
        "number": "108753",
        "address": "1213 Loudon Road",
        "owner": "Louis Brian Olesen",
        "city": "Cohoes",
        "state": "NY",
        "zipCode": "12047",
        "phoneNumber": "518-220-9800",
        "email": "atandgny@gmail.com",
        "fax": "518-783-6379",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1315"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1315"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1315/listOfAppUser"
          }
        }
      },
      {
        "name": "Anderson Equipment LLC",
        "number": "108472",
        "address": "2021 21st Road",
        "owner": "Jay Anderson",
        "city": "Clay Center",
        "state": "KS",
        "zipCode": "67432",
        "phoneNumber": "785-944-3370",
        "email": "andequip@yahoo.com",
        "fax": "785-944-3478",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1316"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1316"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1316/listOfAppUser"
          }
        }
      },
      {
        "name": "Anderson Tractor Sales",
        "number": "108511",
        "address": "115 County Road 305",
        "owner": "Gaylon Wyatt Anderson",
        "city": "Carthage",
        "state": "TX",
        "zipCode": "75633",
        "phoneNumber": "903-693-6628",
        "email": "andersontractor@hotmail.com; coxcarthage@aol.com",
        "fax": "903-693-4202",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1317"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1317"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1317/listOfAppUser"
          }
        }
      },
      {
        "name": "Area Supply Co Inc; dba J & K Tractor",
        "number": "109671",
        "address": "5461 Highway 43",
        "owner": "James Franks",
        "city": "Satsuma",
        "state": "AL",
        "zipCode": "36572",
        "phoneNumber": "251-679-8677",
        "email": "jktractors@bellsouth.net",
        "fax": "251-679-8777",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1318"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1318"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1318/listOfAppUser"
          }
        }
      },
      {
        "name": "Arentsen Farm Sales & Serv Inc",
        "number": "109470",
        "address": "6875 Albers Road",
        "owner": "Gary Arentsen",
        "city": "Albers",
        "state": "IL",
        "zipCode": "62215",
        "phoneNumber": "618-248-5005",
        "email": "kratermann@arentsenfarmsales.com; garentsen@arentsenfarmsales.com",
        "fax": "618-248-5002",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1319"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1319"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1319/listOfAppUser"
          }
        }
      },
      {
        "name": "Artrac Company LLC",
        "number": "105226",
        "address": "219 E. Taylor Rd",
        "owner": "Randolph E Uren",
        "city": "Clarksville",
        "state": "AR",
        "zipCode": "72830",
        "phoneNumber": "479-705-2200",
        "email": "artrac@centurytel.net",
        "fax": "479-705-2201",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1320"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1320"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1320/listOfAppUser"
          }
        }
      },
      {
        "name": "Atlas Sales",
        "number": "105318",
        "address": "P. O. Box 531",
        "owner": "John Schweitser",
        "city": "Cleveland",
        "state": "GA",
        "zipCode": "30528",
        "phoneNumber": "706-865-0300",
        "email": "atlassales@myemc.net; atlastrailersales@windstream.net",
        "fax": "706-219-1730",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1321"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1321"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1321/listOfAppUser"
          }
        }
      },
      {
        "name": "Audilet Tractor Sales, Inc. ",
        "number": "105821",
        "address": "5610 Washington Blvd",
        "owner": "Clifton Audilet",
        "city": "Beaumont ",
        "state": "TX",
        "zipCode": "77707",
        "phoneNumber": "409-842-4720",
        "email": "sales@audilettractor.com",
        "fax": "409-842-2876",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1322"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1322"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1322/listOfAppUser"
          }
        }
      },
      {
        "name": "Austin's Parts & Hardware",
        "number": "108018",
        "address": "105 W. Cumberland Road",
        "owner": "Jeff Austin; Judy Austin",
        "city": "St. Elmo",
        "state": "IL",
        "zipCode": "62458",
        "phoneNumber": "618-829-3285",
        "email": "jjaustin@frontiernet.net",
        "fax": "618-829-5075",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1323"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1323"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1323/listOfAppUser"
          }
        }
      },
      {
        "name": "B & G Loughlin Tractors, Inc.",
        "number": "300373",
        "address": "1748 Country Road #1",
        "owner": "Gerald Loughlin",
        "city": "Mountain",
        "state": "ON",
        "zipCode": "K0E 1S0",
        "phoneNumber": "613-989-2636",
        "email": "marion@loughlin.ca",
        "fax": "613-989-5288",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1324"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1324"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1324/listOfAppUser"
          }
        }
      },
      {
        "name": "B & S Farm Equipment",
        "number": "105204",
        "address": "1285 E. Laurel Road",
        "owner": "Bob Strunk",
        "city": "London",
        "state": "KY",
        "zipCode": "40741",
        "phoneNumber": "606-864-7815",
        "email": "bsfarm@windstream.net; suefarm@msn.com",
        "fax": "855-301-8104",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1325"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1325"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1325/listOfAppUser"
          }
        }
      },
      {
        "name": "Barlow Ag Service & Sales, Inc.",
        "number": "105286",
        "address": "676 Barlow Road",
        "owner": "Richard F. Yingling",
        "city": "Gettysburg",
        "state": "PA",
        "zipCode": "17325",
        "phoneNumber": "717-334-8418",
        "email": "barlowagsvc@gmail.com",
        "fax": "717-334-1044",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1326"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1326"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1326/listOfAppUser"
          }
        }
      },
      {
        "name": "Barton Tractor",
        "number": "105804",
        "address": "166 Petrolia Street S.R. 268",
        "owner": "Brent L. Barton",
        "city": "Karns City",
        "state": "PA",
        "zipCode": "16041",
        "phoneNumber": "724-756-0584",
        "email": "bart_brent@yahoo.com",
        "fax": "724-756-0584",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1327"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1327"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1327/listOfAppUser"
          }
        }
      },
      {
        "name": "Barton Tractor",
        "number": "105804/191209",
        "address": "690 E. Butler Rd",
        "owner": "Brent L. Barton",
        "city": "Butler",
        "state": "PA",
        "zipCode": "16002",
        "phoneNumber": "724-756-0584",
        "email": "bart_brent@yahoo.com",
        "fax": "724-756-0584",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1328"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1328"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1328/listOfAppUser"
          }
        }
      },
      {
        "name": "Bay Implement Company",
        "number": "105243",
        "address": "P.O. Box 2001",
        "owner": "Darrell Harp, Sr.",
        "city": "Red Bay",
        "state": "AL",
        "zipCode": "35582",
        "phoneNumber": "256-356-2482",
        "email": "bayimp@hiwaay.net",
        "fax": "256-356-8916",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1329"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1329"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1329/listOfAppUser"
          }
        }
      },
      {
        "name": "Bearden Tractor Company LLC",
        "number": "110163",
        "address": "1680 Bankhead Hwy",
        "owner": "Vickie Bearden",
        "city": "Carrollton",
        "state": "GA",
        "zipCode": "30116",
        "phoneNumber": "770-834-5656",
        "email": "mildred@beardentractorco.com",
        "fax": "770-834-8866",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1330"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1330"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1330/listOfAppUser"
          }
        }
      },
      {
        "name": "Bell Creek Equipment, LLC",
        "number": "105335",
        "address": "21927 Dover Bridge Road",
        "owner": "Kevin Lyons, Jeff Lyons",
        "city": "Preston",
        "state": "MD",
        "zipCode": "21655",
        "phoneNumber": "410-673-2700",
        "email": "bellcreek@comcast.net",
        "fax": "410-673-2730",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1331"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1331"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1331/listOfAppUser"
          }
        }
      },
      {
        "name": "Bell Creek Equipment; dba Beckwith Equipment",
        "number": "null",
        "address": "21927 Dover Bridge Road",
        "owner": "Kevin Lyons, Jeff Lyons",
        "city": "Preston",
        "state": "MD",
        "zipCode": "21655",
        "phoneNumber": "410-673-2700",
        "email": "bellcreek@comcast.net",
        "fax": "410-901-2752",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1332"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1332"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1332/listOfAppUser"
          }
        }
      },
      {
        "name": "Bendle Lawn Equipment, Inc.",
        "number": "109350",
        "address": "3841 N St Rd 9",
        "owner": "Chuck Riddle; Janice Riddle; Dean Riddle; Laura Riddle",
        "city": "Anderson",
        "state": "IN",
        "zipCode": "46012",
        "phoneNumber": "765-642-0657",
        "email": "bendlelawnequipment@comcast.net",
        "fax": "765-622-7665",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1333"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1333"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1333/listOfAppUser"
          }
        }
      },
      {
        "name": "Bendle Lawn Equipment, Inc.",
        "number": "109350/192955",
        "address": "3841 N St Rd 9",
        "owner": "Chuck Riddle; Janice Riddle; Charles Dean Riddle; Laura Riddle",
        "city": "Anderson",
        "state": "IN",
        "zipCode": "46012",
        "phoneNumber": "765-778-0427",
        "email": "bendlelawnequipment@comcast.net",
        "fax": "765-778-7999",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1334"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1334"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1334/listOfAppUser"
          }
        }
      },
      {
        "name": "Benjy's Tractors",
        "number": "106141",
        "address": "P. O. Box 447",
        "owner": "J. Benjy Davis",
        "city": "Patterson",
        "state": "GA",
        "zipCode": "31557",
        "phoneNumber": "912-286-2728",
        "email": "roxyd44@yahoo.com",
        "fax": "912-647-1521",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1335"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1335"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1335/listOfAppUser"
          }
        }
      },
      {
        "name": "Beverage Tractor & Equipment, Inc.",
        "number": "106085",
        "address": "2085 Stuarts Draft Hwy",
        "owner": "Charlie Beverage, Jr.",
        "city": "Stuarts Draft",
        "state": "VA",
        "zipCode": "24477",
        "phoneNumber": "540-337-1090",
        "email": "beveragetractor@hotmail.com; btfinance@hotmail.com",
        "fax": "540-337-0761",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1336"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1336"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1336/listOfAppUser"
          }
        }
      },
      {
        "name": "Big B Sales, Inc.",
        "number": "105217",
        "address": "PO Box 428",
        "owner": "Barney & Carol Bowlin",
        "city": "Sicily Island",
        "state": "LA",
        "zipCode": "71368",
        "phoneNumber": "318-389-5349",
        "email": "bigb_71368@yahoo.com",
        "fax": "318-389-5181",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1337"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1337"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1337/listOfAppUser"
          }
        }
      },
      {
        "name": "Binghamton Honda",
        "number": "105285",
        "address": "120 E. Service Road",
        "owner": "Joseph Martinichio",
        "city": "Binghamton",
        "state": "NY",
        "zipCode": "13901",
        "phoneNumber": "607-722-7433",
        "email": "joemartin6074277433@yahoo.com",
        "fax": "607-722-1288",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1338"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1338"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1338/listOfAppUser"
          }
        }
      },
      {
        "name": "BJ Independent",
        "number": "105471",
        "address": "P.O. Box 1826",
        "owner": "Billy Sledge",
        "city": "Odessa",
        "state": "TX",
        "zipCode": "79761",
        "phoneNumber": "432-582-2921",
        "email": "bjindependent@prodigy.net",
        "fax": "432-337-5150",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1339"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1339"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1339/listOfAppUser"
          }
        }
      },
      {
        "name": "BMBM Tractor, Inc.; dba Tyler County Tractor",
        "number": "109583",
        "address": "510 S. Magnolia Street",
        "owner": "Brian Bell",
        "city": "Woodville",
        "state": "TX",
        "zipCode": "75979",
        "phoneNumber": "409-283-5222",
        "email": "brianbelltct@aol.com",
        "fax": "409-283-2570",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1340"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1340"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1340/listOfAppUser"
          }
        }
      },
      {
        "name": "Bobcat of Joliette",
        "number": "300647",
        "address": "588, Route 131 Nord",
        "owner": "Jean-Yves Perreault",
        "city": "Notre Dame-Des Prairies",
        "state": "QC",
        "zipCode": "J6E 0M2",
        "phoneNumber": "450-760-2310",
        "email": "jean-yves.perreault@agritex.ca",
        "fax": "450-760-2356",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1341"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1341"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1341/listOfAppUser"
          }
        }
      },
      {
        "name": "Bock's Services, Inc.; dba Bock's Ag Repair",
        "number": "109292",
        "address": "1230 SE 2nd Street",
        "owner": "Tyler Bock",
        "city": "Galva",
        "state": "IL",
        "zipCode": "61434",
        "phoneNumber": "309-932-2309",
        "email": "bocksagrepair@gmail.com",
        "fax": "309-932-8548",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1342"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1342"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1342/listOfAppUser"
          }
        }
      },
      {
        "name": "Bourbonnais Equipment (2003) Inc.",
        "number": "300710",
        "address": "P. O. Box 70",
        "owner": "Paul Bourbonnais; Louis Bourbonnais",
        "city": "Sarsfield",
        "state": "ON",
        "zipCode": "K0A 3E0",
        "phoneNumber": "613-835-2623",
        "email": "bour2003@rogers.com",
        "fax": "613-835-1591",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1343"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1343"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1343/listOfAppUser"
          }
        }
      },
      {
        "name": "Bowman Weaver Equipment",
        "number": "105306",
        "address": "P. O. Box 38",
        "owner": "Rodney",
        "city": "Henager",
        "state": "AL",
        "zipCode": "35978",
        "phoneNumber": "256-657-3256",
        "email": "boweav@farmerstel.com",
        "fax": "256-657-3340",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1344"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1344"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1344/listOfAppUser"
          }
        }
      },
      {
        "name": "Brazos Tractor & Equipment",
        "number": "105357",
        "address": "1304 N. Brooks Street",
        "owner": "William P. Moran & Charles Barrett",
        "city": "Brazoria",
        "state": "TX",
        "zipCode": "77422",
        "phoneNumber": "979-798-1258",
        "email": "bteoneta@yahoo.com (wholegoods); mamiesue1954@yahoo.com (parts)",
        "fax": "979-798-7632",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1345"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1345"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1345/listOfAppUser"
          }
        }
      },
      {
        "name": "Brian Switzer Equipment",
        "number": "107728",
        "address": "6414 Lewis Road",
        "owner": "Brian E. Switzer",
        "city": "Trumansburg",
        "state": "NY",
        "zipCode": "14886",
        "phoneNumber": "607-387-9808",
        "email": "brianswitzereq@yahoo.com",
        "fax": "607-387-4018",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1346"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1346"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1346/listOfAppUser"
          }
        }
      },
      {
        "name": "Bridenbeckers Sales & Service Inc",
        "number": "107584",
        "address": "P. O. Box 261",
        "owner": "David Antanavige",
        "city": "Marcy",
        "state": "NY",
        "zipCode": "13403",
        "phoneNumber": "315-736-5257",
        "email": "sales@bridenbeckers.com",
        "fax": "315-736-1967",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1347"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1347"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1347/listOfAppUser"
          }
        }
      },
      {
        "name": "Bromley Farm Supply Ltd.",
        "number": "300452",
        "address": "5252 Hwy 60",
        "owner": "Jim & Terry McHale",
        "city": "Douglas",
        "state": "ON",
        "zipCode": "K0J 1S0",
        "phoneNumber": "613-649-2457",
        "email": "brofarm@live.ca",
        "fax": "613-649-2975",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1348"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1348"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1348/listOfAppUser"
          }
        }
      },
      {
        "name": "Brunos Powersports LLC",
        "number": "109199/192852",
        "address": "9514 A J Patton Road",
        "owner": "Nathan M. Pruss",
        "city": "Cabot",
        "state": "AR",
        "zipCode": "72023",
        "phoneNumber": "501-605-1210",
        "email": "brunosatv@hotmail.com; brunosatv@gmail.com; brunospowersports@gmail.com",
        "fax": "501-941-0115",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1349"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1349"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1349/listOfAppUser"
          }
        }
      },
      {
        "name": "Bud's Small Engine, Inc. ",
        "number": "300402",
        "address": "1751 Hwy #3 E",
        "owner": "Jim Ruston",
        "city": "Port Colborne",
        "state": "ON",
        "zipCode": "L3K 5V3",
        "phoneNumber": "905-835-2243",
        "email": "bbuuddss@gmail.com",
        "fax": "905-835-2243",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1350"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1350"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1350/listOfAppUser"
          }
        }
      },
      {
        "name": "Buddycat LLC; dba Bobcat of Fort Wayne",
        "number": "108934",
        "address": "3630 Goshen Road",
        "owner": "Carlos \"Buddy\" Funk; WD Acres LLC; Alpha Delta Holdings II",
        "city": "Fort Wayne",
        "state": "IN",
        "zipCode": "46818",
        "phoneNumber": "260-489-5511",
        "email": "buddy@bobcatoffortwayne.net",
        "fax": "260-489-5513",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1351"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1351"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1351/listOfAppUser"
          }
        }
      },
      {
        "name": "Buddycat LLC; dba Bobcat of Fort Wayne-East",
        "number": "108934/193401",
        "address": "3630 Goshen Road",
        "owner": "Carlos Funk",
        "city": "Fort Wayne",
        "state": "IN",
        "zipCode": "46818",
        "phoneNumber": "260-489-5511",
        "email": "buddy@bobcatoffortwayne.net",
        "fax": "260-489-5513",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1352"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1352"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1352/listOfAppUser"
          }
        }
      },
      {
        "name": "Bush Tractor & Equipment Inc",
        "number": "108505",
        "address": "1209 Hwy 70 East",
        "owner": "Earl Allan Bush",
        "city": "DeQueen",
        "state": "AR",
        "zipCode": "71832",
        "phoneNumber": "870-642-5363",
        "email": "bushfarm2@hotmail.com",
        "fax": "870-584-2478",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1353"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1353"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1353/listOfAppUser"
          }
        }
      },
      {
        "name": "Byles Welding & Tractor Co., Inc.",
        "number": "105247",
        "address": "245 Hwy 171 Bypass",
        "owner": "Clauriste H Byles, Sr.",
        "city": "Many",
        "state": "LA",
        "zipCode": "71449",
        "phoneNumber": "318-256-9238",
        "email": "byleswt@gmail.com",
        "fax": "318-256-5828",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1354"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1354"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1354/listOfAppUser"
          }
        }
      },
      {
        "name": "Cajun Country Tractors, Inc.",
        "number": "109780",
        "address": "35581 EW 1255",
        "owner": "Larry T. LeRay",
        "city": "Seminole",
        "state": "OK",
        "zipCode": "74868",
        "phoneNumber": "405-382-1111",
        "email": "cajuntractor@att.net",
        "fax": "405-382-1110",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1355"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1355"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1355/listOfAppUser"
          }
        }
      },
      {
        "name": "Caldwell Enterprises Inc.; dba Select Auto Sales",
        "number": "108982",
        "address": "23698 Strato Rim Road",
        "owner": "Bill Caldwell",
        "city": "Rapid City",
        "state": "SD",
        "zipCode": "57702",
        "phoneNumber": "605-343-7505",
        "email": "select@centurylink.net",
        "fax": "605-343-8884",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1356"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1356"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1356/listOfAppUser"
          }
        }
      },
      {
        "name": "Cane Equipment Cooperative Inc",
        "number": "106743",
        "address": "25265 Hwy 1 South",
        "owner": "LA Farmers (119)",
        "city": "Plaquemine",
        "state": "LA",
        "zipCode": "70764",
        "phoneNumber": "225-687-2050",
        "email": "cane@cane-equipment.com",
        "fax": "225-687-0684",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1357"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1357"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1357/listOfAppUser"
          }
        }
      },
      {
        "name": "Cascade Tractor Supply",
        "number": "108437",
        "address": "5019 E. Trent Avenue",
        "owner": "Scott Dashiell",
        "city": "Spokane",
        "state": "WA",
        "zipCode": "99212",
        "phoneNumber": "509-927-7500",
        "email": "scott@cascadetractorsupply.com",
        "fax": "509-927-7504",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1358"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1358"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1358/listOfAppUser"
          }
        }
      },
      {
        "name": "Cassity Equipment Sales, LTD. ",
        "number": "300403",
        "address": "Box 420",
        "owner": "Eldon & Marilyn Cassity",
        "city": "Wembley",
        "state": "AB",
        "zipCode": "T0H 3S0",
        "phoneNumber": "780-766-2887",
        "email": "maelca@xplornet.com",
        "fax": "780-766-3751",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1359"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1359"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1359/listOfAppUser"
          }
        }
      },
      {
        "name": "Centre Agricole Expert Inc.",
        "number": "300707",
        "address": "17, Chemin North Hill",
        "owner": "Frederick Ward",
        "city": "Lingwick",
        "state": "QC",
        "zipCode": "J0B 2Z0",
        "phoneNumber": "819-877-2400",
        "email": "info@caexpert.com",
        "fax": "866-756-2864",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1360"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1360"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1360/listOfAppUser"
          }
        }
      },
      {
        "name": "Charles Mule Barn",
        "number": "105294",
        "address": "419295 Texanna Road",
        "owner": "Kenneth Charles",
        "city": "Eufaula",
        "state": "OK",
        "zipCode": "74432",
        "phoneNumber": "918-618-4817",
        "email": "charles_mule_barn@yahoo.com",
        "fax": "918-618-4817",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1361"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1361"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1361/listOfAppUser"
          }
        }
      },
      {
        "name": "Cirrus Outdoor Power Equipment",
        "number": "105325",
        "address": "3613 Hwy 31 W",
        "owner": "Brent Parks",
        "city": "White House",
        "state": "TN",
        "zipCode": "37188",
        "phoneNumber": "615-672-4400",
        "email": "brentparks@comcast.net; cirrusdawn@gmail.com",
        "fax": "615-672-7155",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1362"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1362"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1362/listOfAppUser"
          }
        }
      },
      {
        "name": "Cirrus Outdoor Power Equipment",
        "number": "105325/190885",
        "address": "3613 Hwy 31 W",
        "owner": "Brent Parks",
        "city": "White House",
        "state": "TN",
        "zipCode": "37188",
        "phoneNumber": "615-431-2684",
        "email": "brentparks@comcast.net; cirrusdawn@gmail.com",
        "fax": "615-431-2704",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1363"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1363"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1363/listOfAppUser"
          }
        }
      },
      {
        "name": "Cirrus Outdoor Power Equipment",
        "number": "105325/192664",
        "address": "3613 Hwy 31 W",
        "owner": "Brent Parks",
        "city": "White House",
        "state": "TN",
        "zipCode": "37188",
        "phoneNumber": "615-547-6658",
        "email": "brentparks@comcast.net; cirrusdawn@gmail.com; cirruslebanon@gmail.com",
        "fax": "615-547-6657",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1364"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1364"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1364/listOfAppUser"
          }
        }
      },
      {
        "name": "Cobb's Triangle Tractor Inc",
        "number": "109087",
        "address": "1255 E. County Road 44",
        "owner": "Gerald \"Jerry\" R. Cobb",
        "city": "Eustis",
        "state": "FL",
        "zipCode": "32736",
        "phoneNumber": "352-357-7950",
        "email": "parts1@cobbstractor.com (Parts Invoices); accounting@cobbstractor.com (WG Invoices)",
        "fax": "352-357-7933",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1365"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1365"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1365/listOfAppUser"
          }
        }
      },
      {
        "name": "Coker Enterprises",
        "number": "105192",
        "address": "7106 US Hwy 271 N",
        "owner": "Steve Coker, Jr.",
        "city": "Tyler",
        "state": "TX",
        "zipCode": "75708",
        "phoneNumber": "903-597-2658",
        "email": "scoker40@yahoo.com",
        "fax": "903-593-2002",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1366"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1366"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1366/listOfAppUser"
          }
        }
      },
      {
        "name": "Cole's Tractor & Eqp Inc",
        "number": "106711",
        "address": "5574 Hwy 32",
        "owner": "Greg & Christy Cole",
        "city": "Farmington",
        "state": "MO",
        "zipCode": "63640",
        "phoneNumber": "573-756-4353",
        "email": "coles@colestractors.com",
        "fax": "573-756-5750",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1367"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1367"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1367/listOfAppUser"
          }
        }
      },
      {
        "name": "Construction Equipment Co. (Sault) Inc.",
        "number": "300634",
        "address": "1245 Great Northern Road",
        "owner": "Rick Turcotte; Daniel Valiquette",
        "city": "Sault Ste Marie",
        "state": "ON",
        "zipCode": "P6B 0B9",
        "phoneNumber": "705-942-8500",
        "email": "rick@cec-ssm.ca; dan@cec-ssm.ca; carol@cec-ssm.ca",
        "fax": "705-946-1018",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1368"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1368"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1368/listOfAppUser"
          }
        }
      },
      {
        "name": "Construction Sales & Service, Inc.",
        "number": "106600",
        "address": "675 W. James Lee Boulevard",
        "owner": "Donald L. Ferguson",
        "city": "Crestview",
        "state": "FL",
        "zipCode": "32536",
        "phoneNumber": "850-683-9186",
        "email": "dlf@tractorbolt.com (WG); cssmfparts@embarqmail.com (WG)",
        "fax": "850-683-4570",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1369"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1369"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1369/listOfAppUser"
          }
        }
      },
      {
        "name": "Coon Valley Dairy Supply, Inc.",
        "number": "105314",
        "address": "S 688A State Road #162",
        "owner": "Robert Scrvais",
        "city": "Coon Valley",
        "state": "WI",
        "zipCode": "54623",
        "phoneNumber": "608-452-3192",
        "email": "cvdairy@mwt.net",
        "fax": "608-452-3193",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1370"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1370"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1370/listOfAppUser"
          }
        }
      },
      {
        "name": "Cosper Tractor",
        "number": "105252",
        "address": "3456 S. Burleson Boulevard",
        "owner": "Don Cosper",
        "city": "Alvarado",
        "state": "TX",
        "zipCode": "76009",
        "phoneNumber": "817-783-5757",
        "email": "cospertractor@gmail.com; cosperoffice@gmail.com",
        "fax": "817-783-5760",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1371"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1371"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1371/listOfAppUser"
          }
        }
      },
      {
        "name": "Cotton Tractor Co., Inc. ",
        "number": "106011",
        "address": "P.O. Box 1108",
        "owner": "Lamar Cotton",
        "city": "Andalusia",
        "state": "AL",
        "zipCode": "36420",
        "phoneNumber": "334-222-4181",
        "email": "cottontr@andycable.com",
        "fax": "334-222-4181",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1372"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1372"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1372/listOfAppUser"
          }
        }
      },
      {
        "name": "Cross Roads Sales & Service LLC",
        "number": "108172",
        "address": "17388 E 54 Hwy",
        "owner": "John Shorten",
        "city": "Nevada",
        "state": "MO",
        "zipCode": "64772",
        "phoneNumber": "417-667-2910",
        "email": "cross_roads13@hotmail.com",
        "fax": "417-667-4434",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1373"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1373"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1373/listOfAppUser"
          }
        }
      },
      {
        "name": "Crutchfield Tractors Inc.",
        "number": "105316",
        "address": "38802 Hwy 58",
        "owner": "Jamie Crutchfield",
        "city": "LaCrosse",
        "state": "VA",
        "zipCode": "23950",
        "phoneNumber": "434-757-4418",
        "email": "crutchfields05@yahoo.com",
        "fax": "434-757-7799",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1374"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1374"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1374/listOfAppUser"
          }
        }
      },
      {
        "name": "Cutter Power Sales, LLC",
        "number": "106609",
        "address": "3710 Progress Street NE",
        "owner": "Glenn R. Moore, Jr. & Gregory R. Moore",
        "city": "Canton",
        "state": "OH",
        "zipCode": "44705",
        "phoneNumber": "330-455-8873",
        "email": "danielle@cutteronline.com",
        "fax": "330-455-8875",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1375"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1375"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1375/listOfAppUser"
          }
        }
      },
      {
        "name": "D & D Seeds & Farm Equip Sales Inc",
        "number": "109492",
        "address": "7343 South 6th Street",
        "owner": "Todd Greer",
        "city": "Klamath Falls",
        "state": "OR",
        "zipCode": "97603",
        "phoneNumber": "541-882-7799",
        "email": "info@danddseeds.com",
        "fax": "541-882-2119",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1376"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1376"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1376/listOfAppUser"
          }
        }
      },
      {
        "name": "D & G Equipment, LLC",
        "number": "105302/192151",
        "address": "5185 Spafford Road",
        "owner": "Glenda & Daniel Roesler",
        "city": "Rhinelander",
        "state": "WI",
        "zipCode": "54501",
        "phoneNumber": "715-362-2807",
        "email": "dan@dgequipmentllc.com",
        "fax": "N/A",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1377"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1377"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1377/listOfAppUser"
          }
        }
      },
      {
        "name": "D & R Wholesale Equipment",
        "number": "107708",
        "address": "P. O. Box 57",
        "owner": "Domenico Santeufemia",
        "city": "Goshen",
        "state": "CA",
        "zipCode": "93227",
        "phoneNumber": "559-651-0330",
        "email": "dom@dandrequip.com",
        "fax": "559-651-0333",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1378"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1378"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1378/listOfAppUser"
          }
        }
      },
      {
        "name": "Dave's Tractor",
        "number": "110063/193398",
        "address": "P. O. Box 877744",
        "owner": "David Amundson",
        "city": "Wasilla",
        "state": "AK",
        "zipCode": "99687",
        "phoneNumber": "907-521-0295",
        "email": "info@davestractor.biz",
        "fax": "",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1379"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1379"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1379/listOfAppUser"
          }
        }
      },
      {
        "name": "DAX Equipment",
        "number": "300706",
        "address": "1658 Chemin Pink",
        "owner": "Simon Bolduc",
        "city": "Gatineau",
        "state": "QC",
        "zipCode": "J9J 3N7",
        "phoneNumber": "819-770-7717",
        "email": "admin@daxequip.com",
        "fax": "819-770-7772",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1380"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1380"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1380/listOfAppUser"
          }
        }
      },
      {
        "name": "Dean's Repair Service, LLC",
        "number": "105502",
        "address": "4887 W. Villard Steet",
        "owner": "Dean Kubas",
        "city": "Dickinson",
        "state": "ND",
        "zipCode": "58601",
        "phoneNumber": "701-483-4887",
        "email": "deankubas@hotmail.com",
        "fax": "701-483-4287",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1381"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1381"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1381/listOfAppUser"
          }
        }
      },
      {
        "name": "Diamond R Equipment LLC",
        "number": "105240",
        "address": "4012 Hwy 63",
        "owner": "Jim Rehagen",
        "city": "Freeburg",
        "state": "MO",
        "zipCode": "65035",
        "phoneNumber": "573-455-2617",
        "email": "tr@diamondrequipment.com (inv's & statmt's); freeburg@diamondrequipment.com",
        "fax": "573-455-2684",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1382"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1382"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1382/listOfAppUser"
          }
        }
      },
      {
        "name": "Diamond R Equipment LLC",
        "number": "null",
        "address": "2312 E. McCarty Street",
        "owner": "Jim Rehagen",
        "city": "Jefferson City",
        "state": "MO",
        "zipCode": "65101",
        "phoneNumber": "573-635-4500",
        "email": "tr@diamondrequipment.com (inv's & statmt's); jcdiamond@diamondrequipment.com",
        "fax": "573-635-4506",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1383"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1383"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1383/listOfAppUser"
          }
        }
      },
      {
        "name": "Diamond R Equipment LLC",
        "number": "105240/191984",
        "address": "4012 Hwy 63",
        "owner": "Jim Rehagen; Fred Rehagen",
        "city": "Freeburg",
        "state": "MO",
        "zipCode": "65035",
        "phoneNumber": "660-584-8757",
        "email": "tr@diamondrequipment.com (inv's & statmt's); higginsville@diamondrequipment.com",
        "fax": "660-584-8767",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1384"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1384"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1384/listOfAppUser"
          }
        }
      },
      {
        "name": "Dietz Tractor Co.",
        "number": "106568",
        "address": "547 IH 10 East",
        "owner": "James Dietz",
        "city": "Seguin",
        "state": "TX",
        "zipCode": "78155",
        "phoneNumber": "830-401-0000",
        "email": "dietztractor@yahoo.com",
        "fax": "830-372-4232",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1385"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1385"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1385/listOfAppUser"
          }
        }
      },
      {
        "name": "Distribution JPB",
        "number": "300786",
        "address": "1522 Rue Hebert",
        "owner": "Jimmy Duchesne",
        "city": "Desbiens",
        "state": "QC",
        "zipCode": "G0W 1N0",
        "phoneNumber": "418-346-1010",
        "email": "info@distributionjpb.com; comptabilite@distributionjpb.com",
        "fax": "418-346-1188",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1386"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1386"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1386/listOfAppUser"
          }
        }
      },
      {
        "name": "E & E Equipment Co, Inc",
        "number": "110053",
        "address": "11601 Jacksboro Highway",
        "owner": "Mark Ellenbarger",
        "city": "Fort Worth",
        "state": "TX",
        "zipCode": "76135",
        "phoneNumber": "817-237-6641",
        "email": "mark@ee-equipment.com; tacha@ee-equipment.com",
        "fax": "817-237-2293",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1387"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1387"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1387/listOfAppUser"
          }
        }
      },
      {
        "name": "Ebbs Tractors",
        "number": "105278",
        "address": "10 Gallaher Dr.",
        "owner": "Ebb Harmon",
        "city": "Savannah",
        "state": "TN",
        "zipCode": "38372",
        "phoneNumber": "731-607-4626",
        "email": "ebb607@gmail.com",
        "fax": "731-925-1926",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1388"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1388"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1388/listOfAppUser"
          }
        }
      },
      {
        "name": "Ebels Hardware, Inc.",
        "number": "110213",
        "address": "P. O. Box 100",
        "owner": "David Ebels; Paul Ebels",
        "city": "Falmouth",
        "state": "MI",
        "zipCode": "49632",
        "phoneNumber": "231-826-3334",
        "email": "ebelshardware@yahoo.com",
        "fax": "231-826-4243",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1389"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1389"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1389/listOfAppUser"
          }
        }
      },
      {
        "name": "Eden Tractor & Equipment, Inc.",
        "number": "105310",
        "address": "8550 North Main Street",
        "owner": "Craig Hornberger",
        "city": "Eden",
        "state": "NY",
        "zipCode": "14057",
        "phoneNumber": "716-992-3485",
        "email": "edentractor@aol.com; sandyeve@roadrunner.com",
        "fax": "716-992-3492",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1390"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1390"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1390/listOfAppUser"
          }
        }
      },
      {
        "name": "Elite Tractor & Lift Truck",
        "number": "105188",
        "address": "4761 St Rt 159",
        "owner": "Bruce Anderson",
        "city": "Smithton",
        "state": "IL",
        "zipCode": "62285",
        "phoneNumber": "618-473-9090",
        "email": "bruceanderson1936@yahoo.com",
        "fax": "618-473-3399",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1391"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1391"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1391/listOfAppUser"
          }
        }
      },
      {
        "name": "Epperson Tractor Repair, Inc.",
        "number": "109598",
        "address": "3181 S. Robinson Drive",
        "owner": "John N. Epperson II",
        "city": "Lorena",
        "state": "TX",
        "zipCode": "76655",
        "phoneNumber": "254-881-7113",
        "email": "angie.epperson.333@gmail.com",
        "fax": "254-881-7113",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1392"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1392"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1392/listOfAppUser"
          }
        }
      },
      {
        "name": "Equipe Ferme Inc.",
        "number": "300693",
        "address": "2540 Notre-Dame Ouest",
        "owner": "Andre Therrien",
        "city": "Victoriaville",
        "state": "QC",
        "zipCode": "G6P 2E5",
        "phoneNumber": "819-758-0633",
        "email": "equipefermeinc@hotmail.ca",
        "fax": "819-758-0634",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1393"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1393"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1393/listOfAppUser"
          }
        }
      },
      {
        "name": "Equipements Abordables Inc.",
        "number": "300673",
        "address": "512 Boul St Francois",
        "owner": "Patrick Roosen",
        "city": "Lac des Ecorces",
        "state": "QC",
        "zipCode": "J0W 1H0",
        "phoneNumber": "819-585-4343",
        "email": "annie@equipementsabordables.com",
        "fax": "819-585-4337",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1394"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1394"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1394/listOfAppUser"
          }
        }
      },
      {
        "name": "Ernst Tractor LLC",
        "number": "109567",
        "address": "P. O. Box 490",
        "owner": "Dave Naumann",
        "city": "St. Paul",
        "state": "OR",
        "zipCode": "97137",
        "phoneNumber": "503-710-1000",
        "email": "daven@ernstirrigation.com",
        "fax": "503-633-4114",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1395"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1395"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1395/listOfAppUser"
          }
        }
      },
      {
        "name": "Essick's Equipment Repair",
        "number": "105206",
        "address": "2091 Wallburg-High Point Rd",
        "owner": "Dustin Essick",
        "city": "High Point",
        "state": "NC",
        "zipCode": "27265",
        "phoneNumber": "336-841-5377",
        "email": "eer@NorthState.net",
        "fax": "336-841-5380",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1396"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1396"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1396/listOfAppUser"
          }
        }
      },
      {
        "name": "Fairview Farm Center LLC",
        "number": "109980",
        "address": "100 Ladybug Lane",
        "owner": "Jonathan Nolt",
        "city": "Pembroke",
        "state": "KY",
        "zipCode": "42266",
        "phoneNumber": "270-707-2331",
        "email": "fairviewfarm@emypeople.net ",
        "fax": "270-707-2335",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1397"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1397"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1397/listOfAppUser"
          }
        }
      },
      {
        "name": "Farm Equipment Service Inc.",
        "number": "105255",
        "address": "21820 S.E. H.K. Dodgen Loop",
        "owner": "Don C. Wall & Ronald T. Wall",
        "city": "Temple",
        "state": "TX",
        "zipCode": "76504",
        "phoneNumber": "254-773-5817",
        "email": "farmbiz@farmequipmentservice.com",
        "fax": "254-773-1925",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1398"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1398"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1398/listOfAppUser"
          }
        }
      },
      {
        "name": "Farm Mart",
        "number": "105221",
        "address": "22721 Hwy 80 East",
        "owner": "David W Anderson",
        "city": "Statesboro",
        "state": "GA",
        "zipCode": "30461",
        "phoneNumber": "912-489-4541",
        "email": "farmmart@frontiernet.net",
        "fax": "912-764-3983",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1399"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1399"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1399/listOfAppUser"
          }
        }
      },
      {
        "name": "Farm-Rite Equipment (Dassel)",
        "number": "109341",
        "address": "P. O. Box 26",
        "owner": "Tim Cox",
        "city": "Dassel",
        "state": "MN",
        "zipCode": "55325",
        "phoneNumber": "888-679-4857",
        "email": "support@farmriteequip.com",
        "fax": "320-275-3232",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1400"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1400"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1400/listOfAppUser"
          }
        }
      },
      {
        "name": "Farm-Rite Equipment (St Cloud)",
        "number": "109342/192940",
        "address": "P. O. Box 717",
        "owner": "Tim Cox",
        "city": "Sauk Rapids",
        "state": "MN",
        "zipCode": "56379",
        "phoneNumber": "320-240-2085",
        "email": "jay.farmrite@gmail.com; support@farmriteequip.com",
        "fax": "320-230-1012",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1401"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1401"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1401/listOfAppUser"
          }
        }
      },
      {
        "name": "Farm-Rite Equipment (Willmar)",
        "number": "109343",
        "address": "P.O. Box 1341",
        "owner": "Tim Cox",
        "city": "Willmar",
        "state": "MN",
        "zipCode": "56201",
        "phoneNumber": "320-235-3672",
        "email": "dan.ronning@farmriteequip.com; support@farmriteequip.com",
        "fax": "320-222-0180",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1402"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1402"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1402/listOfAppUser"
          }
        }
      },
      {
        "name": "Five Star Equipment Rentals, LLC",
        "number": "110172",
        "address": "P. O. Box 325",
        "owner": "Michael Ziegenmeyer",
        "city": "Sutter",
        "state": "CA",
        "zipCode": "95982",
        "phoneNumber": "530-701-1075",
        "email": "accounting@fivestareq.com",
        "fax": "530-671-0110",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1403"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1403"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1403/listOfAppUser"
          }
        }
      },
      {
        "name": "Foltz Ag & Diesel Service",
        "number": "105218",
        "address": "8290 Bremen Road",
        "owner": "David W. Foltz",
        "city": "Bremen",
        "state": "OH",
        "zipCode": "43107",
        "phoneNumber": "740-569-7351",
        "email": "foltzag@frontier.com",
        "fax": "740-569-7835",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1404"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1404"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1404/listOfAppUser"
          }
        }
      },
      {
        "name": "Foskett Equipment Inc",
        "number": "108701",
        "address": "187 Peake Brook Road",
        "owner": "Harold Foskett, Jr",
        "city": "Woodstock",
        "state": "CT",
        "zipCode": "06281",
        "phoneNumber": "860-928-5748",
        "email": "foskettequip@snet.net",
        "fax": "860-928-6816",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1405"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1405"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1405/listOfAppUser"
          }
        }
      },
      {
        "name": "Foster Tractor Sales",
        "number": "105262",
        "address": "1024 South Grand Ave.",
        "owner": "Ruth Foster",
        "city": "DeQuincy",
        "state": "LA",
        "zipCode": "70633",
        "phoneNumber": "337-786-2446",
        "email": "ffosters@centurytel.net",
        "fax": "337-786-8852",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1406"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1406"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1406/listOfAppUser"
          }
        }
      },
      {
        "name": "Four RD LLC",
        "number": "105177",
        "address": "351 Fairground Rd",
        "owner": "Dan & Joe Rubison",
        "city": "Shelbina",
        "state": "MO",
        "zipCode": "63468",
        "phoneNumber": "573-588-4444",
        "email": "fourrd@marktwain.net",
        "fax": "573-588-4759",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1407"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1407"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1407/listOfAppUser"
          }
        }
      },
      {
        "name": "Frank Rymon & Son's Inc.",
        "number": "108823",
        "address": "399 State Rt 31 South",
        "owner": "William C. Rymon",
        "city": "Washington",
        "state": "NJ",
        "zipCode": "07882",
        "phoneNumber": "908-689-1464",
        "email": "rymon399@comcast.net",
        "fax": "908-689-7729",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1408"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1408"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1408/listOfAppUser"
          }
        }
      },
      {
        "name": "Freeman Tractor LLC",
        "number": "105170",
        "address": "11616 Hwy 494",
        "owner": "Alton Keith Freeman",
        "city": "Collinsville",
        "state": "MS",
        "zipCode": "39325",
        "phoneNumber": "601-626-8759",
        "email": "FreemanTractor@bellsouth.net",
        "fax": "601-626-8888",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1409"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1409"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1409/listOfAppUser"
          }
        }
      },
      {
        "name": "G.P. AG Distribution",
        "number": "300691",
        "address": "2862 Route 201",
        "owner": "Guylaine Yelle, CPA",
        "city": "Ormstown",
        "state": "QC",
        "zipCode": "J0S 1K0",
        "phoneNumber": "450-829-4344",
        "email": "gpagpascal@gmail.com",
        "fax": "450-829-2791",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1410"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1410"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1410/listOfAppUser"
          }
        }
      },
      {
        "name": "Garage Alain Bolduc, Inc.",
        "number": "300684",
        "address": "360 Rue Principale",
        "owner": "Alain Bolduc",
        "city": "Saint-Victor",
        "state": "QC",
        "zipCode": "G0M 2B0",
        "phoneNumber": "418-588-6891",
        "email": "alainbolduc@telvic.net",
        "fax": "418-588-6980",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1411"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1411"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1411/listOfAppUser"
          }
        }
      },
      {
        "name": "Garage Bigras Tracteur Inc",
        "number": "300704",
        "address": "785 Fresniere",
        "owner": "Stephane Bigras",
        "city": "St Eustache",
        "state": "QC",
        "zipCode": "J7R 0E5",
        "phoneNumber": "450-473-1470",
        "email": "sbigras@garagebigras.com",
        "fax": "450-473-0662",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1412"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1412"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1412/listOfAppUser"
          }
        }
      },
      {
        "name": "General Auto Inc",
        "number": "106560",
        "address": "804 W M. L. King Jr. Blvd",
        "owner": "Robert Bodiford",
        "city": "Brooksville",
        "state": "FL",
        "zipCode": "34601",
        "phoneNumber": "352-796-2522",
        "email": "generalautoparts@att.net",
        "fax": "352-799-2666",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1413"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1413"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1413/listOfAppUser"
          }
        }
      },
      {
        "name": "Goss Equipment Co.",
        "number": "106559",
        "address": "P.O. Box 1374",
        "owner": "Robert Goss",
        "city": "Jasper",
        "state": "GA",
        "zipCode": "30143",
        "phoneNumber": "706-253-4677",
        "email": "gossequipmentco@gmail.com",
        "fax": "706-253-4678",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1414"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1414"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1414/listOfAppUser"
          }
        }
      },
      {
        "name": "Great Outdoor Powersports & Lawn Inc",
        "number": "108778",
        "address": "1490 Flemingsburg Road",
        "owner": "Darren Thomas Royse",
        "city": "Morehead",
        "state": "KY",
        "zipCode": "40351",
        "phoneNumber": "606-780-0300",
        "email": "donnarae1915@yahoo.com; gm@greatoutdoorpowersports.com ",
        "fax": "606-780-0306",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1415"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1415"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1415/listOfAppUser"
          }
        }
      },
      {
        "name": "Great Outdoor Powersports & Lawn Inc",
        "number": "108778/192776",
        "address": "1490 Flemingsburg Road",
        "owner": "Darren Royse",
        "city": "Morehead",
        "state": "KY",
        "zipCode": "40351",
        "phoneNumber": "606-845-0638",
        "email": "royset2001@yahoo.com; donnarae1915@yahoo.com; gm@greatoutdoorpowersports.com ",
        "fax": "606-845-0679",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1416"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1416"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1416/listOfAppUser"
          }
        }
      },
      {
        "name": "Greg Abbott Equipment Sales, Inc.",
        "number": "105241",
        "address": "243 County Rd 318",
        "owner": "Greg Abbott",
        "city": "Jackson",
        "state": "MO",
        "zipCode": "63755",
        "phoneNumber": "573-243-8916",
        "email": "abbottequipment@yahoo.com; brittgilman@hotmail.com",
        "fax": "573-204-1020",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1417"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1417"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1417/listOfAppUser"
          }
        }
      },
      {
        "name": "Greg's Farm Service",
        "number": "108518",
        "address": "1117 N. Crider",
        "owner": "Greg & Deana Hill",
        "city": "Cordell",
        "state": "OK",
        "zipCode": "73632",
        "phoneNumber": "580-450-0709",
        "email": "gregsfarmservice@yahoo.com",
        "fax": "580-832-5871",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1418"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1418"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1418/listOfAppUser"
          }
        }
      },
      {
        "name": "Grove Hill Tractor Supply",
        "number": "105279",
        "address": "20159 Hwy 43",
        "owner": "Earl Terry James",
        "city": "Grove Hill",
        "state": "AL",
        "zipCode": "36451",
        "phoneNumber": "251-275-3292",
        "email": "terryjame@aol.com (WG inv's); grovehilltractor@aol.com",
        "fax": "251-275-1213",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1419"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1419"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1419/listOfAppUser"
          }
        }
      },
      {
        "name": "Gunnison Implement Co.",
        "number": "105339",
        "address": "P.O. Box 459",
        "owner": "Hal Pickett, Carl Whitlock, Kim Pickett, Brian Jensen",
        "city": "Gunnison",
        "state": "UT",
        "zipCode": "84634",
        "phoneNumber": "435-528-7271",
        "email": "Gico@gtelco.net",
        "fax": "435-528-7273",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1420"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1420"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1420/listOfAppUser"
          }
        }
      },
      {
        "name": "Haas Sales LLC",
        "number": "105224",
        "address": "75 Highland Ridge Rd",
        "owner": "James D. Haas",
        "city": "Marietta",
        "state": "OH",
        "zipCode": "45750",
        "phoneNumber": "740-374-3245",
        "email": "haas518@cs.com",
        "fax": "740-374-3273",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1421"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1421"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1421/listOfAppUser"
          }
        }
      },
      {
        "name": "Halnor RV Inc.",
        "number": "300368",
        "address": "297 Thompson Rd",
        "owner": "Brian Vanrooy",
        "city": "Waterford",
        "state": "ON",
        "zipCode": "N0E 1Y0",
        "phoneNumber": "519-443-8622",
        "email": "sales@halnor.com",
        "fax": "519-443-5125",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1422"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1422"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1422/listOfAppUser"
          }
        }
      },
      {
        "name": "Haney Equipment Company",
        "number": "106902",
        "address": "P. O. Box 1037",
        "owner": "Louis Haney Jr.",
        "city": "Athens",
        "state": "AL",
        "zipCode": "35611",
        "phoneNumber": "256-232-5850",
        "email": "haneyeq@pclnet.net; haneyeqap@gmail.com",
        "fax": "256-232-5307",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1423"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1423"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1423/listOfAppUser"
          }
        }
      },
      {
        "name": "Haney Equipment Company",
        "number": "106902/192879",
        "address": "P. O. Box 1037",
        "owner": "Louis Haney Jr.",
        "city": "Athens",
        "state": "AL",
        "zipCode": "35611",
        "phoneNumber": "256-841-5900",
        "email": "haneyeq@pclnet.net; haneyeqap@gmail.com",
        "fax": "256-735-4308",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1424"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1424"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1424/listOfAppUser"
          }
        }
      },
      {
        "name": "Hartley Enterprises LLC",
        "number": "105271",
        "address": "17 Old 96 Indian Trail",
        "owner": "Charles J. Hartley",
        "city": "Monetta",
        "state": "SC",
        "zipCode": "29105",
        "phoneNumber": "803-685-7685",
        "email": "info@hartleyenterprisesllc.com; jason@hartleyenterprisesllc.com ",
        "fax": "803-685-5635",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1425"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1425"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1425/listOfAppUser"
          }
        }
      },
      {
        "name": "Hepburn Enterprises, Inc.",
        "number": "300763/390583",
        "address": "1481 Charleswood Road",
        "owner": "Brock Hepburn",
        "city": "Winnipeg",
        "state": "MB",
        "zipCode": "R3S 1B9",
        "phoneNumber": "204-889-3392",
        "email": "brock@hepburnenterprises.com; service@hepburnenterprises.com",
        "fax": "204-889-5992",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1426"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1426"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1426/listOfAppUser"
          }
        }
      },
      {
        "name": "Hermon Tractors, LLC",
        "number": "109916",
        "address": "21 Freedom Parkway",
        "owner": "David Cameron",
        "city": "Hermon",
        "state": "ME",
        "zipCode": "04401",
        "phoneNumber": "207-827-1903",
        "email": "dave@absolutetransmission.com; sales@brucestractorsales.com",
        "fax": "207-827-3069",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1427"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1427"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1427/listOfAppUser"
          }
        }
      },
      {
        "name": "Highlands Equipment& Repair LLC;dba King Equipment",
        "number": "110137/193414",
        "address": "P. O. Box 1239",
        "owner": "John Bowman",
        "city": "Sebring",
        "state": "FL",
        "zipCode": "33871",
        "phoneNumber": "239-303-9739",
        "email": "mpatterson@bowmansteel.com",
        "fax": "239-303-9855",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1428"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1428"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1428/listOfAppUser"
          }
        }
      },
      {
        "name": "Hines Equipment",
        "number": "105239",
        "address": "P. O. Box 4426",
        "owner": "David Craig Hines & Billy Landis, Jr.",
        "city": "Rocky Mount",
        "state": "NC",
        "zipCode": "27803",
        "phoneNumber": "446-0333",
        "email": "hines@aol.com",
        "fax": "446-0939",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1429"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1429"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1429/listOfAppUser"
          }
        }
      },
      {
        "name": "Hirsch Feed & Farm Supply Inc",
        "number": "107275",
        "address": "P. O. Box 1329",
        "owner": "John Williams, Albert Hirsch, Larry Hirsch, Herb Hirsch",
        "city": "West Plains",
        "state": "MO",
        "zipCode": "65775",
        "phoneNumber": "417-256-3749",
        "email": "johnwilliams@hirschfeed.com; gregbrown@hirschfeed.com (Parts)",
        "fax": "417-256-3754",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1430"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1430"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1430/listOfAppUser"
          }
        }
      },
      {
        "name": "Hobby Time Equipment LLC",
        "number": "109935",
        "address": "430 W. Highway 26",
        "owner": "Shawn Stimpson",
        "city": "Blackfoot",
        "state": "ID",
        "zipCode": "83221",
        "phoneNumber": "208-540-2014",
        "email": "hobbytimeequipment@gmail.com",
        "fax": "208-785-2806",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1431"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1431"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1431/listOfAppUser"
          }
        }
      },
      {
        "name": "Hole In The Mountain Equipment",
        "number": "105210",
        "address": "305 N. Center Street",
        "owner": "Steve Nichols",
        "city": "Lake Benton",
        "state": "MN",
        "zipCode": "56149",
        "phoneNumber": "605-695-2032",
        "email": "holeinthemountainequipment@mchsi.com",
        "fax": "507-368-2352",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1432"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1432"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1432/listOfAppUser"
          }
        }
      },
      {
        "name": "Horning Equipment Co., Inc.",
        "number": "107005",
        "address": "P. O. Box 36",
        "owner": "Theodore (Ted) Horning",
        "city": "Galt",
        "state": "CA",
        "zipCode": "95632",
        "phoneNumber": "209-744-8350",
        "email": "susan@horningequipment.com",
        "fax": "209-744-8876",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1433"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1433"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1433/listOfAppUser"
          }
        }
      },
      {
        "name": "IMO Marketing (Lakeview Eq)",
        "number": "300370",
        "address": "4547 50th Avenue",
        "owner": "Jason Henderson",
        "city": "Lacombe",
        "state": "AB",
        "zipCode": "T4L 2B5",
        "phoneNumber": "403-782-6004",
        "email": "admin.lake97@telus.net",
        "fax": "403-782-9338",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1434"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1434"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1434/listOfAppUser"
          }
        }
      },
      {
        "name": "Masters Farm Supply",
        "number": "105622",
        "address": "25888 SR 73 NW",
        "owner": "Earl Marshall Masters",
        "city": "Altha",
        "state": "FL",
        "zipCode": "32421",
        "phoneNumber": "850-762-3221",
        "email": "masters7@fairpoint.net",
        "fax": "850-762-3222",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1479"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1479"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1479/listOfAppUser"
          }
        }
      },
      {
        "name": "Integrity Lawn Service & Supply Inc",
        "number": "110181",
        "address": "526 E. Fond du Lac Street",
        "owner": "Steven Foote",
        "city": "Ripon",
        "state": "WI",
        "zipCode": "54971",
        "phoneNumber": "920-748-5013",
        "email": "info@integritylawnservice.net",
        "fax": "920-748-5028",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1435"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1435"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1435/listOfAppUser"
          }
        }
      },
      {
        "name": "Iowa Farm Equipment",
        "number": "105233",
        "address": "1249 306th Street",
        "owner": "Haig Stepanian",
        "city": "Tipton",
        "state": "IA",
        "zipCode": "52772",
        "phoneNumber": "563-946-2121",
        "email": "sales@iowafarmequipment.com; as@ife1.com; lisa@iowafarmequipment.com",
        "fax": "563-946-2124",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1436"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1436"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1436/listOfAppUser"
          }
        }
      },
      {
        "name": "Iowa Farm Equipment",
        "number": "105233/191564",
        "address": "1249 306th Street",
        "owner": "Haig Stepanian",
        "city": "Tipton",
        "state": "IA",
        "zipCode": "52772",
        "phoneNumber": "563-946-2121",
        "email": "sales@iowafarmequipment.com; as@ife1.com; lisa@iowafarmequipment.com",
        "fax": "563-946-2124",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1437"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1437"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1437/listOfAppUser"
          }
        }
      },
      {
        "name": "IPACO, Inc.",
        "number": "109996",
        "address": "555 North 1000 West",
        "owner": "Daryl Andersen; Loyal Andersen",
        "city": "Logan",
        "state": "UT",
        "zipCode": "84321",
        "phoneNumber": "435-753-1942",
        "email": "daryl@ipaco.biz; loyal@ipaco.biz",
        "fax": "435-753-4090",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1438"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1438"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1438/listOfAppUser"
          }
        }
      },
      {
        "name": "J & G Equipment Inc.",
        "number": "108485",
        "address": "P. O. Box 348",
        "owner": "James L. Boblitt",
        "city": "Bardstown",
        "state": "KY",
        "zipCode": "40004",
        "phoneNumber": "502-348-9077",
        "email": "jimmyb@bardstowncable.net",
        "fax": "000-000-0000",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1439"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1439"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1439/listOfAppUser"
          }
        }
      },
      {
        "name": "J & H Sales and Service",
        "number": "300374",
        "address": "P. O. Box 269",
        "owner": "John Winkels",
        "city": "Chesley",
        "state": "ON",
        "zipCode": "N0G 1L0",
        "phoneNumber": "519-363-3510",
        "email": "john@jhsales.com",
        "fax": "519-363-2380",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1440"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1440"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1440/listOfAppUser"
          }
        }
      },
      {
        "name": "J & J Farm Sales & Service LLC",
        "number": "105296",
        "address": "4241 Holton Road",
        "owner": "John Rosselott",
        "city": "Muskegon",
        "state": "MI",
        "zipCode": "49445",
        "phoneNumber": "231-744-7140",
        "email": "jandjequipment@yahoo.com",
        "fax": "231-744-7147",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1441"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1441"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1441/listOfAppUser"
          }
        }
      },
      {
        "name": "J & L Power Equipment Inc",
        "number": "110045",
        "address": "13317 County Road 25A",
        "owner": "James Harrod",
        "city": "Wapakoneta",
        "state": "OH",
        "zipCode": "45895",
        "phoneNumber": "419-738-7834",
        "email": "jandlpower@bright.net",
        "fax": "419-738-0373",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1442"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1442"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1442/listOfAppUser"
          }
        }
      },
      {
        "name": "Jensen Tractor Sales & Service",
        "number": "105788",
        "address": "P. O. Box 86",
        "owner": "Norbert Jensen",
        "city": "Askov",
        "state": "MN",
        "zipCode": "55704",
        "phoneNumber": "320-838-3453",
        "email": "tejensen@frontiernet.net",
        "fax": "320-838-3158",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1443"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1443"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1443/listOfAppUser"
          }
        }
      },
      {
        "name": "Joe's Tractor Sales",
        "number": "105501",
        "address": "724 Joe Moore Road",
        "owner": "Joey H. Moore",
        "city": "Thomasville",
        "state": "NC",
        "zipCode": "27360",
        "phoneNumber": "336-885-4582",
        "email": "gale.joes@northstate.net",
        "fax": "336-885-0518",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1444"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1444"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1444/listOfAppUser"
          }
        }
      },
      {
        "name": "John Day Polaris, Inc.",
        "number": "109613",
        "address": "821 Hwy 26",
        "owner": "Byron Haberly; Gregg Haberly",
        "city": "John Day",
        "state": "OR",
        "zipCode": "97845",
        "phoneNumber": "541-575-0828",
        "email": "jdpolaris@centurytel.net",
        "fax": "541-575-0670",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1445"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1445"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1445/listOfAppUser"
          }
        }
      },
      {
        "name": "John's Equipment Sales & Svc Ltd",
        "number": "300800",
        "address": "P. O. Box 335",
        "owner": "John Kemp; Debbie Kemp",
        "city": "Frankford",
        "state": "ON",
        "zipCode": "K0K 2C0",
        "phoneNumber": "613-398-6522",
        "email": "johnkemp@hotmail.ca; ebbersjohanna@gmail.com",
        "fax": "613-398-0072",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1446"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1446"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1446/listOfAppUser"
          }
        }
      },
      {
        "name": "Jonesboro Tractor Sales Inc",
        "number": "109239/192882",
        "address": "P. O. Box 2475",
        "owner": "Wilma Grissom",
        "city": "Jonesboro",
        "state": "AR",
        "zipCode": "72402",
        "phoneNumber": "870-935-9151",
        "email": "tracyg@jonesboro-tractor.com; wilma@jonesboro-tractor.com (WG & Parts Inv's); rick@jonesboro-tractor.com (Parts Inv's)",
        "fax": "870-935-4111",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1447"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1447"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1447/listOfAppUser"
          }
        }
      },
      {
        "name": "JSC Enterprises Inc.",
        "number": "106356",
        "address": "2809 Charleston Road",
        "owner": "Clyde Stricklin",
        "city": "Spencer",
        "state": "WV",
        "zipCode": "25276",
        "phoneNumber": "304-927-4822",
        "email": "stricklin@hughes.net",
        "fax": "304-927-4822",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1448"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1448"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1448/listOfAppUser"
          }
        }
      },
      {
        "name": "Kanavel Ag Supply",
        "number": "107524/192558",
        "address": "P. O. Box 1010",
        "owner": "Tim Kanavel",
        "city": "Bonner",
        "state": "MT",
        "zipCode": "59823",
        "phoneNumber": "406-244-1000",
        "email": "headgoat@psln.com",
        "fax": "406-244-5000",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1449"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1449"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1449/listOfAppUser"
          }
        }
      },
      {
        "name": "Kubota of Northwest Arkansas - Grand Lake Kubota",
        "number": "105734/191123",
        "address": "P. O. Box 8050",
        "owner": "John Scott",
        "city": "Springdale",
        "state": "AR",
        "zipCode": "72766",
        "phoneNumber": "479-361-2513",
        "email": "john.scott@kubotacenter.com",
        "fax": "479-361-9125",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1450"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1450"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1450/listOfAppUser"
          }
        }
      },
      {
        "name": "Kubota of Northwest Arkansas-Berryville Equipment",
        "number": "105309/190899",
        "address": "P. O. Box 8050",
        "owner": "John Scott",
        "city": "Springdale",
        "state": "AR",
        "zipCode": "72766",
        "phoneNumber": "479-361-2513",
        "email": "john.scott@kubotacenter.com",
        "fax": "479-361-9125",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1451"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1451"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1451/listOfAppUser"
          }
        }
      },
      {
        "name": "Kubota of Northwest Arkansas-Northwest Farm & Lawn",
        "number": "105309/190756",
        "address": "P. O. Box 8050",
        "owner": "John Scott",
        "city": "Springdale",
        "state": "AR",
        "zipCode": "72766",
        "phoneNumber": "479-361-2513",
        "email": "john.scott@kubotacenter.com",
        "fax": "479-361-9125",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1452"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1452"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1452/listOfAppUser"
          }
        }
      },
      {
        "name": "Kubota of Northwest Arkansas-Springdale Tractor Co",
        "number": "105309/191771",
        "address": "P. O. Box 8050",
        "owner": "John Scott",
        "city": "Springdale",
        "state": "AR",
        "zipCode": "72766",
        "phoneNumber": "479-361-2513",
        "email": "john.scott@kubotacenter.com",
        "fax": "479-361-9125",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1453"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1453"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1453/listOfAppUser"
          }
        }
      },
      {
        "name": "L & R Equipment",
        "number": "105214",
        "address": "5460 Seminary Road",
        "owner": "Rick Baker",
        "city": "Alton",
        "state": "IL",
        "zipCode": "62002",
        "phoneNumber": "618-540-9267",
        "email": "landrequipment@yahoo.com",
        "fax": "217-324-4599",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1454"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1454"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1454/listOfAppUser"
          }
        }
      },
      {
        "name": "L'Excellence Agridustrie de L'Estrie Inc.",
        "number": "300723",
        "address": "301 rue Queen",
        "owner": "Ferme Y. Nadeau SENC",
        "city": "Sherbrooke",
        "state": "QC",
        "zipCode": "J1M 1K8",
        "phoneNumber": "819-849-0739",
        "email": "yvesnadeau1000@msn.com",
        "fax": "819-849-7684",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1455"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1455"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1455/listOfAppUser"
          }
        }
      },
      {
        "name": "LaCaze Outdoor Power",
        "number": "107893",
        "address": "7501 Shreveport Hwy",
        "owner": "Kathryn Lacaze",
        "city": "Pineville",
        "state": "LA",
        "zipCode": "71360",
        "phoneNumber": "318-640-7077",
        "email": "sandk4@suddenlink.net; loper.1@live.com",
        "fax": "318-640-4004",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1456"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1456"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1456/listOfAppUser"
          }
        }
      },
      {
        "name": "LaCaze Outdoor Power",
        "number": "107893/192475",
        "address": "7501 Shreveport Hwy",
        "owner": "Kathryn Lacaze",
        "city": "Pineville",
        "state": "LA",
        "zipCode": "71360",
        "phoneNumber": "318-640-7077",
        "email": "sandk4@suddenlink.net; loper.1@live.com",
        "fax": "318-640-4004",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1457"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1457"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1457/listOfAppUser"
          }
        }
      },
      {
        "name": "Lane Tractor Sales",
        "number": "105207",
        "address": "P. O. Box 142",
        "owner": "Michael Lane",
        "city": "Los Molinos",
        "state": "CA",
        "zipCode": "96055",
        "phoneNumber": "530-384-1016",
        "email": "mikelane@lanetractor.com",
        "fax": "530-384-0305",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1458"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1458"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1458/listOfAppUser"
          }
        }
      },
      {
        "name": "Lay of the Land of NC, Inc",
        "number": "107449",
        "address": "3901 NC Hwy 73 E",
        "owner": "Jerry Beretz",
        "city": "Concord",
        "state": "NC",
        "zipCode": "28025",
        "phoneNumber": "704-788-4543",
        "email": "layofthelandnc@gmail.com",
        "fax": "704-788-4546",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1459"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1459"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1459/listOfAppUser"
          }
        }
      },
      {
        "name": "Leegaard Repair",
        "number": "110197",
        "address": "21836 County Road 21",
        "owner": "Robert A. Leegaard",
        "city": "Barrett",
        "state": "MN",
        "zipCode": "56311",
        "phoneNumber": "320-528-2470",
        "email": "leegaardrepair@runestone.net",
        "fax": "",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1460"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1460"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1460/listOfAppUser"
          }
        }
      },
      {
        "name": "Legacy Tractor Sales",
        "number": "106115",
        "address": "1845 N. College Avenue",
        "owner": "Gary & Janet Farkas",
        "city": "Ft. Collins",
        "state": "CO",
        "zipCode": "80524",
        "phoneNumber": "970-482-4803",
        "email": "gary@legacytractors.com; janet@legacytractors.com; jd@legacytractors.com",
        "fax": "970-484-3430",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1461"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1461"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1461/listOfAppUser"
          }
        }
      },
      {
        "name": "Les Equipements Jules Grondin",
        "number": "300791",
        "address": "282, Route 111 Quest",
        "owner": "Jules Grondin",
        "city": "Amos",
        "state": "QC",
        "zipCode": "J9T 2X8",
        "phoneNumber": "819-732-4500",
        "email": "julesgrondin@sec.cableamos.com",
        "fax": "819-732-4499",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1462"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1462"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1462/listOfAppUser"
          }
        }
      },
      {
        "name": "Liberty Motors Inc",
        "number": "108611",
        "address": "511 N. Wallace Wilkinson Blvd.",
        "owner": "Wanda Spears,Steve Spears,Keith Spears,Cindy Cravens,Debbie Childers",
        "city": "Liberty",
        "state": "KY",
        "zipCode": "42539",
        "phoneNumber": "606-787-6034",
        "email": "lminc@ymail.com",
        "fax": "606-787-9341",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1463"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1463"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1463/listOfAppUser"
          }
        }
      },
      {
        "name": "Light's Equipment",
        "number": "105263",
        "address": "2721 Hwy 63",
        "owner": "Ronnie Light",
        "city": "Walnut Ridge",
        "state": "AR",
        "zipCode": "72476",
        "phoneNumber": "870-886-5766",
        "email": "Lightseq@bscn.com",
        "fax": "870-886-5766",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1464"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1464"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1464/listOfAppUser"
          }
        }
      },
      {
        "name": "Little Granny Ranch, Inc.",
        "number": "110167",
        "address": "433 Gooseneck Road",
        "owner": "Ellen Hansen",
        "city": "Broadview",
        "state": "MT",
        "zipCode": "59015",
        "phoneNumber": "406-667-2266",
        "email": "dkhansen@yahoo.com",
        "fax": "406-667-2272",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1465"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1465"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1465/listOfAppUser"
          }
        }
      },
      {
        "name": "Lovitt Compact Tractors",
        "number": "105245",
        "address": "104 W. 13th Street",
        "owner": "Lenny & Lanny Lovitt",
        "city": "Kearney",
        "state": "NE",
        "zipCode": "68847",
        "phoneNumber": "308-440-9738",
        "email": "compacttractors@hotmail.com",
        "fax": "308-234-3108",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1466"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1466"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1466/listOfAppUser"
          }
        }
      },
      {
        "name": "Lynch Equipment Sales",
        "number": "105257",
        "address": "831 Westover Dr.",
        "owner": "Mike Lynch",
        "city": "Columbia",
        "state": "TN",
        "zipCode": "38401",
        "phoneNumber": "931-381-1839",
        "email": "lynchequipment@bellsouth.net",
        "fax": "931-381-1654",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1467"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1467"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1467/listOfAppUser"
          }
        }
      },
      {
        "name": "Mac's Equipment Inc.",
        "number": "106813",
        "address": "3690 S Madera Avenue",
        "owner": "Macky Puckett",
        "city": "Kerman",
        "state": "CA",
        "zipCode": "93630",
        "phoneNumber": "559-846-6534",
        "email": "macsequipment@yahoo.com",
        "fax": "559-846-6609",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1468"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1468"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1468/listOfAppUser"
          }
        }
      },
      {
        "name": "Mac's Equipment Inc.",
        "number": "106813/192032",
        "address": "3690 S Madera Avenue",
        "owner": "Larry Pickard(site); Macky Puckett(owner)",
        "city": "Kerman",
        "state": "CA",
        "zipCode": "93630",
        "phoneNumber": "209-769-4446",
        "email": "macsequipment@yahoo.com",
        "fax": "559-846-6609",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1469"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1469"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1469/listOfAppUser"
          }
        }
      },
      {
        "name": "Machinerie Des Chenaux Inc",
        "number": "300697",
        "address": "900 3e Rang",
        "owner": "Jean-Francois Doucet; Alexandre Gauthier",
        "city": "St-Luc-De-Vincennes",
        "state": "QC",
        "zipCode": "G0X 3K0",
        "phoneNumber": "819-601-2530",
        "email": "alex.gauthier.mail@gmail.com",
        "fax": "866-625-8737",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1470"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1470"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1470/listOfAppUser"
          }
        }
      },
      {
        "name": "Macon Ford Tractor Inc.",
        "number": "105219",
        "address": "7641 Houston Rd.",
        "owner": "Clay Ellerbee",
        "city": "Byron",
        "state": "GA",
        "zipCode": "31008",
        "phoneNumber": "478-788-6991/6992",
        "email": "cellerbee@hughes.net",
        "fax": "478-788-0166",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1471"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1471"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1471/listOfAppUser"
          }
        }
      },
      {
        "name": "MaGee Farm Equipment",
        "number": "105283",
        "address": "1266 Hwy B",
        "owner": "Charles D. Jackson",
        "city": "Poplar Bluff",
        "state": "MO",
        "zipCode": "63901",
        "phoneNumber": "573-785-2025",
        "email": "mageefarm@gmail.com",
        "fax": "573-785-2237",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1472"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1472"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1472/listOfAppUser"
          }
        }
      },
      {
        "name": "Maitland Tractor & Equipment",
        "number": "105527",
        "address": "9225 S. US Hwy 17-92",
        "owner": "D. Gavin Martin",
        "city": "Maitland",
        "state": "FL",
        "zipCode": "32751",
        "phoneNumber": "407-834-7272",
        "email": "Maitlandtractor@yahoo.com",
        "fax": "407-834-1633",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1473"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1473"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1473/listOfAppUser"
          }
        }
      },
      {
        "name": "Maple-Lawn Equipment LLC",
        "number": "105304",
        "address": "N8903 CT HWY M",
        "owner": "Arnie Koener",
        "city": "Elkhart Lake",
        "state": "WI",
        "zipCode": "53020",
        "phoneNumber": "920-565-3762",
        "email": "bestwrenchk1984@yahoo.com",
        "fax": "920-565-3762",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1474"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1474"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1474/listOfAppUser"
          }
        }
      },
      {
        "name": "March Road / 1872025 Ontario Inc.",
        "number": "300650",
        "address": "4692 March Road",
        "owner": "Jeff Robertson",
        "city": "Almonte",
        "state": "ON",
        "zipCode": "K0A 1A0",
        "phoneNumber": "613-256-6686",
        "email": "jeff@funcomesalive.ca; info@funcomesalive.ca",
        "fax": "613-256-6696",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1475"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1475"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1475/listOfAppUser"
          }
        }
      },
      {
        "name": "Mark's Towing; dba Peach Automotive",
        "number": "109458",
        "address": "1940 Big M Boulevard",
        "owner": "Mark Smith",
        "city": "Clanton",
        "state": "AL",
        "zipCode": "35046",
        "phoneNumber": "205-280-8838",
        "email": "john@peachoutdoor.com",
        "fax": "205-280-1341",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1476"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1476"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1476/listOfAppUser"
          }
        }
      },
      {
        "name": "Mark's Towing; dba Peach Automotive & Outdoor",
        "number": "109458/193006",
        "address": "1940 Big M Boulevard",
        "owner": "Mark Smith",
        "city": "Clanton",
        "state": "AL",
        "zipCode": "35046",
        "phoneNumber": "205-280-8838",
        "email": "john@peachoutdoor.com",
        "fax": "205-280-1341",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1477"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1477"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1477/listOfAppUser"
          }
        }
      },
      {
        "name": "Martin's Outdoor Power Equip, LLC; dba Twin Pines",
        "number": "109476/193015",
        "address": "P. O. Box 22",
        "owner": "Jason Martin",
        "city": "Fayette",
        "state": "NY",
        "zipCode": "13065",
        "phoneNumber": "315-536-6382",
        "email": "jlmartin@martinsope.com; david@twinpinespower.com ",
        "fax": "315-536-0782",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1478"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1478"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1478/listOfAppUser"
          }
        }
      },
      {
        "name": "MASTERTECH",
        "number": "108471",
        "address": "2233 Western Avenue",
        "owner": "Ricky Masters",
        "city": "Plymouth",
        "state": "IN",
        "zipCode": "46563",
        "phoneNumber": "574-936-2705",
        "email": "tech2233@embarqmail.com",
        "fax": "574-936-8132",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1480"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1480"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1480/listOfAppUser"
          }
        }
      },
      {
        "name": "Matt Miller Tractors, Inc.",
        "number": "105336",
        "address": "7261 W State Road 80",
        "owner": "Matthew S. Miller",
        "city": "Fort Denaud",
        "state": "FL",
        "zipCode": "33935",
        "phoneNumber": "239-693-0305",
        "email": "office@com-ag.us",
        "fax": "239-728-2480",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1481"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1481"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1481/listOfAppUser"
          }
        }
      },
      {
        "name": "Matt Miller Tractors, Inc.",
        "number": "105336/191769",
        "address": "7261 W State Road 80",
        "owner": "Matthew Miller; Randall Tambling, G.M.",
        "city": "Fort Denaud",
        "state": "FL",
        "zipCode": "33935",
        "phoneNumber": "239-693-0305",
        "email": "office@com-ag.us",
        "fax": "239-728-2480",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1482"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1482"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1482/listOfAppUser"
          }
        }
      },
      {
        "name": "Maxx Powersport LLC",
        "number": "108523",
        "address": "207 Dairy Corner Place",
        "owner": "Robert Landis",
        "city": "Winchester",
        "state": "VA",
        "zipCode": "22602",
        "phoneNumber": "540-535-1993",
        "email": "mps.contacts@yahoo.com",
        "fax": "540-535-1994",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1483"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1483"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1483/listOfAppUser"
          }
        }
      },
      {
        "name": "McConnellsburg Motor & Implement",
        "number": "105229",
        "address": "P. O. Box 677 ",
        "owner": "Lyle M. Mellott",
        "city": "McConnellsburg",
        "state": "PA",
        "zipCode": "17233",
        "phoneNumber": "717-485-3181",
        "email": "lylemm@earthlink.net",
        "fax": "717-485-5579",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1484"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1484"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1484/listOfAppUser"
          }
        }
      },
      {
        "name": "Mebane Tractor Feed & Seed Inc",
        "number": "109119",
        "address": "3222 N. Hwy 49",
        "owner": "Mark Turner; Linda Turner",
        "city": "Mebane",
        "state": "NC",
        "zipCode": "27302",
        "phoneNumber": "336-578-0000",
        "email": "mark@mebanetractor.com",
        "fax": "336-578-0040",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1485"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1485"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1485/listOfAppUser"
          }
        }
      },
      {
        "name": "Meekins Tractor Inc",
        "number": "108757",
        "address": "4070 NC Hwy 211 E",
        "owner": "Lloyd \"Mickey\" Meekins, Jr.",
        "city": "Lumberton",
        "state": "NC",
        "zipCode": "28358",
        "phoneNumber": "910-739-0547",
        "email": "info@meekinsauction.com",
        "fax": "910-738-1389",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1486"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1486"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1486/listOfAppUser"
          }
        }
      },
      {
        "name": "Mel's Farm Repair",
        "number": "107667",
        "address": "1557 N. Weaver Road",
        "owner": "Mel L. Derstine",
        "city": "Fairview",
        "state": "MI",
        "zipCode": "48621",
        "phoneNumber": "989-848-2555",
        "email": "",
        "fax": "989-848-2555",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1487"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1487"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1487/listOfAppUser"
          }
        }
      },
      {
        "name": "Memphis Tractors, Inc.",
        "number": "106725",
        "address": "5161 Wilfong Road",
        "owner": "Foriest J. Cooper; Billie Cooper; Billy Griffin; Kayla Griffin",
        "city": "Memphis",
        "state": "TN",
        "zipCode": "38134",
        "phoneNumber": "901-317-7342",
        "email": "sales@memphistractors.com",
        "fax": "901-205-0607",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1488"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1488"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1488/listOfAppUser"
          }
        }
      },
      {
        "name": "Mendenhall Farms",
        "number": "106930",
        "address": "29060 Cadiz Dennison Road",
        "owner": "Joseph L. Mendenhall",
        "city": "Dennison",
        "state": "OH",
        "zipCode": "44621",
        "phoneNumber": "740-229-0080",
        "email": "mendenhalllynn@yahoo.com",
        "fax": "740-922-1222",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1489"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1489"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1489/listOfAppUser"
          }
        }
      },
      {
        "name": "MFS Alliance, Inc.",
        "number": "109118",
        "address": "P. O. Box 179",
        "owner": "Barney Withers",
        "city": "Edmonton",
        "state": "KY",
        "zipCode": "42129",
        "phoneNumber": "270-432-3221",
        "email": "metcalfefarmsupply@gmail.com",
        "fax": "270-432-5032",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1490"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1490"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1490/listOfAppUser"
          }
        }
      },
      {
        "name": "Middendorf Tractor, Auto & Powersports, Inc.",
        "number": "106238",
        "address": "233 N. Cole Hill Road",
        "owner": "Wayne Middendorf",
        "city": "Nichols",
        "state": "NY",
        "zipCode": "13812",
        "phoneNumber": "607-699-3847",
        "email": "middtractor@yahoo.com",
        "fax": "607-699-0403",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1491"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1491"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1491/listOfAppUser"
          }
        }
      },
      {
        "name": "Middleport Tractor Company",
        "number": "105431",
        "address": "P.O. Box 248",
        "owner": "David Huntington",
        "city": "Middleport",
        "state": "NY",
        "zipCode": "14105",
        "phoneNumber": "716-735-3200",
        "email": "middleporttractor@verizon.net",
        "fax": "716-735-3206",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1492"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1492"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1492/listOfAppUser"
          }
        }
      },
      {
        "name": "Mike's Farm Equipment Inc.",
        "number": "105193",
        "address": "4779 Marietta Rd.",
        "owner": "Mike Holdren",
        "city": "Chillicothe",
        "state": "OH",
        "zipCode": "45601",
        "phoneNumber": "740-775-0892",
        "email": "mikesfarmequipment@hotmail.com",
        "fax": "740-775-0892",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1493"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1493"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1493/listOfAppUser"
          }
        }
      },
      {
        "name": "Mike's Repair (KS)",
        "number": "105297",
        "address": "140 W. Front Street",
        "owner": "Michael White",
        "city": "Prescott",
        "state": "KS",
        "zipCode": "66767",
        "phoneNumber": "913-471-4863",
        "email": "mikesrepair@ckt.net",
        "fax": "913-471-4863",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1494"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1494"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1494/listOfAppUser"
          }
        }
      },
      {
        "name": "Mike's Repair Service (WI)",
        "number": "106896",
        "address": "147 Front Street",
        "owner": "Michael L. Kaster",
        "city": "Burlington",
        "state": "WI",
        "zipCode": "53105",
        "phoneNumber": "262-763-5806",
        "email": "mikesrepair@att.net",
        "fax": "262-763-1885",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1495"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1495"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1495/listOfAppUser"
          }
        }
      },
      {
        "name": "Milestone Equipment Ltd",
        "number": "300490",
        "address": "4072 Line 72",
        "owner": "Tim Schmidt; Derek Jantz; Darren Jantz; James Schmidt",
        "city": "Millbank",
        "state": "ON",
        "zipCode": "N0K 1L0",
        "phoneNumber": "519-595-3157",
        "email": "tim@milestoneequipment.com",
        "fax": "877-745-4107",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1496"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1496"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1496/listOfAppUser"
          }
        }
      },
      {
        "name": "Miller Repair",
        "number": "109682",
        "address": "S. 931 County Road C",
        "owner": "James Miller",
        "city": "Spencer",
        "state": "WI",
        "zipCode": "54479",
        "phoneNumber": "715-613-0219",
        "email": "jmil22243@hotmail.com",
        "fax": "",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1497"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1497"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1497/listOfAppUser"
          }
        }
      },
      {
        "name": "Mobile Ag & Industrial Supply Inc.",
        "number": "105267",
        "address": "4310 Rosedale Hwy",
        "owner": "Kari Mitchell",
        "city": "Bakersfield",
        "state": "CA",
        "zipCode": "93308",
        "phoneNumber": "661-323-4529",
        "email": "kmitchell@mobileagca.com",
        "fax": "661-323-6542",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1498"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1498"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1498/listOfAppUser"
          }
        }
      },
      {
        "name": "Mortons Power Equipment, Inc.",
        "number": "109661",
        "address": "5099B Jefferson Davis Highway",
        "owner": "Robert Massey",
        "city": "Fredericksburg",
        "state": "VA",
        "zipCode": "22408",
        "phoneNumber": "540-898-8738",
        "email": "sales@mortonspower.com",
        "fax": "540-898-3908",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1499"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1499"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1499/listOfAppUser"
          }
        }
      },
      {
        "name": "Moundridge Tractor, Inc. ",
        "number": "105943",
        "address": "116 E. Cole",
        "owner": "Rollin & Kay Flickner",
        "city": "Moundridge",
        "state": "KS",
        "zipCode": "67107",
        "phoneNumber": "620-345-2807",
        "email": "mdgtractor@mtelco.net; kayflick16@gmail.com",
        "fax": "",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1500"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1500"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1500/listOfAppUser"
          }
        }
      },
      {
        "name": "Mountaineer Tractor",
        "number": "105411",
        "address": "6466 Old Hwy 421 South",
        "owner": "Larry Potter",
        "city": "Deep Gap",
        "state": "NC",
        "zipCode": "28618",
        "phoneNumber": "828-264-6480",
        "email": "mountaineer.tractor@yahoo.com",
        "fax": "828-264-6481",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1501"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1501"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1501/listOfAppUser"
          }
        }
      },
      {
        "name": "Mountainview Tractor & Equipment, LLC",
        "number": "105244",
        "address": "41 King Rd",
        "owner": "Jack Bryan",
        "city": "Stanley",
        "state": "NM",
        "zipCode": "87056",
        "phoneNumber": "505-832-1112",
        "email": "mvtractor@gmail.com",
        "fax": "505-832-1487",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1502"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1502"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1502/listOfAppUser"
          }
        }
      },
      {
        "name": "Mower Zone, Inc.",
        "number": "110081",
        "address": "1120 W. Main Street",
        "owner": "Zach Cooper",
        "city": "Danville",
        "state": "IN",
        "zipCode": "46122",
        "phoneNumber": "317-745-8295",
        "email": "danvillemowerzone@gmail.com",
        "fax": "317-745-8296",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1503"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1503"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1503/listOfAppUser"
          }
        }
      },
      {
        "name": "MST Sod Equipment, Inc",
        "number": "108040/192233",
        "address": "P. O. Box 92078",
        "owner": "Lonnie Bertsch",
        "city": "Lakeland",
        "state": "FL",
        "zipCode": "33804",
        "phoneNumber": "863-853-4247",
        "email": "lonnie@mstsodequipment.com",
        "fax": "863-859-1644",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1504"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1504"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1504/listOfAppUser"
          }
        }
      },
      {
        "name": "Mullins Truck & Tractor, Inc.",
        "number": "110210",
        "address": "P. O. Box 387",
        "owner": "David Boyd Owens",
        "city": "Mullins",
        "state": "SC",
        "zipCode": "29574",
        "phoneNumber": "843-464-8255",
        "email": "mullinstruck@bellsouth.net",
        "fax": "843-464-8256",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1505"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1505"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1505/listOfAppUser"
          }
        }
      },
      {
        "name": "Murphy Brothers Trading Co.",
        "number": "107920/192153",
        "address": "1601 Dogwood Stand Road",
        "owner": "Christopher M. Murphy; Matthew L. Murphy",
        "city": "Booneville",
        "state": "MS",
        "zipCode": "38829",
        "phoneNumber": "662-720-0022",
        "email": "cmurf72@gmail.com",
        "fax": "662-720-0022",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1506"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1506"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1506/listOfAppUser"
          }
        }
      },
      {
        "name": "Muth, Inc.",
        "number": "107693",
        "address": "18209 Hwy 10",
        "owner": "Grace Muth Johnson",
        "city": "Rocky Ford",
        "state": "CO",
        "zipCode": "81067",
        "phoneNumber": "719-254-6140",
        "email": "muthinc@yahoo.com",
        "fax": "719-254-6140",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1507"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1507"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1507/listOfAppUser"
          }
        }
      },
      {
        "name": "Nagy's Tractor Sales, Inc.",
        "number": "105178",
        "address": "1980 W. US 23",
        "owner": "Daniel Nagy",
        "city": "Omer",
        "state": "MI",
        "zipCode": "48749",
        "phoneNumber": "989-653-3173",
        "email": "dannagy@centurytel.net; garywilliams@centurytel.net (parts)",
        "fax": "989-653-3084",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1508"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1508"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1508/listOfAppUser"
          }
        }
      },
      {
        "name": "Napoleon Lelievre & Cie Ltee Inc",
        "number": "300827",
        "address": "16, rue du Havre",
        "owner": "Jean-Yves Lelievre",
        "city": "Ste-Therese-de-Gaspe",
        "state": "QC",
        "zipCode": "G0C 3B0",
        "phoneNumber": "418-385-4990",
        "email": "lmse@bmcable.ca",
        "fax": "418-385-4490",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1509"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1509"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1509/listOfAppUser"
          }
        }
      },
      {
        "name": "Navajo Tractor Sales Inc.",
        "number": "105300/193330",
        "address": "P. O. Box 1810",
        "owner": "Terry Hamilton; Bill Overton; Jason Reece",
        "city": "Gallup",
        "state": "NM",
        "zipCode": "87305",
        "phoneNumber": "505-863-3806",
        "email": "thamilton@navajotractor.com; boverton@navajotractor.com; navajotractor@gmail.com",
        "fax": "505-726-1441",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1510"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1510"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1510/listOfAppUser"
          }
        }
      },
      {
        "name": "NB Attachments Ltd.",
        "number": "300721",
        "address": "26 East Lake Green",
        "owner": "Jason Curcio",
        "city": "Airdrie",
        "state": "AB",
        "zipCode": "T4A 2J2",
        "phoneNumber": "403-831-1055",
        "email": "jcurcio@nbattachments.com",
        "fax": "403-592-1510",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1511"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1511"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1511/listOfAppUser"
          }
        }
      },
      {
        "name": "New Alexandria Tractor Supply:A Div/Rt66TrctrSpply",
        "number": "105225",
        "address": "1855 Lions Club Rd",
        "owner": "Dennis G Downes",
        "city": "New Alexandria",
        "state": "PA",
        "zipCode": "15670",
        "phoneNumber": "724-668-2000",
        "email": "",
        "fax": "724-668-2600",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1512"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1512"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1512/listOfAppUser"
          }
        }
      },
      {
        "name": "North County Hardware, Inc.",
        "number": "109660",
        "address": "P. O. Box 430",
        "owner": "Jeff Strong",
        "city": "Amboy",
        "state": "WA",
        "zipCode": "98601",
        "phoneNumber": "360-247-6700",
        "email": "northcounty@tds.net; cstrong11@gmail.com",
        "fax": "360-247-6720",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1513"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1513"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1513/listOfAppUser"
          }
        }
      },
      {
        "name": "North Georgia Manufcturing Co;dba P&G Tractor & Eq",
        "number": "109242",
        "address": "3640 Chattanooga Road",
        "owner": "Winfred Putnam",
        "city": "Tunnel Hill",
        "state": "GA",
        "zipCode": "30755",
        "phoneNumber": "706-673-4010",
        "email": "northga@optilink.us; pgtractor@optilink.us",
        "fax": "706-673-6815",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1514"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1514"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1514/listOfAppUser"
          }
        }
      },
      {
        "name": "Northeast Farm Sales & Svc Inc",
        "number": "109365",
        "address": "4497 Route 5",
        "owner": "Keeno Chilafoux",
        "city": "Irasburg",
        "state": "VT",
        "zipCode": "05845",
        "phoneNumber": "802-754-8863",
        "email": "rfontaine@northeastfarmservice.com; nefs@northeastfarmservice.com; cclowes@northeastfarmservice.com",
        "fax": "802-754-2711",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1515"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1515"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1515/listOfAppUser"
          }
        }
      },
      {
        "name": "NW Mixer Feeders Inc",
        "number": "109865",
        "address": "15958 Gunfire Road",
        "owner": "Todd Smith; Kimi Smith",
        "city": "Caldwell",
        "state": "ID",
        "zipCode": "83607",
        "phoneNumber": "208-459-2750",
        "email": "kimi@nwmixerfeeders.com; office@nwmixerfeeders.com",
        "fax": "208-459-2787",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1516"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1516"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1516/listOfAppUser"
          }
        }
      },
      {
        "name": "Oak Grove Equipment LLC",
        "number": "109924",
        "address": "620 Constitution Avenue",
        "owner": "Dustin Sanders",
        "city": "Oak Grove",
        "state": "LA",
        "zipCode": "71263",
        "phoneNumber": "318-428-8777",
        "email": "oakgroveequipment@yahoo.com",
        "fax": "318-490-2027",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1517"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1517"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1517/listOfAppUser"
          }
        }
      },
      {
        "name": "Oktibbeha County Co-Op",
        "number": "109744/193208",
        "address": "P. O. Box 805",
        "owner": "Dan Shipp",
        "city": "Starkville",
        "state": "MS",
        "zipCode": "39760",
        "phoneNumber": "662-323-1742",
        "email": "dshipp@oktcoop.com",
        "fax": "662-323-1659",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1518"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1518"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1518/listOfAppUser"
          }
        }
      },
      {
        "name": "Oktibbeha County Co-Op; dba Evergreen Ag",
        "number": "109744/193209",
        "address": "P. O. Box 805",
        "owner": "Dan Shipp",
        "city": "Starkville",
        "state": "MS",
        "zipCode": "39760",
        "phoneNumber": "662-263-4419",
        "email": "bhodges@eagms.com; dshipp@oktcoop.com",
        "fax": "662-263-4840",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1519"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1519"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1519/listOfAppUser"
          }
        }
      },
      {
        "name": "Old Country Equipment Inc",
        "number": "110046",
        "address": "956 CR 314",
        "owner": "Larry L. Wiley",
        "city": "Ignaco",
        "state": "CO",
        "zipCode": "81137",
        "phoneNumber": "970-759-1761",
        "email": "tigger_1623@yahoo.com",
        "fax": "",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1520"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1520"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1520/listOfAppUser"
          }
        }
      },
      {
        "name": "Ottawa Argo Sales & Service",
        "number": "300397",
        "address": "3152 Donald B Munro Drive",
        "owner": "Glen Lucas",
        "city": "Dr. Kinburn",
        "state": "ON",
        "zipCode": "K0A 2H0",
        "phoneNumber": "613-254-6599",
        "email": "glenn@ottawaargo.com",
        "fax": "613-836-2010",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1521"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1521"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1521/listOfAppUser"
          }
        }
      },
      {
        "name": "P & B Mechanical",
        "number": "300594",
        "address": "P. O. Box 450",
        "owner": "Bill & Patsy Miller",
        "city": "Burns Lake",
        "state": "BC",
        "zipCode": "V0J 1E0",
        "phoneNumber": "250-696-3211",
        "email": "bmiller.pbm@gmail.com",
        "fax": "250-696-3210",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1522"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1522"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1522/listOfAppUser"
          }
        }
      },
      {
        "name": "Pacific Ag Eq LLC",
        "number": "109553",
        "address": "P. O. Box 1424",
        "owner": "Chad Lettrick",
        "city": "Hermiston",
        "state": "OR",
        "zipCode": "97838",
        "phoneNumber": "541-561-0446",
        "email": "pacificageq@gmail.com",
        "fax": "503-334-3615",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1523"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1523"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1523/listOfAppUser"
          }
        }
      },
      {
        "name": "Paige Equipment Sales & Service, Inc.",
        "number": "109527/193051",
        "address": "P. O. Box 272",
        "owner": "William Gates",
        "city": "E. Williamson",
        "state": "NY",
        "zipCode": "14449",
        "phoneNumber": "315-589-6651",
        "email": "sales@paigeequipment.com",
        "fax": "315-589-9168",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1524"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1524"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1524/listOfAppUser"
          }
        }
      },
      {
        "name": "Palmetto Equipment Sales, Inc. ",
        "number": "105924",
        "address": "1105 Anderson Drive",
        "owner": "Ralph L. Woodson",
        "city": "Williamston",
        "state": "SC",
        "zipCode": "29697",
        "phoneNumber": "864-847-1400",
        "email": "palmettoequip@charter.net",
        "fax": "864-847-7387",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1525"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1525"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1525/listOfAppUser"
          }
        }
      },
      {
        "name": "Parker Farm Supply & Equip, LLC",
        "number": "108416",
        "address": "315 Battleground Road",
        "owner": "Douglas M. Seager",
        "city": "Cowpens",
        "state": "SC",
        "zipCode": "29330",
        "phoneNumber": "864-406-0138",
        "email": "parkerfarmequip@att.net",
        "fax": "864-406-0139",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1526"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1526"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1526/listOfAppUser"
          }
        }
      },
      {
        "name": "Parkway Equipment Inc",
        "number": "105175/191964",
        "address": "P.O. Box 1229",
        "owner": "Donnis/Malinda Kichler",
        "city": "Robertsdale",
        "state": "AL",
        "zipCode": "36567",
        "phoneNumber": "251-964-6733",
        "email": "malinda.parkway@gmail.com",
        "fax": "251-964-6737",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1527"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1527"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1527/listOfAppUser"
          }
        }
      },
      {
        "name": "Patterson Sales",
        "number": "300371/191336",
        "address": "P. O. Box 547",
        "owner": "Pamela Patterson",
        "city": "Miramichi",
        "state": "NB",
        "zipCode": "E1N 3A8",
        "phoneNumber": "506-454-3535",
        "email": "LJPAT@NB.AIBN.COM",
        "fax": "506-454-2525",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1528"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1528"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1528/listOfAppUser"
          }
        }
      },
      {
        "name": "Patterson Sales",
        "number": "300371",
        "address": "P. O. Box 547",
        "owner": "Pamela Patterson",
        "city": "Miramichi",
        "state": "NB",
        "zipCode": "E1N 3A8",
        "phoneNumber": "506-778-8319",
        "email": "ljpat@nb.aibn.com",
        "fax": "",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1529"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1529"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1529/listOfAppUser"
          }
        }
      },
      {
        "name": "Patterson Sales",
        "number": "null",
        "address": "711 Ferdinand Blvd. ",
        "owner": "Pamela Patterson",
        "city": "Dieppe",
        "state": "NB",
        "zipCode": "E1A 7G1",
        "phoneNumber": "506-383-4202",
        "email": "",
        "fax": "506-383-4206",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1530"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1530"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1530/listOfAppUser"
          }
        }
      },
      {
        "name": "Paul's Tractor Sales & Service, LLC",
        "number": "105543",
        "address": "4513 W. Frances Road",
        "owner": "Paul P. Bolanowiski, Jr.",
        "city": "Clio",
        "state": "MI",
        "zipCode": "48420",
        "phoneNumber": "810-686-4777",
        "email": "paulstractormi@aol.com",
        "fax": "810-686-4242",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1531"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1531"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1531/listOfAppUser"
          }
        }
      },
      {
        "name": "Pegasus Industries, Inc.; dba Equipment Outlet",
        "number": "109267",
        "address": "4567 Martha Berry Hwy",
        "owner": "Russ Jennings",
        "city": "Rome",
        "state": "GA",
        "zipCode": "30165",
        "phoneNumber": "706-237-6911",
        "email": "russ@equipmentoutletga.com",
        "fax": "706-237-6948",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1532"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1532"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1532/listOfAppUser"
          }
        }
      },
      {
        "name": "Peiker Tractor Sales",
        "number": "109166",
        "address": "16091 477th Avenue",
        "owner": "Jimmy Peiker",
        "city": "La Bolt",
        "state": "SD",
        "zipCode": "57246",
        "phoneNumber": "605-467-1597",
        "email": "peikertractorsales@hotmail.com",
        "fax": "",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1533"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1533"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1533/listOfAppUser"
          }
        }
      },
      {
        "name": "Pen-Bay Tractor Co",
        "number": "106815",
        "address": "1707 Bangor Road",
        "owner": "Daniel Wishart",
        "city": "Clinton",
        "state": "ME",
        "zipCode": "04927",
        "phoneNumber": "207-649-6199",
        "email": "dan@penbaytractor.com",
        "fax": "207-426-1082",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1534"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1534"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1534/listOfAppUser"
          }
        }
      },
      {
        "name": "Peninsula Tractor",
        "number": "109194/192871",
        "address": "P. O. Box 5072",
        "owner": "James Engebretsen",
        "city": "Nikolaevsk",
        "state": "AK",
        "zipCode": "99556",
        "phoneNumber": "907-299-1970",
        "email": "jime16@ymail.com",
        "fax": "",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1535"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1535"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1535/listOfAppUser"
          }
        }
      },
      {
        "name": "Pennell & Sons, Inc.",
        "number": "109283",
        "address": "1630 Taylorsville Road",
        "owner": "Lynn Pennell",
        "city": "Lenoir",
        "state": "NC",
        "zipCode": "28645",
        "phoneNumber": "828-754-1924",
        "email": "lpennell65@gmail.com",
        "fax": "828-754-2224",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1536"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1536"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1536/listOfAppUser"
          }
        }
      },
      {
        "name": "Penrose Tractor Factory",
        "number": "106714",
        "address": "455 State Hwy 115",
        "owner": "Randy Sipma",
        "city": "Penrose",
        "state": "CO",
        "zipCode": "81240",
        "phoneNumber": "719-372-6366",
        "email": "randy@tractorfactory.net",
        "fax": "719-372-3044",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1537"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1537"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1537/listOfAppUser"
          }
        }
      },
      {
        "name": "Perkins Seed House",
        "number": "107534",
        "address": "601 E. Windsor Avenue",
        "owner": "Mark Perkins",
        "city": "Havana",
        "state": "IL",
        "zipCode": "62644",
        "phoneNumber": "309-543-2037",
        "email": "m.perkins78@yahoo.com",
        "fax": "309-543-2037",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1538"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1538"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1538/listOfAppUser"
          }
        }
      },
      {
        "name": "Persha Equipment Sales, Inc.",
        "number": "109621",
        "address": "W2911 State Hwy 33",
        "owner": "James E. Persha",
        "city": "Mayville",
        "state": "WI",
        "zipCode": "53050",
        "phoneNumber": "920-387-5320",
        "email": "pershaequipment@gmail.com",
        "fax": "920-387-1120",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1539"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1539"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1539/listOfAppUser"
          }
        }
      },
      {
        "name": "Pete & Son's Inc.",
        "number": "105191",
        "address": "40017 Road 48",
        "owner": "Pete Krahn",
        "city": "Dinuba",
        "state": "CA",
        "zipCode": "93618",
        "phoneNumber": "559-591-7485",
        "email": "joseph@peteandsonsinc.com",
        "fax": "559-354-5292",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1540"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1540"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1540/listOfAppUser"
          }
        }
      },
      {
        "name": "Piedmont Tractor & Equipment Inc.",
        "number": "107621",
        "address": "P. O. Box 907427",
        "owner": "Ron Hollis, Sr.",
        "city": "Gainesville",
        "state": "GA",
        "zipCode": "30501",
        "phoneNumber": "770-534-5000",
        "email": "brian@piedmonttractor.com; mike@piedmonttractor.com",
        "fax": "770-536-6864",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1541"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1541"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1541/listOfAppUser"
          }
        }
      },
      {
        "name": "Pinerock Construction, Inc",
        "number": "109010/192777",
        "address": "P. O. Box 146",
        "owner": "Edward E. Krukonis, Jr",
        "city": "Prides Crossing",
        "state": "MA",
        "zipCode": "01965",
        "phoneNumber": "978-922-8165",
        "email": "ekjr58@aol.com",
        "fax": "978-922-8165",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1542"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1542"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1542/listOfAppUser"
          }
        }
      },
      {
        "name": "Pinerock Construction, Inc",
        "number": "109010/192781",
        "address": "P. O. Box 146",
        "owner": "Edward E. Krukonis, Jr",
        "city": "Prides Crossing",
        "state": "MA",
        "zipCode": "01965",
        "phoneNumber": "978-922-8165",
        "email": "ekjr58@aol.com",
        "fax": "978-922-8165",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1543"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1543"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1543/listOfAppUser"
          }
        }
      },
      {
        "name": "Platinum Auto Center, Inc",
        "number": "105323",
        "address": "P. O. Box 1558",
        "owner": "Wayne Lehman",
        "city": "Big Timber",
        "state": "MT",
        "zipCode": "59011",
        "phoneNumber": "406-860-8510",
        "email": "platautobt@gmail.com",
        "fax": "406-322-5258",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1544"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1544"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1544/listOfAppUser"
          }
        }
      },
      {
        "name": "Pope Tractor Company, Inc.",
        "number": "109779",
        "address": "243 Burem Road",
        "owner": "Robert L. Lawson",
        "city": "Rogersville",
        "state": "TN",
        "zipCode": "37857",
        "phoneNumber": "423-272-7400",
        "email": "scottgillespie111@gmail.com",
        "fax": "",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1545"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1545"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1545/listOfAppUser"
          }
        }
      },
      {
        "name": "Portville Truck&Auto Repair Inc;dba Bobcat of Kane",
        "number": "108557",
        "address": "3088 Route 219",
        "owner": "Christopher R. Travis",
        "city": "Kane",
        "state": "PA",
        "zipCode": "16735",
        "phoneNumber": "814-778-5300",
        "email": "bmix@portvilletruck.com",
        "fax": "814-778-5363",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1546"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1546"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1546/listOfAppUser"
          }
        }
      },
      {
        "name": "R J Tractor Services, LLC",
        "number": "108483",
        "address": "1010 County Road 234",
        "owner": "Robert W. Kuehn",
        "city": "Giddings",
        "state": "TX",
        "zipCode": "78942",
        "phoneNumber": "979-542-2300",
        "email": "kuehn42@yahoo.com",
        "fax": "979-542-2322",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1547"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1547"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1547/listOfAppUser"
          }
        }
      },
      {
        "name": "R.C. Weidmark Services",
        "number": "300372",
        "address": "P. O. Box 224",
        "owner": "Robert & Joann Weidmark",
        "city": "Magnetawan",
        "state": "ON",
        "zipCode": "POA 1PO",
        "phoneNumber": "705-387-4953",
        "email": "rcjw@hotmail.ca",
        "fax": "705-387-1317",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1548"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1548"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1548/listOfAppUser"
          }
        }
      },
      {
        "name": "Ranmar Tractor Supply",
        "number": "105235",
        "address": "5219 US Route 11",
        "owner": "Randall A Groves & MaryAnn R Groves",
        "city": "Pulaski",
        "state": "NY",
        "zipCode": "13142",
        "phoneNumber": "315-298-5109",
        "email": "ranmar1@peoplepc.com",
        "fax": "315-298-5109",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1549"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1549"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1549/listOfAppUser"
          }
        }
      },
      {
        "name": "Ratliff Service Center",
        "number": "105174",
        "address": "2127 James D. Hagood Hwy",
        "owner": "Ronnie Cecil Ratliff",
        "city": "Halifax",
        "state": "VA",
        "zipCode": "24558",
        "phoneNumber": "434-575-5954",
        "email": "ratliff@embarqmail.com",
        "fax": "434-575-5524",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1550"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1550"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1550/listOfAppUser"
          }
        }
      },
      {
        "name": "Ray's Trailer Sales Ltd.",
        "number": "300654",
        "address": "3911-47 Avenue",
        "owner": "Guy Turnbull",
        "city": "Camrose",
        "state": "AB",
        "zipCode": "T4V 2N2",
        "phoneNumber": "780-672-4596",
        "email": "raysoffice@raystrailersales.ca; don@raystrailersales.ca; cory@raystrailersales.ca",
        "fax": "780-672-9544",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1551"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1551"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1551/listOfAppUser"
          }
        }
      },
      {
        "name": "RCO Tractor (Greenville)",
        "number": "105281/190898",
        "address": "8626 Old Bee Cave Road",
        "owner": "John C. Ryan",
        "city": "Austin",
        "state": "TX",
        "zipCode": "78735",
        "phoneNumber": "903-883-4840",
        "email": "john@rcotractor.com; accounting@rcotractor.com",
        "fax": "512-233-1764",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1552"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1552"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1552/listOfAppUser"
          }
        }
      },
      {
        "name": "RCO Tractor, Inc.",
        "number": "105281",
        "address": "8626 Old Bee Cave Rd.",
        "owner": "John Ryan/Stuart Ryan",
        "city": "Austin",
        "state": "TX",
        "zipCode": "78735",
        "phoneNumber": "512-535-6862",
        "email": "john@rcotractor.com; accounting@rcotractor.com",
        "fax": "512-233-1764",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1553"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1553"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1553/listOfAppUser"
          }
        }
      },
      {
        "name": "Reid's Service Center",
        "number": "106778",
        "address": "P. O. Box 487",
        "owner": "Anthony A. Paine, Jr.",
        "city": "Oxford",
        "state": "ME",
        "zipCode": "04270",
        "phoneNumber": "207-539-4425",
        "email": "reids1@ne.twcbc.com",
        "fax": "207-539-4520",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1554"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1554"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1554/listOfAppUser"
          }
        }
      },
      {
        "name": "Reid's Service Center",
        "number": "106778/191987",
        "address": "P. O. Box 487",
        "owner": "Anthony A. Paine, Jr.",
        "city": "Oxford",
        "state": "ME",
        "zipCode": "04270",
        "phoneNumber": "207-894-2298",
        "email": "allseasonspe@ne.twcbc.com; reids1@ne.twcbc.com",
        "fax": "207-894-2298",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1555"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1555"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1555/listOfAppUser"
          }
        }
      },
      {
        "name": "Richard's Small Engine Inc",
        "number": "105495",
        "address": "8273 W. State Road 46",
        "owner": "Richard Gieselman",
        "city": "Ellettsville",
        "state": "IN",
        "zipCode": "47429",
        "phoneNumber": "812-876-9302",
        "email": "rseservice@yahoo.com",
        "fax": "812-876-1588",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1556"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1556"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1556/listOfAppUser"
          }
        }
      },
      {
        "name": "Ridge Sales",
        "number": "108717",
        "address": "1027 Hwy 11 S",
        "owner": "Curtis B. Hauger",
        "city": "Badger",
        "state": "MN",
        "zipCode": "56714",
        "phoneNumber": "218-528-2555",
        "email": "ridgesalesbadger@hotmail.com",
        "fax": "218-528-2557",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1557"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1557"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1557/listOfAppUser"
          }
        }
      },
      {
        "name": "Rister Brothers Equipment, Inc.",
        "number": "105205",
        "address": "805 Hwy 145 S",
        "owner": "Richard Rister",
        "city": "Harrisburg",
        "state": "IL",
        "zipCode": "62946",
        "phoneNumber": "618-252-3066",
        "email": "risters@shawneelink.net",
        "fax": "618-252-3648",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1558"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1558"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1558/listOfAppUser"
          }
        }
      },
      {
        "name": "Robinson Equipment, Inc.",
        "number": "107849",
        "address": "8968 Howard City Edmore Road",
        "owner": "Kevin Murphy",
        "city": "Lakeview",
        "state": "MI",
        "zipCode": "48850",
        "phoneNumber": "989-352-7206",
        "email": "kmurphyrobinsoneq@hotmail.com",
        "fax": "989-352-7209",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1559"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1559"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1559/listOfAppUser"
          }
        }
      },
      {
        "name": "Robinson Equipment, Inc.",
        "number": "107849/192631",
        "address": "8968 Howard City Edmore Road",
        "owner": "Kevin Murphy",
        "city": "Lakeview",
        "state": "MI",
        "zipCode": "48850",
        "phoneNumber": "616-987-3247",
        "email": "kmurphyrobinsoneq@hotmail.com",
        "fax": "866-802-0390",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1560"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1560"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1560/listOfAppUser"
          }
        }
      },
      {
        "name": "Robison Equipment",
        "number": "105334",
        "address": "P. O. Box 37",
        "owner": "Paul J. Robison II",
        "city": "Thompson",
        "state": "OH",
        "zipCode": "44086",
        "phoneNumber": "440-298-3318",
        "email": "prco@windstream.net",
        "fax": "440-298-9823",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1561"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1561"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1561/listOfAppUser"
          }
        }
      },
      {
        "name": "Rockin' Moose Sales LLC",
        "number": "109720",
        "address": "3901 W. Highway 107",
        "owner": "Steve Higginbotham",
        "city": "McAllen",
        "state": "TX",
        "zipCode": "78504",
        "phoneNumber": "956-318-1370",
        "email": "rockinmoosesales@aol.com",
        "fax": "956-928-9514 ",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1562"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1562"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1562/listOfAppUser"
          }
        }
      },
      {
        "name": "Roger's Sport Center, Inc.",
        "number": "107599",
        "address": "214 Market Street",
        "owner": "Robert J. Bonenfant",
        "city": "Fort Kent",
        "state": "ME",
        "zipCode": "04743",
        "phoneNumber": "207-834-5505",
        "email": "rogerssportcenter@hotmail.com",
        "fax": "207-834-6683",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1563"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1563"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1563/listOfAppUser"
          }
        }
      },
      {
        "name": "Ross Johnson's",
        "number": "300589",
        "address": "2319 Third Line",
        "owner": "Ross Johnson",
        "city": "Ohsweken",
        "state": "ON",
        "zipCode": "N0A 1M0",
        "phoneNumber": "905-768-8566",
        "email": "johnsontractorsixnations@gmail.com",
        "fax": "000-000-0000",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1564"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1564"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1564/listOfAppUser"
          }
        }
      },
      {
        "name": "Ross Tractor Sales & Service, Inc. ",
        "number": "105721",
        "address": "40 S. Woodland Avenue",
        "owner": "Joseph W. Ross II",
        "city": "Waynesburg",
        "state": "PA",
        "zipCode": "15370",
        "phoneNumber": "724-627-6966",
        "email": "rosstractor@gmail.com",
        "fax": "724-627-6965",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1565"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1565"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1565/listOfAppUser"
          }
        }
      },
      {
        "name": "Rusty's Power Washing",
        "number": "300575",
        "address": "2561 Kimball Road",
        "owner": "Rusty Spitzig",
        "city": "Courtright",
        "state": "ON",
        "zipCode": "N0N 1H0",
        "phoneNumber": "519-332-9821",
        "email": "russdeespitzig@hotmail.com",
        "fax": "519-864-4601",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1566"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1566"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1566/listOfAppUser"
          }
        }
      },
      {
        "name": "Sandy Lake Implement Co Inc",
        "number": "105182",
        "address": "3675 Sandy Lake Rd",
        "owner": "Bob L. Foster",
        "city": "Sandy Lake",
        "state": "PA",
        "zipCode": "16145",
        "phoneNumber": "724-376-2489",
        "email": "info@sandylakeimp.com",
        "fax": "724-376-3775",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1567"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1567"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1567/listOfAppUser"
          }
        }
      },
      {
        "name": "Sandyland Equipment, LLC",
        "number": "108811",
        "address": "211 Interstate 45 North",
        "owner": "Billie H. Bonner",
        "city": "Fairfield",
        "state": "TX",
        "zipCode": "75840",
        "phoneNumber": "903-389-9993",
        "email": "sales@sandylandequipment.com",
        "fax": "903-389-2969",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1568"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1568"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1568/listOfAppUser"
          }
        }
      },
      {
        "name": "Scott Equipment & Repair",
        "number": "105684/191022",
        "address": "RR 1 Box 81",
        "owner": "James Scott; Rob Scott",
        "city": "Biggsville",
        "state": "IL",
        "zipCode": "61418",
        "phoneNumber": "309-627-9994",
        "email": "scottequipment@frontier.com",
        "fax": "309-627-9995",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1569"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1569"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1569/listOfAppUser"
          }
        }
      },
      {
        "name": "Select Auto Sales Inc",
        "number": "108846",
        "address": "320 Becker Drive",
        "owner": "Alan Vestor; Richard Shoe",
        "city": "Roanoke Rapids",
        "state": "NC",
        "zipCode": "27870",
        "phoneNumber": "252-410-0010",
        "email": "selectautosalesrr@gmail.com",
        "fax": "252-410-0123",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1570"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1570"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1570/listOfAppUser"
          }
        }
      },
      {
        "name": "Select Auto Sales Inc",
        "number": "108846/193402",
        "address": "320 Becker Drive",
        "owner": "Alan Vestor",
        "city": "Roanoke Rapids",
        "state": "NC",
        "zipCode": "27870",
        "phoneNumber": "252-430-0230",
        "email": "903autosales@gmail.com",
        "fax": "252-430-1622",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1571"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1571"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1571/listOfAppUser"
          }
        }
      },
      {
        "name": "Sheridan Tractor & Supply LLC",
        "number": "106825",
        "address": "817 E. Center Street",
        "owner": "Carroll Shearer, Jr.",
        "city": "Sheridan",
        "state": "AR",
        "zipCode": "72150",
        "phoneNumber": "870-942-3747",
        "email": "sheridantractorandsupply@yahoo.com",
        "fax": "870-942-1672",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1572"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1572"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1572/listOfAppUser"
          }
        }
      },
      {
        "name": "Sherlock Equipment Sales LLC",
        "number": "108935/192762",
        "address": "P. O. Box 3090",
        "owner": "John Sherlock; Laura Sherlock",
        "city": "Belfair",
        "state": "WA",
        "zipCode": "98528",
        "phoneNumber": "360-689-2208",
        "email": "john@sherlockequipment.com",
        "fax": "",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1573"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1573"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1573/listOfAppUser"
          }
        }
      },
      {
        "name": "Silver Creek Equipment, Inc.",
        "number": "110058/193353",
        "address": "4833 Rudy Road",
        "owner": "Jason H. Cowan",
        "city": "Corydon",
        "state": "KY",
        "zipCode": "42406",
        "phoneNumber": "270-826-0777",
        "email": "silvercreektrans@gmail.com",
        "fax": "270-869-0087",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1574"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1574"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1574/listOfAppUser"
          }
        }
      },
      {
        "name": "Sirum Equipment Company, Inc.",
        "number": "109729",
        "address": "310 Federal Street",
        "owner": "Adam Sirum; Edward Sirum; Anthony Sirum",
        "city": "Montague",
        "state": "MA",
        "zipCode": "01351",
        "phoneNumber": "413-367-2481",
        "email": "admindept@sirumequipment.com",
        "fax": "413-367-2400",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1575"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1575"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1575/listOfAppUser"
          }
        }
      },
      {
        "name": "Small Engine Power",
        "number": "106721",
        "address": "7329 Edgemont Road",
        "owner": "William Harrell Thompson",
        "city": "Higden",
        "state": "AR",
        "zipCode": "72067",
        "phoneNumber": "501-825-8095",
        "email": "powerrdt@yahoo.com",
        "fax": "501-825-7979",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1576"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1576"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1576/listOfAppUser"
          }
        }
      },
      {
        "name": "Small Engine Power",
        "number": "106721/192954",
        "address": "7329 Edgemont Road",
        "owner": "William Harrell Thompson",
        "city": "Higden",
        "state": "AR",
        "zipCode": "72067",
        "phoneNumber": "501-581-0015",
        "email": "powerrdt@yahoo.com",
        "fax": "501-581-0231",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1577"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1577"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1577/listOfAppUser"
          }
        }
      },
      {
        "name": "Small Farm Innovations",
        "number": "106539",
        "address": "3701 State Hwy 36 S",
        "owner": "Phil or Sharon Livengood",
        "city": "Caldwell",
        "state": "TX",
        "zipCode": "77836",
        "phoneNumber": "979-200-0766",
        "email": "phil@smallfarminnovations.com",
        "fax": "979-258-2971",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1578"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1578"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1578/listOfAppUser"
          }
        }
      },
      {
        "name": "Smith Auto & Tractor Sales",
        "number": "110086",
        "address": "3577 Old Franklin Turnpike",
        "owner": "Jody A. Smith, Sr.",
        "city": "Glade Hill",
        "state": "VA",
        "zipCode": "24092",
        "phoneNumber": "540-483-8807",
        "email": "sas3577@gmail.com",
        "fax": "540-484-1700",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1579"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1579"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1579/listOfAppUser"
          }
        }
      },
      {
        "name": "Smith's Oil Co., LLC",
        "number": "105544",
        "address": "9269 Dunn Road",
        "owner": "Smith's Oil Co., LLC",
        "city": "Salemburg",
        "state": "NC",
        "zipCode": "28385",
        "phoneNumber": "910-567-6542",
        "email": "smithsent@gmail.com; ajohnson638@gmail.com",
        "fax": "910-567-2840",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1580"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1580"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1580/listOfAppUser"
          }
        }
      },
      {
        "name": "Smith's Oil Co., LLC",
        "number": "105544/192537",
        "address": "9269 Dunn Road",
        "owner": "Helen Smith, Billy Smith",
        "city": "Salemburg",
        "state": "NC",
        "zipCode": "28385",
        "phoneNumber": "910-592-3184",
        "email": "smithsent@gmail.com; ajohnson638@gmail.com;                 (Parts) tnyodm@gmail.com",
        "fax": "910-592-3184",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1581"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1581"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1581/listOfAppUser"
          }
        }
      },
      {
        "name": "Smith's Oil Co., LLC",
        "number": "105544/191625",
        "address": "9269 Dunn Road",
        "owner": "Helen Smith; Billy Smith",
        "city": "Salemburg",
        "state": "NC",
        "zipCode": "28385",
        "phoneNumber": "910-892-7316",
        "email": "smithsent@gmail.com; ajohnson638@gmail.com",
        "fax": "",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1582"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1582"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1582/listOfAppUser"
          }
        }
      },
      {
        "name": "Smith's Oil Co., LLC",
        "number": "105544/191892",
        "address": "9269 Dunn Road",
        "owner": "Helen Smith, Billy Smith",
        "city": "Salemburg",
        "state": "NC",
        "zipCode": "28385",
        "phoneNumber": "910-424-5330",
        "email": "smithsent@gmail.com; ajohnson638@gmail.com",
        "fax": "910-424-1507",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1583"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1583"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1583/listOfAppUser"
          }
        }
      },
      {
        "name": "South Coast AG & ATV",
        "number": "109427",
        "address": "703 8th Street",
        "owner": "Albert W. \"Ozzie\" Grenade",
        "city": "Myrtle Point",
        "state": "OR",
        "zipCode": "97458",
        "phoneNumber": "541-572-1000",
        "email": "southcoastag@mycomspan.com",
        "fax": "541-572-5875",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1584"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1584"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1584/listOfAppUser"
          }
        }
      },
      {
        "name": "Southeastern Equipment Co, Inc",
        "number": "106804",
        "address": "P. O. Box 536",
        "owner": "William L. Baker",
        "city": "Cambridge",
        "state": "OH",
        "zipCode": "43725",
        "phoneNumber": "740-432-6303",
        "email": "mhinton@southeasternequip.com; jross@southeasternequip.com",
        "fax": "740-432-3303",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1585"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1585"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1585/listOfAppUser"
          }
        }
      },
      {
        "name": "Southeastern Equipment Co, Inc",
        "number": "106804/191787",
        "address": "P. O. Box 536",
        "owner": "William L. Baker",
        "city": "Cambridge",
        "state": "OH",
        "zipCode": "43725",
        "phoneNumber": "740-374-7479",
        "email": "mhinton@southeasternequip.com; jross@southeasternequip.com",
        "fax": "740-374-7457",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1586"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1586"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1586/listOfAppUser"
          }
        }
      },
      {
        "name": "Southeastern Equipment Co, Inc",
        "number": "106804/191923",
        "address": "P. O. Box 536",
        "owner": "William L. Baker",
        "city": "Cambridge",
        "state": "OH",
        "zipCode": "43725",
        "phoneNumber": "440-255-6300",
        "email": "mhinton@southeasternequip.com; jross@southeasternequip.com",
        "fax": "440-205-9440",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1587"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1587"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1587/listOfAppUser"
          }
        }
      },
      {
        "name": "Southern Harvest Equipment Co.",
        "number": "107879/192126",
        "address": "P. O. Box 2762",
        "owner": "Wade Durham; Mark Whitley",
        "city": "Thomasville",
        "state": "GA",
        "zipCode": "31799",
        "phoneNumber": "229-226-9314",
        "email": "wade@southernharvestequipment.com; mark@southernharvestequipment.com",
        "fax": "229-227-1655",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1588"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1588"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1588/listOfAppUser"
          }
        }
      },
      {
        "name": "Southern Harvest Equipment Co.",
        "number": "107879/192127",
        "address": "P. O. Box 2762",
        "owner": "Ralph; Wade Durham; Mark Whitley",
        "city": "Thomasville",
        "state": "GA",
        "zipCode": "31799",
        "phoneNumber": "229-226-9314",
        "email": "wade@southernharvestequipment.com; mark@southernharvestequipment.com",
        "fax": "229-227-1655",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1589"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1589"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1589/listOfAppUser"
          }
        }
      },
      {
        "name": "Southern Indiana Equipment, Inc",
        "number": "108673",
        "address": "7200 Apple Leaf Lane",
        "owner": "Ronald Zipp",
        "city": "Sellersburg",
        "state": "IN",
        "zipCode": "47172",
        "phoneNumber": "812-246-1000",
        "email": "silequipment@aol.com",
        "fax": "812-246-1001",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1590"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1590"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1590/listOfAppUser"
          }
        }
      },
      {
        "name": "Southern Indiana Equipment, Inc",
        "number": "108673/192557",
        "address": "7200 Apple Leaf Lane",
        "owner": "Ronald Zipp",
        "city": "Sellersburg",
        "state": "IN",
        "zipCode": "47172",
        "phoneNumber": "812-952-1706",
        "email": "silequipment@aol.com",
        "fax": "812-952-1709",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1591"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1591"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1591/listOfAppUser"
          }
        }
      },
      {
        "name": "Sprouse's Garage Inc.",
        "number": "105273",
        "address": "43 Sprouses's Garage Rd.",
        "owner": "E.B. Sprouse III",
        "city": "Dillwyn",
        "state": "VA",
        "zipCode": "23936",
        "phoneNumber": "434-983-2523",
        "email": "sprousesgarage@kinex.net",
        "fax": "",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1592"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1592"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1592/listOfAppUser"
          }
        }
      },
      {
        "name": "Stalnaker Equipment",
        "number": "107410",
        "address": "1144 Old Route 33",
        "owner": "Walter Stalnaker",
        "city": "Weston",
        "state": "WV",
        "zipCode": "26452",
        "phoneNumber": "304-269-2345",
        "email": "stalnakerusedcars@yahoo.com",
        "fax": "304-997-8668",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1593"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1593"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1593/listOfAppUser"
          }
        }
      },
      {
        "name": "Steve's Honda Inc",
        "number": "108734",
        "address": "800 B Leilani Street",
        "owner": "Michael Kudo; Steven Royston",
        "city": "Hilo",
        "state": "HI",
        "zipCode": "96720",
        "phoneNumber": "808-969-3030",
        "email": "steves@steveshonda.com",
        "fax": "808-969-3001",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1594"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1594"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1594/listOfAppUser"
          }
        }
      },
      {
        "name": "Stringfellow Equipment Company",
        "number": "105179",
        "address": "14206 Hwy 98E",
        "owner": "Bonnie Stringfellow",
        "city": "Lucedale",
        "state": "MS",
        "zipCode": "39452",
        "phoneNumber": "601-947-3973",
        "email": "stringfelloweq@bellsouth.net",
        "fax": "601-947-6827",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1595"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1595"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1595/listOfAppUser"
          }
        }
      },
      {
        "name": "Sublette Mechanical, Inc.",
        "number": "106627",
        "address": "P. O. Box 246",
        "owner": "Michael Vaessen",
        "city": "Sublette",
        "state": "IL",
        "zipCode": "61367",
        "phoneNumber": "815-849-5223",
        "email": "sublettemechanical@yahoo.com; sublettemechanical@centurylink.net",
        "fax": "815-849-5353",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1596"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1596"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1596/listOfAppUser"
          }
        }
      },
      {
        "name": "Sublette Mechanical, Inc.",
        "number": "106627/191754",
        "address": "P. O. Box 246",
        "owner": "Michael Vaessen",
        "city": "Sublette",
        "state": "IL",
        "zipCode": "61367",
        "phoneNumber": "815-849-5223",
        "email": "sublettemechanical@yahoo.com; sublettemechanical@centurylink.net",
        "fax": "815-288-1249",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1597"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1597"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1597/listOfAppUser"
          }
        }
      },
      {
        "name": "Sumerix Implement, Inc.",
        "number": "110209",
        "address": "1338 M-65 South",
        "owner": "Ivan Sumerix",
        "city": "Lachine",
        "state": "MI",
        "zipCode": "49753",
        "phoneNumber": "989-379-2721",
        "email": "sumerix@hotmail.com; info@sumeriximp.com",
        "fax": "989-379-4295",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1598"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1598"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1598/listOfAppUser"
          }
        }
      },
      {
        "name": "Sumrall Sales & Service Inc",
        "number": "108571",
        "address": "16101 Hwy 49",
        "owner": "Stan L. Sumrall",
        "city": "Gulfport",
        "state": "MS",
        "zipCode": "39503",
        "phoneNumber": "228-328-9199",
        "email": "ssumrall66@gmail.com; wtc60@hotmail.com",
        "fax": "228-328-9155",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1599"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1599"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1599/listOfAppUser"
          }
        }
      },
      {
        "name": "Superior Farm Supply Inc",
        "number": "108486",
        "address": "13080 State Route 107",
        "owner": "Paul & Melanie Haines",
        "city": "Montpelier",
        "state": "OH",
        "zipCode": "43543",
        "phoneNumber": "419-485-8351",
        "email": "superiorfarm@live.com",
        "fax": "419-485-8352",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1600"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1600"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1600/listOfAppUser"
          }
        }
      },
      {
        "name": "Sutton Tractor, Inc. (Tulsa)",
        "number": "105581",
        "address": "6800 New Sapulpa Road",
        "owner": "William \"Eric\" Sutton",
        "city": "Tulsa",
        "state": "OK",
        "zipCode": "74131",
        "phoneNumber": "918-446-6502",
        "email": "suttontractortulsaservice@gmail.com; suttontulsaparts@gmail.com",
        "fax": "918-446-6516",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1601"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1601"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1601/listOfAppUser"
          }
        }
      },
      {
        "name": "Team Carolina Powersports",
        "number": "105313",
        "address": "1200 Hwy 9 ByPass West",
        "owner": "Tony Cozzone",
        "city": "Lancaster",
        "state": "SC",
        "zipCode": "29720",
        "phoneNumber": "803-285-5893",
        "email": "tocozzo@gmail.com (Jr); tonycozzone@yahoo.com (Sr)",
        "fax": "803-285-4993",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1602"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1602"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1602/listOfAppUser"
          }
        }
      },
      {
        "name": "Tedder Outdoor Power Equip, Inc",
        "number": "108051",
        "address": "125 Country Walk Terrace",
        "owner": "Michael Tedder",
        "city": "Hot Springs",
        "state": "AR",
        "zipCode": "71913",
        "phoneNumber": "501-760-6161",
        "email": "tedderoutdoorpower@sbcglobal.net",
        "fax": "501-760-6166",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1603"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1603"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1603/listOfAppUser"
          }
        }
      },
      {
        "name": "The Tractor Company",
        "number": "300514",
        "address": "Box 569, 700 Service Road",
        "owner": "Ron Heppner",
        "city": "Osler",
        "state": "SK",
        "zipCode": "S0K 3A0",
        "phoneNumber": "306-239-2262",
        "email": "tractorco@sasktel.net",
        "fax": "306-239-2044",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1604"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1604"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1604/listOfAppUser"
          }
        }
      },
      {
        "name": "The Tractor Place of NH, LLC",
        "number": "110176/193419",
        "address": "P. O. Box 146",
        "owner": "Edward E. Krukonis, Jr",
        "city": "Prides Crossing",
        "state": "MA",
        "zipCode": "01965",
        "phoneNumber": "978-922-8165",
        "email": "bluetractorguys@aol.com; ekjr58@aol.com",
        "fax": "978-922-8165",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1605"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1605"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1605/listOfAppUser"
          }
        }
      },
      {
        "name": "The Tractor Place, Inc. (NC)",
        "number": "110082",
        "address": "P. O. Box 689",
        "owner": "Gary Mize; Linda Mize; Brian Mize",
        "city": "Knightdale",
        "state": "NC",
        "zipCode": "27545",
        "phoneNumber": "919-266-5846",
        "email": "gary@thetractorplace.com; accounting@thetractorplace.com",
        "fax": "919-266-6364",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1606"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1606"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1606/listOfAppUser"
          }
        }
      },
      {
        "name": "The Tractor Store of Forest, Inc.",
        "number": "108729/192590",
        "address": "835 Hwy 49 South",
        "owner": "Gary Jolly",
        "city": "Richland",
        "state": "MS",
        "zipCode": "39218",
        "phoneNumber": "601-469-2832",
        "email": "scott@thetractorstoreinc.com",
        "fax": "601-469-2801",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1607"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1607"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1607/listOfAppUser"
          }
        }
      },
      {
        "name": "The Tractor Store of Richland, Inc.",
        "number": "108729",
        "address": "835 Hwy 49 South",
        "owner": "Gary B. Jolly",
        "city": "Richland",
        "state": "MS",
        "zipCode": "39218",
        "phoneNumber": "601-939-6273",
        "email": "scott@thetractorstoreinc.com",
        "fax": "601-939-8458",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1608"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1608"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1608/listOfAppUser"
          }
        }
      },
      {
        "name": "Theodore S Montross Farm Machinery",
        "number": "105180",
        "address": "1368 Demunds Rd",
        "owner": "Theodore S Montross",
        "city": "Dallas",
        "state": "PA",
        "zipCode": "18612",
        "phoneNumber": "570-333-4147",
        "email": "tsmont1@epix.net",
        "fax": "570-333-5996",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1609"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1609"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1609/listOfAppUser"
          }
        }
      },
      {
        "name": "Tom Smith Tractor Parts, Inc.",
        "number": "105327",
        "address": "69760 Red Arrow Hwy.",
        "owner": "Shirley Smith",
        "city": "Hartford",
        "state": "MI",
        "zipCode": "49057",
        "phoneNumber": "269-621-2001",
        "email": "tstractor@comcast.net",
        "fax": "269-621-2220",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1610"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1610"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1610/listOfAppUser"
          }
        }
      },
      {
        "name": "Tractor Care, Inc.",
        "number": "108888",
        "address": "1066 Virginia Avenue",
        "owner": "Kevin D. Wittig",
        "city": "Harrisonburg",
        "state": "VA",
        "zipCode": "22802",
        "phoneNumber": "540-433-7070",
        "email": "tractorcare@yahoo.com; tcpaperwork@yahoo.com",
        "fax": "540-433-4058",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1611"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1611"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1611/listOfAppUser"
          }
        }
      },
      {
        "name": "Tractors on the Creek LLC",
        "number": "107115",
        "address": "3139 Cane Creek Road",
        "owner": "Arch Y. Hebb; Diane Hebb",
        "city": "Fairview",
        "state": "NC",
        "zipCode": "28730",
        "phoneNumber": "828-628-0735",
        "email": "arch@tractorsonthecreek.com; diane@tractorsonthecreek.com; parts@tractorsonthecreek.com",
        "fax": "828-628-0711",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1612"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1612"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1612/listOfAppUser"
          }
        }
      },
      {
        "name": "Tractors Plus, Inc.",
        "number": "105303",
        "address": "P. O. Box 216",
        "owner": "Jeff Watts",
        "city": "Nicholson",
        "state": "MS",
        "zipCode": "39463",
        "phoneNumber": "601-798-0280",
        "email": "wattsknot@yahoo.com",
        "fax": "601-798-0249",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1613"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1613"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1613/listOfAppUser"
          }
        }
      },
      {
        "name": "Tractors Unlimited",
        "number": "108189",
        "address": "1507 N. Main Street",
        "owner": "Van Halfacre",
        "city": "Hattiesburg",
        "state": "MS",
        "zipCode": "39401",
        "phoneNumber": "601-583-6453",
        "email": "tractorsunlimited@comcast.net",
        "fax": "601-584-0896",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1614"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1614"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1614/listOfAppUser"
          }
        }
      },
      {
        "name": "Trail Dust Trailers, Inc.",
        "number": "109743",
        "address": "29300 S. E. Haley Road",
        "owner": "Curtis Thies",
        "city": "Boring",
        "state": "OR",
        "zipCode": "97009",
        "phoneNumber": "503-328-8140",
        "email": "traildusttrailers@gmail.com",
        "fax": "503-328-8140",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1615"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1615"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1615/listOfAppUser"
          }
        }
      },
      {
        "name": "Trails West, Inc.",
        "number": "105212",
        "address": "945 W 4th St",
        "owner": "David W. Stalker",
        "city": "Benson",
        "state": "AZ",
        "zipCode": "85602",
        "phoneNumber": "520-586-0500",
        "email": "mail@trailswesttractor.com",
        "fax": "520-586-8894",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1616"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1616"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1616/listOfAppUser"
          }
        }
      },
      {
        "name": "Tri-County Tractor",
        "number": "107089",
        "address": "P. O. Box 401",
        "owner": "Steven & Kristy Jones",
        "city": "Russiaville",
        "state": "IN",
        "zipCode": "46979",
        "phoneNumber": "765-883-7887",
        "email": "steve@tri-countyautogroup.com",
        "fax": "765-883-4210",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1617"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1617"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1617/listOfAppUser"
          }
        }
      },
      {
        "name": "Two Rivers Inc.",
        "number": "105172/191384",
        "address": "2221 W. Everly Brothers Blvd. ",
        "owner": "Timothy R. Cooke",
        "city": "Powderly",
        "state": "KY",
        "zipCode": "42367",
        "phoneNumber": "270-377-3636",
        "email": "tworiversinc2@att.net",
        "fax": "270-377-3634",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1618"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1618"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1618/listOfAppUser"
          }
        }
      },
      {
        "name": "U P Tractor, Inc.",
        "number": "105289",
        "address": "14502 State Highway M35",
        "owner": "Alan B. Bartlett",
        "city": "Rock",
        "state": "MI",
        "zipCode": "49880",
        "phoneNumber": "906-356-6518",
        "email": "uptractorinc@gmail.com",
        "fax": "906-356-6323",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1619"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1619"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1619/listOfAppUser"
          }
        }
      },
      {
        "name": "Ultra Touch Landscaping, Inc.",
        "number": "105320/191089",
        "address": "P. O. Box 87",
        "owner": "Rodney Brewer; Marlene Patricia \"Pat\" Brewer",
        "city": "Louisa",
        "state": "VA",
        "zipCode": "23093",
        "phoneNumber": "540-894-0406",
        "email": "pat.brewer@hotmail.com; ultratouchstaff@hotmail.com; plowmaster87@gmail.com",
        "fax": "540-894-0195",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1620"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1620"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1620/listOfAppUser"
          }
        }
      },
      {
        "name": "Universal Auto Inc.",
        "number": "300463",
        "address": "6005 50th Avenue",
        "owner": "John Megyes",
        "city": "Taber",
        "state": "AB",
        "zipCode": "T1G 1W7",
        "phoneNumber": "403-223-0502",
        "email": "uniauto@telus.net; uni.bookkeeping@gmail.com",
        "fax": "403-223-0504",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1621"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1621"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1621/listOfAppUser"
          }
        }
      },
      {
        "name": "Vande Goor Ag Service",
        "number": "300692",
        "address": "713377 Middle Townline Road",
        "owner": "Brent Vande Goor",
        "city": "Norwich",
        "state": "ON",
        "zipCode": "N0J 1P0",
        "phoneNumber": "519-424-3574",
        "email": "office@vandegoorag.com; service@vandegoorag.com",
        "fax": "519-424-3574",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1622"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1622"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1622/listOfAppUser"
          }
        }
      },
      {
        "name": "W. F. Welliver & Son, Inc.",
        "number": "106084",
        "address": "20 White Hall Road",
        "owner": "Nancy Welliver",
        "city": "Bloomsburg",
        "state": "PA",
        "zipCode": "17815",
        "phoneNumber": "570-437-2430",
        "email": "wfwelliver@verizon.net",
        "fax": "570-437-3791",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1623"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1623"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1623/listOfAppUser"
          }
        }
      },
      {
        "name": "Wal-Kat Lift Truck",
        "number": "300640",
        "address": "2000 Barnes Street",
        "owner": "Wally Simenoff",
        "city": "Penticton",
        "state": "BC",
        "zipCode": "V2A 4C3",
        "phoneNumber": "250-492-6716",
        "email": "walkatequipment@shaw.ca",
        "fax": "250-492-4472",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1624"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1624"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1624/listOfAppUser"
          }
        }
      },
      {
        "name": "Walts Tractor, LLC",
        "number": "105277",
        "address": "P. O. Box 69",
        "owner": "Walter A. Kassner",
        "city": "Stark City",
        "state": "MO",
        "zipCode": "64866",
        "phoneNumber": "417-472-7200",
        "email": "waltstractor@jscomm.net",
        "fax": "417-472-7201",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1625"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1625"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1625/listOfAppUser"
          }
        }
      },
      {
        "name": "Wanette Tractor",
        "number": "106622",
        "address": "32985 Highway 39",
        "owner": "Alfred Keesee; Coy Keesee",
        "city": "Wanette",
        "state": "OK",
        "zipCode": "74878",
        "phoneNumber": "405-383-2210",
        "email": "sales@wanettetractor.com",
        "fax": "405-383-2389",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1626"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1626"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1626/listOfAppUser"
          }
        }
      },
      {
        "name": "Waterbury Setaro Motors, Inc.",
        "number": "105280",
        "address": "11 Chase Ave.",
        "owner": "Gaetano Setaro",
        "city": "Waterbury",
        "state": "CT",
        "zipCode": "06704",
        "phoneNumber": "203-573-0733",
        "email": "setaromotors@aol.com",
        "fax": "203-574-2196",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1627"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1627"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1627/listOfAppUser"
          }
        }
      },
      {
        "name": "Watkins Outdoor Products, Inc.",
        "number": "106854",
        "address": "22504 Cox Road",
        "owner": "Susan A. Watkins",
        "city": "Petersburg",
        "state": "VA",
        "zipCode": "23803",
        "phoneNumber": "804-524-9655",
        "email": "watfarms@aol.com",
        "fax": "804-524-9658",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1628"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1628"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1628/listOfAppUser"
          }
        }
      },
      {
        "name": "WCT Farm & Lawn",
        "number": "105230",
        "address": "3299 E Evergreen Rd",
        "owner": "Greg Larimore",
        "city": "Strafford",
        "state": "MO",
        "zipCode": "65757",
        "phoneNumber": "417-859-4311",
        "email": "webstercountytractor@hotmail.com",
        "fax": "417-859-7259",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1629"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1629"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1629/listOfAppUser"
          }
        }
      },
      {
        "name": "Weaver Turf Power Inc.",
        "number": "108389",
        "address": "1501 Eshelman Mill Road",
        "owner": "Darryl E. Weaver",
        "city": "Willow Street",
        "state": "PA",
        "zipCode": "17584",
        "phoneNumber": "717-464-2931",
        "email": "darrylw@weaverturfpower.com",
        "fax": "717-464-3778",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1630"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1630"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1630/listOfAppUser"
          }
        }
      },
      {
        "name": "Webb Tractors LLC",
        "number": "109213",
        "address": "17971 S. Hwy 66",
        "owner": "David Webb",
        "city": "Claremore",
        "state": "OK",
        "zipCode": "74017",
        "phoneNumber": "918-638-9776",
        "email": "webbtractors@gmail.com",
        "fax": "918-283-2922",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1631"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1631"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1631/listOfAppUser"
          }
        }
      },
      {
        "name": "Weeks Tractor & Supply LLC",
        "number": "108653",
        "address": "P. O. Box 109",
        "owner": "Billy Weeks",
        "city": "Natchitoches",
        "state": "LA",
        "zipCode": "71457",
        "phoneNumber": "318-352-9876",
        "email": "weekstrac@cp-tel.net",
        "fax": "318-352-9879",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1632"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1632"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1632/listOfAppUser"
          }
        }
      },
      {
        "name": "Wells Repair Service & Sales",
        "number": "107704",
        "address": "6858 Asheville Hwy",
        "owner": "Kenneth D. Wells",
        "city": "Greeneville",
        "state": "TN",
        "zipCode": "37743",
        "phoneNumber": "423-638-9086",
        "email": "kenneth.wells68@yahoo.com",
        "fax": "423-638-8445",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1633"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1633"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1633/listOfAppUser"
          }
        }
      },
      {
        "name": "Wellsboro Equipment",
        "number": "109903",
        "address": "25 Whitneyville Road",
        "owner": "Christopher J. Bull; Stewart C. Burrows",
        "city": "Mansfield",
        "state": "PA",
        "zipCode": "16933",
        "phoneNumber": "570-724-6100",
        "email": "chris.bull@wellsboroequipment.com",
        "fax": "570-724-2741",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1634"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1634"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1634/listOfAppUser"
          }
        }
      },
      {
        "name": "Western Auto",
        "number": "106944",
        "address": "906 N. Washington Street",
        "owner": "Jim Reeves",
        "city": "Forrest City",
        "state": "AR",
        "zipCode": "72335",
        "phoneNumber": "870-633-8424",
        "email": "westernautojim@yahoo.com; sales@westernautoofforrestcity.com",
        "fax": "870-630-9366",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1635"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1635"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1635/listOfAppUser"
          }
        }
      },
      {
        "name": "Western Lawn Equipment Inc.",
        "number": "109728",
        "address": "226 S. Main Street",
        "owner": "Joseph Michael Cronin",
        "city": "O'Fallon",
        "state": "MO",
        "zipCode": "63366",
        "phoneNumber": "636-272-3275",
        "email": "westernequipment@aol.com",
        "fax": "636-272-3299",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1636"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1636"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1636/listOfAppUser"
          }
        }
      },
      {
        "name": "White Tractor Co. Inc.",
        "number": "105324",
        "address": "P. O. Box 416",
        "owner": "Charles R. White",
        "city": "Burgaw",
        "state": "NC",
        "zipCode": "28425",
        "phoneNumber": "910-259-2156",
        "email": "sales@whitetractorcompany.com; rosalie@whitetractorcompany.com",
        "fax": "910-259-3300",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1637"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1637"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1637/listOfAppUser"
          }
        }
      },
      {
        "name": "Wild Ride, Inc.; dba Kawasaki/Yamaha of Reno",
        "number": "109411",
        "address": "2345 Market Street",
        "owner": "James Griffith",
        "city": "Reno",
        "state": "NV",
        "zipCode": "89502",
        "phoneNumber": "775-786-8696",
        "email": "kawasakiofreno@yahoo.com",
        "fax": "775-786-4013",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1638"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1638"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1638/listOfAppUser"
          }
        }
      },
      {
        "name": "Willard's Tractors",
        "number": "105276/190970",
        "address": "346 Stewart Road",
        "owner": "Willard Owens",
        "city": "Walhalla",
        "state": "SC",
        "zipCode": "29691",
        "phoneNumber": "864-638-9803",
        "email": "willardstractors@aol.com",
        "fax": "864-638-9803",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1639"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1639"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1639/listOfAppUser"
          }
        }
      },
      {
        "name": "Woller Equipment, Inc.",
        "number": "105299",
        "address": "4054 50th Avenue",
        "owner": "Joshua Knudston; Ronald Carlson",
        "city": "Swanville",
        "state": "MN",
        "zipCode": "56382",
        "phoneNumber": "320-573-2341",
        "email": "wollereq@gmail.com; dieselknudt@gmail.com; service.woller@sytekcom.com",
        "fax": "320-573-2342",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1640"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1640"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1640/listOfAppUser"
          }
        }
      },
      {
        "name": "Wright & Wright Machinery Co Inc",
        "number": "107157",
        "address": "P. O. Box 409",
        "owner": "Louie Wright",
        "city": "Monticello",
        "state": "KY",
        "zipCode": "42633",
        "phoneNumber": "606-348-5828",
        "email": "wright@wright.org",
        "fax": "606-348-1670",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1641"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1641"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1641/listOfAppUser"
          }
        }
      },
      {
        "name": "Wright Tractors, LLC",
        "number": "106317",
        "address": "8725 NE 23rd",
        "owner": "Cecil Wright",
        "city": "Oklahoma City",
        "state": "OK",
        "zipCode": "73141",
        "phoneNumber": "405-259-9302",
        "email": "wrighttractorsllc@yahoo.com; cwrighttractors@yahoo.com",
        "fax": "405-259-9302",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1642"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1642"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1642/listOfAppUser"
          }
        }
      },
      {
        "name": "X-press Equipment Inc",
        "number": "109218",
        "address": "17642 S. Muskogee Avenue",
        "owner": "Foix Stauss II; Foix Stauss III",
        "city": "Tahlequah",
        "state": "OK",
        "zipCode": "74464",
        "phoneNumber": "918-458-0733",
        "email": "foix@xpressequipment.com; mail@xpressequipment.com",
        "fax": "918-458-4230",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1643"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1643"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1643/listOfAppUser"
          }
        }
      },
      {
        "name": "Yankee Precision Engineering",
        "number": "105284/192623",
        "address": "10 Lincoln Drive",
        "owner": "Frank Woodward",
        "city": "New Boston",
        "state": "NH",
        "zipCode": "03070",
        "phoneNumber": "603-487-2467",
        "email": "bulldogtractors@aol.com",
        "fax": "603-487-2467",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1644"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1644"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1644/listOfAppUser"
          }
        }
      },
      {
        "name": "Yellowstone Tractor Co.",
        "number": "108796",
        "address": "5662 Kessler Road",
        "owner": "Darrell R. Haugland",
        "city": "Belgrade",
        "state": "MT",
        "zipCode": "59714",
        "phoneNumber": "406-388-2423",
        "email": "yellowstonetractor@yahoo.com",
        "fax": "866-292-2303",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1645"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1645"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1645/listOfAppUser"
          }
        }
      },
      {
        "name": "Young Ford Inc.",
        "number": "107366",
        "address": "570 E. 525 N.",
        "owner": "Stewart Cantrell",
        "city": "Morgan",
        "state": "UT",
        "zipCode": "84050",
        "phoneNumber": "801-829-3447",
        "email": "scantrell@youngfordutah.com; ggrant@youngfordutah.com",
        "fax": "801-829-3720",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1646"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1646"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1646/listOfAppUser"
          }
        }
      },
      {
        "name": "Young's Tractor & Equipment Inc",
        "number": "109314",
        "address": "7166 E US Hwy 19E",
        "owner": "Bobby Young",
        "city": "Burnsville",
        "state": "NC",
        "zipCode": "28714",
        "phoneNumber": "828-675-4365",
        "email": "youngstractor@ccvn.com",
        "fax": "828-675-5639",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1647"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1647"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1647/listOfAppUser"
          }
        }
      },
      {
        "name": "Z Equipment",
        "number": "107762",
        "address": "18082 Hwy 190 East",
        "owner": "Kenneth J. Zahn",
        "city": "Hammond",
        "state": "LA",
        "zipCode": "70401",
        "phoneNumber": "985-345-2449",
        "email": "z.equipment@yahoo.com",
        "fax": "985-345-2450",
        "_links": {
          "self": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1648"
          },
          "dealership": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1648"
          },
          "listOfAppUser": {
            "href": "http://lstractor.southcentralus.cloudapp.azure.com:8080/tractor-quiz-api/dealerships/1648/listOfAppUser"
          }
        }
      }
    ];



///END OF DEALERSHIP DATA
        $scope.searchKeywords = '';

        $scope.filteredStores = [];

        $scope.row = '';

        $scope.select = function(page) {
            var end, start;
            start = (page - 1) * $scope.numPerPage;
            end = start + $scope.numPerPage;
            return $scope.currentPageStores = $scope.filteredStores.slice(start, end);
        };

        $scope.onFilterChange = function() {
            $scope.select(1);
            $scope.currentPage = 1;
            return $scope.row = '';
        };

        $scope.onNumPerPageChange = function() {
            $scope.select(1);
            return $scope.currentPage = 1;
        };

        $scope.onOrderChange = function() {
            $scope.select(1);
            return $scope.currentPage = 1;
        };

        $scope.search = function() {
            $scope.filteredStores = $filter('filter')($scope.stores, $scope.searchKeywords);
            return $scope.onFilterChange();
        };

        $scope.order = function(rowName) {
            if ($scope.row === rowName) {
                return;
            }
            $scope.row = rowName;
            $scope.filteredStores = $filter('orderBy')($scope.stores, rowName);
            return $scope.onOrderChange();
        };

        $scope.numPerPageOpt = [3, 5, 10, 20];

        $scope.numPerPage = $scope.numPerPageOpt[1];

        $scope.currentPage = 1;

        $scope.currentPageStores = [];

        init = function() {
            $scope.search();
            return $scope.select($scope.currentPage);
        };

        init();
    }

})();
