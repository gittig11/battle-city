import { Map, Set } from 'immutable'
import { BulletRecord, TankRecord, PlayerRecord, PowerUpRecord, MapRecord, ScoreRecord } from 'types'

declare global {
  type Action = Action.Action
  type ActionType = Action.ActionType

  namespace Action {
    export type Action =
      MoveAction
      | StartMoveAction
      | TickAction
      | AfterTickAction
      | AddBulletAction
      | SetCooldownAction
      | SetHelmetDurationAction
      | SetFrozenTimeoutAction
      | SetAIFrozenTimeoutAction
      | DestroyBulletsAction
      | RemoveSteelsAction
      | RemoveBricksAction
      | UpdateMapAction
      | UpdaetBulletsAction
      | LoadStageAction
      | Simple<'GAMEOVER'>
      | Simple<'GAMESTART'>
      | Simple<'GAMEPAUSE'>
      | Simple<'GAMERESUME'>
      | LoadSceneAction
      | Simple<'REMOVE_FIRST_REMAINING_ENEMY'>
      | IncrementPlayerLifeAction
      | DecrementPlayerLifeAction
      | ActivatePlayerAction
      | CreatePlayerAction
      | RemovePlayerAction
      | Simple<'DEACTIVATE_ALL_PLAYERS'>
      | SpawnExplosionAction
      | RemoveExplosionAction
      | SetTextAction
      | UpdateTextPositionAction
      | Simple<'DESTROY_EAGLE'>
      | SpawnTankAction
      | StartMoveAction
      | RemoveTankAction
      | StopMoveAction
      | RemoveTextAction
      | RemoveFlickerAction
      | SpawnFlickerAction
      | HurtAction
      | KillAction
      | IncKillCount
      | UpdateTransientKillInfo
      | Simple<'SHOW_TOTAL_KILL_COUNT'>
      | AddPowerUpAction
      | RemovePowerUpAction
      | UpdatePowerUpAction
      | PickPowerUpAction
      | AddScoreAction
      | RemoveScoreAction
      | UpgardeTankAction

    export type ActionType = Action['type']

    export type MoveAction = {
      type: 'MOVE',
      tankId: TankId,
      tank: TankRecord,
    }

    export type HurtAction = {
      type: 'HURT'
      targetTank: TankRecord
      hurt: number
    }

    export type KillAction = {
      type: 'KILL'
      targetTank: TankRecord
      sourceTank: TankRecord
      targetPlayer: PlayerRecord
      sourcePlayer: PlayerRecord
    }

    export type UpdateTransientKillInfo = {
      type: 'UPDATE_TRANSIENT_KILL_INFO'
      info: Map<PlayerName, Map<TankLevel, KillCount>>
    }

    export type IncKillCount = {
      type: 'INC_KILL_COUNT'
      playerName: PlayerName
      level: TankLevel
    }

    export type StartMoveAction = {
      type: 'START_MOVE',
      tankId: TankId,
    }

    export type StopMoveAction = {
      type: 'STOP_MOVE',
      tankId: TankId,
    }

    export type TickAction = {
      type: 'TICK',
      delta: number,
    }

    export type AfterTickAction = {
      type: 'AFTER_TICK',
      delta: number,
    }

    export interface AddBulletAction {
      type: 'ADD_BULLET'
      bullet: BulletRecord
    }

    export interface SetHelmetDurationAction {
      type: 'SET_HELMET_DURATION'
      tankId: TankId
      duration: number
    }

    export interface SetCooldownAction {
      type: 'SET_COOLDOWN'
      tankId: TankId
      cooldown: number
    }

    export interface SetFrozenTimeoutAction {
      type: 'SET_FROZEN_TIMEOUT'
      tankId: TankId
      frozenTimeout: number
    }

    export interface SetAIFrozenTimeoutAction {
      type: 'SET_AI_FROZEN_TIMEOUT'
      AIFrozenTimeout: number
    }

    export type DestroyBulletsAction = {
      type: 'DESTROY_BULLETS',
      bullets: Map<BulletId, BulletRecord>,
      spawnExplosion: boolean,
    }

    export interface RemoveSteelsAction {
      type: 'REMOVE_STEELS'
      ts: Set<SteelIndex>
    }

    export interface RemoveBricksAction {
      type: 'REMOVE_BRICKS'
      ts: Set<BrickIndex>
    }

    export type UpdateMapAction = {
      type: 'UPDATE_MAP',
      map: MapRecord,
    }

    export type UpdaetBulletsAction = {
      type: 'UPDATE_BULLETS',
      updatedBullets: Map<BulletId, BulletRecord>,
    }

    export type LoadStageAction = {
      type: 'LOAD_STAGE',
      name: string,
    }

    export type SpawnExplosionAction = {
      type: 'SPAWN_EXPLOSION',
      x: number,
      y: number,
      explosionId: ExplosionId,
      explosionType: ExplosionType,
    }

    export type RemoveExplosionAction = {
      type: 'REMOVE_EXPLOSION',
      explosionId: ExplosionId,
    }

    export type SpawnFlickerAction = {
      type: 'SPAWN_FLICKER',
      flickerId: FlickerId,
      x: number,
      y: number,
    }

    export type RemoveFlickerAction = {
      type: 'REMOVE_FLICKER',
      flickerId: FlickerId,
    }

    export type SpawnTankAction = {
      type: 'SPAWN_TANK',
      tank: TankRecord
    }

    export type RemoveTankAction = {
      type: 'REMOVE_TANK',
      tankId: TankId,
    }

    export type ActivatePlayerAction = {
      type: 'ACTIVATE_PLAYER',
      playerName: PlayerName,
      tankId: TankId,
    }

    export type CreatePlayerAction = {
      type: 'CREATE_PLAYER',
      player: PlayerRecord,
    }

    export type RemovePlayerAction = {
      type: 'REMOVE_PLAYER',
      playerName: PlayerName,
    }

    export type SetTextAction = {
      type: 'SET_TEXT',
      textId: TextId,
      content: string,
      fill: string,
      x: number,
      y: number,
    }

    export type RemoveTextAction = {
      type: 'REMOVE_TEXT',
      textId: TextId,
    }

    export type UpdateTextPositionAction = {
      type: 'UPDATE_TEXT_POSITION',
      textIds: Array<TextId>,
      direction: Direction,
      distance: number,
    }

    export type DecrementPlayerLifeAction = {
      type: 'DECREMENT_PLAYER_LIFE',
      playerName: PlayerName,
    }

    export type LoadSceneAction = {
      type: 'LOAD_SCENE',
      scene: Scene
    }

    export type AddPowerUpAction = {
      type: 'ADD_POWER_UP',
      powerUp: PowerUpRecord
    }

    export type RemovePowerUpAction = {
      type: 'REMOVE_POWER_UP'
      powerUpId: PowerUpId
    }

    export type UpdatePowerUpAction = {
      type: 'UPDATE_POWER_UP'
      powerUp: PowerUpRecord
    }

    export type PickPowerUpAction = {
      type: 'PICK_POWER_UP',
      player: PlayerRecord
      tank: TankRecord,
      powerUp: PowerUpRecord
    }

    export interface AddScoreAction {
      type: 'ADD_SCORE'
      score: ScoreRecord
    }

    export interface RemoveScoreAction {
      type: 'REMOVE_SCORE'
      scoreId: ScoreId
    }

    export type IncrementPlayerLifeAction = {
      type: 'INCREMENT_PLAYER_LIFE'
      playerName: PlayerName
    }

    export type UpgardeTankAction = {
      type: 'UPGRADE_TANK'
      tankId: TankId
    }

    export type Simple<T> = {
      type: T
    }
  }
}