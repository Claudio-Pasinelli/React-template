Per scaricare le dipendenze del progetto, bisogna assicurarsi di essere nella cartella del progetto,
poi bisogna aprire il terminale bash e scrivere il comando "npm i" e poi premere invio,
ci potrebbero volere alcuni minuti perché l'installazione venga completata.

Nel sito si può vedere una tabella con una lista di oggetti con il bottone per modificare il singolo oggetto e quello per l'eliminazione.
Sopra alla tabella troviamo il campo di input per ricercare degli specifici oggetti, tramite una o più parole chiavi.

Premendo sul pulsante a forma di penna, nella stessa riga dell'oggetto che si vuole modificare,
si aprirà un modale che permetterà di aggiornarlo.
Premendo su "Conferma" i dati inseriti verranno convalidati,
qualora ci dovessero essere degli errori questi verranno segnalati in rosso sotto agli input il cui valore è errato,
in caso contrario la modifica avverrà con successo e la tabella verrà aggiornata.

Premendo invece sul pulsante a forma di cestino, che è accanto a quello della modifica,
si aprirà invece un modale per confermare l'eliminazione dell'oggetto, toccando su annulla o sulla X in alto a destra il modale verrà chiuso,
cliccando invece su "Conferma" si avrà l'eliminazione dell'oggetto, il modale si chiuderà e la tabella verrà aggiornata.
Ad ogni aggiornamento della tabella, in attesa che i suoi dati vengano modificati a dovere, si avrà un'animazione di caricamento al posto di quest'ultima.

Per far partire il progetto bisogna scrivere, sempre da terminale, "npm run start".
Invece, per eseguire il server, scrivere in un secondo terminale (sempre bash), "npm run server".