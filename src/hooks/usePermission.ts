import { useMemo } from "react";

const usePermissions = (userPermissions: any) => {
  // Ensure userPermissions is a valid array
  const hasRights = (permission: any) => {
    if (!Array.isArray(userPermissions)) {
      console.error("userPermissions is not an array:", userPermissions);
      return false; // If it's not an array, deny access by default
    }
    return userPermissions.includes(permission);
  };

  const hasMultipleRights = (permissions: any[]) => {
    if (!Array.isArray(userPermissions)) {
      console.error("userPermissions is not an array:", userPermissions);
      return false;
    }
    return permissions.every(permission => userPermissions.includes(permission));
  };

  return useMemo(
    () => ({
      hasRights,
      hasMultipleRights,
    }),
    [userPermissions]
  );
};

export default usePermissions;
