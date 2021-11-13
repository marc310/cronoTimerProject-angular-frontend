import {
    trigger,
    transition,
    stagger,
    sequence,
    style,
    query,
    group,
    animateChild,
    animate,
    state,
    keyframes
} from '@angular/animations';

// basic animations
export const scaledIn = trigger( 'scaledIn', [
    transition('void => *', [
            style({
                opacity: 0,
                transform: 'scale(0) translateY(100%)',
            }), 
            animate('600ms ease-in',
                style({ opacity: 1, transform: 'scale(1) translateY(0)' })
            ),
    ]), // end transition
]);

// fade
export const fadeIn = trigger( 'fadeIn', [
    transition( 'void => *', [
        style( { opacity: 0 }), animate('250ms ease-in', style( { opacity: 1 } ) )
    ] ), // end transition
    transition( '* => void', [
        style( { opacity: 1, transform: 'scale(1)' }), animate('150ms ease-in', style( { opacity: 0, transform: 'scale(0)' } ) )
    ] ) // end transition
] )

// transform Y
export const transformY = trigger( 'transformY', [
    transition( 'void => *', [
        style({ opacity: 0, transform: 'translateY(100vh)' }),
        animate( '350ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }) ),
    ]),
    transition( '* => void', [
        style({ transform: 'translateY(0)' }),
        animate( '350ms ease-out', style({ transform: 'translateY(100vh)' }) ),
    ]),
])// end trigger

// transform Y
export const transformY100 = trigger( 'transformY100', [
    transition( 'void => *', [
        style({ opacity: 0, transform: 'translateY(100px)' }),
        animate( '350ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }) ),
    ]),
    transition( '* => void', [
        style({ transform: 'translateY(0)' }),
        animate( '350ms ease-out', style({ transform: 'translateY(100px)' }) ),
    ]),
])// end trigger


// come from top
export const fromTop = trigger( 'fromTop', [
    transition( 'void => *', [
        style({ transform: 'translateY(-100vh)' }),
        animate( '500ms ease-in', style({ transform: 'translateY(0)' }) ),
    ]),
    transition( '* => void', [
        style({ transform: 'translateY(0)' }),
        animate( '350ms ease-out', style({ transform: 'translateY(-100vh)' }) ),
    ]),
])// end trigger

// pop scale
export const popScale = trigger( 'popScale', [
    transition('void => *', [
        style({ transform: 'scale(0)' }),
        animate( '150ms ease-in', 
          keyframes([
            style({ transform: 'scale(1)', offset: 0 }),
            style({ transform: 'scale(1.3)', offset: 0.66 }),
            style({ transform: 'scale(0)', offset: 1 }),
          ]), //keyframes end here   
        ),
    ]), //transition

    transition('* => void', [
        style({ transform: 'scale(1)' }),
        animate( '250ms ease-out', 
          keyframes([
            style({ transform: 'scale(1)', offset: 0 }),
            style({ transform: 'scale(1.3)', offset: 0.66 }),
            style({ transform: 'scale(0)', offset: 1 }),
          ]), //keyframes end here   
        ),
    ]) //transition
] ) // popScale end here

//
export const footerBtnKeyboardMove = trigger( 'footerBtnKeyboardMove', [
    transition('void => *', [
        query('#footerButtons', 
            style({ bottom: 0 }),
            { optional: true }
        ), // query
        query('#footerButtons',
            animate('350ms 0.4s ease-in',
                style({ bottom: '280px' })
            )
        ),
    ]) // transition
] )
//
//
export const bagButton = trigger( 'bagButton', [
      transition('void => *', [
        // style({ transform: 'scale(0)' }),

        query('.bag_button, .cart_quantity_badge', style({
          opacity: 0,
          transform: 'scale(0)',
          'max-width': 'none'
        }), 
          {optional: true}
        ), //default query styles

        query('.bag_content', style({ 
          opacity: 1,
          display: 'inline-flex'
        }), 
          {optional: true}
        ), //default query styles

        group([
          query('.bag_button',
            animate('550ms 0.4s ease-in', 
              keyframes([
                style({ opacity: 0, transform: 'scale(0)', offset: 0 }),
                style({ opacity: 0.33, transform: 'scale(1.33)', offset: 0.33 }),
                style({ opacity: 0.66, transform: 'scale(0.8)', offset: 0.66 }),
                style({ opacity: 1, transform: 'scale(1)', offset: 1 }),
              ])
            ),
          {optional: true}
          ), // query end here

          query('.bag_content',
              animate('250ms 3s ease-out', 
                keyframes([
                  style({ transform: 'translateX(0) scale(1)', display: 'inline-flex', opacity: 1, offset: 0 }),
                  style({ transform: 'translateX(25px) scale(0.8)', display: 'inline-flex', opacity: 0.66, offset: 0.66 }),
                  style({ transform: 'translateX(125px) scale(0)', display: 'none', opacity: 0, offset: 1 }),
                ])
              ),
              {optional: true}
          ), //query bag_content

          query('.cart_quantity_badge', 
            animate('450ms 3s ease-in',
                keyframes([
                    style({ opacity: 0, transform: 'scale(0)', offset: 0 }),
                    style({ opacity: 1, transform: 'scale(1.3)', offset: 0.66 }),
                    style({ opacity: 1, transform: 'scale(1)', offset: 1 }),
                ]), //keyframes end here  
            ),
            {optional: true}
           )
        ])
      ]), //transition
    ]) // trigger end


// stagger pop
export const staggedPopScale = trigger('staggedPopScale', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('50ms', [
          animate('250ms ease-in', keyframes([
            style({ opacity:0, transform: 'scale(0)', offset: 0 }),
            style({ opacity:0.4, transform: 'scale(1.3)', offset: 0.4 }),
            style({ opacity:1, transform: 'scale(1)', offset: 1 }),
          ])// keyframes end here
          )// animate
        ]), {optional: true}), // query end here


      ]), // transit
    ])// trigger card end here


// 
export const fader = trigger( 'routeAnimations', [
    transition('* <=> *', [
        query( ':enter, :leave', [
            style({
                position: 'absolute',
                top: '-100vh',
                left: 0,
                width: '100%' ,
                opacity: 0,
                transform: 'scale(0) translateY(100%)',
            }),
        ]),
        query(':enter', [
            animate('600ms ease-in',
                style({ opacity: 1,top: 0, transform: 'scale(1) translateY(0)' })
            ),
        ]),
    ]),
]);

//
//
// routers animations
export const slider = trigger( 'routeAnimations', [
    transition('isLeft => isRight', slideTo('right') ), 
    transition('isLeft => isLeft', slideTo('right') ), 
    transition('isRight => isLeft', slideTo('left') ),
    transition('* => isTop', slideTop('top') ),
    transition('isTop => isLeft', faderFunc(), ),
    transition('* => isLeft', faderFunc(), ),
]);



function faderFunc() {
    return [
        query( ':enter, :leave', [
            style({
                position: 'absolute',
                top: '-100vh',
                left: 0,
                width: '100%' ,
                opacity: 0,
                transform: 'scale(0) translateY(100%)',
            }),
        ]),
        query(':enter', [
            animate('600ms ease-in',
                style({ opacity: 1,top: 0, transform: 'scale(1) translateY(0)' })
            ),
        ]),
    ];
}

function slideTop(direction) {
    const optional = { optional: true };
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                [direction]: 0,
                left: 0,
                width: '100%'
            })
        ], optional),
        query(':enter', [
            style({ [direction]: '-100vh' })
        ]),
        group([
            query(':leave', [
                animate('350ms ease', style({ [direction]: '100vh' }) )
            ], optional ),
            query(':enter', [
                animate('500ms ease', style({ [direction]: '0' }))
            ],)
        ])
    ];
}


function slideTo(direction) {
    const optional = { optional: true };
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%'
            })
        ], optional),
        query(':enter', [
            style({ [direction]: '-100%' })
        ]),
        group([
            query(':leave', [
                animate('600ms ease', style({ [direction]: '100%' }) )
            ], optional ),
            query(':enter', [
                animate('600ms ease', style({ [direction]: '0%' }))
            ])
        ])
    ];
}


// function popScaleKf() {
//     return [
//         keyframes([
//             style({ transform: 'scale(1)', offset: 0 }),
//             style({ transform: 'scale(1.3)', offset: 0.66 }),
//             style({ transform: 'scale(0)', offset: 1 }),
//           ]), //keyframes end here  
//     ];
// }