var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    getDefaultProps: function() {
        console.log('Ustawienie domyślnych propsów. kiedy tworzymy elementy z często ' +
                    'powtarzającą się zawartością');
    },

    componentWillMount: function() {
        console.log('Możemy wykonać różne operacje, kalkulacje oparte na stanie i propsach, ' +
                    'w stanie przed renderowaniem');
    },

    componentDidMount: function() {
        console.log('W tym momencie DOM jest już załadowany, można dokonać ' +
                    'na nich różnych operacji');
    },

    componentWillReceiveProps: function() {
        console.log('W momencie pojawienia sie nowych propsów możemy wykonać' +
                    ' rózne operacje np. dotyczące state mając dostęp do ' +
                    'wartości nowych, ale takze starych propsów');
    },

    shouldComponentUpdate: function() {
        console.log('Możemy zmienić na false, kiedy nie chcemy żeby ' +
                    'aplikacja wywołała zmiany spowodowane przez zmianę ' +
                    'propsów lub stanu');
        return true;
    },

    componentWillUpdate: function() {
        console.log('Podobnie jak componentWillMount z tą różnicą, że' +
                    'otrzymujemy także dostęp do nextProps i nextState');
    },

    componentDidUpdate: function() {
        console.log('Podobnie jak componentWillMount, możemy operować na DOM');
    },

    componentWillUnmount: function() {
        console.log('W tym momencie można np. anulować event listenery ' +
                    'przypisane do elementu lub anulować zapytania sieciowe');
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('h1', {
                style: {
                    margin: '20px 0 20px 10px'}
                }, 'Licznik ' + this.state.counter),
            React.createElement('button', {
                onClick: this.increment, 
                className: 'btn btn-primary btn-sm',
                style: {margin: '0 5px 0 10px'}
            }, 'Increment counter'),
            React.createElement('button', {
                onClick: this.decrement,
                className: 'btn btn-danger btn-sm'
            }, 'Decrement counter')
        );
    }
});

var element = 
    React.createElement('div', {},
        React.createElement(Counter),
        React.createElement(Counter),
        React.createElement(Counter)
    );

                
ReactDOM.render(element, document.getElementById('app'));