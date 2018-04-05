const assert = chai.assert;

describe('форма поиска', function() {
    let searchForm, server;

    beforeEach(function() {
        searchForm = new SearchForm();
        searchForm.render(document.body);

        server = sinon.createFakeServer({
            respondImmediately: true
        });
    });

    afterEach(function () {
        searchForm.destroy();
        server.restore();
    });
    
    it('должна отправлять запрос', function() {
        // подготовка
        searchForm.input.value = 'субботиник';
    
        // действие
        searchForm.button.click();
    
        // проверка
        assert.equal(server.lastRequest.url, 'http://example.com2');
    });

    it('должно очищаться после запроса', function() {
        // подготовка
        searchForm.input.value = 'субботиник';
    
        // действие
        searchForm.button.click();
    
        // проверка
        assert.equal(searchForm.input.value, '');
    });
});