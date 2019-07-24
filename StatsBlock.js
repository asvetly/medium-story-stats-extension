class StatsBlock {
    constructor() {
        this.id = `statsBlock_${ Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5) }`;
        this.element = this.build();
        this.recacl()
    }

    build() {
        const container = document.createElement('div');
        container.id = this.id;
        container.className = 'stats-container';
        
        const counter = document.createElement('p');
        counter.className = 'stats-counter';

        container.appendChild(counter);

        return container;
    }

    recacl() {
        const counter = this.element.childNodes[0];
        const wordsCount =
            [ ...document.getElementsByClassName('graf--p') ]
                .flatMap(p => p.textContent.split(' '))
                .filter(w => w !== '')
                .length; 
        counter.textContent = wordsCount;
    }
}