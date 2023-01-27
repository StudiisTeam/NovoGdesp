export interface ModalityProps {
  id?: number;
  name: string
}

export type Modality = {
  id: number;
  name: string;
}

export abstract class ModalityRepositoryInterface {
  abstract listModalities(): Promise<Modality[]>
  abstract findModalityById(id: number): Promise<Modality>
  abstract findModalityByName(name: string): Promise<Modality>
  abstract createModality(name: string): Promise<Modality>
  abstract updateModality(data: ModalityProps): Promise<Modality>
  abstract deleteModality(id: number): Promise<void>
}