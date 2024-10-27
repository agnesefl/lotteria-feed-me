// Liste di risposte per ciascun bottone
const risposteBottone1 = [
    "ragazze ma avete visto quello???",
    "qualcuna riesce a comprarmi una calcolatrice?",
    "sto facendo brunch con dei carciofi e i biscotti",
    "ma vi ricordate quella crema che comprai a marzo?",
    "forse è la mia strada amo......",
    "secondo te ci hanno drogate?",
    "sì belli questi stivali.. ma sono nuovo non mi rappresentano più",
    "agnese ma tu proprio........",
    "perchè noi quando sentiamo certe cose...",
    "fai quello che ti pare, io sono nel corso di un processo di reinvenzione ora non posso",
    "devi farmi una promessa però",
    "vorrei ricordarvi cosa abbiamo vissuto l'altro ieri",
    "forse mi iscrivo a yoga in quello studio in solari?",
    "ricordiamoci la svendita eh... ah niente era ieri..ma noi???",
    "ok ora zitta che sto in chiamata con lorenzo",
    "guardate cosa ho trovato su vinted, ma non è che sembro troppo una stagista?"

];

const risposteBottone2 = [
    "io sono stata interrotta!!!!!!!!",
    "sinceramente conosco tantissimi magistrati di destra",
    "io ho intenzione di dormire",
    "non mi sono sentita inclusa",
    "ma avete visto lo scandalo al ministero della cultura?",
    "è stato svilente da parte vostra",
    "chi rimane tutta la notte a vedere le elezioni americane?",
    "se solo fossi amica di quelle di est radio...",
    "oddio ho excel alle 18",
    "io l'avevo detto per prima però",
    "facciamo i giochi? tanto il cruciverba del corriere lo vinci",
    "le heets le ho comprate!! non mi dite che è scarica",
    "ma io vi ho mai raccontato di quando sono rimasta traumatizzata a ischia?",
    "è una parola napoletana..avete sentito? non so se avete sentito",
    "secondo me dovremmo chiedere sul gruppo della classe",
    "sto ascoltando problemi di spazi"
    
];

const risposteBottone3 = [
    "ascolta, non farmi ridere, lo vuoi questo kitkat o no",
    "accompagnami alla virgin.",
    "sapete cosa ha fatto bobino ieri? tu lo sai già non ascoltare",
    "non temere ce l'ho io",
    "io ti devo dare delle informazioni, ma solo dal vivo",
    "ma secondo voi io voglio andare in piscina?",
    "posso dire che non mi fa impazzire questo riso?",
    "dalla posizione mi risulta tu sia proprio a casa sinceramente",
    "chi è che vuole telefonare al mio posto?",
    "ma forse è una mossa gravissima?",
    "ma chi è sta gente?",
    "a me non convince molto questa persona"
];

// Funzione per mostrare una risposta casuale in base al bottone
function showMessageRandom(bottone) {
    let listaRisposte;

    // Seleziona la lista corretta in base al bottone cliccato
    if (bottone === 1) {
        listaRisposte = risposteBottone1;
    } else if (bottone === 2) {
        listaRisposte = risposteBottone2;
    } else if (bottone === 3) {
        listaRisposte = risposteBottone3;
    }

    // Scegli una risposta casuale dalla lista selezionata
    const indiceCasuale = Math.floor(Math.random() * listaRisposte.length);
    const rispostaCasuale = listaRisposte[indiceCasuale];

    // Mostra la risposta casuale nel div con id="message"
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = rispostaCasuale;
}

