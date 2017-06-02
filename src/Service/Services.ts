import {IAnimationOperations} from "./AnimationOperations/Interface/IAnimationOperations";
import {AnimationOperations} from "./AnimationOperations/AnimationOperations";
import {IEventUtil, EventUtil} from "@wessberg/eventutil";
import {IWaitOperations} from "./WaitOperations/Interface/IWaitOperations";
import {WaitOperations} from "./WaitOperations/WaitOperations";
import {ISvgIconUtil} from "./SvgIconUtil/Interface/ISvgIconUtil";
import {SvgIconUtil} from "./SvgIconUtil/SvgIconUtil";
import {IAgentDetector} from "./AgentDetector/Interface/IAgentDetector";
import {AgentDetector} from "./AgentDetector/AgentDetector";
import {IGlobalEventBlocker} from "../EventHandler/GlobalEventBlocker/Interface/IGlobalEventBlocker";
import {GlobalEventBlocker} from "../EventHandler/GlobalEventBlocker";

export const globalEventBlocker: IGlobalEventBlocker = new GlobalEventBlocker();
export const agentDetector: IAgentDetector = new AgentDetector();
export const eventUtil: IEventUtil = new EventUtil();
export const svgIconUtil: ISvgIconUtil = new SvgIconUtil();
export const waitOperations: IWaitOperations = new WaitOperations();
export const animationOperations: IAnimationOperations = new AnimationOperations();