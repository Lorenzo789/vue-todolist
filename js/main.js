/**
 * MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
 */


const app = new Vue (
    {
        el: '#root',

        data: {
            
            activeIndex: 0,

            newToDo: '',

            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]
        },

        methods: {
            removeToDo: function(index){
                this.todos.splice(index, 1);
            },

            addNewToDo: function(toDoText) {
                const newMessage = {
                    text: toDoText,
                    done: false
                }
                this.todos.push(newMessage);

                this.newToDo = '';
            }
        }
    }
)