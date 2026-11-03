// ppvCalendar.ts
//
// Every PPV shown on the Calendar page. Add a new entry here to put it on the calendar.
// - date:  "YYYY-MM-DD" (PPVs are normally on a Saturday)
// - image: the PPV's poster under /Images/PPV/...
// - link:  the PPV page route (the same value used in currentPPV.ts)
// - nights (optional): for multi-night PPVs like WrestleMania, set `nights: 2`. `date` is Night 1
//   and each extra night lands on the following day (e.g. Saturday + Sunday). Leave it out for 1 night.
//
// RAW (Monday) and Smackdown (Friday) are added automatically every week by the Calendar.

export type CalendarPPV = {
  name: string;
  date: string;
  location: string;
  image: string;
  link: string;
  nights?: number;
};

export const ppvCalendar: CalendarPPV[] = [
  // ---------- 2027 ----------
  {
    name: "Elimination Chamber",
    date: "2027-02-27",
    location: "Optus Stadium, Perth, Australia",
    image: "/Images/PPV/EC/EC1.webp",
    link: "/EC",
  },
  {
    name: "WrestleMania",
    date: "2027-04-10",
    location: "Allegiant Stadium, Las Vegas, Nevada",
    image: "/Images/PPV/Wrestlemania/Wrestlemania41.webp",
    link: "/Wrestlemania",
    nights: 2,
  },
  {
    name: "Backlash",
    date: "2027-05-22",
    location: "Ryoguko Arena, Tokyo, Japan",
    image: "/Images/PPV/Backlash/Backlash2027.webp",
    link: "/Backlash",
  },
  {
    name: "Clash in Paris",
    date: "2027-06-26",
    location: "Paris La Défense Arena, Nanterre, France",
    image: "/Images/PPV/ClashInParis/CIP2027.webp",
    link: "/ClashInParis",
  },
  {
    name: "Money In The Bank",
    date: "2027-07-10",
    location: "Intuit Dome, Los Angeles, CA",
    image: "/Images/PPV/MITB/MITB2027.webp",
    link: "/MITB",
  },
  {
    name: "SummerSlam",
    date: "2027-08-07",
    location: "Metlife Stadium, New York, NJ",
    image: "/Images/PPV/SummerSlam/SS2027.webp",
    link: "/Summerslam",
  },
  {
    name: "Night of Champions",
    date: "2027-09-25",
    location: "Kingdom Arena, Riyadh, Saudi Arabia",
    image: "/Images/PPV/NOC/NOC2027.webp",
    link: "/NOC",
  },
  {
    name: "Extreme Rules",
    date: "2027-10-16",
    location: "American Airlines Center, Dallas, TX",
    image: "/Images/PPV/ER/ER2027.webp",
    link: "/ER",
  },
  {
    name: "Survivor Series",
    date: "2027-11-13",
    location: "Petco Park, San Diego, CA",
    image: "/Images/PPV/SurvivorSeries/SS2027.webp",
    link: "/SurvivorSeries",
  },
  {
    name: "Armageddon",
    date: "2027-12-18",
    location: "Smoothie King Centre, New Orleans, LA",
    image: "/Images/PPV/Armageddon/Armageddon2027.webp",
    link: "/Armageddon",
  },

  // ---------- 2028 ----------
  {
    name: "Bragging Rights",
    date: "2028-01-08",
    location: "Benchmark International Arena, Tampa, FL",
    image: "/Images/PPV/BR/BR2028.webp",
    link: "/BraggingRights",
  },
  {
    name: "Royal Rumble",
    date: "2028-02-05",
    location: "Lucas Oil Stadium, Indianapolis, Indiana",
    image: "/Images/PPV/RoyalRumble/RoyalRumble2028.webp",
    link: "/RoyalRumble",
  },
  {
    name: "Backlash",
    date: "2028-05-20",
    location: "O2 Arena, London, England",
    image: "/Images/PPV/Backlash/Backlash2028.webp",
    link: "/Backlash",
  },
  {
    name: "Clash in Paris",
    date: "2028-06-24",
    location: "Paris La Défense Arena, Nanterre, France",
    image: "/Images/PPV/ClashInParis/CIP2027.webp",
    link: "/ClashInParis",
  },
  {
    name: "Money In The Bank",
    date: "2028-07-22",
    location: "Enterprise Centre, St Louis, Missouri",
    image: "/Images/PPV/MITB/MITB2028.webp",
    link: "/MITB",
  },
  {
    name: "SummerSlam",
    date: "2028-08-19",
    location: "Metlife Stadium, New York, NJ",
    image: "/Images/PPV/SummerSlam/SS2028.webp",
    link: "/Summerslam",
    nights: 2,
  },
  {
    name: "Night of Champions",
    date: "2028-09-16",
    location: "FedEx Forum, Memphis, Tennessee",
    image: "/Images/PPV/NOC/NOC2028.webp",
    link: "/NOC",
  },
  {
    name: "Extreme Rules",
    date: "2028-10-21",
    location: "Toyota Cener, Houston Texas",
    image: "/Images/PPV/ER/ER2028.webp",
    link: "/ER",
  },
  {
    name: "Survivor Series",
    date: "2028-11-18",
    location: "Daikin Park, Houston, Texas",
    image: "/Images/PPV/SurvivorSeries/SS2028.webp",
    link: "/SurvivorSeries",
  },
];
