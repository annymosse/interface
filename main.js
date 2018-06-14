var chance = new Chance();
var home, sell, facture, storage, icons, settings, seller, patients, stagier, fournissure, analytics;

home = {
    path: '/home',
    component: {
        data() {
            return {
                msg: 'hi'
            }
        },
        template: "#home"
    }
};
sell = {
    path: '/sell',
    component: {
        data() {
            return {
                productSearch: {
                    search: '',
                    limit_row: [5],
                    start_search: false,
                    headers: [{
                            text: 'Product ',
                            align: 'left',
                            sortable: true,
                            value: 'nomCom'
                        },
                        // { text: 'Dose', value: 'dose' },
                        {
                            text: 'Form',
                            value: 'form'
                        },
                        // { text: 'Price', value: 'recover' }
                    ],
                    bodyList: medics
                },
                ordonnance: {
                    filter: '',
                    limit_row: [-1],
                    headers: [{
                            text: 'Product ',
                            align: 'left',
                            sortable: true,
                            value: 'product'
                        },
                        {
                            text: 'Dose',
                            value: 'dose'
                        },
                        {
                            text: 'Price',
                            value: 'price'
                        }
                    ],
                    bodyList: [{
                        product: chance.name(),
                        dose: chance.age(),
                        price: 0
                    }]
                }
            }
        },
        methods: {
            custumFilter(items, search, filter) {
                search = search.toString().toLowerCase()
                return items.filter(i => (
                    Object.keys(i).some(j => filter(i[j], search))
                ))
            }
        },
        template: "#sell"
    }
};
facture = {
    path: '/factures',
    component: {
        data() {
            return {
                msg: 'hi',
                max30chars: (v) => v.length <= 30 || 'Input too long!',
                productSearch: {
                    search: '',
                    limit_row: [5, 10, {
                        text: 'All',
                        value: -1
                    }],
                    start_search: false,
                    headers: [{
                            text: 'nomcom',
                            value: 'nomcom',
                            align: 'left',
                            sortable: false
                        },
                        {
                            text: 'num lot',
                            value: 'num_lot'
                        },
                        {
                            text: 'expiration',
                            value: 'expiration'
                        },
                        {
                            text: 'prix dachat',
                            value: 'prix_dachat'
                        },
                        {
                            text: 'ppa',
                            value: 'ppa'
                        },
                        {
                            text: 'shp',
                            value: 'shp'
                        },
                        {
                            text: 'ppu(vent)',
                            value: 'ppu'
                        },
                        {
                            text: 'qtt',
                            value: 'qtt'
                        },
                        {
                            text: 'ug ?',
                            value: 'ug'
                        },
                        {
                            text: 'rist (%) ?',
                            value: 'rist'
                        },
                        {
                            text: 'tva',
                            value: 'tva'
                        },
                        {
                            text: 'marge (%)',
                            value: 'marge'
                        },
                        {
                            text: 'status (confirm)',
                            value: 'status'
                        },
                        {
                            text: 'emplacment',
                            value: 'emplacment'
                        },
                        {
                            text: 'num factur',
                            value: 'num_factur'
                        },
                        {
                            text: 'fournis',
                            value: 'fournis'
                        },
                        {
                            text: 'date factur',
                            value: 'date_factur'
                        }
                    ],
                    bodyList: [{
                            nomcom: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            num_lot: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            expiration: chance.date({
                                string: true
                            }),
                            prix_dachat: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            ppa: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            shp: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            ppu: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            qtt: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            ug: '',
                            rist: '',
                            tva: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            marge: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            status: chance.bool(),
                            emplacment: '',
                            num_factur: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            fournis: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            date_factur: chance.date({
                                string: true
                            }),
                        },
                        {
                            nomcom: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            num_lot: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            expiration: chance.date({
                                string: true
                            }),
                            prix_dachat: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            ppa: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            shp: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            ppu: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            qtt: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            ug: '',
                            rist: '',
                            tva: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            marge: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            status: chance.bool(),
                            emplacment: '',
                            num_factur: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            fournis: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            date_factur: chance.date({
                                string: true
                            }),
                        },
                        {
                            nomcom: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            num_lot: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            expiration: chance.date({
                                string: true
                            }),
                            prix_dachat: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            ppa: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            shp: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            ppu: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            qtt: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            ug: '',
                            rist: '',
                            tva: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            marge: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            status: chance.bool(),
                            emplacment: '',
                            num_factur: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            fournis: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            date_factur: chance.date({
                                string: true
                            }),
                        },
                        {
                            nomcom: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            num_lot: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            expiration: chance.date({
                                string: true
                            }),
                            prix_dachat: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            ppa: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            shp: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            ppu: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            qtt: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            ug: '',
                            rist: '',
                            tva: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            marge: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            status: chance.bool(),
                            emplacment: '',
                            num_factur: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            fournis: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            date_factur: chance.date({
                                string: true
                            }),
                        },
                        {
                            nomcom: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            num_lot: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            expiration: chance.date({
                                string: true
                            }),
                            prix_dachat: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            ppa: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            shp: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            ppu: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            qtt: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            ug: '',
                            rist: '',
                            tva: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            marge: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            status: chance.bool(),
                            emplacment: '',
                            num_factur: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            fournis: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            date_factur: chance.date({
                                string: true
                            }),
                        },
                        {
                            nomcom: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            num_lot: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            expiration: chance.date({
                                string: true
                            }),
                            prix_dachat: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            ppa: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            shp: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            ppu: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            qtt: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            ug: '',
                            rist: '',
                            tva: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            marge: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            status: chance.bool(),
                            emplacment: '',
                            num_factur: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            fournis: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            date_factur: chance.date({
                                string: true
                            }),
                        },
                        {
                            nomcom: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            num_lot: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            expiration: chance.date({
                                string: true
                            }),
                            prix_dachat: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            ppa: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            shp: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            ppu: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            qtt: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            ug: '',
                            rist: '',
                            tva: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            marge: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            status: chance.bool(),
                            emplacment: '',
                            num_factur: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            fournis: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            date_factur: chance.date({
                                string: true
                            }),
                        },
                        {
                            nomcom: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            num_lot: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            expiration: chance.date({
                                string: true
                            }),
                            prix_dachat: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            ppa: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            shp: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            ppu: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            qtt: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            ug: '',
                            rist: '',
                            tva: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            marge: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            status: chance.bool(),
                            emplacment: '',
                            num_factur: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            fournis: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            date_factur: chance.date({
                                string: true
                            }),
                        },
                        {
                            nomcom: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            num_lot: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            expiration: chance.date({
                                string: true
                            }),
                            prix_dachat: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            ppa: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            shp: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            ppu: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            qtt: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            ug: '',
                            rist: '',
                            tva: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            marge: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            status: chance.bool(),
                            emplacment: '',
                            num_factur: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            fournis: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            date_factur: chance.date({
                                string: true
                            }),
                        }
                    ]
                },
            }
        },
        template: "#factures"
    }
};
storage = {
    path: '/storage',
    component: {
        data() {
            return {
                limit_row: [10, {
                    text: 'All',
                    value: -1
                }],
                search: '',
                storageHeader: [{
                        text: 'nomcom',
                        value: 'nomcom',
                        align: 'left',
                        sortable: false
                    },
                    {
                        text: 'num lot',
                        value: 'num_lot'
                    },
                    {
                        text: 'expiration',
                        value: 'expiration'
                    },
                    {
                        text: 'prix dachat',
                        value: 'prix_dachat'
                    },
                    {
                        text: 'ppa',
                        value: 'ppa'
                    },
                    {
                        text: 'shp',
                        value: 'shp'
                    },
                    {
                        text: 'ppu(vent)',
                        value: 'ppu'
                    },
                    {
                        text: 'qtt',
                        value: 'qtt'
                    },
                    {
                        text: 'ug ?',
                        value: 'ug'
                    },
                    {
                        text: 'rist (%) ?',
                        value: 'rist'
                    },
                    {
                        text: 'tva',
                        value: 'tva'
                    },
                    {
                        text: 'marge (%)',
                        value: 'marge'
                    },
                    {
                        text: 'status (confirm)',
                        value: 'status'
                    },
                    {
                        text: 'emplacment',
                        value: 'emplacment'
                    },
                    {
                        text: 'num factur',
                        value: 'num_factur'
                    },
                    {
                        text: 'fournis',
                        value: 'fournis'
                    },
                    {
                        text: 'date factur',
                        value: 'date_factur'
                    }
                ],
                storageBody: [{
                        nomcom: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        num_lot: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        expiration: chance.date({
                            string: true
                        }),
                        prix_dachat: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        ppa: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        shp: chance.floating({
                            fixed: 2,
                            min: 0,
                            max: 100
                        }),
                        ppu: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        qtt: chance.integer({
                            min: 1,
                            max: 500
                        }),
                        ug: '',
                        rist: '',
                        tva: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        marge: chance.floating({
                            fixed: 2,
                            min: 0,
                            max: 100
                        }),
                        status: chance.bool(),
                        emplacment: '',
                        num_factur: chance.integer({
                            min: 1,
                            max: 500
                        }),
                        fournis: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        date_factur: chance.date({
                            string: true
                        }),
                    },
                    {
                        nomcom: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        num_lot: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        expiration: chance.date({
                            string: true
                        }),
                        prix_dachat: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        ppa: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        shp: chance.floating({
                            fixed: 2,
                            min: 0,
                            max: 100
                        }),
                        ppu: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        qtt: chance.integer({
                            min: 1,
                            max: 500
                        }),
                        ug: '',
                        rist: '',
                        tva: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        marge: chance.floating({
                            fixed: 2,
                            min: 0,
                            max: 100
                        }),
                        status: chance.bool(),
                        emplacment: '',
                        num_factur: chance.integer({
                            min: 1,
                            max: 500
                        }),
                        fournis: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        date_factur: chance.date({
                            string: true
                        }),
                    },
                    {
                        nomcom: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        num_lot: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        expiration: chance.date({
                            string: true
                        }),
                        prix_dachat: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        ppa: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        shp: chance.floating({
                            fixed: 2,
                            min: 0,
                            max: 100
                        }),
                        ppu: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        qtt: chance.integer({
                            min: 1,
                            max: 500
                        }),
                        ug: '',
                        rist: '',
                        tva: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        marge: chance.floating({
                            fixed: 2,
                            min: 0,
                            max: 100
                        }),
                        status: chance.bool(),
                        emplacment: '',
                        num_factur: chance.integer({
                            min: 1,
                            max: 500
                        }),
                        fournis: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        date_factur: chance.date({
                            string: true
                        }),
                    },
                    {
                        nomcom: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        num_lot: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        expiration: chance.date({
                            string: true
                        }),
                        prix_dachat: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        ppa: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        shp: chance.floating({
                            fixed: 2,
                            min: 0,
                            max: 100
                        }),
                        ppu: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        qtt: chance.integer({
                            min: 1,
                            max: 500
                        }),
                        ug: '',
                        rist: '',
                        tva: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        marge: chance.floating({
                            fixed: 2,
                            min: 0,
                            max: 100
                        }),
                        status: chance.bool(),
                        emplacment: '',
                        num_factur: chance.integer({
                            min: 1,
                            max: 500
                        }),
                        fournis: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        date_factur: chance.date({
                            string: true
                        }),
                    },
                    {
                        nomcom: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        num_lot: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        expiration: chance.date({
                            string: true
                        }),
                        prix_dachat: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        ppa: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        shp: chance.floating({
                            fixed: 2,
                            min: 0,
                            max: 100
                        }),
                        ppu: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        qtt: chance.integer({
                            min: 1,
                            max: 500
                        }),
                        ug: '',
                        rist: '',
                        tva: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        marge: chance.floating({
                            fixed: 2,
                            min: 0,
                            max: 100
                        }),
                        status: chance.bool(),
                        emplacment: '',
                        num_factur: chance.integer({
                            min: 1,
                            max: 500
                        }),
                        fournis: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        date_factur: chance.date({
                            string: true
                        }),
                    },
                    {
                        nomcom: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        num_lot: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        expiration: chance.date({
                            string: true
                        }),
                        prix_dachat: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        ppa: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        shp: chance.floating({
                            fixed: 2,
                            min: 0,
                            max: 100
                        }),
                        ppu: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        qtt: chance.integer({
                            min: 1,
                            max: 500
                        }),
                        ug: '',
                        rist: '',
                        tva: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        marge: chance.floating({
                            fixed: 2,
                            min: 0,
                            max: 100
                        }),
                        status: chance.bool(),
                        emplacment: '',
                        num_factur: chance.integer({
                            min: 1,
                            max: 500
                        }),
                        fournis: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        date_factur: chance.date({
                            string: true
                        }),
                    },
                    {
                        nomcom: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        num_lot: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        expiration: chance.date({
                            string: true
                        }),
                        prix_dachat: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        ppa: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        shp: chance.floating({
                            fixed: 2,
                            min: 0,
                            max: 100
                        }),
                        ppu: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        qtt: chance.integer({
                            min: 1,
                            max: 500
                        }),
                        ug: '',
                        rist: '',
                        tva: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        marge: chance.floating({
                            fixed: 2,
                            min: 0,
                            max: 100
                        }),
                        status: chance.bool(),
                        emplacment: '',
                        num_factur: chance.integer({
                            min: 1,
                            max: 500
                        }),
                        fournis: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        date_factur: chance.date({
                            string: true
                        }),
                    },
                    {
                        nomcom: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        num_lot: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        expiration: chance.date({
                            string: true
                        }),
                        prix_dachat: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        ppa: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        shp: chance.floating({
                            fixed: 2,
                            min: 0,
                            max: 100
                        }),
                        ppu: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        qtt: chance.integer({
                            min: 1,
                            max: 500
                        }),
                        ug: '',
                        rist: '',
                        tva: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        marge: chance.floating({
                            fixed: 2,
                            min: 0,
                            max: 100
                        }),
                        status: chance.bool(),
                        emplacment: '',
                        num_factur: chance.integer({
                            min: 1,
                            max: 500
                        }),
                        fournis: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        date_factur: chance.date({
                            string: true
                        }),
                    },
                    {
                        nomcom: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        num_lot: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        expiration: chance.date({
                            string: true
                        }),
                        prix_dachat: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        ppa: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        shp: chance.floating({
                            fixed: 2,
                            min: 0,
                            max: 100
                        }),
                        ppu: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        qtt: chance.integer({
                            min: 1,
                            max: 500
                        }),
                        ug: '',
                        rist: '',
                        tva: chance.floating({
                            fixed: 2,
                            min: 10,
                            max: 1000
                        }),
                        marge: chance.floating({
                            fixed: 2,
                            min: 0,
                            max: 100
                        }),
                        status: chance.bool(),
                        emplacment: '',
                        num_factur: chance.integer({
                            min: 1,
                            max: 500
                        }),
                        fournis: chance.name({
                            middle: chance.bool(),
                            middle_initial: chance.bool(),
                            prefix: chance.bool(),
                            suffix: chance.bool()
                        }),
                        date_factur: chance.date({
                            string: true
                        }),
                    }
                ]
            }
        },
        template: "#storage"
    }
};
fournissure = {
    path: '/fournissure/:name?',
    component: {
        data() {
            return {
                msg: 'hi',
                show: false,
                WIDTH: 0,
                max30chars: (v) => v.toString().length <= 30 || 'Input too long!',
                fournissures: [{
                        full_name: chance.name(),
                        image: "https://randomuser.me/api/portraits/men/" + chance.integer({
                            min: 1,
                            max: 99
                        }) + ".jpg",
                        uid: chance.integer({
                            min: 0,
                            max: 10000
                        }).toString(),
                        phone: [],
                        fax: '',
                        address: '',
                        email: [],
                        factures: []
                    },
                    {
                        full_name: chance.name(),
                        image: "https://randomuser.me/api/portraits/men/" + chance.integer({
                            min: 1,
                            max: 99
                        }) + ".jpg",
                        uid: chance.integer({
                            min: 0,
                            max: 10000
                        }).toString(),
                        phone: [],
                        fax: '',
                        address: '',
                        email: [],
                        factures: []
                    },
                    {
                        full_name: chance.name(),
                        image: "https://randomuser.me/api/portraits/men/" + chance.integer({
                            min: 1,
                            max: 99
                        }) + ".jpg",
                        uid: chance.integer({
                            min: 0,
                            max: 10000
                        }).toString(),
                        phone: [],
                        fax: '',
                        address: '',
                        email: [],
                        factures: []
                    },
                    {
                        full_name: chance.name(),
                        image: "https://randomuser.me/api/portraits/men/" + chance.integer({
                            min: 1,
                            max: 99
                        }) + ".jpg",
                        uid: chance.integer({
                            min: 0,
                            max: 10000
                        }).toString(),
                        phone: [],
                        fax: '',
                        address: '',
                        email: [],
                        factures: []
                    },
                    {
                        full_name: chance.name(),
                        image: "https://randomuser.me/api/portraits/men/" + chance.integer({
                            min: 1,
                            max: 99
                        }) + ".jpg",
                        uid: chance.integer({
                            min: 0,
                            max: 10000
                        }).toString(),
                        phone: [],
                        fax: '',
                        address: '',
                        email: [],
                        factures: []
                    },

                    {
                        full_name: chance.name(),
                        image: "https://randomuser.me/api/portraits/men/" + chance.integer({
                            min: 1,
                            max: 99
                        }) + ".jpg",
                        uid: chance.integer({
                            min: 0,
                            max: 10000
                        }).toString(),
                        phone: [],
                        fax: '',
                        address: '',
                        email: [],
                        factures: []
                    },
                    {
                        full_name: chance.name(),
                        image: "https://randomuser.me/api/portraits/men/" + chance.integer({
                            min: 1,
                            max: 99
                        }) + ".jpg",
                        uid: chance.integer({
                            min: 0,
                            max: 10000
                        }).toString(),
                        phone: [],
                        fax: '',
                        address: '',
                        email: [],
                        factures: []
                    },
                    {
                        full_name: chance.name(),
                        image: "https://randomuser.me/api/portraits/men/" + chance.integer({
                            min: 1,
                            max: 99
                        }) + ".jpg",
                        uid: chance.integer({
                            min: 0,
                            max: 10000
                        }).toString(),
                        phone: [],
                        fax: '',
                        address: '',
                        email: [],
                        factures: []
                    },
                ],
                Four: {},
                books: [],
                supports: [],
                compares: [],
                compare_panel: false,
                productSearch: {
                    search: '',
                    limit_row: [5, 10, {
                        text: 'All',
                        value: -1
                    }],
                    start_search: false,
                    headers: [{
                            text: 'nomcom',
                            value: 'nomcom',
                            align: 'left',
                            sortable: false
                        },
                        {
                            text: 'num lot',
                            value: 'num_lot'
                        },
                        {
                            text: 'expiration',
                            value: 'expiration'
                        },
                        {
                            text: 'prix dachat',
                            value: 'prix_dachat'
                        },
                        {
                            text: 'ppa',
                            value: 'ppa'
                        },
                        {
                            text: 'shp',
                            value: 'shp'
                        },
                        {
                            text: 'ppu(vent)',
                            value: 'ppu'
                        },
                        {
                            text: 'qtt',
                            value: 'qtt'
                        },
                        {
                            text: 'ug ?',
                            value: 'ug'
                        },
                        {
                            text: 'rist (%) ?',
                            value: 'rist'
                        },
                        {
                            text: 'tva',
                            value: 'tva'
                        },
                        {
                            text: 'marge (%)',
                            value: 'marge'
                        },
                        {
                            text: 'status (confirm)',
                            value: 'status'
                        },
                        {
                            text: 'emplacment',
                            value: 'emplacment'
                        },
                        {
                            text: 'num factur',
                            value: 'num_factur'
                        },
                        {
                            text: 'fournis',
                            value: 'fournis'
                        },
                        {
                            text: 'date factur',
                            value: 'date_factur'
                        }
                    ],
                    bodyList: [{
                            nomcom: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            num_lot: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            expiration: chance.date({
                                string: true
                            }),
                            prix_dachat: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            ppa: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            shp: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            ppu: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            qtt: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            ug: '',
                            rist: '',
                            tva: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            marge: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            status: chance.bool(),
                            emplacment: '',
                            num_factur: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            fournis: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            date_factur: chance.date({
                                string: true
                            }),
                        },
                        {
                            nomcom: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            num_lot: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            expiration: chance.date({
                                string: true
                            }),
                            prix_dachat: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            ppa: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            shp: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            ppu: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            qtt: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            ug: '',
                            rist: '',
                            tva: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            marge: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            status: chance.bool(),
                            emplacment: '',
                            num_factur: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            fournis: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            date_factur: chance.date({
                                string: true
                            }),
                        },
                        {
                            nomcom: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            num_lot: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            expiration: chance.date({
                                string: true
                            }),
                            prix_dachat: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            ppa: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            shp: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            ppu: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            qtt: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            ug: '',
                            rist: '',
                            tva: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            marge: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            status: chance.bool(),
                            emplacment: '',
                            num_factur: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            fournis: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            date_factur: chance.date({
                                string: true
                            }),
                        },
                        {
                            nomcom: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            num_lot: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            expiration: chance.date({
                                string: true
                            }),
                            prix_dachat: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            ppa: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            shp: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            ppu: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            qtt: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            ug: '',
                            rist: '',
                            tva: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            marge: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            status: chance.bool(),
                            emplacment: '',
                            num_factur: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            fournis: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            date_factur: chance.date({
                                string: true
                            }),
                        },
                        {
                            nomcom: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            num_lot: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            expiration: chance.date({
                                string: true
                            }),
                            prix_dachat: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            ppa: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            shp: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            ppu: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            qtt: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            ug: '',
                            rist: '',
                            tva: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            marge: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            status: chance.bool(),
                            emplacment: '',
                            num_factur: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            fournis: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            date_factur: chance.date({
                                string: true
                            }),
                        },
                        {
                            nomcom: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            num_lot: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            expiration: chance.date({
                                string: true
                            }),
                            prix_dachat: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            ppa: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            shp: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            ppu: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            qtt: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            ug: '',
                            rist: '',
                            tva: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            marge: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            status: chance.bool(),
                            emplacment: '',
                            num_factur: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            fournis: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            date_factur: chance.date({
                                string: true
                            }),
                        },
                        {
                            nomcom: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            num_lot: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            expiration: chance.date({
                                string: true
                            }),
                            prix_dachat: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            ppa: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            shp: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            ppu: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            qtt: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            ug: '',
                            rist: '',
                            tva: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            marge: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            status: chance.bool(),
                            emplacment: '',
                            num_factur: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            fournis: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            date_factur: chance.date({
                                string: true
                            }),
                        },
                        {
                            nomcom: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            num_lot: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            expiration: chance.date({
                                string: true
                            }),
                            prix_dachat: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            ppa: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            shp: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            ppu: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            qtt: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            ug: '',
                            rist: '',
                            tva: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            marge: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            status: chance.bool(),
                            emplacment: '',
                            num_factur: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            fournis: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            date_factur: chance.date({
                                string: true
                            }),
                        },
                        {
                            nomcom: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            num_lot: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            expiration: chance.date({
                                string: true
                            }),
                            prix_dachat: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            ppa: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            shp: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            ppu: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            qtt: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            ug: '',
                            rist: '',
                            tva: chance.floating({
                                fixed: 2,
                                min: 10,
                                max: 1000
                            }),
                            marge: chance.floating({
                                fixed: 2,
                                min: 0,
                                max: 100
                            }),
                            status: chance.bool(),
                            emplacment: '',
                            num_factur: chance.integer({
                                min: 1,
                                max: 500
                            }),
                            fournis: chance.name({
                                middle: chance.bool(),
                                middle_initial: chance.bool(),
                                prefix: chance.bool(),
                                suffix: chance.bool()
                            }),
                            date_factur: chance.date({
                                string: true
                            }),
                        }
                    ]
                },
            }
        },
        methods: {
            auth(url) {
                return this.fournissures.map(e => {
                    return e.uid
                }).indexOf(url) == -1
            },
            add2book(uid) {
                this.books.indexOf(uid) > -1 ? this.books.splice(this.books.indexOf(uid), 1) : this.books.push(uid)
            },
            compare(uid) {
                if (this.compares.indexOf(this.fournissures[uid]) > -1) {
                    this.compares.splice(this.compares.indexOf(this.fournissures[uid]), 1);
                    this.compares.length < 1 ? this.compare_panel = false : null;
                    return
                }
                this.compares.push(this.fournissures[uid]);
                this.compare_panel = true;
            }
        },
        mounted() {
            var that = this;
            this.WIDTH = $(window).width();
            $(window).on('resize', function() {
                that.WIDTH = $(this).width()
            })
        },
        template: "#fournissure"
    }
};
stagier = {
    path: '/stagier',
    component: {
        data() {
            return {
                msg: 'hi'
            }
        },
        template: "#stagier"
    }
};
patients = {
    path: '/patients',
    component: {
        data() {
            return {
                msg: 'hi'
            }
        },
        template: "#patients"
    }
};
seller = {
    path: '/seller',
    component: {
        data() {
            return {
                msg: 'hi'
            }
        },
        template: "#seller"
    }
};
settings = {
    path: '/settings',
    component: {
        data() {
            return {
                msg: 'hi'
            }
        },
        template: "#settings"
    }
};
icons = {
    path: '/icons',
    component: {
        data() {
            return {
                msg: 'hi',
                icons: [{
                        title: 'Analytics',
                        icon: 'fas fa-chart-pie'
                    },
                    {
                        title: 'Stock',
                        icon: 'fas fa-search'
                    },
                    {
                        title: 'Stock',
                        icon: 'fas fa-shopping-bag'
                    },
                    {
                        title: 'Stock',
                        icon: 'far fa-address-book'
                    },
                    {
                        title: 'Stock',
                        icon: 'far fa-copy'
                    },
                    {
                        title: 'Stock',
                        icon: 'far fa-clipboard'
                    },
                    {
                        title: 'Stock',
                        icon: 'far fa-address-card'
                    },
                    {
                        title: 'Stock',
                        icon: 'far fa-bell'
                    },
                    {
                        title: 'Stock',
                        icon: 'far fa-chart-bar'
                    },
                    {
                        title: 'Stock',
                        icon: 'fas fa-ambulance'
                    },
                    {
                        title: 'QR',
                        icon: 'fas fa-qrcode'
                    },
                    {
                        title: 'Barcode',
                        icon: 'fas fa-barcode'
                    },
                    {
                        title: 'Archive',
                        icon: 'fas fa-archive'
                    },
                    {
                        title: 'Box open',
                        icon: 'fas fa-box-open'
                    },
                    {
                        title: 'Dolly',
                        icon: 'fas fa-dolly-flatbed'
                    },
                    {
                        title: 'Stock',
                        icon: 'fas fa-briefcase'
                    },
                    {
                        title: 'Stock',
                        icon: 'fas fa-dolly'
                    },
                    {
                        title: 'Stock',
                        icon: 'fas fa-bullhorn'
                    },
                    {
                        title: 'Medicals',
                        icon: 'fas fa-capsules'
                    },
                    {
                        title: 'Stock',
                        icon: 'fas fa-cart-plus'
                    },
                    {
                        title: 'Stock',
                        icon: 'fas fa-cart-arrow-down'
                    },
                    {
                        title: 'Upload data',
                        icon: 'fas fa-cloud-upload-alt'
                    },
                    {
                        title: 'Download data',
                        icon: 'fas fa-cloud-download-alt'
                    },
                    {
                        title: 'Coins',
                        icon: 'fas fa-coins'
                    },
                    {
                        title: 'DB',
                        icon: 'fas fa-database'
                    },
                    {
                        title: 'Desktop',
                        icon: 'fas fa-desktop'
                    },
                    {
                        title: 'Stock',
                        icon: 'fas fa-file-medical-alt'
                    },
                    {
                        title: 'Gem',
                        icon: 'fas fa-gem'
                    },
                    {
                        title: 'Gifts',
                        icon: 'fas fa-gift'
                    },
                    {
                        title: 'Stagier',
                        icon: 'fas fa-graduation-cap'
                    },
                    {
                        title: 'Home',
                        icon: 'fas fa-home'
                    },
                    {
                        title: 'card',
                        icon: 'fas fa-id-card'
                    },
                    {
                        title: 'Key',
                        icon: 'fas fa-key'
                    },
                    {
                        title: 'Map',
                        icon: 'fas fa-map'
                    },
                    {
                        title: 'Phone',
                        icon: 'fas fa-phone'
                    },
                    {
                        title: 'fax',
                        icon: 'fas fa-fax'
                    },
                    {
                        title: 'Print',
                        icon: 'fas fa-print'
                    },
                    {
                        title: 'Save',
                        icon: 'fas fa-save'
                    },
                    {
                        title: 'Share',
                        icon: 'fas fa-share-alt'
                    },
                    {
                        title: 'Stock',
                        icon: 'fas fa-shipping-fast'
                    },
                    {
                        title: 'Terms',
                        icon: 'fas fa-university'
                    },
                    {
                        title: 'User setting',
                        icon: 'fas fa-user-cog'
                    },
                    {
                        title: 'Groups',
                        icon: 'fas fa-users'
                    },
                    {
                        title: 'Peyment',
                        icon: 'fas fa-hand-holding-usd'
                    },
                    {
                        title: 'Stock',
                        icon: 'far fa-credit-card'
                    },
                    {
                        title: 'Euro',
                        icon: 'fas fa-euro-sign'
                    },
                    {
                        title: 'Wallet',
                        icon: 'fas fa-wallet'
                    },
                    {
                        title: 'Stock',
                        icon: 'fas fa-wrench'
                    },
                    {
                        title: 'Stock',
                        icon: 'fab fa-whmcs'
                    },
                ]
            }
        },
        template: "#icons"
    }
};
analytics = {
    path: '/analytics',
    component: {
        data() {
            return {
                msg: 'hi'
            }
        },
        template: "#analytics"
    }
};

var routes = [
    home, sell, facture, storage, fournissure, stagier, patients, seller, settings, icons, analytics,
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '*',
        component: {
            template: '#bad'
        }
    }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});
new Vue({
    el: "#app",
    router,
    data() {
        return {
            drawer: null,
            items: [{
                    title: 'Home',
                    icon: 'dashboard'
                },
                {
                    title: 'Sell',
                    icon: 'fas fa-shopping-cart'
                },
                {
                    title: 'Factures',
                    icon: 'fas fa-paste'
                },
                {
                    title: 'Storage',
                    icon: 'fas fa-box'
                },
                {
                    title: 'Fournissure',
                    icon: 'fas fa-truck'
                },
                {
                    title: 'Stagier',
                    icon: 'fas fa-user-graduate'
                },
                {
                    title: 'Patients',
                    icon: 'fas fa-heartbeat'
                },
                {
                    title: 'Seller',
                    icon: 'fas fa-id-card-alt'
                },
                {
                    title: 'Analytics',
                    icon: 'fas fa-chart-line'
                },
                {
                    title: 'Settings',
                    icon: 'fas fa-cogs'
                },
                {
                    title: 'Icons',
                    icon: 'fab fa-accessible-icon'
                },
            ],
            mini: false,
            right: null
        }
    },
    mounted() {
        this.$vuetify.theme.primary = '#4caf50'
    }
})
