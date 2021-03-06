export type Canvas = ClientRect;
export type Size = { width?: number; height?: number };
export type StrictSize = Required<Size>;
export type RecalculateCoordinates = {
  canvas: Canvas; anchorX: number; anchorY: number;
  size: StrictSize; offset: number; arrowLength: number;
};
export type TooltipCoordinates = { x: number; y: number; anchorX: number; anchorY: number };
export type Margin = { top?: number; left?: number; bottom?: number; right?: number };
export type InitialBorder = { color: string; width: number; dashStyle: string; opacity?: number; visible: boolean };
export type Border = { stroke?: string, strokeWidth?: number, strokeOpacity?: number, dashStyle?: string };
export type CustomizedOptions = { text?: string | null, html?: string | null, color?: string, borderColor?: string, fontColor?: string };
export type CustomizeTooltipFn = (info: any) => CustomizedOptions;
export type Location = 'center' | 'edge';
export type Container = string | HTMLElement;
export interface TooltipData {
  value?: number | Date | string,
  argument?: number | Date | string,
  valueText?: string,
  argumentText?: string,
  originalValue?: number | Date | string,
  originalArgument?: number | Date | string,
  seriesName?: string,
  description?: string
}
export interface Font {
  color?: string,
  family?: string,
  opacity?: number,
  size?: number,
  weight?: number,
  lineSpacing?: number,
}
