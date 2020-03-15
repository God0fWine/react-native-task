const reducer = (state = 'https://upload.wikimedia.org/wikipedia/ru/4/4f/Virtus.proLogo.png', action) => {
    switch(action.type) {
        case 'PRESS':
            return action.data.text;
        case 'BACK':
            return '';
        default: 
            return state;
    }
}

export default reducer;