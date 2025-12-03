export const TIME_CONTROLS = [
    { minutes: 1, increment: 0 },
    { minutes: 3, increment: 0 },
    { minutes: 5, increment: 0 },
    { minutes: 10, increment: 0 },
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
    CONNECTION_SUCCESS: 'connection_success',
    ERROR: 'error'
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
    MISSING_INVITE_CODE: "Invite code property is missing",
    REMOVING_EXISTING_CONNECTION: "removing_existing_connection"
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