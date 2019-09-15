import { IVector2, IVector4 } from "./IVector2"
import { brushOptionTypes } from "../constants/brushOptionTypes"
import { BehaviorSubject } from "rxjs"
import { Painting } from "../classes/Painting"

export type mouseState = number

export interface BrushMouseHandlerArguments {
  contexts: CanvasRenderingContext2D[]
  state: mouseState
  position: IVector2
  painting: Painting
}

export type mouseHandler = (args: BrushMouseHandlerArguments) => void

export type BrushOption = {
  type: brushOptionTypes
  value$:
    | BehaviorSubject<IVector4>
    | BehaviorSubject<string>
    | BehaviorSubject<number>
    | BehaviorSubject<boolean>
  settings?: {
    min?: number
    max?: number
    preview?: number
  }
  hidden?: boolean
}

export interface IBrush {
  name: string
  icon: string

  options?: Record<string, BrushOption>

  enable?(state: mouseState): mouseState | void
  disable?(state: mouseState): mouseState | void

  mouseDown?: mouseHandler
  mouseUp?: mouseHandler
  mouseMove?: mouseHandler
}
