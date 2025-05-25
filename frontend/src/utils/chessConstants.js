export const TIME_CONTROLS = [
    { minutes: 1, increment: 0 },
    { minutes: 1, increment: 1 },
    { minutes: 2, increment: 1 },
    { minutes: 3, increment: 0 },
    { minutes: 3, increment: 2 },
    { minutes: 5, increment: 0 },
    { minutes: 10, increment: 0 },
    { minutes: 15, increment: 10 },
    { minutes: 30, increment: 0 },
];

export const COLORS = {
    WHITE: 'w',
    BLACK: 'b'
};

export const CONNECTION_STATUS = {
    CONNECTED: 'connected',
    DISCONNECTED: 'disconnected'
};

export const MESSAGE_TYPES = {
    GAME_BEGIN: 'Game begin',
    GAME_OVER: 'Game over',
    WAIT: 'Wait',
    INVITE_CODE: 'Invite code',
    MOVE: 'Move',
    ERROR: 'Error',
    CHAT_MESSAGE: 'Chat message',
    RESIGN: 'Resignation',
    DRAW_OFFER: 'Draw offer',
    DRAW_ACCEPT: 'Draw accept',
    DRAW_REJECT: 'Draw reject',
    DRAW_ACCEPTED: 'Draw accepted',
    DRAW_REJECTED: 'Draw rejected',
    OPPONENT_DISCONNECT: 'Opponent disconnected'
};

export const GAME_END_REASONS = {
    CHECKMATE: 'Checkmate',
    DRAW: 'Draw',
    DRAW_BY_AGREEMENT: 'Draw by agreement',
    RESIGN: 'Resignation',
    TIMEOUT: 'Timeout',
    ABORT: 'Abortion'
};

export const WEBSOCKET_MESSAGE_TYPES = {
    JOIN_GAME_VIA_QUEUE: 'join_game_via_queue',
    JOIN_GAME_VIA_INVITE: 'join_game_via_invite',
    CREATE_INVITE_CODE: 'create_invite_code',
    CONNECTION_SUCCESS: 'connection_success'
};

export const INVITE = {
    CODE_LENGTH: 12,
    EXPIRY_TIME: 15 * 60 * 1000, // 15 minutes in milliseconds
};

export const WEBSOCKET_ERROR_MESSAGES = {
    INVALID_TOKEN: "Token is not valid",
    USER_NOT_FOUND: "User not found",
    ALREADY_CONNECTED: "User is already connected",
    MISSING_TIMECONFIG: "Time config property is missing",
    MISSING_INVITE_CODE: "Invite code property is missing"
};

export const GAME_SETTINGS = {
    INTERVAL: 100,
    MAX_DRAW_OFFERS: 3,
    MAX_MESSAGE_LENGTH: 200,
};

export const MESSAGE_VALIDATION = {
    INVALID_INVITE_CODE: "Invalid invite code",
    INVALID_TIME_CONTROL: "Invalid time control",
    INVALID_MESSAGE_FORMAT: "Invalid message format"
};

export const INITIAL_PGN =
`[Event "It (cat.17)"]
[Site "Wijk aan Zee (Netherlands)"]
[Date "1999.??.??"]
[Round "?"]
[White "Garry Kasparov"]
[Black "Veselin Topalov"]
[Result "1-0"]
[TimeControl ""]
[Link "https://www.chess.com/games/view/969971"]
 
1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 Bg7 5. Qd2 c6 6. f3 b5 7. Nge2 Nbd7 8. Bh6
Bxh6 9. Qxh6 Bb7 10. a3 e5 11. O-O-O Qe7 12. Kb1 a6 13. Nc1 O-O-O 14. Nb3 exd4
15. Rxd4 c5`;