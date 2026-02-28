// rosterData.ts

export interface Wrestler {
  className?: string;
  src: string;
  name: string;
  gender?: string;
  tag?: string;
  tag2?: string;
  champion?: string;
  championRank?: number;
}

const championshipOrder: Record<string, number> = {
  UC:1,
  WH:2,
  WUC:3,
  WWH:4,
  IC:5,
  US:6,
  WIC:7,
  WUS:8,
  RAWTT:9,
  SDTT:10,
  MMITB:11,
  WMITB:12,
};

const rosterData: Record<string, Wrestler[]> = {
   ALL: [

// ------- A ---------
        { src: "/Images/Roster/Abyss.png", name: "Abyss", gender: "Man", tag: "L", champion:""},
        { src: "/Images/Roster/AJLee.png", name: "AJ Lee", gender: "Women", tag: "SD", champion:""},
        { src: "/Images/Roster/AJStyles.png", name: "AJ Styles", gender: "Man", tag: "SD", champion:""},
        { src: "/Images/Roster/Akam.png", name: "Akam", gender: "Man", tag: "A" , champion:""},
        { src: "/Images/Roster/AkiraTozawa.png", name: "Akira Tozawa", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/AlbaFyre.png", name: "Alba Fyre", gender: "Women", tag: "SD" , champion:""},
        { src: "/Images/Roster/AleisterBlack.png", name: "Aleister Black", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/AlexShelley.png", name: "Alex Shelley", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/AlexaBliss.png", name: "Alexa Bliss", gender: "Women", tag: "R" , champion:"WWH"},
        { src: "/Images/Roster/Andrade.png", name: "Andrade", gender: "Man", tag: "A" , champion:""},
        { src: "/Images/Roster/AndreChase.png", name: "Andre Chase", gender: "Man", tag: "U" , champion:""},
        { src: "/Images/Roster/Angel.png", name: "Angel", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/AngeloDawkins.png", name: "Angelo Dawkins", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/ApolloCrews.png", name: "Apollo Crews", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/AshanteTheeAdonis.png", name: "Ashante Thee Adonis", gender: "Man", tag: "A" , champion:""},
        { src: "/Images/Roster/Asuka.png", name: "Asuka", gender: "Women", tag: "SD" , champion:""},
        { src: "/Images/Roster/AustinTheory.png", name: "Austin Theory", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/Axiom.png", name: "Axiom", gender: "Man", tag: "SD" , champion:""},

 // ------- B ---------

        { src: "/Images/Roster/B-Fab.png", name: "B Fab", gender: "Women", tag: "R" , champion:""},
        { src: "/Images/Roster/BaronCorbin.png", name: "Baron Corbin", gender: "Man", tag: "A" , champion:""},
        { src: "/Images/Roster/Batista.png", name: "Batista", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/Bayley.png", name: "Bayley", gender: "Women", tag: "SD" , champion:""},
        { src: "/Images/Roster/BeckyLynch.png", name: "Becky Lynch", gender: "Women", tag: "R" , champion:""},
        { src: "/Images/Roster/Berto.png", name: "Berto", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/BiancaBelair.png", name: "Bianca Belair", gender: "Women", tag: "R" , champion:""},
        { src: "/Images/Roster/BigE.png", name: "Big E", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/BillyGunn.png", name: "Billy Gunn", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/BlairDavenport.png", name: "Blair Davenport", gender: "Women", tag: "A" , champion:""},
        { src: "/Images/Roster/BlakeMonroe.png", name: "Blake Monroe", gender: "Women", tag: "R" , champion:""},
        { src: "/Images/Roster/Boogeyman.png", name: "Boogeyman", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/BookerT.png", name: "Booker T", gender: "Man", tag: "SD" , tag2: "GM", champion:""},
        { src: "/Images/Roster/BraunStrowman.png", name: "Braun Strowman", gender: "Man", tag: "A" , champion:""},
        { src: "/Images/Roster/BrayWyatt.png", name: "Bray Wyatt", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/BrockLesnar.png", name: "Brock Lesnar", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/BronBreakker.png", name: "Bron Breakker", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/BronsonReed.png", name: "Bronson Reed", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/BrooksJensen.png", name: "Brooks Jensen", gender: "Man", tag: "U" , champion:""},
        { src: "/Images/Roster/BrutusCreed.png", name: "Brutus Creed", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/BubbaRayDudley.png", name: "Bubba Ray Dudley", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/BullNakano.png", name: "Bull Nakano", gender: "Women", tag: "L" , champion:""},

 // ------- C ---------

        { src: "/Images/Roster/CMPunk.png", name: "CM Punk", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/CactusJack.png", name: "Cactus Jack", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/CandiceLeRae.png", name: "Candice LeRae", gender: "Women", tag: "R" , champion:""},
        { src: "/Images/Roster/Carlito.png", name: "Carlito", gender: "Man", tag: "A" , champion:""},
        { src: "/Images/Roster/Carmella.png", name: "Carmella", gender: "Women", tag: "A" , champion:""},
        { src: "/Images/Roster/CarmeloHayes.png", name: "Carmelo Hayes", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/CedricAlexander.png", name: "Cedric Alexander", gender: "Man", tag: "A" , champion:""},
        { src: "/Images/Roster/ChadGable.png", name: "Chad Gable", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/ChanningLorenzo.png", name: "Channing Lorenzo", gender: "Man", tag: "U" , champion:""},
        { src: "/Images/Roster/CharlieDempsey.png", name: "Charlie Dempsey", gender: "Man", tag: "U" , champion:""},
        { src: "/Images/Roster/CharlotteFlair.png", name: "Charlotte Flair", gender: "Women", tag: "SD" , champion:""},
        { src: "/Images/Roster/ChelseaGreen.png", name: "Chelsea Green", gender: "Women", tag: "SD" , champion:""},
        { src: "/Images/Roster/ChrisSabin.png", name: "Chris Sabin", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/Chyna.png", name: "Chyna", gender: "Women", tag: "L" , champion:""},
        { src: "/Images/Roster/CodyRhodes.png", name: "Cody Rhodes", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/CoraJade.png", name: "Cora Jade", gender: "Women", tag: "A" , champion:""},
        { src: "/Images/Roster/CruzDelToro.png", name: "Cruz Del Toro", gender: "Man", tag: "SD" , champion:""},

 // ------- D ---------

        { src: "/Images/Roster/D-LoBrown.png", name: "D-Lo Brown", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/D-VonDudley.png", name: "D-Von Dudley", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/DDP.png", name: "DDP", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/DakotaKai.png", name: "Dakota Kai", gender: "Women", tag: "A" , champion:""},
        { src: "/Images/Roster/DamianPriest.png", name: "Damian Priest", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/DexterLumis.png", name: "Dexter Lumis", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/Diesel.png", name: "Diesel", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/DoinkTheClown.png", name: "Doink The Clown", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/DominikMysterio.png", name: "Dominik Mysterio", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/DragonLee.png", name: "Dragon Lee", gender: "Man", tag: "SD" , champion:"US"},
        { src: "/Images/Roster/DrewMcIntyre.png", name: "Drew Mcintyre", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/DudeLove.png", name: "Dude Love", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/DukeHudson.png", name: "Duke Hudson", gender: "Man", tag: "A" , champion:""},
        { src: "/Images/Roster/DustyRhodes.png", name: "Dusty Rhodes", gender: "Man", tag: "L" , champion:""},

 // ------- E ---------

        { src: "/Images/Roster/EddieGuerrero.png", name: "Eddie Guerrero", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/EddyThorpe.png", name: "Eddy Thorpe", gender: "Man", tag: "A" , champion:""},
        { src: "/Images/Roster/ElektraLopez.png", name: "Elektra Lopez", gender: "Women", tag: "A" , champion:""},
        { src: "/Images/Roster/ElGrandeAmericano.png", name: "El Grande Americano", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/ElHijoDelVikingo.png", name: "El Hijo Del Vikingo", gender: "Man", tag: "AAA" , champion:""},
        { src: "/Images/Roster/EltonPrince.png", name: "Elton Prince", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/EricBischoff.png", name: "Eric Bischoff", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/ErickRowan.png", name: "Erick Rowan", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/Erik.png", name: "Erik", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/EthanPage.png", name: "Ethan Page", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/EveTorres.png", name: "Eve Torres", gender: "Women", tag: "SD" , champion:""},

 // ------- F ---------

        { src: "/Images/Roster/Faarooq.png", name: "Faarooq", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/FallonHenley.png", name: "Fallon Henley", gender: "Women", tag: "R" , champion:""},
        { src: "/Images/Roster/FinnBalor.png", name: "Finn Balor", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/Flammer.png", name: "Flammer", gender: "Women", tag: "AAA" , champion:""},

 // ------- G ---------

        { src: "/Images/Roster/GigiDolin.png", name: "Gigi Dolin", gender: "Women", tag: "A" , champion:""},
        { src: "/Images/Roster/GiovanniVinci.png", name: "Giovanni Vinci", gender: "Man", tag: "A" , champion:""},
        { src: "/Images/Roster/Giulia.png", name: "Giulia", gender: "Women", tag: "R" , champion:""},
        { src: "/Images/Roster/Goldberg.png", name: "Goldberg", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/GraysonWaller.png", name: "Grayson Waller", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/Gunther.png", name: "Gunther", gender: "Man", tag: "R" , champion:""},

 // ------- H ---------
        {src: "/Images/Roster/HankWalker.png", name: "Hank Walker", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/HonkyTonkMan.png", name: "Honky Tonk Man", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/HulkHogan.png", name: "HulkHogan", gender: "Man", tag: "L" , champion:""},

// ------- I ---------       
        
        { src: "/Images/Roster/IljaDragunov.png", name: "Ilja Dragunov", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/IndiHartwell.png", name: "Indi Hartwell", gender: "Women", tag: "A" , champion:""},
        { src: "/Images/Roster/IslaDawn.png", name: "Isla Dawn", gender: "Women", tag: "A" , champion:""},
        { src: "/Images/Roster/Ivar.png", name: "Ivar", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/IvyNile.png", name: "Ivy Nile", gender: "Women", tag: "SD" , champion:""},
        { src: "/Images/Roster/IyoSky.png", name: "Iyo Sky", gender: "Women", tag: "R" , champion:""},
        { src: "/Images/Roster/IzziDame.png", name: "Izzi Dame", gender: "Women", tag: "R" , champion:""},

 // ------- J ---------

        { src: "/Images/Roster/JacobFatu.png", name: "Jacob Fatu", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/JacyJayne.png", name: "Jacy Jayne", gender: "Women", tag: "R" , champion:""},
        { src: "/Images/Roster/JadeCargill.png", name: "Jade Cargill", gender: "Women", tag: "R" , champion:""},
        { src: "/Images/Roster/JaidaParker.png", name: "Jaida Parker", gender: "Women", tag: "R" , champion:""},
        { src: "/Images/Roster/JakaraJackson.png", name: "Jakara Jackson", gender: "Women", tag: "A" , champion:""},
        { src: "/Images/Roster/JakeTheSnakeRoberts.png", name: "Jake The Snake Roberts", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/JazmynNyx.png", name: "Jazmyn Nyx", gender: "Women", tag: "R", champion:""},
        { src: "/Images/Roster/JBL.png", name: "JBL", gender: "Man", tag: "R" , tag2: "GM", champion:""},
        { src: "/Images/Roster/JCMateo.png", name: "JC Mateo", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/JDMcdonagh.png", name: "JD Mcdonagh", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/Je'vonEvans.png", name: "Je'von Evans", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/JesseVentura.png", name: "Jesse Ventura", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/JeyUso.png", name: "Jey Uso", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/JimNeidhart.png", name: "Jim Neidhart", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/JimmyUso.png", name: "Jimmy Uso", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/JoaquinWilde.png", name: "Joaquin Wilde", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/JoeCoffey.png", name: "Joe Coffey", gender: "Man", tag: "A" , champion:""},
        { src: "/Images/Roster/JoeGacy.png", name: "Joe Gacy", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/JoeHendry.png", name: "Joe Hendry", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/JohnCena.png", name: "John Cena", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/JohnnyGargano.png", name: "Johnny Gargano", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/JordynneGrace.png", name: "Jordynne Grace", gender: "Women", tag: "SD" , champion:""},
        { src: "/Images/Roster/JoshBriggs.png", name: "Josh Briggs", gender: "Man", tag: "U" , champion:""},
        { src: "/Images/Roster/JuliusCreed.png", name: "Julius Creed", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/JunkyardDog.png", name: "Junkyard Dog", gender: "Man", tag: "L" , champion:""},

 // ------- K ---------

        { src: "/Images/Roster/KSI.png", name: "KSI", gender: "Man", tag: "A" , champion:""},
        { src: "/Images/Roster/KairiSane.png", name: "Kairi Sane", gender: "Women", tag: "SD" , champion:""},
        { src: "/Images/Roster/Kane.png", name: "Kane", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/KarlAnderson.png", name: "Karl Anderson", gender: "Man", tag: "A" , champion:""},
        { src: "/Images/Roster/KarmenPetrovic.png", name: "Karmen Petrovic", gender: "Women", tag: "SD" , champion:""},
        { src: "/Images/Roster/KarrionKross.png", name: "Karrion Kross", gender: "Man", tag: "A" , champion:""},
        { src: "/Images/Roster/KatanaChance.png", name: "Katana Chance", gender: "Women", tag: "A" , champion:""},
        { src: "/Images/Roster/KaydenCarter.png", name: "Kayden Carter", gender: "Women", tag: "A" , champion:""},
        { src: "/Images/Roster/KelaniJordan.png", name: "Kelani Jordan", gender: "Women", tag: "SD" , champion:""},
        { src: "/Images/Roster/KenShamrock.png", name: "Ken Shamrock", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/KevinNash.png", name: "Kevin Nash", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/KevinOwens.png", name: "Kevin Owens", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/KianaJames.png", name: "Kiana James", gender: "Women", tag: "R" , champion:""},
        { src: "/Images/Roster/KitWilson.png", name: "Kit Wilson", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/KofiKingston.png", name: "Kofi Kingston", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/KurtAngle.png", name: "Kurt Angle", gender: "Man", tag: "L" , champion:""},

 // ------- L ---------

        { src: "/Images/Roster/LAKnight.png", name: "LA Knight", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/LashLegend.png", name: "Lash Legend", gender: "Women", tag: "R" , champion:""},
        { src: "/Images/Roster/LexLuger.png", name: "Lex Luger", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/LexisKing.png", name: "Lexis King", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/Lita.png", name: "Lita", gender: "Women", tag: "SD" , champion:""},
        { src: "/Images/Roster/LivMorgan.png", name: "Liv Morgan", gender: "Women", tag: "SD" , champion:"WUC"},
        { src: "/Images/Roster/LoganPaul.png", name: "Logan Paul", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/LolaVice.png", name: "Lola Vice", gender: "Women", tag: "R" , champion:""},
        { src: "/Images/Roster/LudwigKaiser.png", name: "Ludwig Kaiser", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/LukeGallows.png", name: "Luke Gallows", gender: "Man", tag: "A" , champion:""},
        { src: "/Images/Roster/LyraValkyria.png", name: "Lyra Valkyria", gender: "Women", tag: "SD" , champion:""},

 // ------- M ---------

        { src: "/Images/Roster/MachoManRandySavage.png", name: "Macho Man Randy Savage", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/Mankind.png", name: "Mankind", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/MarkCoffey.png", name: "Mark Coffey", gender: "Man", tag: "A" , champion:""},
        { src: "/Images/Roster/MarkHenry.png", name: "Mark Henry", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/Maryse.png", name: "Maryse", gender: "Women", tag: "L" , champion:""},
        { src: "/Images/Roster/MaxxineDupri.png", name: "Maxxine Dupri", gender: "Women", tag: "SD" , champion:""},
        { src: "/Images/Roster/MichelleMcCool.png", name: "Michelle McCool", gender: "Women", tag: "SD" , champion:""},
        { src: "/Images/Roster/Michin.png", name: "Michin", gender: "Women", tag: "R" , champion:""},
        { src: "/Images/Roster/MickFoley.png", name: "Mick Foley", gender: "Man", tag: "L", champion:""},
        { src: "/Images/Roster/MollyHolly.png", name: "Molly Holly", gender: "Women", tag: "L" , champion:""},
        { src: "/Images/Roster/MontezFord.png", name: "Montez Ford", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/MrIguana.png", name: "Mr Iguana", gender: "Man", tag: "AAA" , champion:""},
        { src: "/Images/Roster/MrPerfect.png", name: "Mr Perfect", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/MylesBorne.png", name: "Myles Borne", gender: "Man", tag: "R" , champion:""},

 // ------- N ---------

        { src: "/Images/Roster/Naomi.png", name: "Naomi", gender: "Women", tag: "R", champion:"WIC"},
        { src: "/Images/Roster/Natalya.png", name: "Natalya", gender: "Women", tag: "SD" , champion:""},
        { src: "/Images/Roster/NathanFrazer.png", name: "Nathan Frazer", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/NewJack.png", name: "New Jack", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/NiaJax.png", name: "Nia Jax", gender: "Women", tag: "R" , champion:""},
        { src: "/Images/Roster/NikkiBella.png", name: "Nikki Bella", gender: "Women", tag: "SD" , champion:"WUS"},
        { src: "/Images/Roster/NikkiCross.png", name: "Nikki Cross", gender: "Women", tag: "R" , champion:""},
        { src: "/Images/Roster/NikkitaLyons.png", name: "Nikkita Lyons", gender: "Women", tag: "U" , champion:""},
        { src: "/Images/Roster/NoamDar.png", name: "Noam Dar", gender: "Man", tag: "R" , champion:""},

 // ------- O ---------

        { src: "/Images/Roster/ObaFemi.png", name: "Oba Femi", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/Omos.png", name: "Omos", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/OroMensah.png", name: "Oro Mensah", gender: "Man", tag: "A" , champion:""},
        { src: "/Images/Roster/Otis.png", name: "Otis", gender: "Man", tag: "SD" , champion:""},

 // ------- P ---------

        { src: "/Images/Roster/PatMcafee.png", name: "Pat Mcafee", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/PaulOrndorff.png", name: "Paul Orndorff", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/Penta.png", name: "Penta", gender: "Man", tag: "R" , champion:"IC"},
        { src: "/Images/Roster/PeteDunne.png", name: "Pete Dunne", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/PiperNiven.png", name: "Piper Niven", gender: "Women", tag: "SD"},
        { src: "/Images/Roster/PsychoClown.png", name: "Psycho Clown", gender: "Man", tag: "AAA"},

 // ------- R ---------

        { src: "/Images/Roster/R-Truth.png", name: "R-Truth", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/RandyOrton.png", name: "Randy Orton", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/RaquelRodriguez.png", name: "Raquel Rodriguez", gender: "Women", tag: "R" , champion:""},
        { src: "/Images/Roster/RazorRamon.png", name: "Razor Ramon", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/ReyFenix.png", name: "Rey Fenix", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/ReyMysterio.png", name: "Rey Mysterio", gender: "Man", tag: "SD" , champion:"WH"},
        { src: "/Images/Roster/Rezar.png", name: "Rezar", gender: "Man", tag: "A" , champion:""},
        { src: "/Images/Roster/RheaRipley.png", name: "Rhea Ripley", gender: "Women", tag: "R" , champion:""},
        { src: "/Images/Roster/RickySaints.png", name: "Ricky Saints", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/RickySteamboat.png", name: "Ricky Steamboat", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/RidgeHolland.png", name: "Ridge Holland", gender: "Man", tag: "U" , champion:""},
        { src: "/Images/Roster/Rikishi.png", name: "Rikishi", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/RoadDogg.png", name: "Road Dogg", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/RobVanDam.png", name: "Rob Van Dam", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/RoddyPiper.png", name: "Roddy Piper", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/RomanReigns.png", name: "Roman Reigns", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/Rosey.png", name: "Rosey", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/RoxannePerez.png", name: "Roxanne Perez", gender: "Women", tag: "SD"},
        { src: "/Images/Roster/Rusev.png", name: "Rusev", gender: "Man", tag: "R"},

 // ------- S ---------

        { src: "/Images/Roster/SamiZayn.png", name: "Sami Zayn", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/Sandman.png", name: "Sandman", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/SantosEscobar.png", name: "Santos Escobar", gender: "Man", tag: "U" , champion:""},
        { src: "/Images/Roster/Scarlett.png", name: "Scarlett", gender: "Women", tag: "A" , champion:""},
        { src: "/Images/Roster/ScottHall.png", name: "Scott Hall", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/ScottSteiner.png", name: "Scott Steiner", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/SethRollins.png", name: "Seth Rollins", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/ShawnMichaels.png", name: "Shawn Michaels", gender: "Man", tag: "R" , champion:"UC"},
        { src: "/Images/Roster/ShawnSpears.png", name: "Shawn Spears", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/ShaynaBaszler.png", name: "Shayna Baszler", gender: "Women", tag: "A" , champion:""},
        { src: "/Images/Roster/Sheamus.png", name: "Sheamus", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/ShinsukeNakamura.png", name: "Shinsuke Nakamura", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/Shotzi.png", name: "Shotzi", gender: "Women", tag: "A" , champion:""},
        { src: "/Images/Roster/SidJustice.png", name: "Sid Justice", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/SolRuca.png", name: "Sol Ruca", gender: "Women", tag: "SD" , champion:""},
        { src: "/Images/Roster/SoloSikoa.png", name: "Solo Sikoa", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/SonyaDeville.png", name: "Sonya Deville", gender: "Women", tag: "A" , champion:""},
        { src: "/Images/Roster/StacyKeibler.png", name: "Stacy Keibler", gender: "Women", tag: "L" , champion:""},
        { src: "/Images/Roster/Stardust.png", name: "Stardust", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/StephanieMcmahon.png", name: "Stephanie Mcmahon", gender: "Women", tag: "L" , champion:""},
        { src: "/Images/Roster/StephanieVaquer.png", name: "Stephanie Vaquer", gender: "Women", tag: "R" , champion:""},
        { src: "/Images/Roster/StoneColdSteveAustin.png", name: "Stone Cold Steve Austin", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/Syxx.png", name: "Syxx", gender: "Man", tag: "L" , champion:""},
        
 // ------- T ---------

        { src: "/Images/Roster/TallaTonga.png", name: "Talla Tonga", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/TamaTonga.png", name: "Tama Tonga", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/Tamina.png", name: "Tamina", gender: "Women", tag: "L" , champion:""},
        { src: "/Images/Roster/TankLedger.png", name: "Tank Ledger", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/TatumPaxley.png", name: "Tatum Paxley", gender: "Women", tag: "SD" , champion:""},
        { src: "/Images/Roster/TavionHights.png", name: "Tavion Hights", gender: "Man", tag: "U" , champion:""},
        { src: "/Images/Roster/TeganNox.png", name: "Tegan Nox", gender: "Women", tag: "A" , champion:""},
        { src: "/Images/Roster/TerryFunk.png", name: "Terry Funk", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/TheFiend.png", name: "The Fiend", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/TheGreatKhali.png", name: "The Great Khali", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/TheGreatMuta.png", name: "The Great Muta", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/TheHurricane.png", name: "The Hurricane", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/TheIronSheik.png", name: "The Iron Sheik", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/TheMiz.png", name: "The Miz", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/TheRock.png", name: "The Rock", gender: "Man", tag: "L", champion:""},
        { src: "/Images/Roster/TheaHail.png", name: "Thea Hail", gender: "Women", tag: "SD" , champion:""},
        { src: "/Images/Roster/TiffanyStratton.png", name: "Tiffany Stratton", gender: "Women", tag: "R" , champion:""},
        { src: "/Images/Roster/TitoSantana.png", name: "Tito Santana", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/TommasoCiampa.png", name: "Tommaso Ciampa", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/TongaLoa.png", name: "Tonga Loa", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/TonyD'Angelo.png", name: "Tony D'Angelo", gender: "Man", tag: "U" , champion:""},
        { src: "/Images/Roster/TrickWilliams.png", name: "Trick Williams", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/TripleH.png", name: "Triple H", gender: "Man", tag: "U" , champion:""},
        { src: "/Images/Roster/TrishStratus.png", name: "Trish Stratus", gender: "Women", tag: "L" , champion:""},
        { src: "/Images/Roster/TylerBate.png", name: "Tyler Bate", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/TylerBreeze.png", name: "Tyler Breeze", gender: "Man", tag: "R" , champion:""},

 // ------- U ---------

        { src: "/Images/Roster/UltimateWarrior.png", name: "Ultimate Warrior", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/Umaga.png", name: "Umaga", gender: "Man", tag: "SD" , champion:""},
        { src: "/Images/Roster/UncleHowdy.png", name: "Uncle Howdy", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/Undertaker.png", name: "Undertaker", gender: "Man", tag: "L" , champion:""},

 // ------- V ---------

        { src: "/Images/Roster/Vader.png", name: "Vader", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/Valhalla.png", name: "Valhalla", gender: "Women", tag: "A" , champion:""},

 // ------- W ---------

        { src: "/Images/Roster/WadeBarrett.png", name: "Wade Barrett", gender: "Man", tag: "R" , champion:""},
        { src: "/Images/Roster/WendyChoo.png", name: "Wendy Choo", gender: "Women", tag: "U" , champion:""},
        { src: "/Images/Roster/WesLee.png", name: "Wes Lee", gender: "Man", tag: "A" , champion:""},
        { src: "/Images/Roster/WilliamRegal.png", name: "William Regal", gender: "Man", tag: "L", tag2: "" , champion:""},
        { src: "/Images/Roster/Wolfgang.png", name: "Wolfgang", gender: "Man", tag: "A" , champion:""},
        { src: "/Images/Roster/WrenSinclair.png", name: "Wren Sinclair", gender: "Women", tag: "R" , champion:""},

 // ------- X ---------

        { src: "/Images/Roster/X-Pac.png", name: "X-Pac", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/XavierWoods.png", name: "Xavier Woods", gender: "Man", tag: "SD" , champion:""},

 // ------- Y ---------

        { src: "/Images/Roster/Yokozuna.png", name: "Yokozuna", gender: "Man", tag: "L" , champion:""},
        { src: "/Images/Roster/YoshikiInamura.png", name: "Yoshiki Inamura", gender: "Man", tag: "AAA" , champion:""},

 // ------- Z ---------

       { src: "/Images/Roster/Zaria.png", name: "Zaria", gender: "Women", tag: "R" , champion:""},
       { src: "/Images/Roster/ZelinaVega.png", name: "ZelinaVega", gender: "Women", tag: "SD" , champion:""},
       { src: "/Images/Roster/ZoeyStark.png", name: "Zoey Stark", gender: "Women", tag: "SD" , champion:""},
  ],
  RAW: [],
  SMACKDOWN: [],
  Legend: [],
  Champions: [],
  Men: [],
  Women: [],
  "Tag Teams": [
    { src: "/Images/Roster/TagTeam/AlphaAcadamy.png", name: "Alpha Acadamy", tag: "SD", champion:""},
    { src: "/Images/Roster/TagTeam/AmericanMade.png", name: "American Made", tag: "SD", champion:""},
    { src: "/Images/Roster/TagTeam/Angel&Berto.png", name: "Angel & Berto", tag: "R", champion:""},
    { src: "/Images/Roster/TagTeam/DIY.png", name: "DIY", tag: "R", champion:""},
    { src: "/Images/Roster/TagTeam/DudleyBoys.png", name: "Dudley Boys", tag: "SD", champion:""},
    { src: "/Images/Roster/TagTeam/Hank&Tank.png", name: "Hank & Tank", tag: "R", champion:""},
    { src: "/Images/Roster/TagTeam/LWO.png", name: "LWO", tag: "SD", champion:""},
    { src: "/Images/Roster/TagTeam/MCMG.png", name: "MCMG", tag: "R", champion:""},
    { src: "/Images/Roster/TagTeam/NCR.png", name: "New Catch Republic", tag: "R", champion:""},
    { src: "/Images/Roster/TagTeam/NewBloodline.png", name: "New Bloodline", tag: "SD", champion:""},
    { src: "/Images/Roster/TagTeam/NewDay.png", name: "New Day", tag: "SD", champion:"SDTT"},
    { src: "/Images/Roster/TagTeam/PrettyDeadly.png", name: "Pretty Deadly", tag: "SD", champion:""},
    { src: "/Images/Roster/TagTeam/StreetProfits.png", name: "Street Profits", tag: "R", champion:"RAWTT"},
    { src: "/Images/Roster/TagTeam/Usos.png", name: "The Usos", tag: "R", champion:""},
    { src: "/Images/Roster/TagTeam/VikingRaiders.png", name: "Viking Raiders", tag: "SD", champion:""},
    { src: "/Images/Roster/TagTeam/WyattSix.png", name: "Wyatt Six", tag: "R", champion:""},
  ],
  Undrafted: [],
  GM: []
};

// Assign appropriate className & push champions
rosterData.ALL.forEach(wrestler => {
  if (wrestler.champion) {
    wrestler.className = wrestler.champion;

    // 👇 automatically assign championRank based on championshipOrder
    wrestler.championRank = championshipOrder[wrestler.champion] ?? 999;

    rosterData.Champions.push(wrestler);
  } else if (wrestler.tag === "R") {
    wrestler.className = "ALLRAW";
  } else if (wrestler.tag === "SD") {
    wrestler.className = "ALLSD";
  } else if (wrestler.tag === "AAA") {
    wrestler.className = "ALLAAA";
  } else if (wrestler.tag === "L") {
    wrestler.className = "ALLLegend";
  } else if (wrestler.tag === "U") {
    wrestler.className = "ALLGeneral";
  } else if (wrestler.tag === "A") {
    wrestler.className = "AllAlumni";
  }
});

// Do the same for Tag Teams
rosterData["Tag Teams"].forEach(tagTeam => {
  if (tagTeam.champion) {
    tagTeam.className = tagTeam.champion;

    // 👇 auto-assign rank here too
    tagTeam.championRank = championshipOrder[tagTeam.champion] ?? 999;

    rosterData.Champions.push(tagTeam);
  } else if (tagTeam.tag === "R") {
    tagTeam.className = "ALLRAW";
  } else if (tagTeam.tag === "SD") {
    tagTeam.className = "ALLSD";
  } else if (tagTeam.tag === "U") {
    tagTeam.className = "ALLGeneral";
  }
});

export default rosterData;