import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles'; 
export const Role = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);

// Nota:
// Este rol se utiliza para verificar el acceso del usuario directamente en el controlador,
// sin necesidad de pasar por el servicio.

// Note:
// This role is used to check user access directly in the controller,
// without going through the service layer.