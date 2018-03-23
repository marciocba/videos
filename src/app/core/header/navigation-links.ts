export const navigationLinks = [
    {
        name: 'home',
        routerLink: '/home',
        roles: ['Admin', 'RegUser'],
        order: 1,
        overrideFunction: function() { console.log("override function clicked"); }
    },

    {
        name: 'videos',
        routerLink: '/videos',
        roles: ['Admin', 'RegUser'],
        order: 0,
        overrideFunction: function() { console.log("override function clicked"); }
    },
    {
        name: 'Usuarios',
        routerLink: '/user',
        roles: ['Admin', 'RegUser'],
        order: 0,
        overrideFunction: function() { console.log("override function clicked"); }
    },
]