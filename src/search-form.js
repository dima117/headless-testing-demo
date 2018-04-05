class SearchForm {

    onClick(e) {
        e.preventDefault();

        let xhr = new XMLHttpRequest();
        
        xhr.open("GET", "http://example.com");
        xhr.send(new FormData(this.form));

        this.form.reset();
    }

    render(parent) {
        this.form = document.createElement('form');
        this.form.innerHTML = 
            `<input type="text" name="query" />
             <input type="button" value="Найти" />`;

        this.input = this.form.querySelector('input[type=text]');
        this.button = this.form.querySelector('input[type=button]');

        this.button.addEventListener('click', this.onClick.bind(this));

        parent.appendChild(this.form);
    }

    destroy() {
        this.form.remove();
    }
}