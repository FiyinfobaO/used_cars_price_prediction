let modelSelect = document.querySelector('#model')
let modelFields = []
let models = [{
    name: 'acura',
    fields: ['Legend', 'Mdx', 'Rdx', 'Rl', 'Tl', 'Tsx', 'Zdx']
}, {
    name: 'audi',
    fields: ['A3', 'A4', 'A6', 'Q7']
}, {
    name: 'bmw',
    fields: ['3 Series', '318i', '320i', '5 Series', '7 Series', 'X1', 'X3', 'X5', 'X6']
}, {
    name: 'cadillac',
    fields: ['Cts', 'Escalade', 'Srx']
}, {
    name: 'chery',
    fields: ['Tiggo']
}, {
    name: 'chevrolet',
    fields: ['Alero', 'Aveo', 'Cobalt', 'Cruze', 'Epica', 'Malibu', 'Nubira', 'Tracker', 'TrailBlazer', 'Traverse', 'Uplander']
}, {
    name: 'chrysler',
    fields: ['200', '300', 'Pacifica', 'PT Cruiser', 'Sebring', 'Town', 'Town & Country']
}, {
    name: 'citroen',
    fields: ['C4']
}, {
    name: 'dodge',
    fields: ['Caravan', 'Charger', 'Durango', 'Journey', 'Ram']
}, {
    name: 'fiat',
    fields: ['Fullback']
}, {
    name: 'ford',
    fields: ['Econoline', 'Edge', 'Escape', 'Everest', 'Expedition', 'Explorer', 'F-150', 'Fiesta', 'Figo', 'Flex', 'Focus', 'Freestyle', 'Fusion', 'Galaxy', 'Mondeo', 'Mustang', 'Ranger', 'Taurus', 'Transit', 'Windstar']
}, {
    name: 'foton',
    fields: ['Aumark']
}, {
    name: 'gac',
    fields: ['Ga3-s', 'Gs5']
}, {
    name: 'gmc',
    fields: ['Acadia']
}, {
    name: 'honda',
    fields: ['Accord', 'Accord Crosstour', 'Civic', 'Cr-v', 'Element', 'Insight', 'Jazz', 'Odyssey', 'Passport', 'Pilot', 'Ridgeline']
}, {
    name: 'hummer',
    fields: ['H3']
}, {
    name: 'hyundai',
    fields: ['Accent', 'Azera', 'Creta', 'Elantra', 'Genesis', 'H1', 'I10', 'Ix35', 'Santa Fe', 'Sonata', 'Tucson', 'Veloster']
}, {
    name: 'infiniti',
    fields: ['Ex', 'Fx', 'G', 'I35', 'Q', 'Qx', 'Qx56']
}, {
    name: 'innoson',
    fields: ['Ivmg5']
}, {
    name: 'isuzu',
    fields: ['Axiom', 'Rodeo']
}, {
    name: 'jaguar',
    fields: ['S-Type']
}, {
    name: 'jeep',
    fields: ['Cherokee', 'Grand Cherokee', 'Liberty']
}, {
    name: 'kia',
    fields: ['Carens', 'Cerato', 'Joice', 'K3000', 'Mohave', 'Opirus', 'Optima', 'Rio', 'Sedona', 'Sorento', 'Soul', 'Spectra', 'Sportage']
}, {
    name: 'land rover',
    fields: ['Discovery', 'Freelander', 'Hse', 'Lr2', 'Lr3', 'Lr4', 'Range Rover', 'Range Rover Hse', 'Range Rover Sport', 'Range Rover Vogue']
}, {
    name: 'lexus',
    fields: ['Es', 'Es 300', 'Es 330', 'Es 350', 'Es300', 'Gs', 'Gs 300', 'Gs 330', 'Gs 350', 'Gx', 'Gx 470', 'Gx470', 'Is', 'Is 250', 'Ls', 'Lx', 'Rx', 'Rx 300', 'Rx 330', 'Rx 350']
}, {
    name: 'lincoln',
    fields: ['Continental', 'Mkz', 'Navigator']
}, {
    name: 'mazda',
    fields: ['3', '323', '5', '6', '626', 'Cx-7', 'Cx-9', 'Millenia', 'Mpv', 'Mx-5 Miata', 'Tribute']
}, {
    name: 'mercedes-benz',
    fields: ['A140', 'A160', 'B180', 'C 240', 'C180', 'C200', 'C230', 'C240',
        'C250', 'C280', 'C300', 'C320', 'C350', 'C63 Amg', 'Cl500', 'Clk200', 'Clk220',
        'Clk320', 'Clk500', 'CLS 350', 'CLS350', 'Cls500', 'Cls55 Amg', 'E200', 'E240',
        'E280', 'E320', 'E350', 'E500', 'E550', 'G500', 'GL 450', 'GL450', 'Gl550',
        'GLA250', 'GLK 350', 'Glk350', 'Ml320', 'Ml350', 'ML430', 'Ml500', 'Ml550', 'Ml63 Amg',
        'R350', 'S350', 'S500', 'S550', 'S600', 'Slk350', 'VBoot'
    ]
}, {
    name: 'mercury',
    fields: ['Villager']
}, {
    name: 'mg',
    fields: ['350s']
}, {
    name: 'mini',
    fields: ['Cooper']
}, {
    name: 'mitsubishi',
    fields: ['Attrage', 'Endeavor', 'L200', 'Lancer', 'Montero', 'Outlander', 'Pajero', 'Space Wagon', 'SpaceStar']
}, {
    name: 'nissan',
    fields: ['Almera', 'Altima', 'Armada', 'Frontier', 'Kicks', 'Maxima', 'Murano', 'Nv350', 'Pathfinder', 'Primera', 'Qashqai', 'Quest', 'Rogue', 'Sentra', 'Serena', 'Sunny', 'Teana', 'Tiida', 'Titan', 'Versa', 'X-Trail', 'Xterra']
}, {
    name: 'opel',
    fields: ['Omega', 'Zafira']
}, {
    name: 'peugeot',
    fields: ['206', '307', '308', '406', '407', '408', '508', '607', '807']
}, {
    name: 'pontiac',
    fields: ['Aztek', 'G6', 'Torent', 'Vibe']
}, {
    name: 'porsche',
    fields: ['Boxster', 'Cayenne']
}, {
    name: 'renault',
    fields: ['Duster', 'Espace', 'Kangoo', 'Laguna', 'Logan', 'Megane']
}, {
    name: 'saturn',
    fields: ['Vue']
}, {
    name: 'skoda',
    fields: ['Fabia', 'Octavia']
}, {
    name: 'ssangyong',
    fields: ['Rexton']
}, {
    name: 'subaru',
    fields: ['Legacy']
}, {
    name: 'suzuki',
    fields: ['Alto', 'Every Wagon', 'Forenza', 'Grand Vitara', 'Swift', 'Sx4', 'Vitara']
}, {
    name: 'tata',
    fields: ['Ace', 'Xeno']
}, {
    name: 'toyota',
    fields: ['4Runner', 'Avalon', 'Avanza', 'Avensis', 'Camry', 'Carina', 'Celica', 'Corolla', 'Corona', 'Fj Cruiser', 'Fortuner', 'HiAce', 'Highlander', 'Hilux', 'Land Cruiser', 'Land Cruiser Prado', 'Matrix', 'Picnic', 'Prius', 'Rav4', 'Sequoia', 'Sienna', 'Solara', 'Tacoma', 'Tundra', 'Venza', 'Vitz', 'Yaris']
}, {
    name: 'volkswagen',
    fields: ['Beatle', 'CC', 'Golf', 'Jetta', 'Passat', 'Sharan', 'Tiguan', 'Touareg']
}, {
    name: 'volvo',
    fields: ['S40', 'S60', 'S80', 'V40', 'Xc90']
}, ]

// function responsible for filtering the list based on selected manufacturer
function filterList(selectedValue) {
    clearModelSelect()
    let selected = selectedValue.value

    // used two seperate for loops instead of nested. Has lower time and space complexity
    for (let model of models) {
        if (selected === model.name) {
            modelFields = model.fields
        }
    }
    for (let field of modelFields) {
        modelSelect.insertAdjacentHTML('beforeend', `<option value="${field}">${capitalize(field)}</option>`)
    }
    modelFields = []
}

// function responsible for clearing the model select field
function clearModelSelect() {
    modelSelect.innerHTML = '<option value="">--Select an option--</option>'
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

clearModelSelect()