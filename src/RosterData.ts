// rosterData.ts
//
// Pure static roster info (name/image/tag/gender) — who currently holds
// each championship is derived live from Firestore at render time (see
// src/hooks/useCurrentChampions.ts), not tracked here.

export interface Wrestler {
  src: string;
  name: string;
  gender?: string;
  tag?: string;
  tag2?: string;
}

const rosterData: Record<string, Wrestler[]> = {
   ALL: [

// ------- A ---------
        { src: "/Images/Roster/Abyss.webp", name: "Abyss", gender: "Man", tag: "L"},
        { src: "/Images/Roster/AJLee.webp", name: "AJ Lee", gender: "Women", tag: "U"},
        { src: "/Images/Roster/AJStyles.webp", name: "AJ Styles", gender: "Man", tag: "U"},
        { src: "/Images/Roster/Akam.webp", name: "Akam", gender: "Man", tag: "A"},
        { src: "/Images/Roster/AkiraTozawa.webp", name: "Akira Tozawa", gender: "Man", tag: "U"},
        { src: "/Images/Roster/AlbaFyre.webp", name: "Alba Fyre", gender: "Women", tag: "U"},
        { src: "/Images/Roster/AleisterBlack.webp", name: "Aleister Black", gender: "Man", tag: "U"},
        { src: "/Images/Roster/AlexShelley.webp", name: "Alex Shelley", gender: "Man", tag: "U"},
        { src: "/Images/Roster/AlexaBliss.webp", name: "Alexa Bliss", gender: "Women", tag: "U"},
        { src: "/Images/Roster/Andrade.webp", name: "Andrade", gender: "Man", tag: "A"},
        { src: "/Images/Roster/AndreChase.webp", name: "Andre Chase", gender: "Man", tag: "U"},
        { src: "/Images/Roster/Angel.webp", name: "Angel", gender: "Man", tag: "R"},
        { src: "/Images/Roster/AngeloDawkins.webp", name: "Angelo Dawkins", gender: "Man", tag: "U"},
        { src: "/Images/Roster/ApolloCrews.webp", name: "Apollo Crews", gender: "Man", tag: "U"},
        { src: "/Images/Roster/AshanteTheeAdonis.webp", name: "Ashante Thee Adonis", gender: "Man", tag: "A"},
        { src: "/Images/Roster/Asuka.webp", name: "Asuka", gender: "Women", tag: "SD"},
        { src: "/Images/Roster/AustinTheory.webp", name: "Austin Theory", gender: "Man", tag: "U"},
        { src: "/Images/Roster/Axiom.webp", name: "Axiom", gender: "Man", tag: "U"},

 // ------- B ---------

        { src: "/Images/Roster/B-Fab.webp", name: "B Fab", gender: "Women", tag: "U"},
        { src: "/Images/Roster/BaronCorbin.webp", name: "Baron Corbin", gender: "Man", tag: "A"},
        { src: "/Images/Roster/Batista.webp", name: "Batista", gender: "Man", tag: "U"},
        { src: "/Images/Roster/Bayley.webp", name: "Bayley", gender: "Women", tag: "U"},
        { src: "/Images/Roster/BeckyLynch.webp", name: "Becky Lynch", gender: "Women", tag: "R"},
        { src: "/Images/Roster/Berto.webp", name: "Berto", gender: "Man", tag: "R"},
        { src: "/Images/Roster/BiancaBelair.webp", name: "Bianca Belair", gender: "Women", tag: "U"},
        { src: "/Images/Roster/BigE.webp", name: "Big E", gender: "Man", tag: "L"},
        { src: "/Images/Roster/BillyGunn.webp", name: "Billy Gunn", gender: "Man", tag: "L"},
        { src: "/Images/Roster/BlairDavenport.webp", name: "Blair Davenport", gender: "Women", tag: "A"},
        { src: "/Images/Roster/BlakeMonroe.webp", name: "Blake Monroe", gender: "Women", tag: "U"},
        { src: "/Images/Roster/Boogeyman.webp", name: "Boogeyman", gender: "Man", tag: "L"},
        { src: "/Images/Roster/BookerT.webp", name: "Booker T", gender: "Man", tag: "U" , tag2: "GM"},
        { src: "/Images/Roster/BraunStrowman.webp", name: "Braun Strowman", gender: "Man", tag: "A"},
        { src: "/Images/Roster/BrayWyatt.webp", name: "Bray Wyatt", gender: "Man", tag: "U"},
        { src: "/Images/Roster/BrockLesnar.webp", name: "Brock Lesnar", gender: "Man", tag: "U"},
        { src: "/Images/Roster/BronBreakker.webp", name: "Bron Breakker", gender: "Man", tag: "U"},
        { src: "/Images/Roster/BronsonReed.webp", name: "Bronson Reed", gender: "Man", tag: "U"},
        { src: "/Images/Roster/BrooksJensen.webp", name: "Brooks Jensen", gender: "Man", tag: "U"},
        { src: "/Images/Roster/BrutusCreed.webp", name: "Brutus Creed", gender: "Man", tag: "U"},
        { src: "/Images/Roster/BubbaRayDudley.webp", name: "Bubba Ray Dudley", gender: "Man", tag: "SD"},
        { src: "/Images/Roster/BullNakano.webp", name: "Bull Nakano", gender: "Women", tag: "L"},

 // ------- C ---------

        { src: "/Images/Roster/CMPunk.webp", name: "CM Punk", gender: "Man", tag: "U"},
        { src: "/Images/Roster/CactusJack.webp", name: "Cactus Jack", gender: "Man", tag: "L"},
        { src: "/Images/Roster/CandiceLeRae.webp", name: "Candice LeRae", gender: "Women", tag: "U"},
        { src: "/Images/Roster/Carlito.webp", name: "Carlito", gender: "Man", tag: "A"},
        { src: "/Images/Roster/Carmella.webp", name: "Carmella", gender: "Women", tag: "A"},
        { src: "/Images/Roster/CarmeloHayes.webp", name: "Carmelo Hayes", gender: "Man", tag: "U"},
        { src: "/Images/Roster/CedricAlexander.webp", name: "Cedric Alexander", gender: "Man", tag: "A"},
        { src: "/Images/Roster/ChadGable.webp", name: "Chad Gable", gender: "Man", tag: "U"},
        { src: "/Images/Roster/ChanningLorenzo.webp", name: "Channing Lorenzo", gender: "Man", tag: "U"},
        { src: "/Images/Roster/CharlieDempsey.webp", name: "Charlie Dempsey", gender: "Man", tag: "U"},
        { src: "/Images/Roster/CharlotteFlair.webp", name: "Charlotte Flair", gender: "Women", tag: "U"},
        { src: "/Images/Roster/ChelseaGreen.webp", name: "Chelsea Green", gender: "Women", tag: "U"},
        { src: "/Images/Roster/ChrisSabin.webp", name: "Chris Sabin", gender: "Man", tag: "U"},
        { src: "/Images/Roster/Chyna.webp", name: "Chyna", gender: "Women", tag: "L"},
        { src: "/Images/Roster/CodyRhodes.webp", name: "Cody Rhodes", gender: "Man", tag: "U"},
        { src: "/Images/Roster/CoraJade.webp", name: "Cora Jade", gender: "Women", tag: "A"},
        { src: "/Images/Roster/CruzDelToro.webp", name: "Cruz Del Toro", gender: "Man", tag: "U"},

 // ------- D ---------

        { src: "/Images/Roster/D-LoBrown.webp", name: "D-Lo Brown", gender: "Man", tag: "L"},
        { src: "/Images/Roster/D-VonDudley.webp", name: "D-Von Dudley", gender: "Man", tag: "SD"},
        { src: "/Images/Roster/DDP.webp", name: "DDP", gender: "Man", tag: "L"},
        { src: "/Images/Roster/DakotaKai.webp", name: "Dakota Kai", gender: "Women", tag: "A"},
        { src: "/Images/Roster/DamianPriest.webp", name: "Damian Priest", gender: "Man", tag: "U"},
        { src: "/Images/Roster/DexterLumis.webp", name: "Dexter Lumis", gender: "Man", tag: "U"},
        { src: "/Images/Roster/Diesel.webp", name: "Diesel", gender: "Man", tag: "L"},
        { src: "/Images/Roster/DoinkTheClown.webp", name: "Doink The Clown", gender: "Man", tag: "L"},
        { src: "/Images/Roster/DominikMysterio.webp", name: "Dominik Mysterio", gender: "Man", tag: "R"},
        { src: "/Images/Roster/DragonLee.webp", name: "Dragon Lee", gender: "Man", tag: "U"},
        { src: "/Images/Roster/DrewMcIntyre.webp", name: "Drew Mcintyre", gender: "Man", tag: "R"},
        { src: "/Images/Roster/DudeLove.webp", name: "Dude Love", gender: "Man", tag: "L"},
        { src: "/Images/Roster/DukeHudson.webp", name: "Duke Hudson", gender: "Man", tag: "A"},
        { src: "/Images/Roster/DustyRhodes.webp", name: "Dusty Rhodes", gender: "Man", tag: "L"},

 // ------- E ---------

        { src: "/Images/Roster/EddieGuerrero.webp", name: "Eddie Guerrero", gender: "Man", tag: "L"},
        { src: "/Images/Roster/EddyThorpe.webp", name: "Eddy Thorpe", gender: "Man", tag: "A"},
        { src: "/Images/Roster/ElektraLopez.webp", name: "Elektra Lopez", gender: "Women", tag: "A"},
        { src: "/Images/Roster/ElGrandeAmericano.webp", name: "El Grande Americano", gender: "Man", tag: "U"},
        { src: "/Images/Roster/ElHijoDelVikingo.webp", name: "El Hijo Del Vikingo", gender: "Man", tag: "AAA"},
        { src: "/Images/Roster/EltonPrince.webp", name: "Elton Prince", gender: "Man", tag: "U"},
        { src: "/Images/Roster/EricBischoff.webp", name: "Eric Bischoff", gender: "Man", tag: "L"},
        { src: "/Images/Roster/ErickRowan.webp", name: "Erick Rowan", gender: "Man", tag: "U"},
        { src: "/Images/Roster/Erik.webp", name: "Erik", gender: "Man", tag: "U"},
        { src: "/Images/Roster/EthanPage.webp", name: "Ethan Page", gender: "Man", tag: "U"},
        { src: "/Images/Roster/EveTorres.webp", name: "Eve Torres", gender: "Women", tag: "U"},

 // ------- F ---------

        { src: "/Images/Roster/Faarooq.webp", name: "Faarooq", gender: "Man", tag: "L"},
        { src: "/Images/Roster/FallonHenley.webp", name: "Fallon Henley", gender: "Women", tag: "U"},
        { src: "/Images/Roster/FinnBalor.webp", name: "Finn Balor", gender: "Man", tag: "U"},
        { src: "/Images/Roster/Flammer.webp", name: "Flammer", gender: "Women", tag: "AAA"},

 // ------- G ---------

        { src: "/Images/Roster/GigiDolin.webp", name: "Gigi Dolin", gender: "Women", tag: "A"},
        { src: "/Images/Roster/GiovanniVinci.webp", name: "Giovanni Vinci", gender: "Man", tag: "A"},
        { src: "/Images/Roster/Giulia.webp", name: "Giulia", gender: "Women", tag: "U"},
        { src: "/Images/Roster/Goldberg.webp", name: "Goldberg", gender: "Man", tag: "L"},
        { src: "/Images/Roster/GraysonWaller.webp", name: "Grayson Waller", gender: "Man", tag: "U"},
        { src: "/Images/Roster/Gunther.webp", name: "Gunther", gender: "Man", tag: "SD"},

 // ------- H ---------
        {src: "/Images/Roster/HankWalker.webp", name: "Hank Walker", gender: "Man", tag: "U"},
        { src: "/Images/Roster/HonkyTonkMan.webp", name: "Honky Tonk Man", gender: "Man", tag: "L"},
        { src: "/Images/Roster/HulkHogan.webp", name: "HulkHogan", gender: "Man", tag: "L"},

// ------- I ---------       
        
        { src: "/Images/Roster/IljaDragunov.webp", name: "Ilja Dragunov", gender: "Man", tag: "U"},
        { src: "/Images/Roster/IndiHartwell.webp", name: "Indi Hartwell", gender: "Women", tag: "A"},
        { src: "/Images/Roster/IslaDawn.webp", name: "Isla Dawn", gender: "Women", tag: "A"},
        { src: "/Images/Roster/Ivar.webp", name: "Ivar", gender: "Man", tag: "U"},
        { src: "/Images/Roster/IvyNile.webp", name: "Ivy Nile", gender: "Women", tag: "U"},
        { src: "/Images/Roster/IyoSky.webp", name: "Iyo Sky", gender: "Women", tag: "U"},
        { src: "/Images/Roster/IzziDame.webp", name: "Izzi Dame", gender: "Women", tag: "U"},

 // ------- J ---------

        { src: "/Images/Roster/JacobFatu.webp", name: "Jacob Fatu", gender: "Man", tag: "U"},
        { src: "/Images/Roster/JacyJayne.webp", name: "Jacy Jayne", gender: "Women", tag: "U"},
        { src: "/Images/Roster/JadeCargill.webp", name: "Jade Cargill", gender: "Women", tag: "U"},
        { src: "/Images/Roster/JaidaParker.webp", name: "Jaida Parker", gender: "Women", tag: "U"},
        { src: "/Images/Roster/JakaraJackson.webp", name: "Jakara Jackson", gender: "Women", tag: "A"},
        { src: "/Images/Roster/JakeTheSnakeRoberts.webp", name: "Jake The Snake Roberts", gender: "Man", tag: "L"},
        { src: "/Images/Roster/JazmynNyx.webp", name: "Jazmyn Nyx", gender: "Women", tag: "U"},
        { src: "/Images/Roster/JBL.webp", name: "JBL", gender: "Man", tag: "U" , tag2: "GM"},
        { src: "/Images/Roster/JCMateo.webp", name: "JC Mateo", gender: "Man", tag: "U"},
        { src: "/Images/Roster/JDMcdonagh.webp", name: "JD Mcdonagh", gender: "Man", tag: "U"},
        { src: "/Images/Roster/JeffHardy.webp", name: "Jeff Hardy", gender: "Man", tag: "U"},
        { src: "/Images/Roster/Je'vonEvans.webp", name: "Je'von Evans", gender: "Man", tag: "U"},
        { src: "/Images/Roster/JesseVentura.webp", name: "Jesse Ventura", gender: "Man", tag: "L"},
        { src: "/Images/Roster/JeyUso.webp", name: "Jey Uso", gender: "Man", tag: "U"},
        { src: "/Images/Roster/JimNeidhart.webp", name: "Jim Neidhart", gender: "Man", tag: "L"},
        { src: "/Images/Roster/JimmyUso.webp", name: "Jimmy Uso", gender: "Man", tag: "U"},
        { src: "/Images/Roster/JoaquinWilde.webp", name: "Joaquin Wilde", gender: "Man", tag: "U"},
        { src: "/Images/Roster/JoeCoffey.webp", name: "Joe Coffey", gender: "Man", tag: "A"},
        { src: "/Images/Roster/JoeGacy.webp", name: "Joe Gacy", gender: "Man", tag: "U"},
        { src: "/Images/Roster/JoeHendry.webp", name: "Joe Hendry", gender: "Man", tag: "U"},
        { src: "/Images/Roster/JohnCena.webp", name: "John Cena", gender: "Man", tag: "U"},
        { src: "/Images/Roster/JohnnyGargano.webp", name: "Johnny Gargano", gender: "Man", tag: "U"},
        { src: "/Images/Roster/JordynneGrace.webp", name: "Jordynne Grace", gender: "Women", tag: "U"},
        { src: "/Images/Roster/JoshBriggs.webp", name: "Josh Briggs", gender: "Man", tag: "U"},
        { src: "/Images/Roster/JuliusCreed.webp", name: "Julius Creed", gender: "Man", tag: "U"},
        { src: "/Images/Roster/JunkyardDog.webp", name: "Junkyard Dog", gender: "Man", tag: "L"},

 // ------- K ---------

        { src: "/Images/Roster/KSI.webp", name: "KSI", gender: "Man", tag: "A"},
        { src: "/Images/Roster/KairiSane.webp", name: "Kairi Sane", gender: "Women", tag: "U"},
        { src: "/Images/Roster/Kane.webp", name: "Kane", gender: "Man", tag: "U"},
        { src: "/Images/Roster/KarlAnderson.webp", name: "Karl Anderson", gender: "Man", tag: "A"},
        { src: "/Images/Roster/KarmenPetrovic.webp", name: "Karmen Petrovic", gender: "Women", tag: "U"},
        { src: "/Images/Roster/KarrionKross.webp", name: "Karrion Kross", gender: "Man", tag: "A"},
        { src: "/Images/Roster/KatanaChance.webp", name: "Katana Chance", gender: "Women", tag: "A"},
        { src: "/Images/Roster/KaydenCarter.webp", name: "Kayden Carter", gender: "Women", tag: "A"},
        { src: "/Images/Roster/KelaniJordan.webp", name: "Kelani Jordan", gender: "Women", tag: "U"},
        { src: "/Images/Roster/KenShamrock.webp", name: "Ken Shamrock", gender: "Man", tag: "L"},
        { src: "/Images/Roster/KevinNash.webp", name: "Kevin Nash", gender: "Man", tag: "L"},
        { src: "/Images/Roster/KevinOwens.webp", name: "Kevin Owens", gender: "Man", tag: "U"},
        { src: "/Images/Roster/KianaJames.webp", name: "Kiana James", gender: "Women", tag: "U"},
        { src: "/Images/Roster/KitWilson.webp", name: "Kit Wilson", gender: "Man", tag: "U"},
        { src: "/Images/Roster/KofiKingston.webp", name: "Kofi Kingston", gender: "Man", tag: "U"},
        { src: "/Images/Roster/KurtAngle.webp", name: "Kurt Angle", gender: "Man", tag: "L"},

 // ------- L ---------

        { src: "/Images/Roster/LAKnight.webp", name: "LA Knight", gender: "Man", tag: "U"},
        { src: "/Images/Roster/LaParka.webp", name: "La Parka", gender: "Man", tag: "U"},
        { src: "/Images/Roster/LashLegend.webp", name: "Lash Legend", gender: "Women", tag: "U"},
        { src: "/Images/Roster/LexLuger.webp", name: "Lex Luger", gender: "Man", tag: "L"},
        { src: "/Images/Roster/LexisKing.webp", name: "Lexis King", gender: "Man", tag: "U"},
        { src: "/Images/Roster/Lita.webp", name: "Lita", gender: "Women", tag: "U"},
        { src: "/Images/Roster/LivMorgan.webp", name: "Liv Morgan", gender: "Women", tag: "U"},
        { src: "/Images/Roster/LoganPaul.webp", name: "Logan Paul", gender: "Man", tag: "U"},
        { src: "/Images/Roster/LolaVice.webp", name: "Lola Vice", gender: "Women", tag: "R"},
        { src: "/Images/Roster/LudwigKaiser.webp", name: "Ludwig Kaiser", gender: "Man", tag: "U"},
        { src: "/Images/Roster/LukeGallows.webp", name: "Luke Gallows", gender: "Man", tag: "A"},
        { src: "/Images/Roster/LyraValkyria.webp", name: "Lyra Valkyria", gender: "Women", tag: "U"},

 // ------- M ---------

        { src: "/Images/Roster/MachoManRandySavage.webp", name: "Macho Man Randy Savage", gender: "Man", tag: "L"},
        { src: "/Images/Roster/Mankind.webp", name: "Mankind", gender: "Man", tag: "L"},
        { src: "/Images/Roster/MarkCoffey.webp", name: "Mark Coffey", gender: "Man", tag: "A"},
        { src: "/Images/Roster/MarkHenry.webp", name: "Mark Henry", gender: "Man", tag: "U"},
        { src: "/Images/Roster/Maryse.webp", name: "Maryse", gender: "Women", tag: "L"},
        { src: "/Images/Roster/MattCardona.webp", name: "Matt Cardona", gender: "Man", tag: "U"},
        { src: "/Images/Roster/MattHardy.webp", name: "Matt Hardy", gender: "Man", tag: "U"},
        { src: "/Images/Roster/MaxxineDupri.webp", name: "Maxxine Dupri", gender: "Women", tag: "U"},
        { src: "/Images/Roster/MichelleMcCool.webp", name: "Michelle McCool", gender: "Women", tag: "U"},
        { src: "/Images/Roster/Michin.webp", name: "Michin", gender: "Women", tag: "U"},
        { src: "/Images/Roster/MickFoley.webp", name: "Mick Foley", gender: "Man", tag: "L"},
        { src: "/Images/Roster/MollyHolly.webp", name: "Molly Holly", gender: "Women", tag: "L"},
        { src: "/Images/Roster/MontezFord.webp", name: "Montez Ford", gender: "Man", tag: "U"},
        { src: "/Images/Roster/MrIguana.webp", name: "Mr Iguana", gender: "Man", tag: "AAA"},
        { src: "/Images/Roster/MrPerfect.webp", name: "Mr Perfect", gender: "Man", tag: "L"},
        { src: "/Images/Roster/MylesBorne.webp", name: "Myles Borne", gender: "Man", tag: "U"},

 // ------- N ---------

        { src: "/Images/Roster/Naomi.webp", name: "Naomi", gender: "Women", tag: "U"},
        { src: "/Images/Roster/Natalya.webp", name: "Natalya", gender: "Women", tag: "U"},
        { src: "/Images/Roster/NathanFrazer.webp", name: "Nathan Frazer", gender: "Man", tag: "U"},
        { src: "/Images/Roster/NewJack.webp", name: "New Jack", gender: "Man", tag: "L"},
        { src: "/Images/Roster/NiaJax.webp", name: "Nia Jax", gender: "Women", tag: "U"},
        { src: "/Images/Roster/NikkiBella.webp", name: "Nikki Bella", gender: "Women", tag: "U"},
        { src: "/Images/Roster/NikkiCross.webp", name: "Nikki Cross", gender: "Women", tag: "U"},
        { src: "/Images/Roster/NikkitaLyons.webp", name: "Nikkita Lyons", gender: "Women", tag: "U"},
        { src: "/Images/Roster/NoamDar.webp", name: "Noam Dar", gender: "Man", tag: "U"},

 // ------- O ---------

        { src: "/Images/Roster/ObaFemi.webp", name: "Oba Femi", gender: "Man", tag: "U"},
        { src: "/Images/Roster/Omos.webp", name: "Omos", gender: "Man", tag: "U"},
        { src: "/Images/Roster/OroMensah.webp", name: "Oro Mensah", gender: "Man", tag: "A"},
        { src: "/Images/Roster/Otis.webp", name: "Otis", gender: "Man", tag: "U"},

 // ------- P ---------

        { src: "/Images/Roster/PatMcafee.webp", name: "Pat Mcafee", gender: "Man", tag: "L"},
        { src: "/Images/Roster/PaulOrndorff.webp", name: "Paul Orndorff", gender: "Man", tag: "L"},
        { src: "/Images/Roster/Penta.webp", name: "Penta", gender: "Man", tag: "U"},
        { src: "/Images/Roster/PeteDunne.webp", name: "Pete Dunne", gender: "Man", tag: "U"},
        { src: "/Images/Roster/PiperNiven.webp", name: "Piper Niven", gender: "Women", tag: "U"},
        { src: "/Images/Roster/PsychoClown.webp", name: "Psycho Clown", gender: "Man", tag: "AAA"},

 // ------- R ---------

        { src: "/Images/Roster/R-Truth.webp", name: "R-Truth", gender: "Man", tag: "U"},
        { src: "/Images/Roster/RandyOrton.webp", name: "Randy Orton", gender: "Man", tag: "U"},
        { src: "/Images/Roster/RaquelRodriguez.webp", name: "Raquel Rodriguez", gender: "Women", tag: "U"},
        { src: "/Images/Roster/RazorRamon.webp", name: "Razor Ramon", gender: "Man", tag: "L"},
        { src: "/Images/Roster/ReyFenix.webp", name: "Rey Fenix", gender: "Man", tag: "U"},
        { src: "/Images/Roster/ReyMysterio.webp", name: "Rey Mysterio", gender: "Man", tag: "U"},
        { src: "/Images/Roster/Rezar.webp", name: "Rezar", gender: "Man", tag: "A"},
        { src: "/Images/Roster/RheaRipley.webp", name: "Rhea Ripley", gender: "Women", tag: "U"},
        { src: "/Images/Roster/RickySaints.webp", name: "Ricky Saints", gender: "Man", tag: "SD"},
        { src: "/Images/Roster/RickySteamboat.webp", name: "Ricky Steamboat", gender: "Man", tag: "L"},
        { src: "/Images/Roster/RidgeHolland.webp", name: "Ridge Holland", gender: "Man", tag: "U"},
        { src: "/Images/Roster/Rikishi.webp", name: "Rikishi", gender: "Man", tag: "L"},
        { src: "/Images/Roster/RoadDogg.webp", name: "Road Dogg", gender: "Man", tag: "L"},
        { src: "/Images/Roster/RobVanDam.webp", name: "Rob Van Dam", gender: "Man", tag: "U"},
        { src: "/Images/Roster/RoddyPiper.webp", name: "Roddy Piper", gender: "Man", tag: "L"},
        { src: "/Images/Roster/RomanReigns.webp", name: "Roman Reigns", gender: "Man", tag: "U"},
        { src: "/Images/Roster/Rosey.webp", name: "Rosey", gender: "Man", tag: "L"},
        { src: "/Images/Roster/RoxannePerez.webp", name: "Roxanne Perez", gender: "Women", tag: "SD"},
        { src: "/Images/Roster/Rusev.webp", name: "Rusev", gender: "Man", tag: "U"},

 // ------- S ---------

        { src: "/Images/Roster/SamiZayn.webp", name: "Sami Zayn", gender: "Man", tag: "U"},
        { src: "/Images/Roster/Sandman.webp", name: "Sandman", gender: "Man", tag: "L"},
        { src: "/Images/Roster/SantosEscobar.webp", name: "Santos Escobar", gender: "Man", tag: "U"},
        { src: "/Images/Roster/Scarlett.webp", name: "Scarlett", gender: "Women", tag: "A"},
        { src: "/Images/Roster/ScottHall.webp", name: "Scott Hall", gender: "Man", tag: "L"},
        { src: "/Images/Roster/ScottSteiner.webp", name: "Scott Steiner", gender: "Man", tag: "L"},
        { src: "/Images/Roster/SethRollins.webp", name: "Seth Rollins", gender: "Man", tag: "R"},
        { src: "/Images/Roster/ShawnMichaels.webp", name: "Shawn Michaels", gender: "Man", tag: "U"},
        { src: "/Images/Roster/ShawnSpears.webp", name: "Shawn Spears", gender: "Man", tag: "U"},
        { src: "/Images/Roster/ShaynaBaszler.webp", name: "Shayna Baszler", gender: "Women", tag: "A"},
        { src: "/Images/Roster/Sheamus.webp", name: "Sheamus", gender: "Man", tag: "U"},
        { src: "/Images/Roster/ShinsukeNakamura.webp", name: "Shinsuke Nakamura", gender: "Man", tag: "U"},
        { src: "/Images/Roster/Shotzi.webp", name: "Shotzi", gender: "Women", tag: "A"},
        { src: "/Images/Roster/SidJustice.webp", name: "Sid Justice", gender: "Man", tag: "L"},
        { src: "/Images/Roster/SolRuca.webp", name: "Sol Ruca", gender: "Women", tag: "U"},
        { src: "/Images/Roster/SoloSikoa.webp", name: "Solo Sikoa", gender: "Man", tag: "U"},
        { src: "/Images/Roster/SonyaDeville.webp", name: "Sonya Deville", gender: "Women", tag: "A"},
        { src: "/Images/Roster/StacyKeibler.webp", name: "Stacy Keibler", gender: "Women", tag: "L"},
        { src: "/Images/Roster/Stardust.webp", name: "Stardust", gender: "Man", tag: "L"},
        { src: "/Images/Roster/StephanieMcmahon.webp", name: "Stephanie Mcmahon", gender: "Women", tag: "L"},
        { src: "/Images/Roster/StephanieVaquer.webp", name: "Stephanie Vaquer", gender: "Women", tag: "U"},
        { src: "/Images/Roster/StoneColdSteveAustin.webp", name: "Stone Cold Steve Austin", gender: "Man", tag: "L"},
        { src: "/Images/Roster/Syxx.webp", name: "Syxx", gender: "Man", tag: "L"},
        
 // ------- T ---------

        { src: "/Images/Roster/TallaTonga.webp", name: "Talla Tonga", gender: "Man", tag: "U"},
        { src: "/Images/Roster/TamaTonga.webp", name: "Tama Tonga", gender: "Man", tag: "U"},
        { src: "/Images/Roster/Tamina.webp", name: "Tamina", gender: "Women", tag: "L"},
        { src: "/Images/Roster/TankLedger.webp", name: "Tank Ledger", gender: "Man", tag: "U"},
        { src: "/Images/Roster/TatumPaxley.webp", name: "Tatum Paxley", gender: "Women", tag: "U"},
        { src: "/Images/Roster/TavionHights.webp", name: "Tavion Hights", gender: "Man", tag: "U"},
        { src: "/Images/Roster/TeganNox.webp", name: "Tegan Nox", gender: "Women", tag: "A"},
        { src: "/Images/Roster/TerryFunk.webp", name: "Terry Funk", gender: "Man", tag: "L"},
        { src: "/Images/Roster/TheFiend.webp", name: "The Fiend", gender: "Man", tag: "U"},
        { src: "/Images/Roster/TheGreatKhali.webp", name: "The Great Khali", gender: "Man", tag: "U"},
        { src: "/Images/Roster/TheGreatMuta.webp", name: "The Great Muta", gender: "Man", tag: "L"},
        { src: "/Images/Roster/TheHurricane.webp", name: "The Hurricane", gender: "Man", tag: "L"},
        { src: "/Images/Roster/TheIronSheik.webp", name: "The Iron Sheik", gender: "Man", tag: "L"},
        { src: "/Images/Roster/TheMiz.webp", name: "The Miz", gender: "Man", tag: "U"},
        { src: "/Images/Roster/TheRock.webp", name: "The Rock", gender: "Man", tag: "L"},
        { src: "/Images/Roster/TheaHail.webp", name: "Thea Hail", gender: "Women", tag: "U"},
        { src: "/Images/Roster/TiffanyStratton.webp", name: "Tiffany Stratton", gender: "Women", tag: "U"},
        { src: "/Images/Roster/TitoSantana.webp", name: "Tito Santana", gender: "Man", tag: "L"},
        { src: "/Images/Roster/TommasoCiampa.webp", name: "Tommaso Ciampa", gender: "Man", tag: "U"},
        { src: "/Images/Roster/TongaLoa.webp", name: "Tonga Loa", gender: "Man", tag: "U"},
        { src: "/Images/Roster/TonyD'Angelo.webp", name: "Tony D'Angelo", gender: "Man", tag: "U"},
        { src: "/Images/Roster/TorrieWilson.webp", name: "Torrie Wilson", gender: "Women", tag: "U"},
        { src: "/Images/Roster/TrickWilliams.webp", name: "Trick Williams", gender: "Man", tag: "U"},
        { src: "/Images/Roster/TripleH.webp", name: "Triple H", gender: "Man", tag: "U"},
        { src: "/Images/Roster/TrishStratus.webp", name: "Trish Stratus", gender: "Women", tag: "L"},
        { src: "/Images/Roster/TylerBate.webp", name: "Tyler Bate", gender: "Man", tag: "U"},
        { src: "/Images/Roster/TylerBreeze.webp", name: "Tyler Breeze", gender: "Man", tag: "U"},

 // ------- U ---------

        { src: "/Images/Roster/UltimateWarrior.webp", name: "Ultimate Warrior", gender: "Man", tag: "L"},
        { src: "/Images/Roster/Umaga.webp", name: "Umaga", gender: "Man", tag: "U"},
        { src: "/Images/Roster/UncleHowdy.webp", name: "Uncle Howdy", gender: "Man", tag: "U"},
        { src: "/Images/Roster/Undertaker.webp", name: "Undertaker", gender: "Man", tag: "L"},

 // ------- V ---------

        { src: "/Images/Roster/Vader.webp", name: "Vader", gender: "Man", tag: "L"},
        { src: "/Images/Roster/Valhalla.webp", name: "Valhalla", gender: "Women", tag: "A"},
        { src: "/Images/Roster/Victoria.webp", name: "Victoria", gender: "Women", tag: "U"},

 // ------- W ---------

        { src: "/Images/Roster/WadeBarrett.webp", name: "Wade Barrett", gender: "Man", tag: "U"},
        { src: "/Images/Roster/WendyChoo.webp", name: "Wendy Choo", gender: "Women", tag: "U"},
        { src: "/Images/Roster/WesLee.webp", name: "Wes Lee", gender: "Man", tag: "A"},
        { src: "/Images/Roster/WilliamRegal.webp", name: "William Regal", gender: "Man", tag: "L", tag2: ""},
        { src: "/Images/Roster/Wolfgang.webp", name: "Wolfgang", gender: "Man", tag: "A"},
        { src: "/Images/Roster/WrenSinclair.webp", name: "Wren Sinclair", gender: "Women", tag: "U"},

 // ------- X ---------

        { src: "/Images/Roster/X-Pac.webp", name: "X-Pac", gender: "Man", tag: "L"},
        { src: "/Images/Roster/XavierWoods.webp", name: "Xavier Woods", gender: "Man", tag: "U"},

 // ------- Y ---------

        { src: "/Images/Roster/Yokozuna.webp", name: "Yokozuna", gender: "Man", tag: "L"},
        { src: "/Images/Roster/YoshikiInamura.webp", name: "Yoshiki Inamura", gender: "Man", tag: "AAA"},

 // ------- Z ---------

       { src: "/Images/Roster/Zaria.webp", name: "Zaria", gender: "Women", tag: "U"},
       { src: "/Images/Roster/ZelinaVega.webp", name: "ZelinaVega", gender: "Women", tag: "U"},
       { src: "/Images/Roster/ZoeyStark.webp", name: "Zoey Stark", gender: "Women", tag: "U"},
  ],
  "Tag Teams": [
    { src: "/Images/Roster/TagTeam/AlphaAcadamy.webp", name: "Alpha Acadamy", tag: "U"},
    { src: "/Images/Roster/TagTeam/AmericanMade.webp", name: "American Made", tag: "U"},
    { src: "/Images/Roster/TagTeam/PerrosDelMal.webp", name: "Perros Del Mal", tag: "U"},
    { src: "/Images/Roster/TagTeam/DIY.webp", name: "DIY", tag: "U"},
    { src: "/Images/Roster/TagTeam/DudleyBoys.webp", name: "Dudley Boys", tag: "U"},
    { src: "/Images/Roster/TagTeam/Hank&Tank.webp", name: "Hank & Tank", tag: "U"},
    { src: "/Images/Roster/TagTeam/HardyBoys.webp", name: "Hardy Boys", tag: "U"},
    { src: "/Images/Roster/TagTeam/LuchaBrothers.webp", name: "Lucha Brothers", tag: "U"},
    { src: "/Images/Roster/TagTeam/LWO.webp", name: "LWO", tag: "U"},
    { src: "/Images/Roster/TagTeam/MCMG.webp", name: "MCMG", tag: "U"},
    { src: "/Images/Roster/TagTeam/NCR.webp", name: "New Catch Republic", tag: "U"},
    { src: "/Images/Roster/TagTeam/NewBloodline.webp", name: "New Bloodline", tag: "U"},
    { src: "/Images/Roster/TagTeam/NewDay.webp", name: "New Day", tag: "U"},
    { src: "/Images/Roster/TagTeam/PrettyDeadly.webp", name: "Pretty Deadly", tag: "U"},
    { src: "/Images/Roster/TagTeam/StreetProfits.webp", name: "Street Profits", tag: "U"},
    { src: "/Images/Roster/TagTeam/Usos.webp", name: "The Usos", tag: "U"},
    { src: "/Images/Roster/TagTeam/VikingRaiders.webp", name: "Viking Raiders", tag: "U"},
    { src: "/Images/Roster/TagTeam/WyattSix.webp", name: "Wyatt Six", tag: "U"},
  ],
};

export default rosterData;