import {Team} from "./team.interface";
import {Match} from "./match.interface";

export interface Round {
    type: string,
    matches: Array<Match>
}