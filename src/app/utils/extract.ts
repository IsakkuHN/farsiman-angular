import {
  Branch,
  Collaborator,
  Driver,
  Travel,
  User,
} from '../interfaces/interfaces';

export function processResponse(response: any): string {
  const travelers: any[] = [];
  let user: User | null = null;
  let driver: Driver | null = null;
  let branch: Branch | null = null;
  let viaje: Travel | null = null;

  response.forEach((element: any) => {
    const {
      key,
      travel,
      collaborator,
    }: {
      key: { collaboratorId: string; travelId: number };
      travel: Travel;
      collaborator: Collaborator;
    } = element;
    if (!user) user = travel.user;
    if (!driver) driver = travel.driver;
    if (!branch) branch = travel.branch;
    if (!viaje) viaje = travel;
    travelers.push(collaborator);
  });
  const extractedObjects = {
    user,
    driver,
    branch,
    viaje,
    travelers,
  };
  return JSON.stringify(extractedObjects);
}
