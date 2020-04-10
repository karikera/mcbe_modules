
export const EMPTY_ARRAY = [];

export const OBJECTIVE_MAX_LENGTH = 16;
export const SCOREBOARD_UNUSABLE_CHARACTER = ',:()\r\n"%\0';
export const SCOREBOARD_UNUSABLE_REGEXP = new RegExp(`[${SCOREBOARD_UNUSABLE_CHARACTER}]`);

/**
 * Methods for the use event
 * These methods are just what I found, not all
 */
export enum UseMethod
{
    Throw='throw',
    Place='place',
    BlockPlace='ruakr:place',
    Consume='consume',
    FillBottle='fill_bottle',
    Intract='interact',
    Eat='eat',
    UseTool='use_tool',
    Dummy='',
}

/**
 * Methods for the acquire event
 * These methods are just what I found, not all
 */
export enum AcquationMethod
{
    PickedUp='picked_up',
    Filled='filled',
    Fishing='fishing',
}

/** @deprecated It renamed to OBJECTIVE_MAX_LENGTH */
export const SCORE_LIMIT = OBJECTIVE_MAX_LENGTH;
/** @deprecated It renamed to SCOREBOARD_UNUSABLE_CHARACTER */
export const SCORE_UNUSABLE = SCOREBOARD_UNUSABLE_CHARACTER;
/** @deprecated It renamed to SCOREBOARD_UNUSABLE_REGEXP */
export const SCORE_UNUSABLE_FILTER = SCOREBOARD_UNUSABLE_REGEXP;
