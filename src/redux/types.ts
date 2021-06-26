export const INCREMENT_ONE = "INCREMENT_ONE";
export const INCREMENT_BY_COUNT = "INCREMENT_BY_COUNT";

export type SampleAction = IncrementOne | IncrementByCount;

export interface IncrementOne {
    type: 'INCREMENT_ONE'
}
  
export interface IncrementByCount {
type: 'INCREMENT_BY_COUNT',
count: number
}