import { SELECT_RADIO_STATION } from "./radio-station-actions-types";

const INITIAL_STATE = {
    stations: [
        {
            name: 'Rádio Luanda',
            frequency: '99.9',
            audioUrl: 'http://radios.vpn.sapo.pt/AO/radio11.mp3',
            imageUrl: 'https://static.tuneyou.com/images/logos/100_100/97/13197/RadioLuanda99.9FM.png'
        },
        {
            name: 'FM Stéreo',
            frequency: '96.5',
            audioUrl: 'http://radios.vpn.sapo.pt/AO/radio7.mp3',
            imageUrl: 'https://img.radios.com.br/radio/xl/radio23485_1453972203.jpg'
        },
        {
            name: 'Rádio 5',
            frequency: '94.5',
            audioUrl: 'http://radios.vpn.sapo.pt/AO/radio5.mp3',
            imageUrl: 'data:image/png;base64,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'
        },
        {
            name: 'Rádio Escola',
            frequency: '88.5',
            audioUrl: 'http://radios.vpn.sapo.pt/AO/radio1.mp3',
            imageUrl: 'https://img.radios.com.br/radio/xl/radio40045_1572862902.jpg'
        },
        {
            name: 'Rádio Despertar',
            frequency: '91.0',
            audioUrl: 'http://radios.vpn.sapo.pt/AO/radio15.mp3',
            imageUrl: 'https://mytuner.global.ssl.fastly.net/media/tvos_radios/hpZSk7ZXuU.png'
        },
        {
            name: 'LAC',
            frequency: '95.5',
            audioUrl: 'http://radios.vpn.sapo.pt/AO/radio14.mp3',
            imageUrl: 'https://static-media.streema.com/media/cache/f6/90/f69066973796bc4ed818af52f717052c.jpg'
        },
        {
            name: 'Rádio Cazenga',
            frequency: '102.1',
            audioUrl: 'http://radios.vpn.sapo.pt/AO/radio13.mp3',
            imageUrl: 'https://img.radios.com.br/radio/xl/radio36133_1572529531.jpg'
        },
        {
            name: 'Canal A',
            frequency: '93.5',
            audioUrl: 'http://radios.vpn.sapo.pt/AO/radio3.mp3',
            imageUrl: 'https://www.radio.pt/images/broadcasts/97/0b/27671/c300.png'
        },
        {
            name: 'Rádio Cacuaco',
            frequency: '105.0',
            audioUrl: 'http://radios.vpn.sapo.pt/AO/radio17.mp3',
            imageUrl: 'data:image/jpeg;base64,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'
        },
        {
            name: 'Rádio Romântica',
            frequency: '97.9',
            audioUrl: 'http://radios.vpn.sapo.pt/AO/radio4.mp3',
            imageUrl: 'https://img.radios.com.br/radio/xl/radio40052_1474391887.jpg'
        },
        {
            name: 'Rádio Mais',
            frequency: '99.1',
            audioUrl: 'http://radios.vpn.sapo.pt/AO/radio10.mp3',
            imageUrl: 'https://img.radios.com.br/radio/xl/radio36053_1460988262.jpg'
        },
        {
            name: 'Ngola Yetu',
            frequency: '101.4',
            audioUrl: 'http://radios.vpn.sapo.pt/AO/radio12.mp3',
            imageUrl: 'https://liveonlineradio.net/wp-content/uploads/2021/04/rna-radio-ngola-yetu.jpg'
        },
        {
            name: 'Rádio Cidade',
            frequency: '102.9',
            audioUrl: 'https://radios.vpn.sapo.pt/CV/radio1.mp3',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Logotipo_da_R%C3%A1dio_Cidade_%28Santos%29.png/400px-Logotipo_da_R%C3%A1dio_Cidade_%28Santos%29.png'
        },
        {
            name: 'Rádio Kairós',
            frequency: '98.4',
            audioUrl: 'http://radios.vpn.sapo.pt/AO/radio9.mp3',
            imageUrl: 'https://radiokairosangola.com/wp-content/uploads/2021/03/index-1-1024x972.jpeg'
        }
    ],
    selectedStation: {}
}

const radioStationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case SELECT_RADIO_STATION:
            return {
                ...state,
                selectedStation: action.payload
            }
        default:
            return state;
    }
}

export default radioStationReducer;