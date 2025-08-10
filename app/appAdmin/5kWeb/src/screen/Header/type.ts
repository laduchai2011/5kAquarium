export const select_options = {
    HOME: 'HOME',
    ORDER: 'ORDER',
} as const;
// export type select_options = (typeof select_consts)[keyof typeof select_consts];

export type select_type = typeof select_options.HOME | typeof select_options.ORDER;

export interface global_state {
    selected: select_type;
}
