import React from 'react'

export const SidebarData= [
    {
        title: 'Home',
        path: '/',
        cName: 'nav-text',
        sub: []
    },

    {
        title: 'Selected Work',
        path: '/work',
        cName: 'nav-text',
        sub: [
            {
                title: 'nyc',
                path: '/work/nyc',
                cName: 'nav-subtext'
            },
            {
                title: 'portraits',
                path: '/work/portraits',
                cName: 'nav-subtext'
            },
            {
                title: 'streetmeat',
                path: '/work/streetmeat',
                cName: 'nav-subtext'
            }
        ]
    },

    {
        title: 'Resume',
        path: '/resume',
        cName: 'nav-text',
        sub: []
    },

    {
        title: 'Contact',
        path: '/contact',
        cName: 'nav-text',
        sub: []
    }
]